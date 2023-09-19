(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [27809, 52209, 95331, 57678, 58621, 96043, 71402], {
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
                    d = !n && !s && !f && u(e),
                    _ = n || s || f || d,
                    p = _ ? r(e.length, String) : [],
                    E = p.length;
                for (var h in e) !t && !c.call(e, h) || _ && ("length" == h || f && ("offset" == h || "parent" == h) || d && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || l(h, E)) || p.push(h);
                return p
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
        252628: (e, t, n) => {
            var r = n(747415),
                i = n(3674);
            e.exports = function(e) {
                return null == e ? [] : r(e, i(e))
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

                function r(e, t, n, r, i, o, a) {
                    var l = this;
                    l.r1 = e;
                    l.r2 = t;
                    l.g1 = n;
                    l.g2 = r;
                    l.b1 = i;
                    l.b2 = o;
                    l.histo = a
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
                            var i, o, a, l = 0;
                            for (i = n.r1; i <= n.r2; i++)
                                for (o = n.g1; o <= n.g2; o++)
                                    for (a = n.b1; a <= n.b2; a++) l += r[e(i, o, a)] || 0;
                            n._count = l;
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
                            var i, o, a, l, u = 0,
                                c = 0,
                                s = 0,
                                f = 0;
                            for (o = n.r1; o <= n.r2; o++)
                                for (a = n.g1; a <= n.g2; a++)
                                    for (l = n.b1; l <= n.b2; l++) {
                                        u += i = r[e(o, a, l)] || 0;
                                        c += i * (o + .5) * 8;
                                        s += i * (a + .5) * 8;
                                        f += i * (l + .5) * 8
                                    }
                            n._avg = u ? [~~(c / u), ~~(s / u), ~~(f / u)] : [~~(8 * (n.r1 + n.r2 + 1) / 2), ~~(8 * (n.g1 + n.g2 + 1) / 2), ~~(8 * (n.b1 + n.b2 + 1) / 2)]
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
                            a = r.b2 - r.b1 + 1,
                            l = t.max([i, o, a]);
                        if (1 == r.count()) return [r.copy()];
                        var u, c, s, f, d = 0,
                            _ = [],
                            p = [];
                        if (l == i)
                            for (u = r.r1; u <= r.r2; u++) {
                                f = 0;
                                for (c = r.g1; c <= r.g2; c++)
                                    for (s = r.b1; s <= r.b2; s++) f += n[e(u, c, s)] || 0;
                                d += f;
                                _[u] = d
                            } else if (l == o)
                                for (u = r.g1; u <= r.g2; u++) {
                                    f = 0;
                                    for (c = r.r1; c <= r.r2; c++)
                                        for (s = r.b1; s <= r.b2; s++) f += n[e(c, u, s)] || 0;
                                    d += f;
                                    _[u] = d
                                } else
                                    for (u = r.b1; u <= r.b2; u++) {
                                        f = 0;
                                        for (c = r.r1; c <= r.r2; c++)
                                            for (s = r.g1; s <= r.g2; s++) f += n[e(c, s, u)] || 0;
                                        d += f;
                                        _[u] = d
                                    }
                        _.forEach((function(e, t) {
                            p[t] = d - e
                        }));
                        return E(l == i ? "r" : l == o ? "g" : "b")
                    }

                    function E(e) {
                        var t, n, i, o, a, l = e + "1",
                            c = e + "2",
                            s = 0;
                        for (u = r[l]; u <= r[c]; u++)
                            if (_[u] > d / 2) {
                                i = r.copy();
                                o = r.copy();
                                a = (t = u - r[l]) <= (n = r[c] - u) ? Math.min(r[c] - 1, ~~(u + n / 2)) : Math.max(r[l], ~~(u - 1 - t / 2));
                                for (; !_[a];) a++;
                                s = p[a];
                                for (; !s && _[a - 1];) s = p[--a];
                                i[c] = a;
                                o[l] = i[c] + 1;
                                return [i, o]
                            }
                    }
                }
                return {
                    quantize: function(a, l) {
                        if (!a.length || l < 2 || l > 256) return !1;
                        var u = function(t) {
                            var n, r, i, o, a = new Array(32768);
                            t.forEach((function(t) {
                                r = t[0] >> 3;
                                i = t[1] >> 3;
                                o = t[2] >> 3;
                                n = e(r, i, o);
                                a[n] = (a[n] || 0) + 1
                            }));
                            return a
                        }(a);
                        u.forEach((function() {
                            0
                        }));
                        var c = function(e, t) {
                                var n, i, o, a = 1e6,
                                    l = 0,
                                    u = 1e6,
                                    c = 0,
                                    s = 1e6,
                                    f = 0;
                                e.forEach((function(e) {
                                    n = e[0] >> 3;
                                    i = e[1] >> 3;
                                    o = e[2] >> 3;
                                    n < a ? a = n : n > l && (l = n);
                                    i < u ? u = i : i > c && (c = i);
                                    o < s ? s = o : o > f && (f = o)
                                }));
                                return new r(a, l, u, c, s, f, t)
                            }(a, u),
                            s = new n((function(e, n) {
                                return t.naturalOrder(e.count(), n.count())
                            }));
                        s.push(c);

                        function f(e, t) {
                            for (var n, r = 1, i = 0; i < 1e3;)
                                if ((n = e.pop()).count()) {
                                    var a = o(u, n),
                                        l = a[0],
                                        c = a[1];
                                    if (!l) return;
                                    e.push(l);
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
                        f(s, .75 * l);
                        for (var d = new n((function(e, n) {
                                return t.naturalOrder(e.count() * e.volume(), n.count() * n.volume())
                            })); s.size();) d.push(s.pop());
                        f(d, l - d.size());
                        for (var _ = new i; d.size();) _.push(d.pop());
                        return _
                    }
                }
            }();
            e.exports = n.quantize
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
                vq: () => d,
                jW: () => _
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

            function d(e, t, n, r) {
                e.stopPropagation();
                if (null == e.currentTarget.contains || e.currentTarget.contains(e.target)) {
                    var u, f, d = 0,
                        _ = 0;
                    if ("pageX" in e) {
                        d = e.pageX;
                        _ = e.pageY
                    }
                    if (0 === d && 0 === _) {
                        var p, E = null === (p = e.target) || void 0 === p ? void 0 : p.getBoundingClientRect(),
                            h = null != E ? E : {},
                            O = h.left,
                            I = void 0 === O ? 0 : O,
                            g = h.top,
                            T = void 0 === g ? 0 : g,
                            m = h.width,
                            v = void 0 === m ? 0 : m,
                            b = h.height;
                        d = I + v / 2;
                        _ = T + (void 0 === b ? 0 : b) / 2
                    }
                    var y = {
                        render: t,
                        renderLazy: r,
                        target: null !== (u = e.target) && void 0 !== u ? u : e.currentTarget,
                        rect: new DOMRect(d, _, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? l.IlC.OVERLAY : null !== (f = (0, i.GB)()) && void 0 !== f ? f : l.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.nI)()) var S = (0, a.RD)((function() {
                        S();
                        s(y)
                    }));
                    else {
                        e.preventDefault();
                        s(y)
                    }
                }
            }

            function _(e, t, n) {
                d(e, void 0, n, t)
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
                GZ: () => p,
                Gn: () => h,
                Y2: () => O,
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

            function d(e) {
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
            var _ = function(e, t) {
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
                                        if (!(i = a.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
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

            function p(e, t, n, r, i) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = d((function(e, t, n, s, f) {
                    var d, p, E, h;
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
                                d = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                p = {};
                                null != t && (p.country_code = t);
                                null != n && (p.payment_source_id = n);
                                null != s && (p.include_unpublished = s);
                                null != f && (p.revenue_surface = f);
                                d.query = p;
                                return a.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, u.GE)()];
                            case 2:
                                _.sent();
                                _.label = 3;
                            case 3:
                                return [4, r.ZP.get(d)];
                            case 4:
                                E = _.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: E.body
                                });
                                return [3, 6];
                            case 5:
                                h = _.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, l.q2)(h);
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
                    return p(e, t)
                })))
            }

            function O(e, t, n) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return p(r, e, t, void 0, n)
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
                d = n(460471),
                _ = n(201891),
                p = n(649536),
                E = n(358624),
                h = n(723029),
                O = n(28862),
                I = n(798808),
                g = n(331055),
                T = n(284610),
                m = n(255592),
                v = n(661123),
                b = n(2590),
                y = n(473708);

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

            function R(e, t) {
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

            function N(e, t) {
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

            function P(e) {
                var t = e.channelId,
                    n = e.uploads,
                    r = e.draftType,
                    s = e.parsedMessage,
                    f = e.options,
                    S = void 0 === f ? {} : f,
                    A = new d.Z(b.ANM.MESSAGES(t)),
                    P = {
                        content: "",
                        nonce: "",
                        channel_id: t,
                        type: b.uaV.DEFAULT,
                        sticker_ids: null == S ? void 0 : S.stickerIds
                    };
                null != s && (P.content = null == s ? void 0 : s.content);
                if (null != I.Z.getPendingReply(t)) {
                    P.type = b.uaV.REPLY;
                    P.message_reference = S.messageReference;
                    P.allowed_mentions = S.allowedMentions;
                    (0, O.A6)(t)
                }
                var C, U = N((0, g.ZP)(P.content), 2),
                    M = U[0],
                    w = U[1];
                if (M) {
                    P.content = w;
                    var D;
                    P.flags = (0, v.pj)(null !== (D = P.flags) && void 0 !== D ? D : 0, b.iLy.SUPPRESS_NOTIFICATIONS)
                }
                var j, G, k = null !== (C = S.nonce) && void 0 !== C ? C : (0, E.rv)(),
                    x = (0,
                        E.ZP)({
                        channelId: t,
                        content: P.content,
                        tts: null !== (j = null == s ? void 0 : s.tts) && void 0 !== j && j,
                        type: P.type,
                        messageReference: P.message_reference,
                        flags: P.flags,
                        nonce: k
                    });
                P.nonce = k;
                A.on("start", (function(e) {
                    G = (0, p.e5)(R(L({}, x), {
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
                A.on("error", (function(e, s, f, d) {
                    i.Z.dispatch({
                        type: "UPLOAD_FAIL",
                        channelId: t,
                        file: e,
                        messageRecord: G
                    });
                    (0, h.x)({
                        fileItems: e.items,
                        failureCode: s,
                        errorMessage: null == d ? void 0 : d.msg
                    });
                    if (s !== b.evJ.EXPLICIT_CONTENT)
                        if (s !== b.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                            if (s !== b.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                                (0, u.openUploadError)({
                                    title: y.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                    help: y.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                                });
                                ! function() {
                                    "" !== P.content && "" === T.Z.getDraft(t, r) && o.Z.saveDraft(t, P.content, r);
                                    0 === m.Z.getUploadCount(t, r) && l.Z.setUploads({
                                        channelId: t,
                                        uploads: n,
                                        draftType: r
                                    })
                                }()
                            }
                        } else {
                            var p = {
                                    code: s,
                                    message: null == f ? void 0 : f.message
                                },
                                E = null == G ? null : {
                                    type: c.$V.SEND,
                                    message: R(L({}, G), {
                                        channelId: t
                                    })
                                };
                            (0, u.openUploadError)({
                                title: y.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                help: (0, _.uF)(E, p)
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
                A.uploadFiles(n, P)
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
                    P({
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
                        var _ = I.Z.getPendingReply(n);
                        if (null != _) {
                            var p = a.Z.getSendMessageOptionsForReply(_);
                            f.type = b.uaV.REPLY;
                            f.message_reference = p.messageReference;
                            f.allowed_mentions = p.allowedMentions;
                            (0, O.A6)(n)
                        }
                    }
                    var E = new d.Z(b.ANM.MESSAGES(n));
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
                    E.on("error", (function(t, d) {
                        i.Z.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: n,
                            file: t
                        });
                        (0, h.x)({
                            fileItems: t.items,
                            failureCode: d
                        });
                        if (d !== b.evJ.EXPLICIT_CONTENT) {
                            (0, u.openUploadError)({
                                title: y.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                help: y.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
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
                            "" !== f.content && "" === T.Z.getDraft(n, c) && o.Z.saveDraft(n, f.content, c)
                        } else a.Z.sendClydeError(n, d)
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
                uploadFiles: P,
                cancel: function(e) {
                    i.Z.dispatch({
                        type: "UPLOAD_CANCEL_REQUEST",
                        file: e
                    });
                    if (null != e.draftContent && null != e.channelId) {
                        "" === T.Z.getDraft(e.channelId, T.d.ChannelMessage) && i.Z.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: T.d.ChannelMessage
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
                return (0, r.jsxs)("div", {
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
                d = n(473903),
                _ = n(452723),
                p = n(116094),
                E = n(799066),
                h = n(245325),
                O = n(442212),
                I = n(203600),
                g = n(2590),
                T = n(949995),
                m = n(473708),
                v = n(427479),
                b = n.n(v);

            function y(e, t, n) {
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
                    v = (0, h.Z)({
                        autoTrackExposure: !u,
                        experiment: E.Z,
                        location: I.cd.UPLOAD_ERROR_UPSELL
                    }),
                    A = v.isLoading,
                    L = v.suggestedPremiumType,
                    R = !u && L === I.p9.TIER_0,
                    N = (0, c.e7)([d.default], (function() {
                        return d.default.getCurrentUser()
                    })),
                    P = (0, r.jsx)(f.Z, {
                        icons: T.J6
                    });
                t = R ? m.Z.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
                    premiumPlan: (0, p.Px)(I.p9.TIER_0),
                    premiumMaxSize: m.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
                }) : m.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
                var C = i.useMemo((function() {
                        var e = p.ZP.getUserMaxFileSize(N),
                            t = (0, _.BU)(e / 1024, {
                                useKibibytes: !0
                            }),
                            n = m.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                                maxSize: t
                            });
                        switch (null == N ? void 0 : N.premiumType) {
                            case I.p9.TIER_0:
                                n = m.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                                    maxSize: t
                                });
                                break;
                            case I.p9.TIER_1:
                                n = m.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                                    maxSize: t
                                })
                        }
                        return n
                    }), [N]),
                    U = (0, r.jsxs)("div", {
                        className: b().body,
                        children: [(0, r.jsx)("span", {
                            children: C
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            children: t
                        })]
                    });
                return (0, r.jsx)(O.Z, function(e) {
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
                }({
                    artElement: P,
                    artContainerClassName: a()(b().artContainer),
                    enableArtBoxShadow: !1,
                    type: I.cd.UPLOAD_ERROR_UPSELL,
                    title: m.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    body: U,
                    context: m.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: m.Z.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
                    }),
                    glowUp: t,
                    analyticsLocation: {
                        section: g.jXE.FILE_UPLOAD_POPOUT
                    },
                    onClose: n,
                    subscriptionTier: R ? I.Si.TIER_0 : I.Si.TIER_2,
                    isLoading: A
                }, l))
            }
            var L = n(443812),
                R = n(36627),
                N = n.n(R);

            function P(e, t, n) {
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
                    d = (0, L.Dt)(),
                    _ = null != l ? l : T.J6;
                return i ? (0, r.jsx)(A, {
                    transitionState: o,
                    onClose: s,
                    fileSize: c
                }) : (0, r.jsx)(u.Y0, {
                    size: u.Cg.DYNAMIC,
                    "aria-labelledby": d,
                    transitionState: o,
                    children: (0, r.jsx)("div", {
                        className: a()(N().uploadDropModal, N().error),
                        children: (0, r.jsxs)("div", {
                            className: N().inner,
                            children: [(0, r.jsx)(f.Z, {
                                icons: _
                            }), (0, r.jsx)("div", {
                                id: d,
                                className: N().title,
                                children: t
                            }), (0, r.jsx)("div", {
                                className: N().instructions,
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
                                P(e, t, n[t])
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
        101566: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Y,
                $: () => z
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
                d = n.n(f),
                _ = n(296602),
                p = n(493254);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t) {
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

            function I(e) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return I(e)
            }

            function g(e) {
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

            function T(e, t) {
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

            function m(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e, t) {
                v = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return v(e, t)
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
            var y = function(e) {
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
                    return m(this, n)
                }
            }
            var A = new _.Z("UploaderBase.tsx"),
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
                        t && v(e, t)
                    }(n, e);
                    var t = S(n);

                    function n(e) {
                        var r, i, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST",
                            a = arguments.length > 2 ? arguments[2] : void 0;
                        h(this, n);
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
                            r._file = T(g({}, r._file), {
                                currentSize: t,
                                progress: o,
                                rate: a
                            });
                            r.emit("progress", r._file)
                        };
                        r._handleException = function(e) {
                            r._handleError({
                                reason: {
                                    type: p.xi.ERROR_SOURCE_UNKNOWN,
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
                        r.id = d().uniqueId("Uploader");
                        r._url = e;
                        r._method = o;
                        r._raiseEndpointErrors = null !== (i = null == a ? void 0 : a.raiseEndpointErrors) && void 0 !== i && i;
                        return r
                    }
                    var r = n.prototype;
                    r._addAttachmentsToPayload = function(e, t, n) {
                        var r = g({}, e),
                            i = b(d().get(r, t, [])).concat(b(n));
                        return d().set(r, t, i)
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
                R = n(2590),
                N = n(473708);

            function P(e, t) {
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
                return !t || "object" !== F(t) && "function" != typeof t ? function(e) {
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
                    if (Array.isArray(e)) return P(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return P(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var F = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function B(e) {
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
                    var t = B(n);

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
                            var t, n, r, i, o, u, c, s, f, d, _, E, h;
                            return H(this, (function(O) {
                                switch (O.label) {
                                    case 0:
                                        r = (0, l.F)(null === (t = e.files[0]) || void 0 === t || null === (n = t.item) || void 0 === n ? void 0 : n.target);
                                        if (e.files.length > r.getMaxAttachmentsCount()) {
                                            V.log("Too many attachments for ".concat(e.id));
                                            e._handleError({
                                                code: R.evJ.TOO_MANY_ATTACHMENTS
                                            });
                                            return [2, !1]
                                        }
                                        return [3, 10];
                                    case 1:
                                        O.trys.push([1, 8, 9, 10]);
                                        c = e.files[Symbol.iterator]();
                                        O.label = 2;
                                    case 2:
                                        if (i = (s = c.next()).done) return [3, 7];
                                        f = s.value;
                                        O.label = 3;
                                    case 3:
                                        O.trys.push([3, 5, , 6]);
                                        return [4, f.reactNativeCompressAndExtractData()];
                                    case 4:
                                        O.sent();
                                        if (f.status === a.m.CANCELED) {
                                            V.log("compressAndCheckFileSize() file has been cancelled for compression - ".concat(f.id));
                                            return [3, 6]
                                        }
                                        if (0 === (null !== (d = f.currentSize) && void 0 !== d ? d : 0)) {
                                            e._handleError({
                                                code: R.evJ.ENTITY_EMPTY
                                            });
                                            return [2, !1]
                                        }
                                        if ((null !== (_ = f.currentSize) && void 0 !== _ ? _ : 0) > r.getMaxFileSize(f.channelId)) {
                                            e._handleError({
                                                code: R.evJ.ENTITY_TOO_LARGE,
                                                reason: {
                                                    type: p.xi.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE
                                                }
                                            });
                                            return [2, !1]
                                        }
                                        return [3, 6];
                                    case 5:
                                        E = O.sent();
                                        e._handleException(E);
                                        return [2, !1];
                                    case 6:
                                        i = !0;
                                        return [3, 2];
                                    case 7:
                                        return [3, 10];
                                    case 8:
                                        h = O.sent();
                                        o = !0;
                                        u = h;
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
                                                code: R.evJ.ENTITY_TOO_LARGE,
                                                reason: {
                                                    type: p.xi.POSTCOMPRESSION_SUM_TOO_LARGE
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
                            return e.error === R.evJ.ENTITY_TOO_LARGE
                        }))
                    };
                    r.setUploadingTextForUI = function() {
                        var e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : N.Z.Messages.UPLOADING_FILES.format({
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

            function z(e) {
                return K.apply(this, arguments)
            }

            function K() {
                K = U((function(e) {
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
                                                t && e.error !== R.evJ.ENTITY_TOO_LARGE ? e.upload() : i(new Error("File failed to upload"));
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
                return K.apply(this, arguments)
            }
        },
        460471: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
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

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e, t, n) {
                _ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value
                    }
                };
                return _(e, t, n || e)
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function E(e) {
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

            function O(e, t) {
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
            var g = function(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var m = function(e, t) {
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
                v = function(e) {
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
                                return _(p(n.prototype), "upload", i)
                            };
                        return s((function() {
                            var n, i, c;
                            return m(this, (function(s) {
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
                            var u, c, s, f, d, _, p;
                            return m(this, (function(O) {
                                switch (O.label) {
                                    case 0:
                                        u = [];
                                        o.files.forEach((function(e, t) {
                                            var n = (0, l.B)(e, t);
                                            e.item.platform === a.ow.WEB && u.push(E({}, n))
                                        }));
                                        c = null != n && null != t ? o._addAttachmentsToPayload(t, n, u) : h(E({}, t), {
                                            attachments: u
                                        });
                                        s = {
                                            url: o._url,
                                            body: c,
                                            signal: e
                                        };
                                        f = "POST" === o._method ? r.ZP.post : r.ZP.patch;
                                        O.label = 1;
                                    case 1:
                                        O.trys.push([1, 3, , 4]);
                                        return [4, f(s)];
                                    case 2:
                                        d = O.sent();
                                        o._handleComplete(d.body);
                                        return [2, d.body];
                                    case 3:
                                        _ = O.sent();
                                        if (o._raiseEndpointErrors) throw new i.Hx(_);
                                        o._handleError({
                                            code: null == _ || null === (p = _.body) || void 0 === p ? void 0 : p.code,
                                            body: null == _ ? void 0 : _.body
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
                e.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal";
                e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell";
                e.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell";
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
                e.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet";
                e.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home"
            }(r || (r = {}));
            const i = r
        },
        396043: (e, t, n) => {
            "use strict";
            n.d(t, {
                v_: () => C,
                JS: () => P,
                hH: () => R,
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
                d = n(567403),
                _ = n(525077),
                p = n(682776),
                E = n(491260),
                h = n(563367),
                O = n(715107),
                I = n(464187),
                g = n(407561),
                T = n(652591),
                m = n(563135),
                v = n(671723);
            var b = n(2590),
                y = n(897196);

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

            function R(e) {
                if (null == e) return null;
                var t = d.Z.getGuild(e);
                if (null == t) return null;
                var n, r = l.default.getId(),
                    i = f.ZP.getMember(e, r),
                    o = c.ZP.getChannels(e),
                    a = o[c.sH].length,
                    u = o[c.Zb].length,
                    _ = g.Z.getVoiceStates(e);
                return {
                    guild_id: t.id,
                    guild_size_total: s.Z.getMemberCount(e),
                    guild_num_channels: a + u,
                    guild_num_text_channels: a,
                    guild_num_voice_channels: u,
                    guild_num_roles: L(t.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = p.Z.getGuildPermissions(t)) && void 0 !== n ? n : m.ZP.NONE),
                    guild_is_vip: t.hasFeature(b.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: L(_)
                }
            }

            function N(e, t) {
                return {
                    channel_static_route: t,
                    channel_hidden: !1
                }
            }

            function P(e) {
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
                    channel_member_perms: String(null != r && null !== (t = p.Z.getChannelPermissions(e)) && void 0 !== t ? t : m.ZP.NONE),
                    channel_hidden: n
                }
            }

            function U(e) {
                if (null == e) return null;
                var t = u.Z.getChannel(e);
                if (null == t) return null;
                var n, r = _.Z.isVideoEnabled(),
                    i = h.Z.getMediaSessionId();
                return A({
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: i
                }, D(t.getGuildId(), t.id, r), {
                    game_name: null != (n = v.ZP.getCurrentGameForAnalytics()) ? n.name : null,
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
                if (!T.default.isThrottled(e)) {
                    var r = !("location" in t) || t.location !== b.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in t ? t.guild_id : r ? I.Z.getGuildId() : null,
                        o = "channel_id" in t ? t.channel_id : r ? O.Z.getChannelId(i) : null,
                        a = u.Z.getChannel(o),
                        l = M(a, i),
                        c = A({}, t, R(l), null != i && null != o && (0, y.AB)(o) ? N(0, o) : C(a));
                    T.default.track(e, c, {
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
                i()(g.Z.getVoiceStates(e)).filter((function(e) {
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
                i()(g.Z.getVoiceStates(e)).forEach((function(e) {
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
                L9: () => d,
                no: () => _,
                ND: () => p,
                WC: () => h,
                z8: () => O,
                km: () => g,
                k0: () => T,
                af: () => m
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

            function d(e) {
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
            var _ = (s(a = {}, o.PRESET_DOCUMENTS, [{
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
                p = [{
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
            var h = [E(r.RESOLUTION_720), E(r.RESOLUTION_1080), E(r.RESOLUTION_1440), E(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                O = [E(r.RESOLUTION_720), E(r.RESOLUTION_1080), E(r.RESOLUTION_1440)],
                I = function(e) {
                    return "".concat(e, "p")
                },
                g = [E(r.RESOLUTION_480, (function() {
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
                T = [E(i.FPS_15), E(i.FPS_30), E(i.FPS_60)],
                m = [E(i.FPS_15, (function() {
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
                JY: () => _
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
                        i = (n.mobileViewAndUseEnabled,
                            n.mobileAndFreemiumCollectEnabled);
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
                        d = c({
                            user: s,
                            config: f
                        }),
                        _ = d.viewAndUseEnabled,
                        p = d.showTryPacksModalAndV2Copy,
                        E = d.collectEnabled,
                        h = _ && E && null != i && !1 !== (null == i || null === (e = i.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible);
                    return {
                        viewAndUseEnabled: _,
                        collectEnabled: h,
                        showTryPacksModalAndV2Copy: p
                    }
                },
                d = (0, i.B)({
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
                _ = function(e) {
                    var t = d.useExperiment({
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
                I6: () => m,
                Z$: () => v
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
                d = n(203600),
                _ = n(2590);

            function p(e, t, n, r, i, o, a) {
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
                            p(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            p(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
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
                                            if (!(i = a.trys,
                                                    i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
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

            function g() {
                return (g = E((function() {
                    var e;
                    return O(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                a.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                                });
                                return [4, o.ZP.get({
                                    url: _.ANM.USER_PREMIUM_LIKELIHOOD
                                })];
                            case 1:
                                e = t.sent().body;
                                a.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                                    premiumLikelihood: T(e)
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

            function T(e) {
                var t;
                return h(t = {}, I, e.non_subscriber), h(t, d.Si.TIER_0, e[d.Si.TIER_0]), h(t, d.Si.TIER_2, e[d.Si.TIER_2]), t
            }

            function m(e) {
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

            function v(e) {
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
                        g.apply(this, arguments)
                    }();
                    if (r) {
                        c.Z.isLoadedForSKU(d.Si.TIER_0) || c.Z.isFetchingForSKU(d.Si.TIER_0) || (0, l.GZ)(d.Si.TIER_0);
                        c.Z.isLoadedForSKU(d.Si.TIER_2) || c.Z.isFetchingForSKU(d.Si.TIER_2) || (0, l.GZ)(d.Si.TIER_2)
                    }
                }
            }
        },
        884123: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
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
                d = f;
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
                    t && u(e, t)
                }(n, e);
                var t = s(n);

                function n() {
                    o(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    d = f
                };
                r.getState = function() {
                    return d
                };
                r.shouldFetchPremiumLikelihood = function() {
                    return !d.isFetching && !d.fetched
                };
                r.__getLocalVars = function() {
                    return {
                        initialState: f,
                        state: d
                    }
                };
                return n
            }(r.ZP.Store);
            _.displayName = "UserPremiumLikelihoodStore";
            const p = new _(i.Z, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    d.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    var t = e.premiumLikelihood;
                    d.premiumLikelihood = t;
                    d.fetched = !0;
                    d.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    d.isFetching = !1
                },
                LOGOUT: function() {
                    d.premiumLikelihood = void 0
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
                Z: () => d
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

            function d(e) {
                var t = e.autoTrackExposure,
                    n = e.experiment,
                    d = e.location,
                    _ = (0, r.e7)([i.default], (function() {
                        return i.default.getCurrentUser()
                    })),
                    p = (0, f.N)(),
                    E = null != p,
                    h = null != _ && (0, a.I5)(_);
                (0, u.Z$)(n);
                var O = l.L.useExperiment({
                        location: "014fbb_1"
                    }, {
                        autoTrackExposure: !1
                    }).enableTier0,
                    I = n.useExperiment({
                        location: null != d ? d : "1"
                    }, {
                        autoTrackExposure: O && !h && !E && t
                    }),
                    g = I.enabled,
                    T = I.useExpectedValue,
                    m = I.useLikelihood,
                    v = (0, r.cj)([c.Z], (function() {
                        var e = c.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    b = v.premiumLikelihood,
                    y = v.fetched,
                    S = (0, r.e7)([o.Z], (function() {
                        return o.Z.isLoadedForSKUs([s.Si.TIER_0, s.Si.TIER_2])
                    })),
                    A = !h && g && O && !E && (T ? !y || !S : !y),
                    L = s.p9.TIER_2;
                if (O)
                    if (E) {
                        var R = p.subscription_trial;
                        (null == R ? void 0 : R.sku_id) === s.Si.TIER_0 ? L = s.p9.TIER_0 : (null == R ? void 0 : R.sku_id) === s.Si.TIER_2 && (L = s.p9.TIER_2)
                    } else if (!h && !A && g)
                    if (T) {
                        L = function(e, t, n) {
                            return null == e ? s.p9.TIER_2 : e[s.Si.TIER_0] * t > e[s.Si.TIER_2] * n ? s.p9.TIER_0 : s.p9.TIER_2
                        }(b, (0, a.aS)(s.Xh.PREMIUM_MONTH_TIER_0).amount, (0, a.aS)(s.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else m && (L = function(e) {
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
                i = (n(667294),
                    n(284610)),
                o = n(149258),
                a = n(15084),
                l = n(593166),
                u = n(442212),
                c = n(203600),
                s = n(2590),
                f = n(473708);

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e, t) {
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

            function p(e) {
                return null != (null == e ? void 0 : e.getGuildId()) ? s.ZY5.GUILD_CHANNEL : (null == e ? void 0 : e.isGroupDM()) || (null == e ? void 0 : e.isPrivate()) ? s.ZY5.DM_CHANNEL : null
            }

            function E(e) {
                var t = function() {
                        h();
                        (0, l.z)(!0)
                    },
                    E = e.channel,
                    h = e.onClose,
                    O = e.content,
                    I = _(e, ["channel", "onClose", "content"]);
                return (0, r.jsx)(u.Z, function(e) {
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
                        page: p(E)
                    },
                    analyticsLocation: {
                        section: s.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
                        object: s.qAy.BUTTON_CTA
                    },
                    onClose: h,
                    secondaryCTA: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
                    onSecondaryClick: function() {
                        h();
                        var e = new Blob([O], {
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
                Z: () => y
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
                d = n(189146),
                _ = n(717035),
                p = n(455706),
                E = n(70535),
                h = n(203600),
                O = n(2590),
                I = n(473708),
                g = n(296024),
                T = n.n(g),
                m = n(545292),
                v = n.n(m);

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

            function y(e) {
                var t, n, o = e.title,
                    g = e.type,
                    m = e.guildBoostProps,
                    y = e.analyticsSource,
                    S = e.analyticsLocation,
                    A = e.body,
                    L = e.context,
                    R = e.glowUp,
                    N = e.modalClassName,
                    P = e.artContainerClassName,
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
                    F = void 0 === Z || Z,
                    B = e.subscriptionTier,
                    H = void 0 === B ? h.Si.TIER_2 : B,
                    V = e.isLoading,
                    Y = void 0 !== V && V,
                    z = e.hideBackButton,
                    K = e.backButtonText,
                    W = b(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    X = null != m,
                    q = (0, _.N)(),
                    J = (null == q || null === (t = q.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === H && !X,
                    Q = (0, d.zH)(!J),
                    $ = (0,
                        c.Z)(u.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                i.useEffect((function() {
                    Y || (X ? f.default.track(O.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(g, " - Tier ").concat(m.boostedGuildTier),
                        guild_id: m.guild.id,
                        channel_id: m.channelId,
                        location: S,
                        location_stack: $
                    }) : f.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: g,
                        source: y,
                        location_stack: $,
                        sku_id: H
                    }))
                }), [X, H, Y]);
                var ee, te = F ? a()(T().artContainer, T().artContainerBoxShadow, P) : a()(T().artContainer, P),
                    ne = null;
                ne = "artURL" in W ? (0, r.jsx)("img", {
                    className: T().art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement;
                return (0, r.jsxs)(l.ModalRoot, {
                    className: a()(T().root, N),
                    "aria-label": o,
                    transitionState: U,
                    children: [(0, r.jsxs)("div", {
                        className: te,
                        children: [ne, x ? (0, r.jsx)("img", {
                            className: T().sparkleBadge,
                            alt: "",
                            src: v()
                        }) : null]
                    }), (0, r.jsx)(l.ModalContent, {
                        className: T().content,
                        children: Y ? (0, r.jsx)(l.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                            children: J ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(E.ZP, {
                                    onClose: M,
                                    type: g,
                                    subscriptionTier: null !== (ee = null == q || null === (n = q.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== ee ? ee : h.Si.TIER_2,
                                    headingText: o,
                                    context: L,
                                    analyticsLocationObject: S,
                                    children: R
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(l.Heading, {
                                    className: T().header,
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
                        className: T().footer,
                        children: [(0, r.jsxs)("div", {
                            className: T().primaryActions,
                            children: [null != j ? (0, r.jsx)(l.Button, {
                                className: T().secondaryAction,
                                onClick: D,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: j
                            }) : null, function() {
                                var e;
                                if (X) return (0, r.jsx)(s.Z, {
                                    analyticsLocation: S,
                                    guild: m.guild,
                                    onClose: M
                                });
                                var t = J ? Q ? I.Z.Messages.MARKETING_PAGE_CTA_TRY_1_MONTH_FREE : (null == q || null === (e = q.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === h.Si.TIER_2 ? I.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : I.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : void 0,
                                    n = J ? null == q ? void 0 : q.trial_id : null;
                                return (0, r.jsx)(p.Z, {
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
                        }), !z && (0, r.jsx)(l.Button, {
                            onClick: M,
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            children: null != K ? K : I.Z.Messages.BACK
                        })]
                    })]
                })
            }
        },
        798808: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
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
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var _ = function(e) {
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
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var E = {},
                h = {};

            function O(e) {
                if (null == e) return !1;
                var t = h[e];
                if (null == t) return !1;
                var n = o.Z.getMessage(e, t.messageId);
                if (null == n) return !1;
                E[e] = {
                    channel: t.channel,
                    message: n,
                    shouldMention: t.shouldMention,
                    showMentionToggle: t.showMentionToggle
                };
                delete h[e]
            }

            function I() {
                E = {};
                h = {}
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
                    t && d(e, t)
                }(n, e);
                var t = p(n);

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
                        shallowPendingReplies: h,
                        instance: T
                    }
                };
                return n
            }(r.ZP.Store);
            g.displayName = "PendingReplyStore";
            var T = new g(i.Z, {
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
                    h[t.id] = {
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
                    t in h && (h[t] = s(c({}, h[t]), {
                        shouldMention: n
                    }))
                },
                DELETE_PENDING_REPLY: function(e) {
                    var t = e.channelId;
                    delete E[t];
                    delete h[t]
                },
                CONNECTION_OPEN: I,
                LOGOUT: I,
                MESSAGE_DELETE: function(e) {
                    var t, n, r, i = e.id,
                        o = e.channelId;
                    if ((null === (t = E[o]) || void 0 === t || null === (n = t.message) || void 0 === n ? void 0 : n.id) === i) delete E[o];
                    else {
                        if ((null === (r = h[o]) || void 0 === r ? void 0 : r.messageId) !== i) return !1;
                        delete h[o]
                    }
                },
                CHANNEL_SELECT: function(e) {
                    O(e.channelId)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    O(e.channelId)
                }
            });
            const m = T
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
                l = n(202351),
                u = n(744564),
                c = n(83797),
                s = n(664625),
                f = n(473903),
                d = n(2590);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function O(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
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

            function g(e, t) {
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
                }(e, t) || v(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function T(e) {
                return function(e) {
                    if (Array.isArray(e)) return _(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || v(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0
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
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var y = Object.freeze([]),
                S = {},
                A = {},
                L = {},
                R = {},
                N = {};

            function P(e, t) {
                var n = S[e];
                return null != n ? n[t] : null
            }
            var C = function(e) {
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
                delete R[e];
                if (null != S[e]) {
                    var t = g(a().sortBy(S[e], (function(e) {
                            return -e.timestamp
                        })), 1),
                        n = t[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        A[e] = n.status;
                        L[e] = n.activities;
                        null != n.clientStatus && (R[e] = n.clientStatus)
                    } else a().every(S[e], (function(e) {
                        return e.status === d.Skl.OFFLINE
                    })) && delete S[e]
                }
            }

            function D(e) {
                var t = S[e];
                if (null != t) {
                    var n = a().maxBy(Object.values(t), (function(e) {
                        return e.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        A[e] = n.status;
                        L[e] = n.activities;
                        null != n.clientStatus && (R[e] = n.clientStatus)
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
                    if (r === d.Skl.OFFLINE) return !1;
                    l = S[n] = {}
                }
                if (r === d.Skl.OFFLINE) l[t] = {
                    status: r,
                    clientStatus: o,
                    activities: y,
                    timestamp: Date.now()
                };
                else {
                    var u = a.length > 1 ? T(a).sort(M) : a,
                        c = l[t];
                    a = null != c && i()(c.activities, u) ? c.activities : u;
                    l[t] = {
                        status: r,
                        clientStatus: o,
                        activities: a,
                        timestamp: Date.now()
                    }
                }
                delete N[n];
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
                        if (r === d.Skl.OFFLINE) return;
                        l = S[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) l[t] = {
                        status: r,
                        clientStatus: i,
                        activities: y,
                        timestamp: Date.now()
                    };
                    else {
                        var u = o.length > 1 ? T(o).sort(M) : o;
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
                    p(this, n);
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
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(e);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == t) {
                        var i;
                        return null !== (i = A[e]) && void 0 !== i ? i : n
                    }
                    var o, a = P(e, t);
                    return null !== (o = null == a ? void 0 : a.status) && void 0 !== o ? o : n
                };
                r.getActivities = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == t) {
                        var n;
                        return null !== (n = L[e]) && void 0 !== n ? n : y
                    }
                    var r = P(e, t);
                    return null == r || null == r.activities ? y : r.activities
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
                                for (var d, _ = u[Symbol.iterator](); !(c = (d = _.next()).done); c = !0) {
                                    var p = d.value;
                                    p.application_id === e && t.push({
                                        userId: l,
                                        activity: p
                                    })
                                }
                            } catch (e) {
                                s = !0;
                                f = e
                            } finally {
                                try {
                                    c || null == _.return || _.return()
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
                    return N[e]
                };
                r.getUserIds = function() {
                    return Object.keys(L)
                };
                r.isMobileOnline = function(e) {
                    var t = R[e];
                    return null != t && t[d.X5t.MOBILE] === d.Skl.ONLINE && t[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: S,
                        statuses: A,
                        activities: L,
                        activityMetadata: N,
                        clientStatuses: R
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_ACTIVITIES: y,
                        presencesForGuilds: S,
                        statuses: A,
                        activities: L,
                        clientStatuses: R,
                        activityMetadata: N,
                        typeScore: C,
                        richnessScore: U
                    }
                };
                return n
            }(l.ZP.Store);
            Z.displayName = "PresenceStore";
            const F = new Z(u.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds,
                        n = e.presences,
                        r = s.default.getId();
                    S = {};
                    N = {};
                    A = E({}, r, A[r]);
                    L = E({}, r, L[r]);
                    R = E({}, r, {});
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
                    i.forEach(D)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.presences;
                    S = t.presencesForGuilds;
                    A = t.statuses;
                    L = t.activities;
                    N = t.activityMetadata
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
                    x(d.ME);
                    t.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            i = e.activities;
                        null != t && j({
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
                    delete N[t]
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
        95891: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
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

            function u(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    u = e.height,
                    c = void 0 === u ? 24 : u,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.viewBox,
                    _ = void 0 === d ? "0 0 24 24" : d,
                    p = e.foreground,
                    E = l(e, ["width", "height", "color", "viewBox", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                }({}, (0, i.Z)(E)), {
                    width: n,
                    height: c,
                    viewBox: _,
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                    })
                }))
            }
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
                Dv: () => _,
                OV: () => E,
                NG: () => h,
                mA: () => O,
                IG: () => I,
                lB: () => g,
                G2: () => T,
                fW: () => m
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
            var _ = {
                ROUND: u().baseShapeRound,
                ROUND_LEFT: u().baseShapeRoundLeft,
                ROUND_RIGHT: u().baseShapeRoundRight,
                SQUARE: ""
            };

            function p(e) {
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

            function h(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            var O = function(e) {
                    var t = e.count,
                        n = e.color,
                        i = void 0 === n ? a.Z.STATUS_DANGER : n,
                        l = e.disableColor,
                        c = void 0 !== l && l,
                        O = e.shape,
                        I = void 0 === O ? _.ROUND : O,
                        g = e.className,
                        T = e.style,
                        m = d(e, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, r.jsx)("div", f(s({
                        className: o()(g, u().numberBadge, I),
                        style: s({
                            backgroundColor: c ? void 0 : i,
                            width: E(t),
                            paddingRight: p(t)
                        }, T)
                    }, m), {
                        children: h(t)
                    }))
                },
                I = function(e) {
                    var t = e.text,
                        n = e.className,
                        i = e.color,
                        l = void 0 === i ? a.Z.STATUS_DANGER : i,
                        c = e.shape,
                        p = void 0 === c ? _.ROUND : c,
                        E = e.disableColor,
                        h = void 0 !== E && E,
                        O = e.style,
                        I = d(e, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", f(s({
                        className: o()(n, u().textBadge, p),
                        style: s({
                            backgroundColor: h ? void 0 : l
                        }, O)
                    }, I), {
                        children: t
                    }))
                },
                g = function(e) {
                    var t = e.text,
                        n = e.className,
                        i = d(e, ["text", "className"]);
                    return (0, r.jsx)(I, s({
                        className: o()(u().premiumBadge, n),
                        text: t
                    }, i))
                },
                T = function(e) {
                    var t = e.icon,
                        n = e.className,
                        i = e.color,
                        l = void 0 === i ? a.Z.STATUS_DANGER : i,
                        c = e.shape,
                        f = void 0 === c ? _.ROUND : c,
                        d = e.disableColor,
                        p = void 0 !== d && d,
                        E = e.style;
                    return (0, r.jsx)("div", {
                        className: o()(n, u().iconBadge, f),
                        style: s({
                            backgroundColor: p ? void 0 : l
                        }, E),
                        children: (0, r.jsx)(t, {
                            className: u().icon
                        })
                    })
                },
                m = function(e) {
                    var t = e.className,
                        n = e.color,
                        i = void 0 === n ? a.Z.INTERACTIVE_ACTIVE : n,
                        l = e.shape,
                        c = void 0 === l ? _.ROUND : l,
                        f = e.disableColor,
                        p = void 0 !== f && f,
                        E = e.style,
                        h = d(e, ["className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", s({
                        className: o()(t, u().circleBadge, c),
                        style: s({
                            backgroundColor: p ? void 0 : i
                        }, E)
                    }, h))
                }
        },
        347117: (e, t, n) => {
            "use strict";
            n.d(t, {
                Tj: () => d,
                zp: () => _,
                Dc: () => p,
                rn: () => E,
                rv: () => h,
                XN: () => I,
                OF: () => g,
                fD: () => m,
                QB: () => v,
                Bo: () => b,
                c0: () => A
            });
            var r = n(441143),
                i = n.n(r),
                o = n(496486),
                a = n.n(o),
                l = n(16243),
                u = n.n(l);

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
            var f = function(e, t) {
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
            0;

            function d(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    i = e.maxHeight,
                    o = e.minWidth,
                    a = void 0 === o ? 0 : o,
                    l = e.minHeight,
                    u = void 0 === l ? 0 : l;
                if (t !== r || n !== i) {
                    var c = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * c), a);
                    var s = (n = Math.max(Math.round(n * c), u)) > i ? i / n : 1;
                    t = Math.max(Math.round(t * s), a);
                    n = Math.max(Math.round(n * s), u)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function _(e, t) {
                var n = Math.min(Math.round(.65 * window.innerHeight), 2e3);
                return d({
                    width: e,
                    height: t,
                    maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
                    maxHeight: n
                })
            }

            function p(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    i = e.maxHeight,
                    o = 1;
                t > r && (o = r / t);
                t = Math.round(t * o);
                var a = 1;
                (n = Math.round(n * o)) > i && (a = i / n);
                return Math.min(o * a, 1)
            }

            function E(e) {
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
            var O = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                var r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return O;
                var o = r.width = 0 === e.width ? 128 : e.width,
                    a = r.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, o, a);
                var l = function(e, t, n) {
                        for (var r, i, o, a, l, u = [], c = 0; c < t; c += n) {
                            i = e[0 + (r = 4 * c)];
                            o = e[r + 1];
                            a = e[r + 2];
                            (void 0 === (l = e[r + 3]) || l >= 125) && (i > 250 && o > 250 && a > 250 || u.push([i, o, a]))
                        }
                        return u
                    }(i.getImageData(0, 0, o, a).data, o * a, n),
                    c = u()(l, t);
                return "boolean" == typeof c ? O : c.palette()
            }
            var g = function(e) {
                    return T(e)
                },
                T = a().memoize((function(e) {
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

            function m(e) {
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

            function v(e) {
                var t = e.split(";base64,");
                i()(2 === t.length, "Input data is not a valid image.");
                return atob(t[1]).length
            }

            function b(e, t, n) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = s((function(e, t, n) {
                    var r;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, S(e).arrayBuffer()];
                            case 1:
                                r = i.sent();
                                return [2, new File([r], t, {
                                    type: n
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function S(e) {
                var t;
                t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                for (var n = e.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(t.length), i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
                return new Blob([r], {
                    type: n
                })
            }

            function A(e) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = s((function(e) {
                    var t, n, r;
                    return f(this, (function(i) {
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
                WA: () => F,
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

            function d(e, t) {
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
            const p = {
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

            function h(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function O(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            h(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            h(o, r, i, a, l, "throw", e)
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

            function g(e, t) {
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
                m = new u.Z("Spellchecker"),
                v = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function b(e) {
                var t;
                e = null !== (t = p[e]) && void 0 !== t ? t : e;
                var n = (0, i.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        o = r.language,
                        a = r.region;
                    return "".concat(o.language.toLowerCase(), "-").concat(a.toUpperCase())
                }
                m.error("".concat(e, " is not a valid locale."))
            }
            var y = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = g(c.default.locale.split("-"), 2),
                            i = r[0],
                            o = r[1];
                        this.regionPreference = o;
                        var a = this.getAvailableLanguages(t);
                        this.languageDetector = new _(i, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var o, l = null !== (o = a[e]) && void 0 !== o ? o : p[i];
                                null != l && n.setLocale(l)
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
                            m.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
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
                            var n, r = g(e.split("-"), 1)[0];
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
                return (L = O((function() {
                    var e, t, n, r;
                    return T(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, v.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = i.sent()) && void 0 !== e ? e : [];
                                n = t.map(b).filter(s.lm);
                                A(r = new y(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var R = n(120415);

            function N(e, t, n, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function P(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            N(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            N(o, r, i, a, l, "throw", e)
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
                return (0, R.nI)() && U()
            }
            var w = M() ? function() {
                return L.apply(this, arguments)
            }() : null;

            function D(e) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = P((function(e) {
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
                return (k = P((function(e) {
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
                Z = P((function(e) {
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

            function F(e) {
                return B.apply(this, arguments)
            }

            function B() {
                B = P((function(e) {
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
                return B.apply(this, arguments)
            }

            function H(e) {
                return V.apply(this, arguments)
            }

            function V() {
                return (V = P((function(e) {
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
                return z.apply(this, arguments)
            }

            function z() {
                return (z = P((function(e) {
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
        322500: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                i = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                o = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                a = /^(.*)#[0-9]{1,5}$/,
                l = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                u = ["discordtag", "everyone", "here", "discord nitro", "discord"];
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
                    var t = a.exec(e);
                    if (null != t && t.length > 1) {
                        var n = t[1],
                            r = l.some((function(e) {
                                return n.includes(e)
                            })),
                            i = u.includes(n);
                        return !r && !i
                    }
                    return !1
                }
            }
        },
        15084: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => T,
                d: () => m
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
                d = n(652591),
                _ = n(149258),
                p = n(116094),
                E = n(99181),
                h = n(2590),
                O = n(493254),
                I = n(203600),
                g = n(473708);

            function T(e, t) {
                var n = f.default.getCurrentUser(),
                    r = e.getGuildId(),
                    i = _.dg(r),
                    o = [],
                    l = 0,
                    c = 0,
                    s = 0,
                    d = [],
                    T = !0,
                    m = !1,
                    v = void 0;
                try {
                    for (var b, y = t[Symbol.iterator](); !(T = (b = y.next()).done); T = !0) {
                        var S = b.value;
                        s += 1;
                        l += S.size;
                        o.push(S.size);
                        S.size > c && (c = S.size);
                        null != S.type ? d.push(S.type) : d.push("unknown")
                    }
                } catch (e) {
                    m = !0;
                    v = e
                } finally {
                    try {
                        T || null == y.return || y.return()
                    } finally {
                        if (m) throw v
                    }
                }
                if (c > i) {
                    (0, u.yw)(h.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
                        channel_id: e.id,
                        guild_id: r,
                        user_individual_file_size_limit: i,
                        pre_compression_file_sizes: o,
                        pre_compression_aggregate_file_size: l,
                        num_attachments: s,
                        error_type: O.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                        attachment_mimetypes: d
                    });
                    (0, a.openUploadError)({
                        title: g.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                        help: (0, E.BK)(n, r),
                        showPremiumUpsell: !(0, p.M5)(n, I.p9.TIER_2),
                        fileSize: c
                    })
                } else(0, a.openUploadError)({
                    title: g.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: g.Z.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
                        maxSize: _.Ng(_.OC())
                    })
                })
            }

            function m(e, t, n) {
                var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    f = u.requireConfirm,
                    _ = void 0 === f || f,
                    p = u.showLargeMessageDialog,
                    O = void 0 !== p && p,
                    I = u.isThumbnail,
                    m = void 0 !== I && I,
                    v = u.isClip,
                    b = void 0 !== v && v;
                if (!(e.length < 1)) {
                    var y = t.getGuildId();
                    if ((0, E.Bf)(e, y)) T(t, e);
                    else if (s.Z.getUploadCount(t.id, n) + e.length > h.dN1) {
                        (0, a.openUploadError)({
                            title: g.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                            help: g.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                                limit: h.dN1
                            })
                        });
                        d.default.track(h.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                            existing_count: s.Z.getUploadCount(t.id, n),
                            new_count: e.length
                        })
                    } else {
                        t.type !== h.d4z.GUILD_VOICE && t.type !== h.d4z.GUILD_STAGE_VOICE || c.Z.getChatOpen(t.id) || r.Z.updateChatOpen(t.id, !0);
                        if (_) {
                            var S = Array.from(e).map((function(e) {
                                return {
                                    file: e,
                                    platform: l.ow.WEB,
                                    isThumbnail: m,
                                    isClip: b
                                }
                            }));
                            i.Z.addFiles({
                                files: S,
                                channelId: t.id,
                                showLargeMessageDialog: O,
                                draftType: n
                            })
                        } else o.Z.instantBatchUpload({
                            channelId: t.id,
                            files: e,
                            draftType: n,
                            isThumbnail: m,
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