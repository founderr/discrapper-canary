(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [35581, 50865, 84832, 88110, 96043, 53686, 1459, 56645, 71402], {
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
                    for (var u, l = []; t.length;) {
                        var c = t.shift();
                        if (1 === c.length)
                            if (u) {
                                a.push({
                                    singleton: u,
                                    extension: l
                                });
                                u = c;
                                l = []
                            } else u = c;
                        else l.push(c)
                    }
                    a.push({
                        singleton: u,
                        extension: l
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
        232369: (e, t, n) => {
            e.exports = n.p + "485eeade0dcc3f7a133db75a15572ffa.mp3"
        },
        125346: (e, t, n) => {
            e.exports = n.p + "908d43f2bbc2c0176f2379b4e0bc8c15.mp3"
        },
        468391: (e, t, n) => {
            e.exports = n.p + "3e63df9f422d6abfa7fe6c9088c03f8a.mp3"
        },
        442466: (e, t, n) => {
            e.exports = n.p + "1189af8782348ba6e57e5c5815de4b74.mp3"
        },
        107906: (e, t, n) => {
            e.exports = n.p + "def141937c5c797cc22101bd6d1a1573.mp3"
        },
        459735: (e, t, n) => {
            e.exports = n.p + "c6e92752668dde4eee5923d70441579f.mp3"
        },
        282884: (e, t, n) => {
            e.exports = n.p + "84a1b4e11d634dbfa1e5dd97a96de3ad.mp3"
        },
        621136: (e, t, n) => {
            e.exports = n.p + "b9411af07f154a6fef543e7e442e4da9.mp3"
        },
        236162: (e, t, n) => {
            e.exports = n.p + "d083df66ef4663ce74f0d0c521fa7449.mp3"
        },
        329450: (e, t, n) => {
            e.exports = n.p + "4b08c52e693f2f34e3a6197076933db5.mp3"
        },
        10094: (e, t, n) => {
            e.exports = n.p + "20d902edee4f526f424f87306ff80606.mp3"
        },
        180376: (e, t, n) => {
            e.exports = n.p + "71f048f8aa7d4b24bf4268a87cbbb192.mp3"
        },
        81413: (e, t, n) => {
            e.exports = n.p + "1de04408e62b5d52ae3ebbb91e9e1978.mp3"
        },
        843851: (e, t, n) => {
            e.exports = n.p + "2c0433f93db8449e4a82b76dc520cb29.mp3"
        },
        190931: (e, t, n) => {
            e.exports = n.p + "68472713f7a62c7c37e0a6a5d5a1faeb.mp3"
        },
        296568: (e, t, n) => {
            e.exports = n.p + "e4d539271704b87764dc465b1a061abd.mp3"
        },
        717578: (e, t, n) => {
            e.exports = n.p + "b4d53caf787b3f6ea7b21fd172708629.mp3"
        },
        667540: (e, t, n) => {
            e.exports = n.p + "06fc6d533ebdb9f1aa2b93d65ad1dec1.mp3"
        },
        599855: (e, t, n) => {
            e.exports = n.p + "3b21ac6812cccad3267e6fe0aeb71f4f.mp3"
        },
        403549: (e, t, n) => {
            e.exports = n.p + "43cdbc0e4ca6acb227d423914d1c06e7.mp3"
        },
        655109: (e, t, n) => {
            e.exports = n.p + "5a8047ef3ffe99a429388098aa2ad34e.mp3"
        },
        40335: (e, t, n) => {
            e.exports = n.p + "a0dbff056ead7ff10f74d9d3c2dfdf79.mp3"
        },
        966306: (e, t, n) => {
            e.exports = n.p + "ff665d60cb4dc6ae52354c0f9ed64320.mp3"
        },
        720586: (e, t, n) => {
            e.exports = n.p + "a42e8ea3e8a1cddddaf600b854154885.mp3"
        },
        982418: (e, t, n) => {
            e.exports = n.p + "f57280342808a64f376061b6d62ed3ee.mp3"
        },
        298093: (e, t, n) => {
            e.exports = n.p + "cd755b4dd76e47b652a903e561c75ba8.mp3"
        },
        49319: (e, t, n) => {
            e.exports = n.p + "aeed3faf9a2496107d502904ef92e80b.mp3"
        },
        181103: (e, t, n) => {
            e.exports = n.p + "7c78e838039f93ab8d92e8cd3393ba27.mp3"
        },
        337381: (e, t, n) => {
            e.exports = n.p + "e4d205fbce67926a10add1e97fb2ea94.mp3"
        },
        194198: (e, t, n) => {
            e.exports = n.p + "cd044a67f99f9b99454fb0a9ba65caa1.mp3"
        },
        242898: (e, t, n) => {
            e.exports = n.p + "61a4a31383060779ec12bc108efc665f.mp3"
        },
        437052: (e, t, n) => {
            e.exports = n.p + "85512904df6e71400c9468cb0ca7c558.mp3"
        },
        57232: (e, t, n) => {
            e.exports = n.p + "4465b49eb630905d54e0f88ce9cd80d8.mp3"
        },
        901105: (e, t, n) => {
            e.exports = n.p + "2542f2e7c441e86e5e9f15de0b0689d6.mp3"
        },
        751007: (e, t, n) => {
            e.exports = n.p + "ae7d16bb2eea76b9b9977db0fad66658.mp3"
        },
        279686: (e, t, n) => {
            e.exports = n.p + "7e125dc075ec6e5ae796e4c3ab83abb3.mp3"
        },
        707580: (e, t, n) => {
            e.exports = n.p + "7344caf654696d7fb97adddddbe5dbcc.mp3"
        },
        986105: (e, t, n) => {
            e.exports = n.p + "f2f9c63c5a80e17b7023403d8adf4b97.mp3"
        },
        47317: (e, t, n) => {
            e.exports = n.p + "a37dcd6272ae41cf49295d58c9806fe3.mp3"
        },
        860392: (e, t, n) => {
            e.exports = n.p + "fa4d62c3cbc80733bf1f01b9c6f181de.mp3"
        },
        766485: (e, t, n) => {
            e.exports = n.p + "a5f42064e8120e381528b14fd3188b72.mp3"
        },
        476670: (e, t, n) => {
            e.exports = n.p + "84c9fa3d07da865278bd77c97d952db4.mp3"
        },
        423796: (e, t, n) => {
            e.exports = n.p + "dd920c06a01e5bb8b09678581e29d56f.mp3"
        },
        663: (e, t, n) => {
            e.exports = n.p + "15fe810f6cfab609c7fcda61652b9b34.mp3"
        },
        361222: (e, t, n) => {
            e.exports = n.p + "53ce6a92d3c233e8b4ac529d34d374e4.mp3"
        },
        752990: (e, t, n) => {
            e.exports = n.p + "429d09ee3b86e81a75b5e06d3fb482be.mp3"
        },
        510323: (e, t, n) => {
            e.exports = n.p + "ad322ffe0a88436296158a80d5d11baa.mp3"
        },
        465635: (e, t, n) => {
            e.exports = n.p + "bacd60695116d4606db676dceae620c1.mp3"
        },
        893151: (e, t, n) => {
            e.exports = n.p + "d9e78f77fdbca62481a1363e7fc486ce.mp3"
        },
        245984: (e, t, n) => {
            e.exports = n.p + "c563dbcaf8eb92b1f0565d9afac947e6.mp3"
        },
        800987: (e, t, n) => {
            e.exports = n.p + "80472157152f747d2400be91d59f02c2.mp3"
        },
        853866: (e, t, n) => {
            e.exports = n.p + "8b63833c8d252fedba6b9c4f2517c705.mp3"
        },
        122540: (e, t, n) => {
            e.exports = n.p + "74ab980d6890a0fa6aa0336182f9f620.mp3"
        },
        332961: (e, t, n) => {
            e.exports = n.p + "471cfd0005b112ff857705e894bf41a6.mp3"
        },
        816559: (e, t, n) => {
            e.exports = n.p + "66598bea6e59eb8acdf32cf2d9d75ba9.mp3"
        },
        429586: (e, t, n) => {
            e.exports = n.p + "d8ed801752c69b350e4782ff58dd5fdf.mp3"
        },
        286944: (e, t, n) => {
            e.exports = n.p + "4e30f98aa537854f79f49a76af822bbc.mp3"
        },
        980679: (e, t, n) => {
            e.exports = n.p + "9ca817f41727edc1b2f1bc4f1911107c.mp3"
        },
        302354: (e, t, n) => {
            e.exports = n.p + "5827bbf9a67c61cbb0e02ffbf434b654.mp3"
        },
        13543: (e, t, n) => {
            e.exports = n.p + "7cdcdcbc426cc43583365a671c24b740.mp3"
        },
        214578: (e, t, n) => {
            e.exports = n.p + "b9b40d6ad7e314424e82045a3060335e.mp3"
        },
        494615: (e, t, n) => {
            e.exports = n.p + "5a000a0d4dff083d12a1d4fc2c7cbf66.mp3"
        },
        499045: (e, t, n) => {
            e.exports = n.p + "43805b9dd757ac4f6b9b58c1a8ee5f0d.mp3"
        },
        835579: (e, t, n) => {
            e.exports = n.p + "5dd43c946894005258d85770f0d10cff.mp3"
        },
        236660: (e, t, n) => {
            e.exports = n.p + "4fcfeb2cba26459c4750e60f626cebdc.mp3"
        },
        901897: (e, t, n) => {
            e.exports = n.p + "e81d11590762728c1b811eadfa5be766.mp3"
        },
        824390: e => {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var i = 0, o = 0; i < r; i++) {
                    for (var a = e.charCodeAt(i); o < n;)
                        if (t.charCodeAt(o++) === a) continue e;
                    return !1
                }
                return !0
            }
        },
        896874: e => {
            e.exports = function(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }
        },
        269199: (e, t, n) => {
            var r = n(989881),
                i = n(498612);
            e.exports = function(e, t) {
                var n = -1,
                    o = i(e) ? Array(e.length) : [];
                r(e, (function(e, r, i) {
                    o[++n] = t(e, r, i)
                }));
                return o
            }
        },
        882689: (e, t, n) => {
            var r = n(829932),
                i = n(267206),
                o = n(269199),
                a = n(571131),
                u = n(307518),
                l = n(285022),
                c = n(406557);
            e.exports = function(e, t, n) {
                var s = -1;
                t = r(t.length ? t : [c], u(i));
                var f = o(e, (function(e, n, i) {
                    return {
                        criteria: r(t, (function(t) {
                            return t(e)
                        })),
                        index: ++s,
                        value: e
                    }
                }));
                return a(f, (function(e, t) {
                    return l(e, t, n)
                }))
            }
        },
        105976: (e, t, n) => {
            var r = n(406557),
                i = n(545357),
                o = n(430061);
            e.exports = function(e, t) {
                return o(i(e, t, r), e + "")
            }
        },
        356560: (e, t, n) => {
            var r = n(575703),
                i = n(538777),
                o = n(406557),
                a = i ? function(e, t) {
                    return i(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(t),
                        writable: !0
                    })
                } : o;
            e.exports = a
        },
        571131: e => {
            e.exports = function(e, t) {
                var n = e.length;
                e.sort(t);
                for (; n--;) e[n] = e[n].value;
                return e
            }
        },
        626393: (e, t, n) => {
            var r = n(733448);
            e.exports = function(e, t) {
                if (e !== t) {
                    var n = void 0 !== e,
                        i = null === e,
                        o = e == e,
                        a = r(e),
                        u = void 0 !== t,
                        l = null === t,
                        c = t == t,
                        s = r(t);
                    if (!l && !s && !a && e > t || a && u && c && !l && !s || i && u && c || !n && c || !o) return 1;
                    if (!i && !a && !s && e < t || s && n && o && !i && !a || l && n && o || !u && o || !c) return -1
                }
                return 0
            }
        },
        285022: (e, t, n) => {
            var r = n(626393);
            e.exports = function(e, t, n) {
                for (var i = -1, o = e.criteria, a = t.criteria, u = o.length, l = n.length; ++i < u;) {
                    var c = r(o[i], a[i]);
                    if (c) {
                        return i >= l ? c : c * ("desc" == n[i] ? -1 : 1)
                    }
                }
                return e.index - t.index
            }
        },
        545357: (e, t, n) => {
            var r = n(896874),
                i = Math.max;
            e.exports = function(e, t, n) {
                t = i(void 0 === t ? e.length - 1 : t, 0);
                return function() {
                    for (var o = arguments, a = -1, u = i(o.length - t, 0), l = Array(u); ++a < u;) l[a] = o[t + a];
                    a = -1;
                    for (var c = Array(t + 1); ++a < t;) c[a] = o[a];
                    c[t] = n(l);
                    return r(e, this, c)
                }
            }
        },
        430061: (e, t, n) => {
            var r = n(356560),
                i = n(521275)(r);
            e.exports = i
        },
        521275: e => {
            var t = Date.now;
            e.exports = function(e) {
                var n = 0,
                    r = 0;
                return function() {
                    var i = t(),
                        o = 16 - (i - r);
                    r = i;
                    if (o > 0) {
                        if (++n >= 800) return arguments[0]
                    } else n = 0;
                    return e.apply(void 0, arguments)
                }
            }
        },
        575703: e => {
            e.exports = function(e) {
                return function() {
                    return e
                }
            }
        },
        208804: (e, t, n) => {
            e.exports = n(91175)
        },
        91175: e => {
            e.exports = function(e) {
                return e && e.length ? e[0] : void 0
            }
        },
        531351: e => {
            var t = Array.prototype.reverse;
            e.exports = function(e) {
                return null == e ? e : t.call(e)
            }
        },
        189734: (e, t, n) => {
            var r = n(121078),
                i = n(882689),
                o = n(105976),
                a = n(816612),
                u = o((function(e, t) {
                    if (null == e) return [];
                    var n = t.length;
                    n > 1 && a(e, t[0], t[1]) ? t = [] : n > 2 && a(t[0], t[1], t[2]) && (t = [t[0]]);
                    return i(e, r(t, 1), [])
                }));
            e.exports = u
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
        620745: (e, t, n) => {
            "use strict";
            var r = n(973935);
            t.s = r.createRoot;
            r.hydrateRoot
        },
        656645: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n(744564),
                i = n(704560),
                o = n(359721),
                a = n(912735),
                u = n(602351),
                l = n(652591),
                c = n(716118),
                s = n(77643),
                f = n(2590),
                d = n(36256);

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
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

            function h() {
                (0, c.GN)("mention3")
            }

            function E(e, t, n, r, i) {
                if (t !== n) {
                    var o = e[t],
                        u = e[n];
                    l.default.track(f.rMx.MEDIA_DEVICE_CHANGED, {
                        device_from_name: a.Z.getCertifiedDeviceName(t, null != o ? o.name : ""),
                        device_to_name: a.Z.getCertifiedDeviceName(n, null != u ? u.name : ""),
                        device_type: r,
                        device_is_certified: a.Z.isCertified(n),
                        location: i
                    })
                }
            }
            var v = {
                    isNotSupported: function() {
                        return !1
                    },
                    enable: function(e) {
                        return Promise.resolve(!0)
                    }
                },
                b = (v = n(660977)).enable,
                g = v.isNotSupported;
            const m = {
                enable: b,
                toggleSelfMute: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.context,
                        n = void 0 === t ? d.Yn.DEFAULT : t,
                        i = e.syncRemote,
                        o = void 0 === i || i;
                    return g() ? Promise.resolve() : u.Z.isEnabled() ? r.Z.dispatch({
                        type: "AUDIO_TOGGLE_SELF_MUTE",
                        context: n,
                        syncRemote: o
                    }) : this.enable(!0)
                },
                setTemporarySelfMute: function(e) {
                    g() || r.Z.dispatch({
                        type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
                        mute: e
                    })
                },
                toggleSelfDeaf: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.context,
                        n = void 0 === t ? d.Yn.DEFAULT : t,
                        i = e.syncRemote,
                        o = void 0 === i || i;
                    g() || r.Z.dispatch({
                        type: "AUDIO_TOGGLE_SELF_DEAF",
                        context: n,
                        syncRemote: o
                    })
                },
                toggleLocalMute: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT;
                    g() || r.Z.dispatch({
                        type: "AUDIO_TOGGLE_LOCAL_MUTE",
                        context: t,
                        userId: e
                    })
                },
                toggleLocalSoundboardMute: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT;
                    r.Z.dispatch({
                        type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
                        context: t,
                        userId: e
                    })
                },
                setDisableLocalVideo: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Yn.DEFAULT,
                        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    g() || r.Z.dispatch({
                        type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                        context: n,
                        userId: e,
                        videoToggleState: t,
                        persist: i,
                        isAutomatic: o
                    })
                },
                setLocalVolume: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Yn.DEFAULT;
                    r.Z.dispatch({
                        type: "AUDIO_SET_LOCAL_VOLUME",
                        context: n,
                        userId: e,
                        volume: (0, i.r)(t, n)
                    })
                },
                setLocalPan: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.Yn.DEFAULT;
                    r.Z.dispatch({
                        type: "AUDIO_SET_LOCAL_PAN",
                        context: i,
                        userId: e,
                        left: t,
                        right: n
                    })
                },
                setMode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Yn.DEFAULT;
                    g() || r.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: n,
                        mode: e,
                        options: _({}, u.Z.getModeOptions(n), t)
                    })
                },
                setInputVolume: function(e) {
                    g() || r.Z.dispatch({
                        type: "AUDIO_SET_INPUT_VOLUME",
                        volume: e
                    })
                },
                setOutputVolume: function(e) {
                    g() || r.Z.dispatch({
                        type: "AUDIO_SET_OUTPUT_VOLUME",
                        volume: e
                    })
                },
                setInputDevice: function(e, t) {
                    if (!g()) {
                        if (null != t) {
                            E(u.Z.getInputDevices(), u.Z.getInputDeviceId(), e, "Audio Input", t)
                        }
                        r.Z.dispatch({
                            type: "AUDIO_SET_INPUT_DEVICE",
                            id: e
                        });
                        h()
                    }
                },
                setOutputDevice: function(e, t) {
                    if (!g()) {
                        if (null != t) {
                            E(u.Z.getOutputDevices(), u.Z.getOutputDeviceId(), e, "Audio Output", t)
                        }
                        r.Z.dispatch({
                            type: "AUDIO_SET_OUTPUT_DEVICE",
                            id: e
                        });
                        h()
                    }
                },
                setVideoDevice: function(e, t) {
                    if (!g()) {
                        if (null != t) {
                            E(u.Z.getVideoDevices(), u.Z.getVideoDeviceId(), e, "Video", t)
                        }
                        r.Z.dispatch({
                            type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
                            id: e
                        })
                    }
                },
                setEchoCancellation: function(e, t) {
                    g() || r.Z.dispatch({
                        type: "AUDIO_SET_ECHO_CANCELLATION",
                        enabled: e,
                        location: t
                    })
                },
                setLoopback: function(e) {
                    g() || r.Z.dispatch({
                        type: "AUDIO_SET_LOOPBACK",
                        enabled: e
                    })
                },
                setNoiseSuppression: function(e, t) {
                    g() || r.Z.dispatch({
                        type: "AUDIO_SET_NOISE_SUPPRESSION",
                        enabled: e,
                        location: t
                    })
                },
                setNoiseCancellation: function(e, t) {
                    if (!g()) {
                        r.Z.dispatch({
                            type: "AUDIO_SET_NOISE_CANCELLATION",
                            enabled: e,
                            location: t
                        });
                        r.Z.dispatch({
                            type: "AUDIO_SET_NOISE_SUPPRESSION",
                            enabled: !e,
                            location: t
                        })
                    }
                },
                setAutomaticGainControl: function(e, t) {
                    g() || r.Z.dispatch({
                        type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
                        enabled: e,
                        location: t
                    })
                },
                setExperimentalEncoders: function(e) {
                    g() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS",
                        enabled: e
                    })
                },
                setHardwareH264: function(e) {
                    g() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_HARDWARE_H264",
                        enabled: e
                    })
                },
                setAttenuation: function(e, t, n) {
                    g() || r.Z.dispatch({
                        type: "AUDIO_SET_ATTENUATION",
                        attenuation: e,
                        attenuateWhileSpeakingSelf: t,
                        attenuateWhileSpeakingOthers: n
                    })
                },
                setQoS: function(e) {
                    g() || r.Z.dispatch({
                        type: "AUDIO_SET_QOS",
                        enabled: e
                    })
                },
                reset: function() {
                    g() || r.Z.dispatch({
                        type: "AUDIO_RESET"
                    })
                },
                setSilenceWarning: function(e) {
                    g() || r.Z.dispatch({
                        type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
                        enabled: e
                    })
                },
                setDebugLogging: function(e) {
                    g() || r.Z.dispatch({
                        type: "AUDIO_SET_DEBUG_LOGGING",
                        enabled: e
                    })
                },
                setVideoHook: function(e) {
                    g() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
                        enabled: e
                    })
                },
                setExperimentalSoundshare: function(e) {
                    g() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
                        enabled: e
                    })
                },
                setAudioSubsystem: function(e) {
                    g() || r.Z.dispatch({
                        type: "AUDIO_SET_SUBSYSTEM",
                        subsystem: e
                    })
                },
                setVideoEnabled: function(e) {
                    (0, o.eH)();
                    r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
                        enabled: e
                    })
                },
                setGoLiveSource: function(e) {
                    null != (null == e ? void 0 : e.qualityOptions) && (0, s.Ye)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate);
                    r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: e
                    })
                },
                setOpenH264: function(e) {
                    g() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_OPEN_H264",
                        enabled: e
                    })
                },
                setAV1Enabled: function(e) {
                    g() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_AV1",
                        enabled: e
                    })
                },
                setH265Enabled: function(e) {
                    g() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_H265",
                        enabled: e
                    })
                },
                setAecDump: function(e) {
                    g() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_AEC_DUMP",
                        enabled: e
                    })
                },
                interact: function() {
                    g() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                        required: !1
                    })
                },
                enableSoundshare: function() {
                    g() || r.Z.dispatch({
                        type: "MEDIA_ENGINE_ENABLE_SOUNDSHARE"
                    })
                }
            }
        },
        786522: (e, t, n) => {
            "use strict";
            n.d(t, {
                c4: () => i,
                mJ: () => o,
                N5: () => a,
                lc: () => u
            });
            var r = n(744564);

            function i(e) {
                r.Z.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function o(e) {
                r.Z.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function a(e) {
                r.Z.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function u(e) {
                r.Z.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        971402: (e, t, n) => {
            "use strict";
            n.d(t, {
                Zy: () => f,
                vq: () => d,
                jW: () => p
            });
            var r = n(744564),
                i = n(26468),
                o = n(120415),
                a = n(73105),
                u = n(2590);

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
                    var l, f, d = 0,
                        p = 0;
                    if ("pageX" in e) {
                        d = e.pageX;
                        p = e.pageY
                    }
                    if (0 === d && 0 === p) {
                        var _, h = null === (_ = e.target) || void 0 === _ ? void 0 : _.getBoundingClientRect(),
                            E = null != h ? h : {},
                            v = E.left,
                            b = void 0 === v ? 0 : v,
                            g = E.top,
                            m = void 0 === g ? 0 : g,
                            O = E.width,
                            y = void 0 === O ? 0 : O,
                            I = E.height;
                        d = b + y / 2;
                        p = m + (void 0 === I ? 0 : I) / 2
                    }
                    var S = {
                        render: t,
                        renderLazy: r,
                        target: null !== (l = e.target) && void 0 !== l ? l : e.currentTarget,
                        rect: new DOMRect(d, p, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? u.IlC.OVERLAY : null !== (f = (0, i.GB)()) && void 0 !== f ? f : u.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.nI)()) var T = (0, a.RD)((function() {
                        T();
                        s(S)
                    }));
                    else {
                        e.preventDefault();
                        s(S)
                    }
                }
            }

            function p(e, t, n) {
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
        201459: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(730381),
                i = n.n(r),
                o = n(575945),
                a = n(744564),
                u = n(52317),
                l = n(9430),
                c = n(171940),
                s = n(131559),
                f = n(473708);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function _(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const h = {
                open: function(e) {
                    a.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                        guildId: e
                    })
                },
                close: function() {
                    a.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                    })
                },
                updateGuildNotificationSettings: function(e, t, n) {
                    var r = (0, c.GA)(e);
                    u.Z.saveUserGuildSettings(e, t);
                    a.Z.dispatch({
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
                    u.Z.saveUserGuildSettings(e, t);
                    a.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                        guildId: e,
                        settings: t
                    });
                    (0, c.Wq)(e, t, i, n);
                    Object.keys(t.channel_overrides).forEach((function(r) {
                        var i = o.get(r);
                        (0,
                            c.jz)(e, r, t.channel_overrides[r], i, n)
                    }))
                },
                updateGuildNotificationSettingsBulk: function(e, t) {
                    var n = Object.keys(e),
                        r = (0, c.rU)(n);
                    u.Z.saveUserGuildSettingsBulk(e);
                    Object.entries(e).forEach((function(e) {
                        var n = _(e, 2),
                            i = n[0],
                            o = n[1],
                            u = r.get(i);
                        a.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: i,
                            settings: o
                        });
                        (0, c.Wq)(i, o, u, t)
                    }))
                },
                updateChannelOverrideSettings: function(e, t, n, r) {
                    var i = (0, c.I)(e, t),
                        l = {
                            channel_overrides: p({}, t, n)
                        };
                    u.Z.saveUserGuildSettings(e, l);
                    a.Z.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                        guildId: e,
                        channelId: t,
                        settings: n
                    });
                    o.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED);
                    (0, c.jz)(e, t, n, i, r)
                },
                updateChannelOverrideSettingsBulk: function(e, t, n) {
                    var r = Object.keys(t),
                        i = {
                            channel_overrides: t
                        },
                        o = (0, c.wK)(e, r);
                    u.Z.saveUserGuildSettings(e, i);
                    a.Z.dispatch({
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
                    a.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: e,
                        updatedSettings: p({}, t, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleSelectChange: function(e, t, n, r) {
                    a.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: r.id,
                        profile: e,
                        updatedSettings: p({}, t, n),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleMuteConfigChange: function(e, t, n) {
                    var r = {
                        selected_time_window: t,
                        end_time: t > 0 ? i()().add(t, "second").toISOString() : null
                    };
                    a.Z.dispatch({
                        type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                        guildId: n.id,
                        profile: "MUTED",
                        updatedSettings: p({}, e, r),
                        handleUpdate: this.updateGuildNotificationSettings
                    })
                },
                handleHighlightsChange: function(e, t, n) {
                    a.Z.dispatch({
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
                    a.Z.dispatch({
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
                In: () => p,
                U6: () => _,
                y5: () => h,
                iV: () => E,
                CZ: () => v,
                jT: () => b,
                Ju: () => g,
                FT: () => m
            });
            var r = n(842227),
                i = n(744564),
                o = n(18882),
                a = n(382060),
                u = n(61209),
                l = n(877475),
                c = n(473903),
                s = n(2590);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e) {
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

            function _(e) {
                e.isCategory() ? function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = u.Z.getChannel(e);
                    if (null != r && null != r.guild_id) {
                        var i = l.Z.getCategories(r.guild_id);
                        if (null != i[e]) {
                            var c = i[e].filter((function(e) {
                                    var t = e.channel;
                                    return (0, a.vc)(t.type)
                                })).map((function(e) {
                                    return e.channel.id
                                })),
                                s = d(c);
                            c.forEach((function(e) {
                                var t = o.Z.getActiveJoinedThreadsForParent(r.guild_id, e);
                                for (var n in t) s.push(n)
                            }));
                            var f = !0,
                                _ = !1,
                                h = void 0;
                            try {
                                for (var E, v = s[Symbol.iterator](); !(f = (E = v.next()).done); f = !0) {
                                    p(E.value, t, n)
                                }
                            } catch (e) {
                                _ = !0;
                                h = e
                            } finally {
                                try {
                                    f || null == v.return || v.return()
                                } finally {
                                    if (_) throw h
                                }
                            }
                        }
                    }
                }(e.id, !0, !0) : e.isForumLikeChannel() ? p(e.id, !0, !0, r.default.fromTimestamp(Date.now())) : p(e.id, !0, !0)
            }

            function h(e) {
                i.Z.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: s.e3s
                })
            }

            function E(e) {
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

            function b(e, t) {
                i.Z.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function g(e, t, n) {
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
                GZ: () => _,
                Gn: () => E,
                Y2: () => v,
                mE: () => b
            });
            var r = n(281110),
                i = n(744564),
                o = n(973889),
                a = n(615796),
                u = n(264628),
                l = n(673679),
                c = n(2590),
                s = n(203600);

            function f(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            f(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            f(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var p = function(e, t) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
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
                                            value: o[1],
                                                done: !1
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
                        }([o, u])
                    }
                }
            };

            function _(e, t, n, r, i) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = d((function(e, t, n, s, f) {
                    var d, _, h, E;
                    return p(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: e
                                });
                                p.label = 1;
                            case 1:
                                p.trys.push([1, 5, , 6]);
                                d = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                _ = {};
                                null != t && (_.country_code = t);
                                null != n && (_.payment_source_id = n);
                                null != s && (_.include_unpublished = s);
                                null != f && (_.revenue_surface = f);
                                d.query = _;
                                return a.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, l.GE)()];
                            case 2:
                                p.sent();
                                p.label = 3;
                            case 3:
                                return [4, r.ZP.get(d)];
                            case 4:
                                h = p.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: h.body
                                });
                                return [3, 6];
                            case 5:
                                E = p.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, u.q2)(E);
                                throw new o.Z(E);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function E(e, t) {
                return Promise.all(e.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(e) {
                    return _(e, t)
                })))
            }

            function v(e, t, n) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return _(r, e, t, void 0, n)
                })))
            }

            function b() {
                i.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        396179: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n(281110),
                i = n(630631),
                o = n(744564),
                a = n(735885),
                u = n(2590);

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

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                o.Z.dispatch(c({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t
                }, n));
                (0, a.jN)(u.S9g.USER_SETTINGS)
            }
            var f = n(223219),
                d = n(652591),
                p = n(775173),
                _ = n(488110),
                h = n(239620),
                E = n(473708);

            function v(e, t, n) {
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
            const m = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    s(e, t, n)
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    o.Z.dispatch(b({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: t
                    }, n))
                },
                close: function() {
                    var e = f.Z.onClose;
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    o.Z.dispatch(b({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: e,
                        subsection: t
                    }, n))
                },
                clearSubsection: function(e) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: e
                    })
                },
                clearScrollPosition: function(e) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: e
                    })
                },
                updateAccount: function(e) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: e
                    })
                },
                submitComplete: function() {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                    })
                },
                reset: function() {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_RESET"
                    })
                },
                saveAccountChanges: function(e, t) {
                    var n = this;
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var a = e.username,
                        l = e.email,
                        c = e.emailToken,
                        s = e.password,
                        f = e.avatar,
                        v = e.newPassword,
                        m = e.discriminator,
                        O = t.close;
                    return (0, _.Z)((function(e) {
                        var t = g(b({
                                username: a,
                                email: l,
                                email_token: c,
                                password: s,
                                avatar: f,
                                new_password: v
                            }, e), {
                                discriminator: null != m && "" !== m ? m : void 0
                            }),
                            n = i.Z.get(u.JkL),
                            o = (0, h.xJ)();
                        if (null != o && null != n) {
                            t.push_provider = o;
                            t.push_token = n
                        }
                        var d = i.Z.get(u.scU);
                        if (null != h.mv && null != d) {
                            t.push_voip_provider = h.mv;
                            t.push_voip_token = d
                        }
                        return r.ZP.patch({
                            url: u.ANM.ME,
                            oldFormErrors: !0,
                            body: t
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: E.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                        },
                        hooks: {
                            onEarlyClose: function() {
                                return o.Z.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }
                    }).then((function(e) {
                        var t = e.body,
                            r = t.token;
                        d.default.track(u.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, p.xR)(t.avatar)
                        });
                        delete t.token;
                        o.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: t.id
                        });
                        o.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        null != v && o.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: v
                        });
                        null != s && null != v && o.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        O ? n.close() : n.submitComplete();
                        return e
                    }), (function(e) {
                        o.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        });
                        return e
                    }))
                }
            }
        },
        660977: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                isNotSupported: () => m,
                enable: () => y
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(744564),
                a = n(296602),
                u = n(602351),
                l = n(652591),
                c = n(2590),
                s = n(785915),
                f = n(473708);

            function d(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            d(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            d(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
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

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        _(e, t, n[t])
                    }))
                }
                return e
            }

            function E(e, t) {
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
            var v = function(e, t) {
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
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function u(o) {
                        return function(u) {
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
                            }([o, u])
                        }
                    }
                },
                b = new a.Z("AudioActionCreators");

            function g() {
                (0, i.openModalLazy)(p((function() {
                    var e, t;
                    return v(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(8056)]).then(n.bind(n, 908056))];
                            case 1:
                                e = i.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(t, h({
                                        source: "Unsupported Browser"
                                    }, e))
                                }]
                        }
                    }))
                })))
            }

            function m() {
                if (u.Z.isSupported()) return !1;
                (0, i.openModal)((function(e) {
                    return (0, r.jsx)(i.ConfirmModal, E(h({
                        header: f.Z.Messages.UNSUPPORTED_BROWSER,
                        confirmText: f.Z.Messages.DOWNLOAD_APP,
                        cancelText: f.Z.Messages.CANCEL,
                        onConfirm: g,
                        confirmButtonColor: i.Button.Colors.BRAND
                    }, e), {
                        children: (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: f.Z.Messages.UNSUPPORTED_BROWSER_DETAILS
                        })
                    }))
                }));
                return !0
            }

            function O(e) {
                l.default.track(c.rMx.PERMISSIONS_ACKED, {
                    type: "audio",
                    action: e
                })
            }

            function y() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (m()) return Promise.resolve(!1);
                l.default.track(c.rMx.PERMISSIONS_REQUESTED, {
                    type: "audio"
                });
                return u.Z.getMediaEngine().enable().then((function() {
                    o.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                        enabled: !0,
                        unmute: e
                    });
                    O(s.PQ.ACCEPTED)
                }), (function(e) {
                    switch (e) {
                        case c.ETv.NO_DEVICES_FOUND:
                            O(s.PQ.NO_DEVICES);
                            break;
                        case c.ETv.PERMISSION_DENIED:
                            O(s.PQ.DENIED);
                            break;
                        case c.ETv.PERMISSION_DISMISSED:
                            O(s.PQ.DISMISSED);
                            break;
                        default:
                            O(s.PQ.ERROR);
                            b.warn("unknown getUserMedia error: ".concat(e))
                    }
                })).then((function() {
                    return !0
                }))
            }
        },
        213276: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                i = n(667294),
                o = n(228721),
                a = n(652591),
                u = n(295652),
                l = n(2590);

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
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function f(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
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
            var p = function(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var i = s(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var h = function(e) {
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
                var t = _(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this, e))._loadId = null;
                    r._loadDate = r.props.root ? Date.now() : null;
                    r.getLocation = (0,
                        u.oH)((function(e, t, n, r) {
                        var i = {};
                        null != e && (i.page = e);
                        null != t && (i.section = t);
                        null != n && (i.object = n);
                        null != r && (i.objectType = r);
                        return i
                    }));
                    r.mergeLocation = (0, u.oH)((function(e, t) {
                        return function(e) {
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
                        }({}, e, t)
                    }));
                    r.getContext = (0, u.oH)((function(e, t, n) {
                        return {
                            location: e,
                            loadDate: t,
                            loadId: n
                        }
                    }));
                    null != e.loadId ? r._loadId = e.loadId : e.root && (r._loadId = (0, o.Z)());
                    return r
                }
                var i = n.prototype;
                i.renderProvider = function(e) {
                    var t, n, i = this.props,
                        o = i.section,
                        u = i.page,
                        l = i.object,
                        c = i.objectType,
                        s = i.children,
                        f = this.mergeLocation(e.location, this.getLocation(u, o, l, c)),
                        d = this.getContext(f, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                    return (0,
                        r.jsx)(a.AnalyticsContext.Provider, {
                        value: d,
                        children: s
                    })
                };
                i.render = function() {
                    var e = this,
                        t = this.props.context;
                    return null != t ? this.renderProvider(t) : (0, r.jsx)(a.AnalyticsContext.Consumer, {
                        children: function(t) {
                            return e.renderProvider(t)
                        }
                    })
                };
                return n
            }(i.Component);
            h.Pages = l.ZY5;
            h.Sections = l.jXE;
            h.Objects = l.qAy;
            h.ObjectTypes = l.Qqv;
            h.defaultProps = {
                root: !1
            }
        },
        919244: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                u = n(304548),
                l = n(473708),
                c = n(949095),
                s = n.n(c);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
            var v = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
                }(n, e);
                var t = E(n);

                function n() {
                    f(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    };
                    e.setRef = function(t) {
                        e._input = t
                    };
                    e.getLabelText = function() {
                        var t;
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? l.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : l.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? l.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : l.Z.Messages.TWO_FA_AUTH_CODE
                    };
                    e.getPlaceholder = function() {
                        return e.props.forceNoPlaceholder ? null : null !== (t = e.props.placeholder) && void 0 !== t ? t : e.getSupportedCodeTypes();
                        var t
                    };
                    e.errorPresent = function() {
                        return null != e.props.error && "" !== e.props.error || null != e.state.errorMessage && "" !== e.state.errorMessage
                    };
                    e.handleRetry = function() {
                        var t = e.props.onRetry;
                        null == t || t().then((function() {
                            return e.setState({
                                retrySuccess: !0
                            })
                        }))
                    };
                    e.handleSubmit = function(t) {
                        t.preventDefault();
                        var n = e.props,
                            r = n.handleSubmit,
                            i = n.onError;
                        r(e.state.code).catch((function(t) {
                            if (null != t.body) {
                                null == i || i(t.body);
                                t.body.message && e.setState({
                                    errorMessage: t.body.message
                                })
                            }
                        }))
                    };
                    e.handleCancel = function() {
                        var t = e.props,
                            n = t.onClose,
                            r = t.handleEarlyClose;
                        n();
                        null == r || r()
                    };
                    e.handleCodeChange = function(t) {
                        e.setState({
                            code: t
                        })
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e, t = this.props,
                        n = t.title,
                        o = t.actionText,
                        c = t.children,
                        f = t.error,
                        d = t.isLoading,
                        p = t.maxLength,
                        _ = t.transitionState,
                        h = t.helpMessage,
                        E = t.retryPrompt,
                        v = t.retrySuccessMessage,
                        b = this.state,
                        g = b.code,
                        m = b.errorMessage,
                        O = b.retrySuccess,
                        y = i.Children.count(c) > 0 ? (0, r.jsx)(u.Card, {
                            type: u.Card.Types.WARNING,
                            className: s().card,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: c
                            })
                        }) : null,
                        I = null != E ? (0, r.jsxs)(u.Text, {
                            className: a()(s().submitText, s().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(u.Clickable, {
                                className: a()(s().spacing, s().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(u.Anchor, {
                                    children: E
                                })
                            })]
                        }) : null,
                        S = O ? (0, r.jsx)(u.Card, {
                            type: u.Card.Types.SUCCESS,
                            className: s().card,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: v
                            })
                        }) : null;
                    return (0, r.jsx)(u.ModalRoot, {
                        transitionState: _,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(u.ModalContent, {
                                children: [null != h ? (0, r.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s().spacing,
                                    children: h
                                }) : null, y, S, (0, r.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: s().spacing,
                                    children: [(0, r.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != p ? p : 10,
                                        value: g,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s().error,
                                        children: null != f ? f : m
                                    }) : null, I]
                                })]
                            }), (0, r.jsxs)(u.ModalFooter, {
                                children: [(0, r.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: d || 0 === g.length,
                                    children: null != o ? o : l.Z.Messages.CONFIRM
                                }), (0, r.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    children: l.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(i.PureComponent);
            v.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const b = v
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

            function u(e, t) {
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
                    var n, r = a(e);
                    if (t) {
                        var i = a(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
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
                    t && l(e, t)
                }(n, e);
                var t = s(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return t.call(this, e, r, null != r ? o.Z.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.yXt.STATUS,
                        details: "".concat(r)
                    }) : o.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        579581: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => o
            });
            var r = n(667294),
                i = n(652591),
                o = function() {
                    return r.useContext(i.AnalyticsContext)
                }
        },
        320142: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(120415);

            function i(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function o(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function u(e) {
                            i(a, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            i(a, r, o, u, l, "throw", e)
                        }
                        u(void 0)
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
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
                        }([o, u])
                    }
                }
            };

            function u(e, t) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = o((function(e, t) {
                    var i, o, u, l;
                    return a(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(64572), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(45353), n.e(92465), n.e(73727), n.e(10675), n.e(52555), n.e(61953), n.e(84441), n.e(14990), n.e(33227), n.e(24501), n.e(93420)]).then(n.bind(n, 624501))];
                            case 1:
                                i = a.sent(), o = i.default;
                                if (null != (u = o(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) u(null);
                                else if (r.FB) window.open(e);
                                else {
                                    (l = document.createElement("a")).href = e;
                                    l.target = "_blank";
                                    l.rel = "noreferrer noopener";
                                    l.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
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
                e.HOME_PAGE_SHOP_TAB = "home page shop tab";
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
                e.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section";
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
                e.APP_ICON_EDITOR = "app icon editor";
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
                e.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home";
                e.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal";
                e.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark";
                e.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar"
            }(r || (r = {}));
            const i = r
        },
        396043: (e, t, n) => {
            "use strict";
            n.d(t, {
                v_: () => L,
                JS: () => P,
                hH: () => R,
                AB: () => U,
                ZP: () => j,
                oG: () => Z,
                kO: () => w,
                yw: () => D
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                a = n(382060),
                u = n(664625),
                l = n(61209),
                c = n(5544),
                s = n(27851),
                f = n(21372),
                d = n(567403),
                p = n(602351),
                _ = n(682776),
                h = n(491260),
                E = n(563367),
                v = n(715107),
                b = n(464187),
                g = n(407561),
                m = n(652591),
                O = n(563135),
                y = n(671723);
            var I = n(2590),
                S = n(897196);

            function T(e, t, n) {
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
                        T(e, t, n[t])
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
                var t = d.Z.getGuild(e);
                if (null == t) return null;
                var n, r = u.default.getId(),
                    i = f.ZP.getMember(e, r),
                    o = c.ZP.getChannels(e),
                    a = o[c.sH].length,
                    l = o[c.Zb].length,
                    p = g.Z.getVoiceStates(e);
                return {
                    guild_id: t.id,
                    guild_size_total: s.Z.getMemberCount(e),
                    guild_num_channels: a + l,
                    guild_num_text_channels: a,
                    guild_num_voice_channels: l,
                    guild_num_roles: N(t.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = _.Z.getGuildPermissions(t)) && void 0 !== n ? n : O.ZP.NONE),
                    guild_is_vip: t.hasFeature(I.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: N(p)
                }
            }

            function C(e, t) {
                return {
                    channel_static_route: t,
                    channel_hidden: !1
                }
            }

            function P(e) {
                if (null == e) return null;
                var t = l.Z.getChannel(e);
                return null == t ? null : L(t)
            }

            function L(e) {
                if (null == e) return null;
                var t, n = !1,
                    r = e.getGuildId();
                if (null != r) {
                    var i = function(e) {
                        if (null == e) return !1;
                        var t = e.permissionOverwrites[r];
                        return null != t && o.Z.has(t.deny, I.Plq.VIEW_CHANNEL)
                    };
                    n = a.Ec.has(e.type) && null != e.parent_id ? i(l.Z.getChannel(e.parent_id)) : i(e)
                }
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (t = _.Z.getChannelPermissions(e)) && void 0 !== t ? t : O.ZP.NONE),
                    channel_hidden: n
                }
            }

            function U(e) {
                if (null == e) return null;
                var t = l.Z.getChannel(e);
                if (null == t) return null;
                var n, r = p.Z.isVideoEnabled(),
                    i = E.Z.getMediaSessionId();
                return A({
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: i
                }, w(t.getGuildId(), t.id, r), {
                    game_name: null != (n = y.ZP.getCurrentGameForAnalytics()) ? n.name : null,
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
                    var r = !("location" in t) || t.location !== I.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in t ? t.guild_id : r ? b.Z.getGuildId() : null,
                        o = "channel_id" in t ? t.channel_id : r ? v.Z.getChannelId(i) : null,
                        a = l.Z.getChannel(o),
                        u = M(a, i),
                        c = A({}, t, R(u), null != i && null != o && (0, S.AB)(o) ? C(0, o) : L(a));
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
                i()(g.Z.getVoiceStates(e)).filter((function(e) {
                    return e.channelId === t
                })).filter((function(e) {
                    return e.userId !== u.default.getId()
                })).forEach((function(e) {
                    r.voice_state_count++;
                    (e.selfVideo || e.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function Z(e, t) {
                var n = {
                    custom_status_count: 0
                };
                i()(g.Z.getVoiceStates(e)).forEach((function(e) {
                    e.channelId === t && null != h.Z.findActivity(e.userId, (function(e) {
                        return e.type === I.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const j = {
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
                Vh: () => a,
                ub: () => u,
                bB: () => l
            });
            var r, i, o, a, u, l;
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
            }(u || (u = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(l || (l = {}))
        },
        470856: (e, t, n) => {
            "use strict";
            n.d(t, {
                K: () => r
            });
            var r;
            ! function(e) {
                e[e.STREAM = 0] = "STREAM";
                e[e.VIDEO = 1] = "VIDEO"
            }(r || (r = {}))
        },
        284278: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                i = (n(667294), n(944010)),
                o = n(895303),
                a = n(470856),
                u = n(473708);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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

            function s(e) {
                var t = e.type,
                    n = e.onConfirm,
                    s = c(e, ["type", "onConfirm"]),
                    f = t === a.K.STREAM ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
                    d = t === a.K.STREAM ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, r.jsx)(o.default, function(e) {
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
                }({
                    confirmText: u.Z.Messages.CONFIRM,
                    secondaryConfirmText: u.Z.Messages.DONT_ASK_AGAIN,
                    title: f,
                    cancelText: u.Z.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: function() {
                        i.ZP.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        });
                        n()
                    },
                    body: d
                }, s))
            }
        },
        950761: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(247250),
                u = n(566706),
                l = n(473708);

            function c(e) {
                var t = (0, i.e7)([u.Z], (function() {
                    return u.Z.getVoiceParticipantsHidden(e)
                }));
                return (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: l.Z.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: function() {
                        return a.Z.toggleVoiceParticipantsHidden(e, !t)
                    }
                })
            }
        },
        492692: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(379991),
                u = n(656645),
                l = n(664625),
                c = n(602351),
                s = n(2590),
                f = n(36256);

            function d(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    n = (0, i.e7)([l.default], (function() {
                        return l.default.getId()
                    })),
                    r = (0, i.e7)([c.Z], (function() {
                        return c.Z.supports(f.AN.DISABLE_VIDEO) && c.Z.isVideoEnabled()
                    })),
                    o = (0, i.e7)([c.Z], (function() {
                        return c.Z.isLocalVideoDisabled(n, t)
                    }), [n, t]),
                    a = function(e) {
                        var r = e ? s.ZUi.DISABLED : s.ZUi.MANUAL_ENABLED;
                        u.Z.setDisableLocalVideo(n, r, t)
                    },
                    d = null == e || e === n,
                    p = d && (r || o);
                return [p, o, a]
            }
            var p = n(284278),
                _ = n(470856),
                h = n(473708);

            function E(e, t) {
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

            function b(e) {
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

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
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

            function O(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    n = m(d(e, t), 3),
                    u = n[0],
                    l = n[1],
                    c = n[2],
                    s = (0, i.e7)([a.ZP], (function() {
                        return a.ZP.disableHideSelfStreamAndVideoConfirmationAlert
                    })),
                    E = function() {
                        if (s || l) return c(!l);
                        (0, o.openModal)((function(e) {
                            return (0, r.jsx)(p.Z, g(b({}, e), {
                                type: _.K.VIDEO,
                                onConfirm: function() {
                                    return c(!l)
                                }
                            }))
                        }))
                    };
                return u ? (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: h.Z.Messages.SHOW_SELF_VIDEO,
                    checked: !l,
                    action: E
                }) : null
            }
        },
        289150: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(504001),
                u = n(664625),
                l = n(602351),
                c = n(473708),
                s = n(352062),
                f = n.n(s);

            function d(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            d(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            d(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
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
            var E = function(e, t) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
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
                        }([o, u])
                    }
                }
            };

            function v(e) {
                var t = (0, o.useModalContext)(),
                    s = (0, i.e7)([l.Z], (function() {
                        return l.Z.isVideoEnabled()
                    })),
                    d = (0, i.e7)([u.default], (function() {
                        return u.default.getId() === e
                    })),
                    v = (0, a.Z)();
                return s && !v || !d ? null : (0, r.jsx)(o.MenuItem, {
                    id: "change-video-background",
                    label: (0, r.jsx)("div", {
                        className: f().item,
                        children: s ? c.Z.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : c.Z.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, o.openModalLazy)(p((function() {
                            var e, t;
                            return E(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(79249), n.e(17586), n.e(89975), n.e(10675), n.e(73679), n.e(96043), n.e(58905), n.e(52050)]).then(n.bind(n, 763361))];
                                    case 1:
                                        e = i.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, h(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        _(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({}, e), {
                                                videoEnabled: s
                                            }))
                                        }]
                                }
                            }))
                        })), {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                })
            }
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
        929653: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(496916),
                u = n(358969),
                l = n(536945),
                c = n(487685),
                s = n(382060),
                f = n(877475),
                d = n(179913),
                p = n(2590),
                _ = n(473708);

            function h(e) {
                var t = function(e) {
                    var t = (0, u.n2)(e.guild_id, e.id),
                        n = (0, i.e7)([d.ZP, f.Z, l.Z, c.Z], (function() {
                            if (e.isForumPost()) return d.ZP.isForumPostUnread(e.id);
                            if (e.type === p.d4z.GUILD_CATEGORY) {
                                var t = f.Z.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                if (t[e.id].some((function(e) {
                                        var t = e.channel;
                                        return (0, s.Em)(t.type) && d.ZP.hasUnread(t.id)
                                    }))) return !0;
                                var n = new Set(t[e.id].map((function(e) {
                                        return e.channel.id
                                    }))),
                                    r = l.Z.getThreadsForGuild(e.guild_id);
                                for (var i in r)
                                    if (n.has(i))
                                        for (var o in r[i])
                                            if (c.Z.hasJoined(o) && !c.Z.isMuted(o) && d.ZP.hasUnread(o)) return !0;
                                return !1
                            }
                            return d.ZP.hasUnread(e.id)
                        }), [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, r.jsx)(o.MenuItem, {
                    id: "mark-channel-read",
                    label: _.Z.Messages.MARK_AS_READ,
                    action: function() {
                        (0, a.U6)(e)
                    },
                    disabled: !t
                })
            }
        },
        380477: (e, t, n) => {
            "use strict";
            n.d(t, {
                k: () => b,
                ZP: () => g
            });
            var r = n(785893),
                i = (n(667294), n(730381)),
                o = n.n(i),
                a = n(202351),
                u = n(304548),
                l = n(786522),
                c = n(201459),
                s = n(70983),
                f = n(9430),
                d = n(773011),
                p = n(2590),
                _ = n(247530),
                h = n(473708);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
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
            var b = function() {
                return [{
                    value: _.Oe.MINUTES_15,
                    label: h.Z.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: _.Oe.HOURS_1,
                    label: h.Z.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: _.Oe.HOURS_3,
                    label: h.Z.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: _.Oe.HOURS_8,
                    label: h.Z.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: _.Oe.HOURS_24,
                    label: h.Z.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: _.Oe.ALWAYS,
                    label: h.Z.Messages.MUTE_DURATION_ALWAYS
                }]
            };

            function g(e, t) {
                var n = function(n) {
                        e.type === p.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        var r = function(e) {
                            return {
                                muted: !0,
                                mute_config: {
                                    selected_time_window: e,
                                    end_time: e > 0 ? o()().add(e, "second").toISOString() : null
                                }
                            }
                        }(n);
                        c.Z.updateChannelOverrideSettings(e.guild_id, e.id, r, t)
                    },
                    i = function(t) {
                        t && e.type === p.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        c.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
                            muted: t
                        })
                    },
                    _ = v((0, a.Wu)([f.Z], (function() {
                        return [f.Z.isChannelMuted(e.guild_id, e.id), f.Z.getChannelMuteConfig(e.guild_id, e.id)]
                    })), 2),
                    E = _[0],
                    g = _[1],
                    m = (0, s.U)(g),
                    O = (0, d.ZP)(e, !0),
                    y = h.Z.Messages.MUTE_CHANNEL_GENERIC,
                    I = h.Z.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case p.d4z.GUILD_CATEGORY:
                        y = h.Z.Messages.MUTE_CATEGORY;
                        I = h.Z.Messages.UNMUTE_CATEGORY;
                        break;
                    case p.d4z.GROUP_DM:
                        y = h.Z.Messages.MUTE_CONVERSATION;
                        I = h.Z.Messages.UNMUTE_CONVERSATION;
                        break;
                    case p.d4z.DM:
                        y = h.Z.Messages.MUTE_CHANNEL.format({
                            name: O
                        });
                        I = h.Z.Messages.UNMUTE_CHANNEL.format({
                            name: O
                        });
                        break;
                    default:
                        y = h.Z.Messages.MUTE_CHANNEL_GENERIC;
                        I = h.Z.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return E ? (0, r.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: I,
                    subtext: m,
                    action: function() {
                        return i(!1)
                    }
                }) : (0,
                    r.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: y,
                    action: function() {
                        return i(!0)
                    },
                    children: b().map((function(e) {
                        var t = e.value,
                            i = e.label;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(t),
                            label: i,
                            action: function() {
                                return n(t)
                            }
                        }, t)
                    }))
                })
            }
        },
        112897: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(968449),
                a = n(416644),
                u = n(691797);

            function l(e) {
                var t = e.id,
                    n = e.label,
                    l = e.onSuccess,
                    c = e.shiftId,
                    s = e.showIconFirst,
                    f = o.Sb.useSetting();
                if (__OVERLAY__ || !f || !u.wS) return null;
                var d = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(i.MenuItem, {
                    id: d,
                    label: n,
                    action: function(e) {
                        var n = null != c && e.shiftKey ? c : t;
                        (0, u.JG)(n);
                        null == l || l()
                    },
                    icon: a.Z,
                    showIconFirst: s
                }, d)
            }
        },
        963985: (e, t, n) => {
            "use strict";
            n.d(t, {
                kj: () => d,
                oC: () => p,
                UT: () => _,
                CM: () => h,
                xh: () => E,
                s3: () => v,
                _Z: () => b
            });
            var r = n(842227),
                i = n(418705),
                o = n(917019),
                a = n(61209),
                u = n(682776),
                l = n(419051),
                c = n(520453);

            function s() {
                var e = l.Z.getFavoriteChannels(),
                    t = 1;
                for (var n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function f(e) {
                for (var t in e) {
                    var n = e[t];
                    if (null != n) {
                        if (n.type !== i.Dd.CATEGORY) {
                            var r = a.Z.getChannel(t);
                            null != r && (r.isPrivate() || u.Z.can(c.Pl.VIEW_CHANNEL, r)) || delete e[t]
                        }
                    } else delete e[t]
                }
            }

            function d(e, t) {
                l.Z.isFavorite(e) || o.hW.updateAsync("favorites", (function(n) {
                    n.favoriteChannels[e] = i.aV.create({
                        nickname: "",
                        type: i.Dd.REFERENCE_ORIGINAL,
                        position: s(),
                        parentId: null != t ? t : "0"
                    });
                    f(n.favoriteChannels)
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function p(e) {
                var t = l.Z.getFavorite(e);
                null != t && o.hW.updateAsync("favorites", (function(n) {
                    delete n.favoriteChannels[e];
                    if (t.type === i.Dd.CATEGORY)
                        for (var r in n.favoriteChannels) n.favoriteChannels[r].parentId === e && (n.favoriteChannels[r].parentId = "0");
                    f(n.favoriteChannels)
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function _(e, t) {
                l.Z.isFavorite(e) && o.hW.updateAsync("favorites", (function(n) {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function h(e) {
                var t = r.default.fromTimestamp(Date.now());
                o.hW.updateAsync("favorites", (function(n) {
                    n.favoriteChannels[t] = i.aV.create({
                        nickname: e,
                        type: i.Dd.CATEGORY,
                        position: s(),
                        parentId: "0"
                    })
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function E(e) {
                p(e)
            }

            function v(e) {
                o.hW.updateAsync("favorites", (function(t) {
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var u = o.value;
                            null != u.position && (t.favoriteChannels[u.id].position = u.position);
                            if (void 0 !== u.parent_id) {
                                var l;
                                t.favoriteChannels[u.id].parentId = null !== (l = u.parent_id) && void 0 !== l ? l : "0"
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
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function b() {
                o.hW.updateAsync("favorites", (function(e) {
                    e.muted = !e.muted
                }), o.fy.INFREQUENT_USER_ACTION)
            }
        },
        13280: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(5544),
                u = n(419051),
                l = n(963985),
                c = n(790337),
                s = n(2590),
                f = n(473708);

            function d(e, t) {
                return e.type === s.d4z.GROUP_DM ? t ? f.Z.Messages.UNFAVORITE_GDM : f.Z.Messages.FAVORITE_GDM : e.type === s.d4z.DM ? t ? f.Z.Messages.UNFAVORITE_DM : f.Z.Messages.FAVORITE_DM : t ? f.Z.Messages.UNFAVORITE_CHANNEL : f.Z.Messages.FAVORITE_CHANNEL
            }

            function p(e) {
                var t = (0, i.e7)([u.Z], (function() {
                        return u.Z.isFavorite(e.id)
                    })),
                    n = function(e) {
                        var t = function(t) {
                                (0, l.kj)(e.id, t)
                            },
                            n = (0, i.e7)([a.ZP], (function() {
                                return a.ZP.getChannels(s.I_8)
                            }))[s.d4z.GUILD_CATEGORY].filter((function(e) {
                                return "null" !== e.channel.id
                            }));
                        return c.Z.useExperiment({
                            location: "58e21a_1"
                        }, {
                            autoTrackExposure: !1
                        }).favoritesEnabled ? 0 === n.length ? (0, r.jsx)(o.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !1),
                            action: function() {
                                return t(null)
                            }
                        }) : (0, r.jsx)(o.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !1),
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
                    f = function(e) {
                        return (0,
                            r.jsx)(o.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !0),
                            action: function() {
                                (0, l.oC)(e.id)
                            }
                        })
                    }(e);
                return __OVERLAY__ ? null : t ? f : n
            }
        },
        589822: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(464187),
                u = n(2590),
                l = n(473708);

            function c(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            c(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            c(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t) {
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
            var p = function(e, t) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
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
                        }([o, u])
                    }
                }
            };

            function _(e) {
                var t = (0, i.e7)([a.Z], (function() {
                    return a.Z.getGuildId()
                }));
                return __OVERLAY__ || t !== u.I_8 ? null : (0, r.jsx)(o.MenuItem, {
                    id: "set-channel-nickname",
                    label: l.Z.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, o.openModalLazy)(s((function() {
                            var t, i;
                            return p(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(77876)]).then(n.bind(n, 577876))];
                                    case 1:
                                        t = o.sent(), i = t.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(i, d(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        f(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({}, t), {
                                                channelId: e.id
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        372518: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var r = n(281110),
                i = n(744564),
                o = n(105783),
                a = n(671293),
                u = n(129586),
                l = n(858519),
                c = n(980204),
                s = n(854602),
                f = n(2590),
                d = n(473708);

            function p(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function _(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            p(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            p(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
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
                        }([o, u])
                    }
                }
            };

            function E(e, t, n) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = _((function(e, t, n) {
                    var r, i;
                    return h(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                a.trys.push([0, 2, , 3]);
                                return [4, e()];
                            case 1:
                                return [2, a.sent()];
                            case 2:
                                r = a.sent();
                                (null === (i = r.body) || void 0 === i ? void 0 : i.code) === f.evJ.NON_MODERATED_TAG_REQUIRED && o.Z.show({
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
            const b = {
                resort: function(e) {
                    i.Z.dispatch({
                        type: "RESORT_THREADS",
                        channelId: e
                    })
                },
                createForumTag: function(e, t) {
                    return r.ZP.post({
                        url: f.ANM.FORUM_TAGS(t),
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
                        url: f.ANM.FORUM_TAG(t, e.id),
                        body: {
                            name: e.name,
                            emoji_id: e.emojiId,
                            emoji_name: null == e.emojiId ? e.emojiName : void 0,
                            moderated: e.moderated
                        }
                    });
                    E((function() {
                        return n
                    }), d.Z.Messages.FORUM_TAG_EDIT_ERROR, d.Z.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                deleteForumTag: function(e, t) {
                    var n = r.ZP.delete({
                        url: f.ANM.FORUM_TAG(e, t)
                    });
                    E((function() {
                        return n
                    }), d.Z.Messages.FORUM_TAG_REMOVE_ERROR, d.Z.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                updateForumPostTags: function(e, t) {
                    return _((function() {
                        return h(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, a.Z.unarchiveThreadIfNecessary(e)];
                                case 1:
                                    n.sent();
                                    return [2, r.ZP.patch({
                                        url: f.ANM.CHANNEL(e),
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
                    (0, u.a8)((0, c.UP)(e), t, n)
                },
                markPostAsUnseen: function(e, t, n) {
                    (0, u.FL)((0, c.UP)(e), t, n)
                },
                flushSeenItems: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.cs.IMMEDIATE_WITH_COOLDOWN;
                    (0, u.rS)((0, c.UP)(e), t)
                },
                searchForumPosts: function(e, t, n, r) {
                    return _((function() {
                        var o;
                        return h(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    i.Z.dispatch({
                                        type: "FORUM_SEARCH_START",
                                        channelId: t
                                    });
                                    u.label = 1;
                                case 1:
                                    u.trys.push([1, 3, , 4]);
                                    return [4, a.Z.searchThreads(e, t, n, r)];
                                case 2:
                                    o = u.sent();
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
                                    u.sent();
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
                UP: () => d,
                rj: () => p,
                Ct: () => _,
                ZP: () => h
            });
            var r = n(129586),
                i = n(858519),
                o = n(854602),
                a = n(734901);

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
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

            function f(e) {
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
                    return l(this, n)
                }
            }

            function d(e) {
                return "".concat(i.AT.FORUM_CHANNEL, "_").concat(e)
            }

            function p(e, t, n) {
                (0, r.a8)(d(e), t, n)
            }

            function _(e, t, n) {
                (0, r.FL)(d(e), t, n)
            }
            var h = function(e) {
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
                var t = f(n);

                function n(e) {
                    var r, i = e.guildId,
                        u = e.channelId,
                        l = e.windowId,
                        c = e.isPaused;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    (r = t.call(this, {
                        windowId: l,
                        isPaused: c,
                        id: d(u)
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
                                    a = e.isForcedFlush,
                                    u = [],
                                    l = [],
                                    c = !0,
                                    s = !1,
                                    f = void 0;
                                try {
                                    for (var d, p = Object.keys(i)[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                        var _ = d.value,
                                            h = i[_].computeSeenTimeDestructive(a);
                                        if (h > 0) {
                                            u.push(_);
                                            l.push(h)
                                        }
                                    }
                                } catch (e) {
                                    s = !0;
                                    f = e
                                } finally {
                                    try {
                                        c || null == p.return || p.return()
                                    } finally {
                                        if (s) throw f
                                    }
                                }
                                0 !== u.length && (0, o.qs)({
                                    guildId: t,
                                    channelId: n,
                                    sessionId: r,
                                    postIds: u,
                                    additionalTimes: l
                                })
                            }(i)
                        }
                    };
                    r.guildId = i;
                    r.channelId = u;
                    r.sessionId = (0, a.WW)(u);
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
                aW: () => f,
                ws: () => i,
                tI: () => o,
                L9: () => d,
                no: () => p,
                ND: () => _,
                WC: () => E,
                z8: () => v,
                km: () => g,
                k0: () => m,
                af: () => O
            });
            var r, i, o, a, u = n(2590),
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
            var p = (s(a = {}, o.PRESET_DOCUMENTS, [{
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
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_30,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_15,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_30,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_15,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_1,
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
                    guildPremiumTier: u.Eu4.TIER_1,
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

            function h(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var E = [h(r.RESOLUTION_720), h(r.RESOLUTION_1080), h(r.RESOLUTION_1440), h(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                v = [h(r.RESOLUTION_720), h(r.RESOLUTION_1080), h(r.RESOLUTION_1440)],
                b = function(e) {
                    return "".concat(e, "p")
                },
                g = [h(r.RESOLUTION_480, (function() {
                    return b(r.RESOLUTION_480)
                })), h(r.RESOLUTION_720, (function() {
                    return b(r.RESOLUTION_720)
                })), h(r.RESOLUTION_1080, (function() {
                    return b(r.RESOLUTION_1080)
                })), h(r.RESOLUTION_1440, (function() {
                    return b(r.RESOLUTION_1440)
                })), h(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                m = [h(i.FPS_15), h(i.FPS_30), h(i.FPS_60)],
                O = [h(i.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_15
                    })
                })), h(i.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_30
                    })
                })), h(i.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_60
                    })
                }))]
        },
        773411: (e, t, n) => {
            "use strict";
            n.d(t, {
                N2: () => f,
                YM: () => d,
                Dx: () => p,
                jD: () => _,
                bO: () => h,
                Xp: () => E,
                fV: () => v
            });
            var r = n(202351),
                i = n(747820),
                o = n(260561),
                a = n(621696),
                u = n(5544),
                l = n(567403),
                c = n(2590);

            function s(e, t, n) {
                return t.getChannels(e)[u.sH].filter((function(t) {
                    var r = t.channel;
                    return !n.isChannelGated(e, r.id)
                })).length > 5
            }

            function f(e) {
                var t = (0, r.e7)([u.ZP, i.Z], (function() {
                    return null != e && s(e.id, u.ZP, i.Z)
                }));
                return !__OVERLAY__ && (!!t && (null != e && e.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function d(e) {
                if (__OVERLAY__) return !1;
                if (e === c.ME || e === c.I_8) return !1;
                if ((0, a.cn)()) return !1;
                var t = l.Z.getGuild(e);
                return null != t && (!!s(e, u.ZP, i.Z) && t.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
            }
            var p = (0, o.B)({
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
                _ = (0, o.B)({
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
                h = (0, o.B)({
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
                E = ((0, o.B)({
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
                a = n(682776),
                u = n(2590),
                l = {
                    needSubscriptionToAccess: !1,
                    isSubscriptionGated: !1
                };

            function c(e) {
                return (0, r.cj)([o.Z, i.Z, a.Z], (function() {
                    return s(e, o.Z, i.Z, a.Z)
                }), [e])
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.Z,
                    c = t.getChannel(e);
                if (null == c ? void 0 : c.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == c || !n.isChannelGated(c.guild_id, c.id)) return l;
                var s = c.isGuildVocal() ? !r.can(u.Plq.CONNECT, c) : !r.can(u.Plq.VIEW_CHANNEL, c);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: s
                }
            }
        },
        15970: (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => i
            });
            var r = n(2590);

            function i(e, t, n, i) {
                var o = null != n ? n : t;
                return null != o && e.can(r.Plq.CREATE_INSTANT_INVITE, o) || null != t && null != t.vanityURLCode || null != (null == i ? void 0 : i.invite_code)
            }
        },
        562205: (e, t, n) => {
            "use strict";
            n.d(t, {
                e4: () => f,
                qR: () => p,
                hi: () => v,
                Xy: () => _,
                gN: () => h,
                r_: () => E
            });
            var r, i = n(281110),
                o = n(744564),
                a = n(84441);
            ! function(e) {
                e[e.UNSPECIFIED = 0] = "UNSPECIFIED";
                e[e.PENDING = 1] = "PENDING";
                e[e.ACCEPTED = 2] = "ACCEPTED";
                e[e.REJECTED = 3] = "REJECTED"
            }(r || (r = {}));
            var u = n(2590);

            function l(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            l(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            l(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var s = function(e, t) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
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
                        }([o, u])
                    }
                }
            };

            function f(e) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = c((function(e) {
                    return s(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, i.ZP.put({
                                    url: u.ANM.CHANNEL_RECIPIENT_CONSENT(e),
                                    body: {
                                        consent_status: r.ACCEPTED
                                    }
                                })];
                            case 1:
                                t.sent();
                                o.Z.dispatch({
                                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                                    channelId: e
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e) {
                return i.ZP.put({
                    url: u.ANM.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.UNSPECIFIED
                    }
                })
            }

            function _(e) {
                return i.ZP.put({
                    url: u.ANM.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.PENDING
                    }
                })
            }

            function h(e) {
                return i.ZP.delete({
                    url: u.ANM.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function E(e) {
                return i.ZP.put({
                    url: u.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function v() {
                a.Z.getLocationMetadata()
            }
        },
        979197: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r.Z
            });
            var r = n(63509)
        },
        625797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(120415),
                i = n(310126),
                o = n(63509);

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = o.Z.getWindow(e);
                null == n || n.closed || (r.FB ? i.ZP.focus(e, t) : n.focus())
            }
        },
        239620: (e, t, n) => {
            "use strict";
            n.d(t, {
                mv: () => o,
                xJ: () => a
            });
            var r, i = n(120415),
                o = null;

            function a() {
                return (0, i.Dt)(), null
            }! function(e) {
                e.REMINDER = "reminder";
                e.TOP_MESSAGE_PUSH = "top_messages_push";
                e.TRENDING_CONTENT_PUSH = "trending_content_push"
            }(r || (r = {}))
        },
        956206: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2023-03_april_fools",
                label: "April Fools 2023",
                defaultConfig: {
                    allowAprilFoolsSoundpack: !1
                },
                treatments: [{
                    id: 1,
                    label: "April Fools 2023",
                    config: {
                        allowAprilFoolsSoundpack: !0
                    }
                }]
            })
        },
        292832: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => r,
                Q: () => o
            });
            var r, i = n(473708);
            ! function(e) {
                e.CLASSIC = "classic";
                e.DETUNE = "detune"
            }(r || (r = {}));

            function o() {
                return [{
                    value: r.CLASSIC,
                    label: i.Z.Messages.SOUNDPACK_CLASSIC_LABEL
                }, {
                    value: r.DETUNE,
                    label: i.Z.Messages.SOUNDPACK_DETUNE_LABEL
                }]
            }
        },
        669754: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(202351),
                i = n(744564),
                o = n(956206),
                a = n(292832);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function c(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var f = function(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var p = {
                soundpack: a.Y.CLASSIC
            };
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
                    t && s(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    var t = this;
                    o.Z.subscribe({
                        location: "1"
                    }, (function() {
                        return t.emitChange()
                    }));
                    null != e && (p = e)
                };
                r.getState = function() {
                    return p
                };
                r.getSoundpack = function() {
                    var e;
                    return o.Z.getCurrentConfig({
                        location: "37bac2_1"
                    }, {
                        autoTrackExposure: !1
                    }).allowAprilFoolsSoundpack && (e = p.soundpack, Object.values(a.Y).includes(e)) ? p.soundpack : a.Y.CLASSIC
                };
                return n
            }(r.ZP.PersistedStore);
            _.displayName = "SoundpackStore";
            _.persistKey = "SoundpackStore";
            const h = new _(i.Z, {
                SET_SOUNDPACK: function(e) {
                    var t = e.soundpack;
                    p = {
                        soundpack: t
                    }
                }
            })
        },
        499219: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(202351),
                i = n(61209),
                o = n(715107);

            function a() {
                return (0, r.e7)([o.Z, i.Z], (function() {
                    var e = o.Z.getVoiceChannelId();
                    if (null != e) {
                        var t = i.Z.getChannel(e);
                        if (null == t ? void 0 : t.isGuildStageVoice()) return t
                    }
                    return null
                }))
            }
        },
        575351: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(567403),
                u = n(473903),
                l = n(407561),
                c = n(771575),
                s = n(162723),
                f = n(933022),
                d = n(664625),
                p = n(715107),
                _ = n(525261);
            var h = n(499219),
                E = n(473708);

            function v(e) {
                var t, n = (0, h.Z)(),
                    v = null == n ? void 0 : n.id,
                    b = null == n ? void 0 : n.guild_id,
                    g = (0, i.e7)([a.Z], (function() {
                        return a.Z.getGuild(b)
                    }), [b]),
                    m = (0, i.e7)([l.Z], (function() {
                        return null != v ? l.Z.getVoiceStateForChannel(v, e.id) : null
                    }), [v, e.id]),
                    O = (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
                    y = function() {
                        var e = (0, i.e7)([p.Z], (function() {
                                return p.Z.getVoiceChannelId()
                            })),
                            t = (0, i.e7)([d.default], (function() {
                                return d.default.getId()
                            }));
                        return (0,
                            _.ZP)(t, e) === _.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                    }(),
                    I = (0, i.e7)([f.ZP], (function() {
                        return f.ZP.getPermissionsForUser(e.id, v)
                    }), [v, e.id]),
                    S = (0, s.B)(v);
                if (null == n || null == g || null == m) return null;
                if (I.speaker) return null;
                var T = function() {
                    O ? (0, c.RK)(n, !1) : (0, c._0)(n, e.id)
                };
                return S ? (0, r.jsx)(o.MenuItem, {
                    id: "invite-speaker",
                    label: O ? E.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : E.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: T
                }) : y && O ? (0, r.jsx)(o.MenuItem, {
                    id: "invite-speaker",
                    label: E.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: T
                }) : null
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
                a = n(202351),
                u = n(744564),
                l = n(656793),
                c = n(382060),
                s = n(61209),
                f = n(567403),
                d = n(179913),
                p = n(715107),
                _ = n(536945),
                h = n(487685),
                E = n(102921);

            function v(e) {
                if (null == e.threadMetadata) return 0;
                var t = 60 * e.threadMetadata.autoArchiveDuration * 1e3;
                return function(e) {
                    if (null == e.threadMetadata) return 0;
                    var t, n = null !== (t = d.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
                        r = E.Z.extractTimestamp(n),
                        i = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, i)
                }(e) + t
            }
            var b = n(897196);

            function g(e, t) {
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

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function y(e) {
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

            function S(e, t) {
                return !t || "object" !== A(t) && "function" != typeof t ? function(e) {
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
            var A = function(e) {
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
                    var n, r = O(e);
                    if (t) {
                        var i = O(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }
            var R = {},
                C = {},
                P = {},
                L = {},
                U = {},
                M = {},
                D = null,
                w = {};

            function Z() {
                R = {};
                U = {};
                C = {};
                P = {};
                L = {};
                D = p.Z.getChannelId();
                for (var e in w) clearTimeout(w[e]);
                w = {};
                _.Z.forEachGuild((function(e) {
                    G(e)
                }));
                k()
            }

            function j(e) {
                delete R[e];
                delete U[e];
                delete C[e];
                delete P[e];
                delete L[e];
                G(e);
                for (var t in P[e]) F(e, t)
            }

            function G(e) {
                var t = _.Z.getThreadsForGuild(e);
                for (var n in t)
                    for (var r in t[n]) {
                        J(r);
                        var i = s.Z.getChannel(r);
                        if (null != i) {
                            var o = h.Z.joinTimestamp(r);
                            if (null != o) {
                                var a = {
                                        channel: i,
                                        joinTimestamp: o.getTime()
                                    },
                                    u = z(i),
                                    l = u.isUnread,
                                    c = u.isRelevant,
                                    f = u.isTimedRelevant;
                                X(R, i, a, !1);
                                X(U, i, c ? a : null, !1);
                                X(C, i, l ? a : null, !1);
                                f && Q(i, !0)
                            } else {
                                X(P, i, i, !1);
                                var p = d.ZP.isForumPostUnread(i.id);
                                X(L, i, p ? i : null, !1)
                            }
                        }
                    }
            }

            function k() {
                M = {};
                for (var e in P)
                    for (var t in P[e]) F(e, t)
            }

            function x(e) {
                var t = s.Z.getBasicChannel(e);
                null != t && c.uC.has(t.type) && F(t.guild_id, t.id)
            }

            function F(e, t) {
                var n = s.Z.getChannel(t);
                if (null != n && n.isForumLikeChannel()) {
                    null == M[e] && (M[e] = {});
                    M[e][t] = 0;
                    if (null != P[e] && null != P[e][t]) {
                        var r = f.Z.getGuild(e);
                        if (null != r) {
                            var i = d.ZP.getTrackedAckMessageId(t);
                            if (null == i) {
                                var a = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? a = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (a = new Date(r.joinedAt).getTime()));
                                i = o.default.fromTimestamp(a)
                            }
                            for (var u in P[e][t]) t === D ? d.ZP.isNewForumThread(u, t, r) && M[e][t]++ : o.default.compare(u, i) > 0 && !d.ZP.hasOpenedThread(u) && M[e][t]++
                        }
                    }
                }
            }

            function H(e, t, n) {
                if (null == t) return !1;
                var r = s.Z.getChannel(n),
                    i = h.Z.joinTimestamp(n);
                if (null != r && _.Z.isActive(e, t, n)) {
                    if (null != i) {
                        var o = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            a = z(r),
                            u = a.isUnread,
                            l = a.isRelevant,
                            c = a.isTimedRelevant;
                        X(R, r, o, !0);
                        X(U, r, l ? o : null, !0);
                        X(C, r, u ? o : null, !0);
                        X(P, r, null, !0);
                        X(L, r, null, !0);
                        Q(r, c)
                    } else {
                        var f = d.ZP.isForumPostUnread(r.id);
                        X(R, r, null, !0);
                        X(C, r, null, !0);
                        X(U, r, null, !0);
                        X(P, r, r, !0);
                        X(L, r, f ? r : null, !0);
                        J(r.id)
                    }
                    F(e, t)
                } else {
                    $(R, e, t, n);
                    $(U, e, t, n);
                    $(C, e, t, n);
                    $(P, e, t, n);
                    $(L, e, t, n);
                    J(n);
                    F(e, t)
                }
            }

            function B(e) {
                return H(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function V(e, t) {
                if (null == t) return !1;
                var n = R[e],
                    r = null == n ? null : n[t];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var o = P[e],
                    a = null == o ? null : o[t];
                if (null != a)
                    for (var u in a)
                        if (a[u].isNSFW()) return !0;
                return !1
            }

            function Y(e) {
                var t = s.Z.getChannel(e.id);
                return !(null == t || !_.Z.isActive(e.guildId, t.parent_id, e.id)) && H(t.guild_id, t.parent_id, t.id)
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
                            F(n, t.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (ee(R, t)) {
                        var o = z(t),
                            a = o.isUnread,
                            u = o.isRelevant;
                        Q(t, o.isTimedRelevant);
                        var l = ee(C, t),
                            f = ee(U, t);
                        if (a === l && u === f) return !1;
                        var p = R[n][r][t.id],
                            _ = u ? p : null;
                        X(C, t, a ? p : null, !0);
                        X(U, t, _, !0);
                        F(n, r)
                    } else {
                        var h = ee(L, t),
                            E = d.ZP.isForumPostUnread(t.id);
                        if (E === h) return !1;
                        X(L, t, E ? t : null, !0)
                    }
                }
            }

            function K() {
                C = {};
                U = {};
                for (var e in R)
                    for (var t in R[e])
                        for (var n in R[e][t]) {
                            var r = R[e][t][n],
                                i = z(r.channel),
                                o = i.isUnread,
                                a = i.isRelevant,
                                u = i.isTimedRelevant;
                            o && X(C, r.channel, r, !1);
                            a && X(U, r.channel, r, !1);
                            Q(r.channel, u)
                        }
                L = {};
                for (var l in P)
                    for (var c in P[l])
                        for (var s in P[l][c]) {
                            var f = P[l][c][s];
                            d.ZP.isForumPostUnread(s) && X(L, f, f, !1)
                        }
                k()
            }

            function q() {
                var e = D;
                if ((D = p.Z.getChannelId()) === e) return !1;
                x(e);
                x(D)
            }

            function z(e) {
                var t = d.ZP.getMentionCount(e.id) > 0,
                    n = d.ZP.hasRelevantUnread(e) && (!h.Z.isMuted(e.id) || t) || (0, l.c)() && t,
                    r = e.hasFlag(b.zZ.PINNED),
                    i = e.isActiveThread(),
                    o = i && v(e) > Date.now();
                return {
                    isUnread: (i || r) && n,
                    isRelevant: o || r || n,
                    isTimedRelevant: o
                }
            }

            function Q(e, t) {
                J(e.id);
                t && function(e) {
                    w[e.id] = setTimeout((function() {
                        var t = s.Z.getChannel(e.id);
                        null != t && u.Z.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        })
                    }), v(e) - Date.now() + 1)
                }(e)
            }

            function J(e) {
                if (e in w) {
                    clearTimeout(w[e]);
                    delete w[e]
                }
            }

            function X(e, t, n, r) {
                var o = t.guild_id,
                    a = t.parent_id,
                    u = t.id;
                if (null != o && null != a && null != u) {
                    o in e || (e[o] = {});
                    a in e[o] || (e[o][a] = {});
                    r && (e[o] = I(y({}, e[o]), m({}, a, y({}, e[o][a]))));
                    if (null === n) {
                        delete e[o][a][u];
                        i().isEmpty(e[o][a]) && delete e[o][a]
                    } else e[o][a][u] = n
                }
            }

            function $(e, t, n, r) {
                if (null != t && null != n && null != r && te(e, t, n, r)) {
                    e[t] = I(y({}, e[t]), m({}, n, y({}, e[t][n])));
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
                ae = {},
                ue = function(e) {
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
                    var t = N(n);

                    function n() {
                        g(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(_.Z, s.Z, h.Z, d.ZP);
                        this.syncWith([p.Z], q)
                    };
                    r.hasActiveJoinedUnreadThreads = function(e, t) {
                        return e in C && t in C[e]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in P && null !== (n = P[e][t]) && void 0 !== n ? n : oe
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
                        return null !== (t = C[e]) && void 0 !== t ? t : ne
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
                        return null !== (t = P[e]) && void 0 !== t ? t : re
                    };
                    r.getActiveUnjoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = L[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveUnjoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getNewThreadCountsForGuild = function(e) {
                        var t;
                        return null !== (t = M[e]) && void 0 !== t ? t : ae
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
                        var n, r, o, a;
                        return i().size(null !== (o = null === (n = R[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : {}) + i().size(null !== (a = null === (r = P[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== a ? a : {})
                    };
                    return n
                }(a.ZP.Store);
            ue.displayName = "ActiveJoinedThreadsStore";
            const le = new ue(u.Z, {
                CONNECTION_OPEN: Z,
                OVERLAY_INITIALIZE: Z,
                THREAD_LIST_SYNC: function(e) {
                    return j(e.guildId)
                },
                LOAD_THREADS_SUCCESS: Z,
                LOAD_ARCHIVED_THREADS_SUCCESS: Z,
                SEARCH_FINISH: Z,
                GUILD_CREATE: function(e) {
                    return j(e.guild.id)
                },
                GUILD_DELETE: Z,
                CURRENT_USER_UPDATE: Z,
                THREAD_CREATE: B,
                THREAD_UPDATE: B,
                THREAD_DELETE: B,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = t[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var u = o.value;
                            if (u.isNSFW() !== V(u.guild_id, u.parent_id)) {
                                Z();
                                return
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
                        if (t.guild_id in C && t.parent_id in C[t.guild_id]) {
                            delete C[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in U && t.parent_id in U[t.guild_id]) {
                            Object.keys(U[t.guild_id][t.parent_id]).forEach(J);
                            delete U[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in P && t.parent_id in P[t.guild_id]) {
                            delete P[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in L && t.parent_id in L[t.guild_id]) {
                            delete L[t.guild_id][t.parent_id];
                            n = !0
                        }
                        n && F(t.guild_id, t.parent_id)
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
                    q()
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
                tM: () => E,
                NE: () => v,
                ki: () => b,
                Xu: () => g,
                cD: () => m,
                Ek: () => y,
                JQ: () => I,
                C7: () => S,
                tc: () => N,
                kn: () => R,
                $R: () => C,
                RG: () => P,
                xl: () => L,
                Xb: () => M,
                Y: () => w,
                Gu: () => Z
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                a = n(202351),
                u = n(249139),
                l = n(774930),
                c = n(791707),
                s = n(382060),
                f = n(664625),
                d = n(61209),
                p = n(682776),
                _ = n(18882),
                h = n(2590),
                E = (0, u.Z)({
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
                return O((0, a.e7)([p.Z], (function() {
                    var t = e.isForumLikeChannel() ? h.Plq.SEND_MESSAGES : o.Z.combine(h.Plq.CREATE_PUBLIC_THREADS, h.Plq.READ_MESSAGE_HISTORY);
                    return p.Z.can(t, e)
                }), [e]), e, t)
            }

            function b(e, t) {
                var n = e.isForumLikeChannel() ? h.Plq.SEND_MESSAGES : o.Z.combine(h.Plq.CREATE_PUBLIC_THREADS, h.Plq.READ_MESSAGE_HISTORY);
                return O(p.Z.can(n, e), e, t)
            }

            function g(e) {
                var t = (0, a.e7)([p.Z], (function() {
                    return p.Z.can(o.Z.combine(h.Plq.CREATE_PRIVATE_THREADS), e)
                }), [e]);
                return e.type === h.d4z.GUILD_TEXT && O(t, e)
            }

            function m(e) {
                var t = v(e),
                    n = g(e);
                return t || n
            }

            function O(e, t, n) {
                if (__OVERLAY__) return !1;
                if (!e) return !1;
                if (!s.uC.has(t.type)) return !1;
                if (null != n) {
                    if (n.hasFlag(h.iLy.HAS_THREAD)) return !1;
                    if ((0, c.Z)(n)) return !1
                }
                return !0
            }

            function y(e) {
                var t = (0, a.e7)([d.Z], (function() {
                    return d.Z.getChannel(e.id)
                }), [e]);
                return function(e, t, n) {
                    return !!t.hasFlag(h.iLy.HAS_THREAD) && (null != n && !!e)
                }((0, a.e7)([p.Z], (function() {
                    return p.Z.can(h.Plq.VIEW_CHANNEL, t)
                }), [t]), e, t)
            }

            function I(e) {
                return (0, a.cj)([_.Z, p.Z], (function() {
                    var t = _.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        n = _.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        r = _.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        o = i()(n).some((function(e) {
                            return p.Z.can(h.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        a = i()(t).some((function(e) {
                            return !(e.channel.id in n) && p.Z.can(h.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        u = i()(r).some((function(e) {
                            return p.Z.can(h.Plq.VIEW_CHANNEL, e)
                        }));
                    return {
                        hasActiveThreads: o || a || u,
                        hasMoreActiveThreads: u || a
                    }
                }))
            }

            function S(e) {
                var t = (0, a.e7)([d.Z], (function() {
                        return d.Z.getChannel(null == e ? void 0 : e.parent_id)
                    })),
                    n = (0, a.e7)([p.Z], (function() {
                        return null != t && p.Z.can(h.Plq.MANAGE_THREADS, t)
                    }), [t]),
                    r = (0, a.e7)([f.default], (function() {
                        return f.default.getId()
                    }));
                return null != e && null != t && (!!e.isThread() && (!!n || !e.isLockedThread() && e.ownerId === r))
            }

            function T(e, t) {
                return null != e && t.can(h.Plq.SEND_MESSAGES_IN_THREADS, e)
            }

            function A(e, t, n) {
                var r;
                return !(null == e || !e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
            }

            function N(e) {
                var t = (0, a.e7)([p.Z], (function() {
                        return T(e, p.Z)
                    })),
                    n = M(e);
                return A(e, t, n)
            }

            function R(e) {
                return A(e, T(e, p.Z), D(e))
            }

            function C(e) {
                var t, n = (0, a.e7)([p.Z], (function() {
                    return null != e && p.Z.can(h.Plq.SEND_MESSAGES_IN_THREADS, e)
                }));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) && n)
            }

            function P(e) {
                var t;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) && p.Z.can(h.Plq.SEND_MESSAGES_IN_THREADS, e))
            }

            function L(e) {
                var t = p.Z.can(h.Plq.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !t
            }

            function U(e, t) {
                return null != e && t.can(h.Plq.MANAGE_THREADS, e)
            }

            function M(e) {
                return (0, a.e7)([p.Z], (function() {
                    return U(e, p.Z)
                }))
            }

            function D(e) {
                return U(e, p.Z)
            }

            function w(e) {
                var t = (0, l.Z)(),
                    n = (0, a.e7)([p.Z], (function() {
                        return p.Z.can(h.Plq.CONNECT, e)
                    })),
                    r = C(e),
                    i = E.useExperiment({
                        guildId: e.guild_id,
                        location: "e791ea_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return !t && e.isVocalThread() && i && n && r
            }

            function Z(e) {
                var t = M(e);
                return e.isLockedThread() && !t
            }
        },
        550865: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => x
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(971402),
                a = n(343639),
                u = n(567678),
                l = n(73904),
                c = n(82055),
                s = n(153686),
                f = n(950761),
                d = n(492692),
                p = n(289150),
                _ = n(929653),
                h = n(380477),
                E = n(112897),
                v = n(13280),
                b = n(589822),
                g = n(202351),
                m = n(562205),
                O = n(473903),
                y = n(473708);
            var I = n(575351),
                S = n(662851),
                T = n(343315),
                A = n(171384),
                N = n(699050),
                R = n(836448),
                C = n(441738),
                P = n(761953),
                L = n(61209);
            var U = n(982348),
                M = n(578142),
                D = n(39082),
                w = n(598955),
                Z = n(536130),
                j = n(234617),
                G = n(394212),
                k = n(2590);
            const x = (0, u.Z)((0, a.Z)((function(e) {
                var t = e.user,
                    n = e.channel,
                    a = e.channelSelected,
                    u = void 0 !== a && a,
                    s = e.showMute,
                    k = void 0 === s || s,
                    x = e.showMediaItems,
                    F = void 0 !== x && x,
                    H = e.showChannelCallItems,
                    B = void 0 !== H && H,
                    V = e.showModalItems,
                    Y = void 0 === V || V,
                    W = e.targetIsUser,
                    K = void 0 !== W && W,
                    q = e.context,
                    z = e.onSelect,
                    Q = e.onHeightUpdate,
                    J = (0, Z.Z)(t.id, null),
                    X = (0, C.Z)(t, q),
                    $ = (0, A.Z)({
                        user: t,
                        context: q
                    }),
                    ee = (0, T.Z)(t),
                    te = (0, G.Z)(t.id),
                    ne = function(e, t) {
                        var n = L.Z.getChannel(e);
                        return null == n || n.isMultiUserDM() ? null : (0, r.jsx)(i.MenuItem, {
                            id: "close-dm",
                            label: y.Z.Messages.CLOSE_DM,
                            action: function() {
                                return P.Z.closePrivateChannel(e, t)
                            }
                        })
                    }(n.id, u),
                    re = (0, M.Z)(t),
                    ie = (0, c.Z)(null, t),
                    oe = (0, j.Z)(t.id),
                    ae = (0, D.Z)(t.id, n.id),
                    ue = (0, S.Z)(t),
                    le = (0, w.Z)(t.id),
                    ce = (0, U.Z)(t.id, n.id),
                    se = (0, R.Z)(t),
                    fe = (0, h.ZP)(n),
                    de = (0, E.Z)({
                        id: t.id,
                        label: y.Z.Messages.COPY_ID_USER
                    }),
                    pe = (0, E.Z)({
                        id: n.id,
                        label: y.Z.Messages.COPY_ID_CHANNEL
                    }),
                    _e = (0, _.Z)(n),
                    he = (0, d.Z)(t.id),
                    Ee = (0, f.Z)(n.id),
                    ve = (0, I.Z)(t),
                    be = (0, p.Z)(t.id),
                    ge = (0, N.Z)({
                        commandType: l.yU.USER,
                        commandTargetId: t.id,
                        channel: n,
                        guildId: void 0,
                        location: "DMUserContextMenu",
                        onShow: Q
                    }),
                    me = (0, v.Z)(n),
                    Oe = (0, b.Z)(n),
                    ye = function(e) {
                        var t = (0, g.e7)([O.default], (function() {
                            return O.default.getCurrentUser()
                        }));
                        return !0 !== (null == t ? void 0 : t.isStaff()) ? null : (0, r.jsxs)(r.Fragment, {
                            children: [!e.isMessageRequest && (0, r.jsx)(i.MenuItem, {
                                id: "mark-as-message-request",
                                label: y.Z.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_MOVE_TO,
                                action: function() {
                                    return (0, m.Xy)(e.id)
                                }
                            }), (0, r.jsx)(i.MenuItem, {
                                id: "clear-message-request",
                                label: y.Z.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_CLEAR,
                                action: function() {
                                    return (0, m.qR)(e.id)
                                }
                            })]
                        })
                    }(n),
                    Ie = n.isManaged(),
                    Se = t.isNonUserBot();
                return (0, r.jsxs)(i.Menu, {
                    navId: "user-context",
                    onClose: o.Zy,
                    "aria-label": y.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: z,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: !Se && _e
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: ye
                    }), (0, r.jsxs)(i.MenuGroup, {
                        children: [me, Oe]
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: !Se && ve
                    }), (0, r.jsxs)(i.MenuGroup, {
                        children: [!Se && (0, r.jsxs)(r.Fragment, {
                            children: [Y && J, X, !Ie && ae, Y && $, Y && ee, te]
                        }), ne]
                    }), !Se && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(i.MenuGroup, {
                            children: F && oe
                        }), (0, r.jsx)(i.MenuGroup, {
                            children: Y && ie
                        }), (0, r.jsxs)(i.MenuGroup, {
                            children: [F && le, F && ce, ge, Y && re, ue, Y && se, F && be]
                        }), (0, r.jsx)(i.MenuGroup, {
                            children: k && fe
                        }), B && (0, r.jsxs)(i.MenuGroup, {
                            children: [Ee, he]
                        })]
                    }), (0, r.jsxs)(i.MenuGroup, {
                        children: [de, !K && pe]
                    })]
                })
            }), {
                object: k.qAy.CONTEXT_MENU
            }), [s.Z.CONTEXT_MENU, s.Z.DM_USER_MENU])
        },
        699050: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(785893),
                i = n(667294),
                o = n(441143),
                a = n.n(o),
                u = n(202351),
                l = n(304548),
                c = n(219217),
                s = n(272200),
                f = n(248046),
                d = n(698847),
                p = n(242922),
                _ = n(767846),
                h = n.n(_);
            const E = function() {
                return (0, r.jsx)("div", {
                    className: h().loadingWrapper,
                    children: (0, r.jsx)(l.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
            };
            var v = n(567403),
                b = n(127624),
                g = n(473708),
                m = n(929945),
                O = n.n(m);
            const y = function(e) {
                var t = e.commandType,
                    n = e.commandTargetId,
                    o = e.channel,
                    _ = e.guildId,
                    h = e.onShow,
                    m = e.location,
                    y = i.useRef(!1),
                    I = i.useRef(0),
                    S = (0, u.e7)([v.Z], (function() {
                        return v.Z.getGuild(null != _ ? _ : o.guild_id)
                    })),
                    T = (0, c.o)(o, {
                        commandType: t
                    }, {
                        location: m,
                        placeholderCount: b.Mn,
                        limit: b.lr
                    }),
                    A = T.hasMoreAfter,
                    N = T.scrollDown,
                    R = T.sectionDescriptors,
                    C = T.commands,
                    P = T.placeholders,
                    L = i.useMemo((function() {
                        var e = C.concat(P),
                            t = {};
                        R.forEach((function(e) {
                            t[e.id] = e
                        }));
                        return {
                            visibleCommands: e,
                            sections: t
                        }
                    }), [C, R, P]),
                    U = L.visibleCommands,
                    M = L.sections,
                    D = i.useMemo((function() {
                        return (0, f.nT)(o, t, U.length, null == S ? void 0 : S.applicationCommandCounts)
                    }), [o, t, null == S ? void 0 : S.applicationCommandCounts, U.length]);
                i.useEffect((function() {
                    if (D !== y.current) {
                        D && (null == h || h());
                        y.current = D
                    }
                }), [D, h]);
                i.useEffect((function() {
                    w(I.current)
                }), [U]);
                var w = i.useCallback((function(e) {
                        A && e + 500 > 34 * U.length - 40 && N();
                        I.current = e
                    }), [A, N, U]),
                    Z = i.useCallback((function(e) {
                        if (e.inputType === s.iw.PLACEHOLDER) return (0, r.jsx)(l.MenuItem, {
                            id: "menu-command-".concat(e.id),
                            render: function() {
                                return (0, r.jsx)(E, {})
                            }
                        }, "menu-command-".concat(e.id));
                        a()(null != o, "menu item should not show if channel is null");
                        var t = M[e.applicationId],
                            i = null != t ? (0, p.ky)(t) : void 0;
                        return (0, r.jsx)(l.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: function() {
                                return null != i ? (0, r.jsx)(i, {
                                    channel: o,
                                    section: t,
                                    width: 18,
                                    height: 18,
                                    selectable: !1
                                }) : null
                            },
                            action: function() {
                                (0, d.Z)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: o,
                                        guild: S
                                    },
                                    commandTargetId: n
                                })
                            }
                        }, e.id)
                    }), [o, S, n, M]);
                return D && (0, r.jsx)(l.MenuItem, {
                    id: "apps",
                    label: g.Z.Messages.APPS,
                    onChildrenScroll: w,
                    childRowHeight: 34,
                    listClassName: O().list,
                    disabled: 0 === U.length,
                    children: U.map(Z)
                })
            }
        },
        982348: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(247250),
                u = n(566706),
                l = n(407561),
                c = n(2590),
                s = n(473708);

            function f(e, t) {
                var n = (0, i.e7)([u.Z], (function() {
                    return e === u.Z.getSelectedParticipantId(t)
                }), [t, e]);
                return (0, i.e7)([u.Z, l.Z], (function() {
                    var n = l.Z.isInChannel(t, e) && l.Z.hasVideo(t),
                        r = u.Z.getLayout(t),
                        i = r === c.AEg.MINIMUM || r === c.AEg.NORMAL;
                    return !n || i
                }), [t, e]) ? null : (0, r.jsx)(o.MenuItem, {
                    id: "focus-video",
                    label: n ? s.Z.Messages.UNFOCUS_PARTICIPANT : s.Z.Messages.FOCUS_PARTICIPANT,
                    action: function() {
                        return a.Z.selectParticipant(t, n ? null : e)
                    }
                })
            }
        },
        39082: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(997244),
                u = n(566706),
                l = n(664625),
                c = n(358500),
                s = n(473708);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
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

            function p(e, t) {
                var n = (0, i.e7)([l.default], (function() {
                        return l.default.getId() === e
                    }), [e]),
                    f = d((0, i.Wu)([u.Z], (function() {
                        return [u.Z.getParticipants(t), u.Z.getParticipant(t, e)]
                    }), [t, e]), 2),
                    p = f[0],
                    _ = f[1];
                return n || 0 === p.length ? null : null == _ ? (0, r.jsx)(o.MenuItem, {
                    id: "ring",
                    label: s.Z.Messages.RING,
                    action: function() {
                        return a.Z.ring(t, [e])
                    }
                }) : _.type === c.fO.USER && _.ringing ? (0, r.jsx)(o.MenuItem, {
                    id: "stop-ringing",
                    label: s.Z.Messages.STOP_RINGING,
                    action: function() {
                        return a.Z.stopRinging(t, [e])
                    }
                }) : null
            }
        },
        598955: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n(785893),
                i = (n(667294),
                    n(202351)),
                o = n(304548),
                a = n(105783),
                u = n(656645),
                l = n(656907),
                c = n(602351),
                s = n(563367),
                f = n(464187),
                d = n(473903),
                p = n(818417),
                _ = n(652591),
                h = n(2590),
                E = n(36256),
                v = n(473708),
                b = n(870726),
                g = n.n(b);

            function m(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.Yn.DEFAULT,
                    n = (0, i.e7)([d.default], (function() {
                        var t;
                        return (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
                    })),
                    b = (0, i.e7)([l.Z], (function() {
                        return l.Z.isLocalSoundboardMuted(e)
                    })),
                    m = (0, i.cj)([c.Z], (function() {
                        return n ? {
                            muted: c.Z.isSelfMute(t),
                            deafened: c.Z.isSelfDeaf(t)
                        } : {
                            muted: c.Z.isLocalMute(e, t),
                            localVideoDisabled: c.Z.isLocalVideoDisabled(e, t),
                            localVideoAutoDisabled: c.Z.isLocalVideoAutoDisabled(e, t)
                        }
                    }), [n, t, e]),
                    O = m.muted,
                    y = m.deafened,
                    I = void 0 !== y && y,
                    S = m.localVideoDisabled,
                    T = void 0 !== S && S,
                    A = m.localVideoAutoDisabled,
                    N = void 0 !== A && A,
                    R = c.Z.supports(E.AN.DISABLE_VIDEO) && !n ? (0, r.jsx)(o.MenuCheckboxItem, {
                        id: "disable-video",
                        label: v.Z.Messages.DISABLE_VIDEO,
                        action: function() {
                            if (N) a.Z.show({
                                title: v.Z.Messages.UNSTABLE_CONNECTION,
                                body: v.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                                confirmText: v.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                                cancelText: v.Z.Messages.LEAVE_VIDEO_OFF,
                                onConfirm: function() {
                                    return u.Z.setDisableLocalVideo(e, h.ZUi.MANUAL_ENABLED)
                                }
                            });
                            else {
                                var n = T ? h.ZUi.MANUAL_ENABLED : h.ZUi.DISABLED;
                                u.Z.setDisableLocalVideo(e, n, t)
                            }
                        },
                        checked: T,
                        subtext: N ? (0, r.jsxs)("div", {
                            className: g().videoPaused,
                            children: [(0, r.jsx)(p.Z, {
                                width: 12,
                                className: g().warningCircle
                            }), v.Z.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    C = n ? null : (0, r.jsx)(o.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: v.Z.Messages.MUTE_SOUNDBOARD,
                        action: function() {
                            var n = s.Z.getRTCConnection();
                            _.default.track(h.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: f.Z.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                                parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                                mute_soundboard: !b
                            });
                            u.Z.toggleLocalSoundboardMute(e, t)
                        },
                        checked: b
                    }, "soundboard-sound-mute");
                return n ? [(0,
                    r.jsx)(o.MenuCheckboxItem, {
                    id: "mute",
                    label: v.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return u.Z.toggleSelfMute({
                            context: t
                        })
                    },
                    checked: O
                }, "self-mute"), (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "deafen",
                    label: v.Z.Messages.DEAFEN,
                    action: function() {
                        return u.Z.toggleSelfDeaf({
                            context: t
                        })
                    },
                    checked: I
                }, "self-deafen"), R] : [(0, r.jsx)(o.MenuCheckboxItem, {
                    id: "mute",
                    label: v.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return u.Z.toggleLocalMute(e, t)
                    },
                    checked: O
                }, "self-mute"), C, R]
            }
        },
        234617: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(656645),
                u = n(602351),
                l = n(473903),
                c = n(615457),
                s = n(120415),
                f = n(36256),
                d = n(473708);

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
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

            function E(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    p = (0, i.e7)([u.Z], (function() {
                        return u.Z.getLocalVolume(e, n)
                    }), [e, n]),
                    E = e === (null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    v = n === f.Yn.STREAM;
                return E ? null : (0, r.jsx)(o.MenuControlItem, {
                    id: "user-volume",
                    label: v ? d.Z.Messages.STREAM_VOLUME : d.Z.Messages.USER_VOLUME,
                    control: function(t, i) {
                        return (0, r.jsx)(o.MenuSliderControl, h(_({}, t), {
                            ref: i,
                            value: (0, c.P)(p),
                            maxValue: s.FB ? 200 : 100,
                            onChange: function(t) {
                                return a.Z.setLocalVolume(e, (0, c.A)(t), n)
                            },
                            "aria-label": v ? d.Z.Messages.STREAM_VOLUME : d.Z.Messages.USER_VOLUME
                        }))
                    }
                })
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
                a = n(914716),
                u = n(296602),
                l = n(968968),
                c = n(61209),
                s = n(2590);

            function f(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            f(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            f(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        _(e, t, n[t])
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

            function b(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }
            var m = function(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var y = function(e, t) {
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
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function u(o) {
                        return function(u) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1,
                                        r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                            }([o, u])
                        }
                    }
                },
                I = {},
                S = new u.Z("UserGuildSettingsManager"),
                T = 0;

            function A() {
                I = E({}, l.Z.getCollapsedCategories())
            }

            function N() {
                if (!__OVERLAY__) {
                    clearTimeout(T);
                    T = setTimeout((function() {
                        return R()
                    }), 15e3)
                }
            }

            function R(e, t) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = d((function(e, t) {
                    return y(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, P(null != t ? _({}, null != e ? e : s.ME, t) : {})];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function P(e) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = d((function(e) {
                    var t, n, r, a, u, f, d;
                    return y(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                clearTimeout(T);
                                t = 0 !== Object.keys(e).length;
                                n = l.Z.getCollapsedCategories();
                                r = U();
                                for (var _ in r)
                                    if (null != (a = c.Z.getChannel(_)) && null != a.guild_id) {
                                        a.guild_id in e || (e[a.guild_id] = {});
                                        null == e[a.guild_id].channel_overrides && (e[a.guild_id].channel_overrides = {});
                                        e[a.guild_id].channel_overrides[a.id] = v(E({}, e[a.guild_id].channel_overrides[a.id]), {
                                            collapsed: a.id in n
                                        });
                                        t = !0
                                    } if (!t) return [2];
                                I = E({}, n);
                                u = i().map(e, (function(e, t) {
                                    return {
                                        guildId: t,
                                        updates: e,
                                        attempts: 0
                                    }
                                }));
                                p.label = 1;
                            case 1:
                                if (!(u.length > 0)) return [3, 8];
                                if ((f = u.shift()).guildId === s.I_8) return [3, 1];
                                p.label = 2;
                            case 2:
                                p.trys.push([2, 5, , 7]);
                                return [4, o.ZP.patch({
                                    url: s.ANM.USER_GUILD_SETTINGS(f.guildId),
                                    body: f.updates
                                })];
                            case 3:
                                p.sent();
                                return [4, M(1e3)];
                            case 4:
                                p.sent();
                                return [3, 7];
                            case 5:
                                d = p.sent();
                                S.error(d);
                                f.attempts += 1;
                                f.attempts < 3 && u.push(f);
                                return [4, M(5e3)];
                            case 6:
                                p.sent();
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
                for (var n in t) t[n] !== I[n] && (e[n] = !0);
                for (var r in I) t[r] !== I[r] && (e[r] = !0);
                return e
            }

            function M(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e + Math.ceil(e * Math.random()))
                }))
            }

            function D() {
                I = E({}, l.Z.getCollapsedCategories())
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
                    t && g(e, t)
                }(n, e);
                var t = O(n);

                function n() {
                    p(this, n);
                    var e;
                    (e = t.apply(this, arguments)).actions = {
                        CATEGORY_COLLAPSE: N,
                        CATEGORY_EXPAND: N,
                        CATEGORY_COLLAPSE_ALL: N,
                        CATEGORY_EXPAND_ALL: N,
                        POST_CONNECTION_OPEN: A,
                        USER_GUILD_SETTINGS_FULL_UPDATE: D
                    };
                    e.saveUserGuildSettings = R;
                    e.saveUserGuildSettingsBulk = P;
                    return e
                }
                return n
            }(a.Z))
        },
        232806: (e, t, n) => {
            "use strict";
            n.d(t, {
                xV: () => o,
                dp: () => a,
                X7: () => u,
                E1: () => l,
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
            var u = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10],
                l = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10, a.OPTION_1, a.OPTION_2, a.OPTION_3, a.OPTION_4].reduce((function(e, t, n) {
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
        504001: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(202351),
                i = n(602351),
                o = n(630926);

            function a() {
                return (0, r.e7)([i.Z], (function() {
                    return (0, o.Z)(i.Z)
                }))
            }
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
                return !t || "object" !== u(t) && "function" != typeof t ? function(e) {
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
            var u = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function l(e) {
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
                var t = l(n);

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
        968968: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(202351),
                i = n(744564),
                o = n(72580),
                a = n(61209),
                u = n(837067),
                l = n(5544),
                c = n(2590);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
            var v = {},
                b = 0;

            function g() {
                b += 1
            }

            function m(e) {
                if (null == v[e]) return !1;
                delete v[e]
            }
            var O = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
                }(n, e);
                var t = E(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(a.Z, u.Z);
                    this.removeChangeListener(g);
                    this.addChangeListener(g);
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
                ! function(e, t, n) {
                    t && f(e.prototype, t);
                    n && f(e, n)
                }(n, [{
                    key: "version",
                    get: function() {
                        return b
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            O.displayName = "CategoryCollapseStore";
            O.persistKey = "collapsedCategories";
            const y = new O(i.Z, {
                CONNECTION_OPEN: function(e) {
                    e.userGuildSettings.partial || (v = {});
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, o = e.userGuildSettings.entries[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            var a = i.value;
                            if (null != a.channel_overrides) {
                                var u = !0,
                                    l = !1,
                                    c = void 0;
                                try {
                                    for (var s, f = a.channel_overrides[Symbol.iterator](); !(u = (s = f.next()).done); u = !0) {
                                        var d = s.value;
                                        d.collapsed ? v[d.channel_id] = !0 : delete v[d.channel_id]
                                    }
                                } catch (e) {
                                    l = !0;
                                    c = e
                                } finally {
                                    try {
                                        u || null == f.return || f.return()
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
                        var i = a.Z.getChannel(r);
                        null != i && null != i.guild_id && n.has(i.guild_id) && delete v[i.id]
                    }
                    var u = !0,
                        l = !1,
                        c = void 0;
                    try {
                        for (var s, f = t[Symbol.iterator](); !(u = (s = f.next()).done); u = !0) {
                            var d = s.value,
                                p = !0,
                                _ = !1,
                                h = void 0;
                            try {
                                for (var E, b = d.channel_overrides[Symbol.iterator](); !(p = (E = b.next()).done); p = !0) {
                                    var g = E.value;
                                    g.collapsed && (v[g.channel_id] = !0)
                                }
                            } catch (e) {
                                _ = !0;
                                h = e
                            } finally {
                                try {
                                    p || null == b.return || b.return()
                                } finally {
                                    if (_) throw h
                                }
                            }
                        }
                    } catch (e) {
                        l = !0;
                        c = e
                    } finally {
                        try {
                            u || null == f.return || f.return()
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
                Z: () => L
            });
            var r = n(202351),
                i = n(744564),
                o = n(777158),
                a = n(419051),
                u = n(664625),
                l = n(61209),
                c = n(5544),
                s = n(567403),
                f = n(2590);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function _(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var E = function(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var b = null,
                g = {},
                m = null;
            var O = {
                _categories: [],
                null: []
            };

            function y(e, t) {
                e.index = t
            }

            function I(e) {
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
                t[f.d4z.GUILD_CATEGORY].forEach((function(e) {
                    var t = e.channel;
                    n._categories.push({
                        channel: t,
                        index: -1
                    });
                    n[t.id] = []
                }));
                t[c.sH].forEach(r);
                t[c.Zb].forEach(r);
                (0, o.Z)(n._categories, n).forEach(y);
                g[e] = n;
                return n
            }

            function S() {
                g = {};
                null != b && I(b)
            }

            function T(e) {
                var t = e.guild.id;
                g[t] = void 0;
                b === t && I(t)
            }

            function A(e) {
                var t = e.channel.guild_id;
                if (null == t) return !1;
                g[t] = void 0;
                b === t && I(t)
            }

            function N(e) {
                var t = e.guildId;
                g[t] = void 0;
                t === b && I(t)
            }

            function R(e, t) {
                m = t;
                if (null == e || null == e.getGuildId()) return !1;
                var n = e.getGuildId();
                if (null == n) return !1;
                g[n] = void 0;
                n === b && I(n);
                return !0
            }

            function C() {
                I(f.I_8)
            }
            var P = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = v(n);

                function n() {
                    d(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(c.ZP, s.Z, u.default, l.Z, a.Z);
                    this.syncWith([a.Z], C)
                };
                r.getCategories = function(e) {
                    return null != e ? function(e) {
                        var t = g[e];
                        return null != t ? t : I(e)
                    }(e) : O
                };
                return n
            }(r.ZP.Store);
            P.displayName = "GuildCategoryStore";
            const L = new P(i.Z, {
                CHANNEL_SELECT: function(e) {
                    var t = e.guildId;
                    b = null != t ? t : null;
                    if (null == t) return !1;
                    if (null != g[t]) return !1;
                    I(t)
                },
                CONNECTION_OPEN: S,
                OVERLAY_INITIALIZE: S,
                CACHE_LOADED_LAZY: S,
                GUILD_CREATE: T,
                GUILD_UPDATE: T,
                GUILD_DELETE: function(e) {
                    var t = e.guild.id;
                    delete g[t]
                },
                CHANNEL_CREATE: A,
                CHANNEL_DELETE: A,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !1,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var l = a.value.guild_id;
                            if (null != l) {
                                g[l] = void 0;
                                n = !0;
                                b === l && I(l)
                            }
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.user;
                    if (u.default.getId() !== n.id) return !1;
                    g[t] = void 0;
                    t === b && I(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == b) return !1;
                    I(b)
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
                        return u.default.getSessionId() !== r ? e : R(l.Z.getChannel(n), n) || e
                    }), !1)
                }
            })
        },
        50433: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
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

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function l(e, t) {
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
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var p = [];

            function _() {
                p = []
            }
            var h = function(e) {
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

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.hasLayers = function() {
                    return p.length > 0
                };
                r.getLayers = function() {
                    return p
                };
                return n
            }(r.ZP.Store);
            h.displayName = "LayerStore";
            const E = new h(i.Z, {
                LAYER_PUSH: function(e) {
                    var t = e.component;
                    if (p.indexOf(t) >= 0) return !1;
                    p = s(p).concat([t])
                },
                LAYER_POP: function() {
                    if (0 === p.length) return !1;
                    p = p.slice(0, -1)
                },
                LAYER_POP_ALL: _,
                LOGOUT: _,
                NOTIFICATION_CLICK: _
            })
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
                u = n(202351),
                l = n(744564),
                c = n(83797),
                s = n(664625),
                f = n(473903),
                d = n(2590);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t) {
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

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function v(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || y(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || y(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e, t) {
                if (e) {
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
                }
            }

            function I(e) {
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
                    var n, r = E(e);
                    if (t) {
                        var i = E(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var S = Object.freeze([]),
                T = {},
                A = {},
                N = {},
                R = {},
                C = {};

            function P(e, t) {
                var n = T[e];
                return null != n ? n[t] : null
            }
            var L = function(e) {
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
                    return L(t) - L(e)
                }(e, t) || function(e, t) {
                    return U(t) - U(e)
                }(e, t) || function(e, t) {
                    var n, r;
                    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (r = e.created_at) && void 0 !== r ? r : 0)
                }(e, t)
            }

            function D(e) {
                delete A[e];
                delete N[e];
                delete R[e];
                if (null != T[e]) {
                    var t = g(a().sortBy(T[e], (function(e) {
                            return -e.timestamp
                        })), 1),
                        n = t[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        A[e] = n.status;
                        N[e] = n.activities;
                        null != n.clientStatus && (R[e] = n.clientStatus)
                    } else a().every(T[e], (function(e) {
                        return e.status === d.Skl.OFFLINE
                    })) && delete T[e]
                }
            }

            function w(e) {
                var t = T[e];
                if (null != t) {
                    var n = a().maxBy(Object.values(t), (function(e) {
                        return e.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        A[e] = n.status;
                        N[e] = n.activities;
                        null != n.clientStatus && (R[e] = n.clientStatus)
                    }
                }
            }

            function Z(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    o = e.clientStatus,
                    a = e.activities;
                if (n === s.default.getId()) return !1;
                var u = T[n];
                if (null == u) {
                    if (r === d.Skl.OFFLINE) return !1;
                    u = T[n] = {}
                }
                if (r === d.Skl.OFFLINE) u[t] = {
                    status: r,
                    clientStatus: o,
                    activities: S,
                    timestamp: Date.now()
                };
                else {
                    var l = a.length > 1 ? m(a).sort(M) : a,
                        c = u[t];
                    a = null != c && i()(c.activities, l) ? c.activities : l;
                    u[t] = {
                        status: r,
                        clientStatus: o,
                        activities: a,
                        timestamp: Date.now()
                    }
                }
                delete C[n];
                D(n);
                return !0
            }

            function j(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    i = e.clientStatus,
                    o = e.activities,
                    a = e.timestamp;
                if (n !== s.default.getId()) {
                    var u = T[n];
                    if (null == u) {
                        if (r === d.Skl.OFFLINE) return;
                        u = T[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) u[t] = {
                        status: r,
                        clientStatus: i,
                        activities: S,
                        timestamp: Date.now()
                    };
                    else {
                        var l = o.length > 1 ? m(o).sort(M) : o;
                        u[t] = {
                            status: r,
                            clientStatus: i,
                            activities: l,
                            timestamp: a
                        }
                    }
                }
            }

            function G(e, t) {
                if (t === s.default.getId()) return !1;
                var n = T[t];
                if (null == n || null == n[e]) return !1;
                delete n[e];
                0 === Object.keys(n).length && delete T[t];
                D(t)
            }

            function k(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = Object.keys(T)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        G(e, i.value)
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
            var x = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && b(e, t)
                }(n, e);
                var t = I(n);

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
                    N[s.default.getId()] = t
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
                        return null !== (n = N[e]) && void 0 !== n ? n : S
                    }
                    var r = P(e, t);
                    return null == r || null == r.activities ? S : r.activities
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
                        for (var o, a = Object.keys(N)[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var u = o.value,
                                l = N[u],
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, p = l[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                    var _ = d.value;
                                    _.application_id === e && t.push({
                                        userId: u,
                                        activity: _
                                    })
                                }
                            } catch (e) {
                                s = !0;
                                f = e
                            } finally {
                                try {
                                    c || null == p.return || p.return()
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
                    return C[e]
                };
                r.getUserIds = function() {
                    return Object.keys(N)
                };
                r.isMobileOnline = function(e) {
                    var t = R[e];
                    return null != t && t[d.X5t.MOBILE] === d.Skl.ONLINE && t[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: T,
                        statuses: A,
                        activities: N,
                        activityMetadata: C,
                        clientStatuses: R
                    }
                };
                return n
            }(u.ZP.Store);
            x.displayName = "PresenceStore";
            const F = new x(l.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds,
                        n = e.presences,
                        r = s.default.getId();
                    T = {};
                    C = {};
                    A = h({}, r, A[r]);
                    N = h({}, r, N[r]);
                    R = h({}, r, {});
                    var i = new Set,
                        o = Date.now();
                    t.forEach((function(e) {
                        e.presences.forEach((function(t) {
                            var n = t.user,
                                r = t.status,
                                a = t.clientStatus,
                                u = t.activities;
                            j({
                                guildId: e.id,
                                userId: n.id,
                                status: r,
                                clientStatus: a,
                                activities: u,
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
                            j({
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
                    i.forEach(w)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.presences;
                    T = t.presencesForGuilds;
                    A = t.statuses;
                    N = t.activities;
                    C = t.activityMetadata
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    t.presences.forEach((function(e) {
                        var n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        Z({
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
                    return G(e.guildId, e.user.id)
                },
                PRESENCE_UPDATES: function(e) {
                    return e.updates.map((function(e) {
                        var t = e.guildId,
                            n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        return Z({
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
                    k(d.ME);
                    t.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            i = e.activities;
                        null != t && Z({
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
                    C[t] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    var t = e.guildId;
                    e.members.forEach((function(e) {
                        null != e.presence && Z({
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
                        null != e.presence && Z({
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
                    if (A[t] === e.status && N[t] === e.activities) return !1;
                    A[t] = e.status;
                    N[t] = e.activities;
                    delete C[t]
                }
            })
        },
        223219: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => G
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                a = n(744564),
                u = n(473903),
                l = n(2590);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }

            function _(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var E = function(e) {
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
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var b = l.QZA.CLOSED,
                g = null,
                m = null,
                O = {},
                y = {},
                I = {},
                S = null,
                T = null,
                A = !1,
                N = !1,
                R = null,
                C = null,
                P = null,
                L = [],
                U = null,
                M = null;

            function D(e) {
                var t, n, r, i, o, a, c = u.default.getCurrentUser();
                if (null == c) return w();
                m = null !== (t = e.section) && void 0 !== t ? t : m;
                U = null !== (n = e.section) && void 0 !== n ? n : m;
                null != e.subsection && null != m && (O[m] = e.subsection);
                null != e.scrollPosition && null != m && (y[m] = e.scrollPosition);
                N = !!e.openWithoutBackstack;
                b = l.QZA.OPEN;
                I = {};
                S = f({}, l.oAB.ACCOUNT, {
                    userId: c.id,
                    username: c.username,
                    discriminator: c.discriminator,
                    email: c.email,
                    avatar: c.avatar,
                    password: "",
                    newPassword: null,
                    claimed: c.isClaimed()
                });
                T = p({}, S);
                C = null !== (r = e.onClose) && void 0 !== r ? r : null;
                P = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null;
                L = null !== (o = e.analyticsLocations) && void 0 !== o ? o : [];
                M = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function w() {
                b = l.QZA.CLOSED;
                A = !1;
                S = null;
                U = null;
                T = null;
                g = null;
                m = null;
                O = {};
                y = {};
                C = null;
                P = null;
                L = [];
                M = null
            }

            function Z() {
                b = l.QZA.OPEN;
                I = {}
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
                    t && h(e, t)
                }(n, e);
                var t = v(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.default)
                };
                r.hasChanges = function() {
                    return null != T && null != S && (!(!this.isOpen() && R !== l.cII.USER_SETTINGS) && !i().isEqual(T, S))
                };
                r.isOpen = function() {
                    return A
                };
                r.getPreviousSection = function() {
                    return g
                };
                r.getSection = function() {
                    return m
                };
                r.getSubsection = function() {
                    return null != m ? O[m] : null
                };
                r.getScrollPosition = function() {
                    return null != m ? y[m] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return N
                };
                r.getProps = function() {
                    return {
                        submitting: b === l.QZA.SUBMITTING,
                        section: m,
                        subsection: null != m ? O[m] : null,
                        scrollPosition: null != m ? y[m] : null,
                        settings: T,
                        errors: I,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: N,
                        analyticsLocation: P,
                        analyticsLocations: L,
                        initialSection: U,
                        impressionSource: M
                    }
                };
                ! function(e, t, n) {
                    t && s(e.prototype, t);
                    n && s(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return C
                    }
                }]);
                return n
            }(o.ZP.Store);
            j.displayName = "UserSettingsModalStore";
            const G = new j(a.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    A = !0;
                    D(e)
                },
                USER_SETTINGS_MODAL_INIT: D,
                USER_SETTINGS_MODAL_CLOSE: w,
                LOGOUT: w,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    b = l.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (b !== l.QZA.SUBMITTING) return !1;
                    b = l.QZA.OPEN;
                    m = l.oAB.ACCOUNT;
                    var t;
                    I = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    g = m;
                    m = e.section;
                    P = null;
                    var t;
                    L = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (O[m] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete O[t] : null != m && delete O[m]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete y[t] : null != m && delete y[m]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == T && (T = {});
                    var n = T[l.oAB.ACCOUNT];
                    T[l.oAB.ACCOUNT] = p({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: Z,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = u.default.getCurrentUser();
                    Z();
                    if (null != e) {
                        S = f({}, l.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        T = p({}, S)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    R = e.tab;
                    return null == m && R === l.cII.USER_SETTINGS && D({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        416644: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(168075)),
                o = n(795308),
                a = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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
            const p = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    u = e.color,
                    l = void 0 === u ? "currentColor" : u,
                    c = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: c,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    s = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    _ = void 0 === p ? "" : p,
                    h = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
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
                }({}, (0, a.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: _
                    })
                }))
            }))
        },
        129586: (e, t, n) => {
            "use strict";
            n.d(t, {
                a8: () => i,
                FL: () => o,
                rS: () => a
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

            function a(e, t) {
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
                zQ: () => p
            });
            var r = n(441143),
                i = n.n(r),
                o = n(744564);

            function a(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            a(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            a(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var c, s, f = function(e, t) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
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
                        }([o, u])
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
            var d = function() {
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
                            a = void 0;
                        try {
                            for (var u, l = this.seenIntervals[Symbol.iterator](); !(r = (u = l.next()).done); r = !0) {
                                var c = u.value;
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
                            a = e
                        } finally {
                            try {
                                r || null == l.return || l.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        i()(n.length < 2, "there should only be a single left over data");
                        this.seenIntervals = n;
                        return Math.round(t)
                    };
                    return e
                }(),
                p = function() {
                    function e(t) {
                        var n = t.id,
                            r = t.windowId,
                            i = t.isPaused,
                            a = this;
                        l(this, e);
                        this.initialize = function() {
                            var e, t;
                            o.Z.subscribe("ANALYTICS_FEED_ITEM_SEEN", a.handleFeedItemSeen);
                            o.Z.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", a.handleFeedItemUnseen);
                            o.Z.subscribe("ANALYTICS_FEED_FLUSH", a.handleFeedItemFlush);
                            o.Z.subscribe("APP_STATE_UPDATE", a.handleAppStateUpdate);
                            o.Z.subscribe("DRAWER_OPEN", a.handleDrawerOpen);
                            o.Z.subscribe("DRAWER_CLOSE", a.handleDrawerClose);
                            o.Z.subscribe("WINDOW_FOCUS", a.handleWindowFocus);
                            null === (t = (e = a).onInitialize) || void 0 === t || t.call(e)
                        };
                        this.terminate = function() {
                            var e, t;
                            o.Z.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", a.handleFeedItemSeen);
                            o.Z.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", a.handleFeedItemUnseen);
                            o.Z.unsubscribe("ANALYTICS_FEED_FLUSH", a.handleFeedItemFlush);
                            o.Z.unsubscribe("APP_STATE_UPDATE", a.handleAppStateUpdate);
                            o.Z.unsubscribe("DRAWER_OPEN", a.handleDrawerOpen);
                            o.Z.unsubscribe("DRAWER_CLOSE", a.handleDrawerClose);
                            o.Z.unsubscribe("WINDOW_FOCUS", a.handleWindowFocus);
                            null === (t = (e = a).onTerminate) || void 0 === t || t.call(e);
                            a.maybeFlushSeenItems(s.IMMEDIATE)
                        };
                        this.handleFeedItemFlush = function(e) {
                            var t = e.id,
                                n = e.force;
                            a._id === t && a.maybeFlushSeenItems(n)
                        };
                        this.handleFeedItemSeen = function(e) {
                            var t, n, r = e.id,
                                i = e.timestampMillis,
                                o = e.feedItemId;
                            if (r === a._id)
                                if (a._paused) a._pausedFeedItemIds.add(o);
                                else {
                                    var u = a.getTrackedFeedItem(o).maybeMarkSeen(i);
                                    null === (n = (t = a).onFeedItemSeen) || void 0 === n || n.call(t, o, u)
                                }
                        };
                        this.handleFeedItemUnseen = function(e) {
                            var t, n, r = e.id,
                                i = e.timestampMillis,
                                o = e.feedItemId;
                            if (r === a._id) {
                                a._paused && a._pausedFeedItemIds.delete(o);
                                var u = a.getTrackedFeedItem(o).maybeMarkUnseen(i);
                                null === (n = (t = a).onFeedItemUnseen) || void 0 === n || n.call(t, o, u);
                                a.maybeFlushSeenItems()
                            }
                        };
                        this.getTrackedFeedItem = function(e) {
                            null == a.trackedFeedItems[e] && (a.trackedFeedItems[e] = new d);
                            return a.trackedFeedItems[e]
                        };
                        this.getVisibleFeedItemIds = function() {
                            var e = Object.keys(a.trackedFeedItems);
                            return new Set(e.filter((function(e) {
                                var t;
                                return null === (t = a.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible()
                            })))
                        };
                        this.handleDrawerClose = function() {
                            a._isReactNavigationFocused && a.resume()
                        };
                        this.handleDrawerOpen = function() {
                            a._isReactNavigationFocused && a.pause()
                        };
                        this.handleAppStateUpdate = function(e) {
                            var t = e.state;
                            "active" === t && a._isReactNavigationFocused && a.resume();
                            if ("background" === t) {
                                a._isReactNavigationFocused && a.pause();
                                a.maybeFlushSeenItems(s.IMMEDIATE)
                            }
                        };
                        this.clearPausedFeedItemIds = function() {
                            a._pausedFeedItemIds = new Set;
                            a._paused = !1
                        };
                        this.pause = function() {
                            if (!a._paused) {
                                var e = a.getVisibleFeedItemIds();
                                e.forEach((function(e) {
                                    a.handleFeedItemUnseen({
                                        id: a._id,
                                        feedItemId: e,
                                        timestampMillis: Date.now(),
                                        type: "ANALYTICS_FEED_ITEM_UNSEEN"
                                    })
                                }));
                                a._paused = !0;
                                a._pausedFeedItemIds = e
                            }
                        };
                        this.resume = function() {
                            if (a._paused) {
                                a._paused = !1;
                                a._pausedFeedItemIds.forEach((function(e) {
                                    a.handleFeedItemSeen({
                                        id: a._id,
                                        feedItemId: e,
                                        timestampMillis: Date.now(),
                                        type: "ANALYTICS_FEED_ITEM_SEEN"
                                    })
                                }));
                                a.clearPausedFeedItemIds()
                            }
                        };
                        this.handleReactNavigationFocus = function(e, t) {
                            a._isReactNavigationFocused = e;
                            a._isReactNavigationFocused && !t ? a.resume() : a.pause()
                        };
                        this.handleWindowFocus = function(e) {
                            a._windowId === e.windowId && (e.focused ? a.resume() : a.pause())
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
                        return e === s.IMMEDIATE || e === s.IMMEDIATE_WITH_COOLDOWN ? new Promise((t = u((function(e) {
                            return f(this, (function(t) {
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
                            setTimeout(u((function() {
                                return f(this, (function(t) {
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
        691797: (e, t, n) => {
            "use strict";
            n.d(t, {
                wS: () => a,
                JG: () => u
            });
            var r = n(482507),
                i = n(120415),
                o = n(310126),
                a = function() {
                    if (i.FB) return null != o.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function u(e) {
                if (!a) return !1;
                if (i.FB) {
                    o.ZP.copy(e);
                    return !0
                }
                return r.J(e)
            }
        },
        488110: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(473903),
                i = n(496486),
                o = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(i)().curry((function(e, t, n) {
                return o(t) ? e(n) : n({})
            }));

            function a(e, t, n) {
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
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e, t) {
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
            var s, f, d = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                p = n(680918);
            s = p.showModal;
            d = p.updateModalProps;
            f = n(264817).Mr;

            function _(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    i = e.modalProps,
                    o = void 0 === i ? {} : i,
                    a = e.hooks,
                    c = (void 0 === a ? {} : a).onEarlyClose,
                    p = function() {
                        null == c || c()
                    },
                    _ = function(e) {
                        f(b);
                        n(e)
                    },
                    E = function(e) {
                        f(b);
                        r(e)
                    },
                    v = function(e) {
                        var t = e.res;
                        d(b, g, p, l(u({}, o), {
                            error: t.body.message
                        }))
                    };
                if (null != s) var b = s(g, p, o);
                else null == c || c();

                function g(e) {
                    d(b, g, p, l(u({}, o), {
                        isLoading: !0
                    }));
                    return h({
                        promiseFn: t,
                        resolve: _,
                        reject: E,
                        code: e,
                        mfaCodeHandler: v,
                        isModalOpen: !0
                    })
                }
            }

            function h(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    i = e.code,
                    o = e.mfaCodeHandler,
                    a = void 0 === o ? _ : o,
                    l = e.isModalOpen,
                    s = void 0 !== l && l,
                    f = c(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != i ? {
                    code: i
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, s)) return a(u({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, f));
                    r(e)
                }))
            }

            function E(e, t) {
                var n, i, a = null != t ? t : {},
                    l = a.checkEnabled,
                    s = void 0 === l ? null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i : l,
                    f = c(a, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (o(s) ? _ : h)(u({
                        promiseFn: e,
                        resolve: t,
                        reject: n
                    }, f))
                }))
            }
        },
        716118: (e, t, n) => {
            "use strict";
            n.d(t, {
                tu: () => d,
                uk: () => f,
                GN: () => p
            });
            var r, i = n(669754),
                o = n(292832);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var u = (a(r = {}, o.Y.CLASSIC, {
                discodo: "discodo",
                message1: "message1",
                deafen: "deafen",
                undeafen: "undeafen",
                mute: "mute",
                unmute: "unmute",
                disconnect: "disconnect",
                ptt_start: "ptt_start",
                ptt_stop: "ptt_stop",
                user_join: "user_join",
                user_leave: "user_leave",
                user_moved: "user_moved",
                call_calling: "call_calling",
                call_ringing: "call_ringing",
                stream_started: "stream_started",
                stream_ended: "stream_ended",
                stream_user_joined: "stream_user_joined",
                stream_user_left: "stream_user_left",
                poggermode_enabled: "poggermode_enabled",
                poggermode_applause: "poggermode_applause",
                poggermode_achievement_unlock: "poggermode_achievement_unlock",
                stage_waiting: "stage_waiting"
            }), a(r, o.Y.DETUNE, {
                discodo: "detune_discodo",
                message1: "detune_message1",
                deafen: "detune_deafen",
                undeafen: "detune_undeafen",
                mute: "detune_mute",
                unmute: "detune_unmute",
                disconnect: "detune_disconnect",
                ptt_start: "detune_ptt_start",
                ptt_stop: "detune_ptt_stop",
                user_join: "detune_user_join",
                user_leave: "detune_user_leave",
                user_moved: "detune_user_moved",
                call_calling: "detune_call_calling",
                call_ringing: "detune_call_ringing",
                stream_started: "detune_stream_started",
                stream_ended: "detune_stream_ended",
                stream_user_joined: "detune_stream_user_joined",
                stream_user_left: "detune_stream_user_left"
            }), r);

            function l(e) {
                return u[e]
            }
            var c, s = n(793461);
            c = n(162383).j;

            function f(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    i = l(t);
                return d(null !== (n = i[e]) && void 0 !== n ? n : e, e, r)
            }

            function d(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return new c(e, t, n)
            }

            function p(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                if (!s.Z.disableSounds) {
                    var r, o = l(i.Z.getSoundpack()),
                        a = d(null !== (r = o[e]) && void 0 !== r ? r : e, e, t);
                    null != n ? a.playWithListener().then((function(e) {
                        e && n()
                    })) : a.play();
                    return a
                }
            }
        },
        73105: (e, t, n) => {
            "use strict";
            n.d(t, {
                RD: () => K,
                WA: () => F,
                f5: () => k,
                Gb: () => M,
                Rs: () => B,
                _2: () => Y,
                gL: () => w,
                fG: () => j
            });
            var r = n(306472),
                i = n(737264),
                o = n(496486),
                a = n.n(o),
                u = n(809784),
                l = n(296602),
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
            var p = function() {
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

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function v(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            E(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            E(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function b(e, t) {
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
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
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
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function u(o) {
                        return function(u) {
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
                            }([o, u])
                        }
                    }
                },
                O = new l.Z("Spellchecker"),
                y = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function I(e) {
                var t;
                e = null !== (t = _[e]) && void 0 !== t ? t : e;
                var n = (0, i.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        o = r.language,
                        a = r.region;
                    return "".concat(o.language.toLowerCase(), "-").concat(a.toUpperCase())
                }
                O.error("".concat(e, " is not a valid locale."))
            }
            var S = function() {
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
                        this.languageDetector = new p(i, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var o, u = null !== (o = a[e]) && void 0 !== o ? o : _[i];
                                null != u && n.setLocale(u)
                            }
                        }));
                        y.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        y.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = y.setLocale(e)) || void 0 === t || t.then((function(t) {
                            O.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
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
                        y.replaceMisspelling(e)
                    };
                    ! function(e, t, n) {
                        t && b(e.prototype, t);
                        n && b(e, n)
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
                T = a().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, u.k)(e, HTMLInputElement) || (0, u.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, u.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function A(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return T(e, t.target)
                }), !0)
            }

            function N() {
                return (N = v((function() {
                    var e, t, n, r;
                    return m(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, y.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = i.sent()) && void 0 !== e ? e : [];
                                n = t.map(I).filter(s.lm);
                                A(r = new S(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var R = n(120415);

            function C(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function P(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            C(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            C(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var L = function(e, t) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
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
                        }([o, u])
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
                return Z.apply(this, arguments)
            }

            function Z() {
                return (Z = P((function(e) {
                    var t;
                    return L(this, (function(n) {
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

            function j(e) {
                return G.apply(this, arguments)
            }

            function G() {
                return (G = P((function(e) {
                    var t;
                    return L(this, (function(n) {
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
                return x.apply(this, arguments)
            }

            function x() {
                x = P((function(e) {
                    var t, n, r = arguments;
                    return L(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, D];
                            case 1:
                                return null == (n = i.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return x.apply(this, arguments)
            }

            function F(e) {
                return H.apply(this, arguments)
            }

            function H() {
                H = P((function(e) {
                    var t, n, r, i = arguments;
                    return L(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 && void 0 !== i[2] ? i[2] : 5;
                                return [4, D];
                            case 1:
                                return null == (r = o.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return H.apply(this, arguments)
            }

            function B(e) {
                return V.apply(this, arguments)
            }

            function V() {
                return (V = P((function(e) {
                    var t;
                    return L(this, (function(n) {
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
                return (W = P((function(e) {
                    var t;
                    return L(this, (function(n) {
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

            function u(e, t) {
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
                    o = u(t, ["trackedActionData"]),
                    l = {
                        url: o.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(o).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, a({
                            status_code: e.status
                        }, l, n));
                        t(e)
                    })).catch((function(e) {
                        var t, o, u = r.properties;
                        "function" == typeof r.properties && (u = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, a({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message
                        }, l, u));
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
        680918: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                showModal: () => l,
                updateModalProps: () => c
            });
            var r = n(785893),
                i = (n(667294), n(264817)),
                o = n(919244);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var u = function(e, t, n) {
                return function(i) {
                    return (0, r.jsx)(o.Z, function(e) {
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
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, n, i))
                }
            };

            function l(e, t, n) {
                return (0, i.h7)(u(e, t, n), {
                    onCloseCallback: t
                })
            }

            function c(e, t, n, r) {
                return (0, i.o)(e, u(t, n, r))
            }
        },
        162383: (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => f
            });
            var r = n(496486),
                i = n.n(r),
                o = n(602351),
                a = n(120415);

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var l = "default",
                c = l;

            function s() {
                null != window.navigator.mediaDevices && window.navigator.mediaDevices.enumerateDevices().then((function(e) {
                    var t = o.Z.getOutputDevices(),
                        n = i()(t).sortBy((function(e) {
                            return e.index
                        })).findIndex((function(e) {
                            return e.id === o.Z.getOutputDeviceId()
                        })),
                        r = t[o.Z.getOutputDeviceId()],
                        a = e.filter((function(e) {
                            return "audiooutput" === e.kind && "communications" !== e.deviceId
                        })),
                        u = a[n];
                    null == r || null != u && u.label === r.name || (u = a.find((function(e) {
                        return e.label === r.name
                    })));
                    c = null != u ? u.deviceId : l
                })).catch((function() {
                    c = l
                }))
            }
            if (a.FB) {
                o.Z.addChangeListener(s);
                s()
            }
            var f = function() {
                function e(t, n, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.name = t;
                    this._volume = r
                }
                var t = e.prototype;
                t.loop = function() {
                    this._ensureAudio().then((function(e) {
                        e.loop = !0;
                        e.play()
                    }))
                };
                t.play = function() {
                    this._ensureAudio().then((function(e) {
                        e.loop = !1;
                        e.play()
                    }))
                };
                t.pause = function() {
                    null != this._audio && this._audio.then((function(e) {
                        return e.pause()
                    }))
                };
                t.stop = function() {
                    this._destroyAudio()
                };
                t.playWithListener = function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        e._ensureAudio().then((function(e) {
                            null != e.duration && 0 !== e.duration || n("sound has no duration");
                            e.play();
                            setTimeout((function() {
                                t(!0)
                            }), e.duration)
                        }))
                    }))
                };
                t._destroyAudio = function() {
                    if (null != this._audio) {
                        this._audio.then((function(e) {
                            e.pause();
                            e.src = ""
                        }));
                        this._audio = null
                    }
                };
                t._ensureAudio = function() {
                    var e, t = this;
                    this._audio = null !== (e = this._audio) && void 0 !== e ? e : new Promise((function(e, r) {
                        var i = new Audio;
                        i.src = n(614443)("./".concat(t.name, ".mp3"));
                        i.onloadeddata = function() {
                            i.volume = Math.min(o.Z.getOutputVolume() / 100 * t._volume, 1);
                            a.FB && i.setSinkId(c);
                            e(i)
                        };
                        i.onerror = function() {
                            return r(new Error("could not play audio"))
                        };
                        i.onended = function() {
                            return t._destroyAudio()
                        };
                        i.load()
                    }));
                    return this._audio
                };
                ! function(e, t, n) {
                    t && u(e.prototype, t);
                    n && u(e, n)
                }(e, [{
                    key: "volume",
                    get: function() {
                        return this._volume
                    },
                    set: function(e) {
                        this._volume = e;
                        this._ensureAudio().then((function(t) {
                            return t.volume = e
                        }))
                    }
                }]);
                return e
            }()
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
        },
        125333: (e, t, n) => {
            "use strict";
            n.d(t, {
                z0: () => r,
                Oh: () => i,
                Gk: () => o
            });

            function r(e) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(e)
            }

            function i(e) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(e)
            }

            function o() {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
            }
        },
        58964: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => p,
                WS: () => f,
                zS: () => d
            });
            var r = n(131795),
                i = n.n(r),
                o = n(228721);
            const a = n(426080).Z;

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = "https://discordapp.page.link";

            function f() {
                return (0, o.Z)()
            }

            function d(e) {
                if (!e.startsWith(s)) return null;
                try {
                    var t = new URL(e).searchParams,
                        n = t.get("link");
                    if (null == n) return null;
                    var r, i = decodeURIComponent(n),
                        o = new URL(i).searchParams,
                        a = {
                            utmSource: null !== (r = t.get("utm_source")) && void 0 !== r ? r : void 0
                        },
                        u = !0,
                        l = !1,
                        f = void 0;
                    try {
                        for (var d, p = o.entries()[Symbol.iterator](); !(u = (d = p.next()).done); u = !0) {
                            var _ = c(d.value, 2),
                                h = _[0],
                                E = _[1];
                            a[h] = E
                        }
                    } catch (e) {
                        l = !0;
                        f = e
                    } finally {
                        try {
                            u || null == p.return || p.return()
                        } finally {
                            if (l) throw f
                        }
                    }
                    return a
                } catch (e) {
                    return null
                }
            }

            function p(e, t) {
                var n = t.utmSource,
                    r = t.androidFallbackLink,
                    o = t.iosFallbackLink,
                    u = l(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    c = new URL(e);
                for (var f in u) {
                    var d = u[f];
                    null != d && c.searchParams.set(f, d)
                }
                var p, _, h, E, v, b = encodeURIComponent(c.toString()),
                    g = encodeURIComponent(a()),
                    m = (h = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), E = null != (null === i() || void 0 === i() || null === (p = i().ua) || void 0 === p ? void 0 : p.match(h)),
                        v = "Safari" === (null === i() || void 0 === i() ? void 0 : i().name) && !E, "iOS" !== (null === i() || void 0 === i() || null === (_ = i().os) || void 0 === _ ? void 0 : _.family) || v ? 1 : 0),
                    O = null != r ? encodeURIComponent(r) : null,
                    y = null != o ? encodeURIComponent(o) : null,
                    I = "".concat(s, "/?link=").concat(b, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(g, "&efr=").concat(m);
                null != O && (I += "&afl=".concat(O));
                null != y && (I += "&ifl=".concat(y));
                return I
            }
        },
        426080: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(805829);

            function i() {
                return r.Z.Messages.DynamicLinks.IOS_APP_PREVIEW_DESCRIPTION
            }
        },
        717621: (e, t, n) => {
            var r;
            ! function(i) {
                var o = /^\s+/,
                    a = /\s+$/,
                    u = 0,
                    l = i.round,
                    c = i.min,
                    s = i.max,
                    f = i.random;

                function d(e, t) {
                    t = t || {};
                    if ((e = e || "") instanceof d) return e;
                    if (!(this instanceof d)) return new d(e, t);
                    var n = function(e) {
                        var t = {
                                r: 0,
                                g: 0,
                                b: 0
                            },
                            n = 1,
                            r = null,
                            u = null,
                            l = null,
                            f = !1,
                            d = !1;
                        "string" == typeof e && (e = function(e) {
                            e = e.replace(o, "").replace(a, "").toLowerCase();
                            var t, n = !1;
                            if (P[e]) {
                                e = P[e];
                                n = !0
                            } else if ("transparent" == e) return {
                                r: 0,
                                g: 0,
                                b: 0,
                                a: 0,
                                format: "name"
                            };
                            if (t = B.rgb.exec(e)) return {
                                r: t[1],
                                g: t[2],
                                b: t[3]
                            };
                            if (t = B.rgba.exec(e)) return {
                                r: t[1],
                                g: t[2],
                                b: t[3],
                                a: t[4]
                            };
                            if (t = B.hsl.exec(e)) return {
                                h: t[1],
                                s: t[2],
                                l: t[3]
                            };
                            if (t = B.hsla.exec(e)) return {
                                h: t[1],
                                s: t[2],
                                l: t[3],
                                a: t[4]
                            };
                            if (t = B.hsv.exec(e)) return {
                                h: t[1],
                                s: t[2],
                                v: t[3]
                            };
                            if (t = B.hsva.exec(e)) return {
                                h: t[1],
                                s: t[2],
                                v: t[3],
                                a: t[4]
                            };
                            if (t = B.hex8.exec(e)) return {
                                r: w(t[1]),
                                g: w(t[2]),
                                b: w(t[3]),
                                a: k(t[4]),
                                format: n ? "name" : "hex8"
                            };
                            if (t = B.hex6.exec(e)) return {
                                r: w(t[1]),
                                g: w(t[2]),
                                b: w(t[3]),
                                format: n ? "name" : "hex"
                            };
                            if (t = B.hex4.exec(e)) return {
                                r: w(t[1] + "" + t[1]),
                                g: w(t[2] + "" + t[2]),
                                b: w(t[3] + "" + t[3]),
                                a: k(t[4] + "" + t[4]),
                                format: n ? "name" : "hex8"
                            };
                            if (t = B.hex3.exec(e)) return {
                                r: w(t[1] + "" + t[1]),
                                g: w(t[2] + "" + t[2]),
                                b: w(t[3] + "" + t[3]),
                                format: n ? "name" : "hex"
                            };
                            return !1
                        }(e));
                        if ("object" == typeof e) {
                            if (V(e.r) && V(e.g) && V(e.b)) {
                                t = (p = e.r, _ = e.g, h = e.b, {
                                    r: 255 * M(p, 255),
                                    g: 255 * M(_, 255),
                                    b: 255 * M(h, 255)
                                });
                                f = !0;
                                d = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"
                            } else if (V(e.h) && V(e.s) && V(e.v)) {
                                r = j(e.s);
                                u = j(e.v);
                                t = function(e, t, n) {
                                    e = 6 * M(e, 360);
                                    t = M(t, 100);
                                    n = M(n, 100);
                                    var r = i.floor(e),
                                        o = e - r,
                                        a = n * (1 - t),
                                        u = n * (1 - o * t),
                                        l = n * (1 - (1 - o) * t),
                                        c = r % 6;
                                    return {
                                        r: 255 * [n, u, a, a, l, n][c],
                                        g: 255 * [l, n, n, u, a, a][c],
                                        b: 255 * [a, a, l, n, n, u][c]
                                    }
                                }(e.h, r, u);
                                f = !0;
                                d = "hsv"
                            } else if (V(e.h) && V(e.s) && V(e.l)) {
                                r = j(e.s);
                                l = j(e.l);
                                t = function(e, t, n) {
                                    var r, i, o;
                                    e = M(e, 360);
                                    t = M(t, 100);
                                    n = M(n, 100);

                                    function a(e, t, n) {
                                        n < 0 && (n += 1);
                                        n > 1 && (n -= 1);
                                        return n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                                    }
                                    if (0 === t) r = i = o = n;
                                    else {
                                        var u = n < .5 ? n * (1 + t) : n + t - n * t,
                                            l = 2 * n - u;
                                        r = a(l, u, e + 1 / 3);
                                        i = a(l, u, e);
                                        o = a(l, u, e - 1 / 3)
                                    }
                                    return {
                                        r: 255 * r,
                                        g: 255 * i,
                                        b: 255 * o
                                    }
                                }(e.h, r, l);
                                f = !0;
                                d = "hsl"
                            }
                            e.hasOwnProperty("a") && (n = e.a)
                        }
                        var p, _, h;
                        n = U(n);
                        return {
                            ok: f,
                            format: e.format || d,
                            r: c(255, s(t.r, 0)),
                            g: c(255, s(t.g, 0)),
                            b: c(255, s(t.b, 0)),
                            a: n
                        }
                    }(e);
                    this._originalInput = e, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = l(100 * this._a) / 100, this._format = t.format || n.format;
                    this._gradientType = t.gradientType;
                    this._r < 1 && (this._r = l(this._r));
                    this._g < 1 && (this._g = l(this._g));
                    this._b < 1 && (this._b = l(this._b));
                    this._ok = n.ok;
                    this._tc_id = u++
                }
                d.prototype = {
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
                        var e = this.toRgb();
                        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
                    },
                    getLuminance: function() {
                        var e, t, n, r = this.toRgb();
                        e = r.r / 255;
                        t = r.g / 255;
                        n = r.b / 255;
                        return .2126 * (e <= .03928 ? e / 12.92 : i.pow((e + .055) / 1.055, 2.4)) + .7152 * (t <= .03928 ? t / 12.92 : i.pow((t + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : i.pow((n + .055) / 1.055, 2.4))
                    },
                    setAlpha: function(e) {
                        this._a = U(e);
                        this._roundA = l(100 * this._a) / 100;
                        return this
                    },
                    toHsv: function() {
                        var e = _(this._r, this._g, this._b);
                        return {
                            h: 360 * e.h,
                            s: e.s,
                            v: e.v,
                            a: this._a
                        }
                    },
                    toHsvString: function() {
                        var e = _(this._r, this._g, this._b),
                            t = l(360 * e.h),
                            n = l(100 * e.s),
                            r = l(100 * e.v);
                        return 1 == this._a ? "hsv(" + t + ", " + n + "%, " + r + "%)" : "hsva(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
                    },
                    toHsl: function() {
                        var e = p(this._r, this._g, this._b);
                        return {
                            h: 360 * e.h,
                            s: e.s,
                            l: e.l,
                            a: this._a
                        }
                    },
                    toHslString: function() {
                        var e = p(this._r, this._g, this._b),
                            t = l(360 * e.h),
                            n = l(100 * e.s),
                            r = l(100 * e.l);
                        return 1 == this._a ? "hsl(" + t + ", " + n + "%, " + r + "%)" : "hsla(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
                    },
                    toHex: function(e) {
                        return h(this._r, this._g, this._b, e)
                    },
                    toHexString: function(e) {
                        return "#" + this.toHex(e)
                    },
                    toHex8: function(e) {
                        return function(e, t, n, r, i) {
                            var o = [Z(l(e).toString(16)), Z(l(t).toString(16)), Z(l(n).toString(16)), Z(G(r))];
                            if (i && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1)) return o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0);
                            return o.join("")
                        }(this._r, this._g, this._b, this._a, e)
                    },
                    toHex8String: function(e) {
                        return "#" + this.toHex8(e)
                    },
                    toRgb: function() {
                        return {
                            r: l(this._r),
                            g: l(this._g),
                            b: l(this._b),
                            a: this._a
                        }
                    },
                    toRgbString: function() {
                        return 1 == this._a ? "rgb(" + l(this._r) + ", " + l(this._g) + ", " + l(this._b) + ")" : "rgba(" + l(this._r) + ", " + l(this._g) + ", " + l(this._b) + ", " + this._roundA + ")"
                    },
                    toPercentageRgb: function() {
                        return {
                            r: l(100 * M(this._r, 255)) + "%",
                            g: l(100 * M(this._g, 255)) + "%",
                            b: l(100 * M(this._b, 255)) + "%",
                            a: this._a
                        }
                    },
                    toPercentageRgbString: function() {
                        return 1 == this._a ? "rgb(" + l(100 * M(this._r, 255)) + "%, " + l(100 * M(this._g, 255)) + "%, " + l(100 * M(this._b, 255)) + "%)" : "rgba(" + l(100 * M(this._r, 255)) + "%, " + l(100 * M(this._g, 255)) + "%, " + l(100 * M(this._b, 255)) + "%, " + this._roundA + ")"
                    },
                    toName: function() {
                        return 0 === this._a ? "transparent" : !(this._a < 1) && (L[h(this._r, this._g, this._b, !0)] || !1)
                    },
                    toFilter: function(e) {
                        var t = "#" + E(this._r, this._g, this._b, this._a),
                            n = t,
                            r = this._gradientType ? "GradientType = 1, " : "";
                        if (e) {
                            var i = d(e);
                            n = "#" + E(i._r, i._g, i._b, i._a)
                        }
                        return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + t + ",endColorstr=" + n + ")"
                    },
                    toString: function(e) {
                        var t = !!e;
                        e = e || this._format;
                        var n = !1,
                            r = this._a < 1 && this._a >= 0;
                        if (!t && r && ("hex" === e || "hex6" === e || "hex3" === e || "hex4" === e || "hex8" === e || "name" === e)) return "name" === e && 0 === this._a ? this.toName() : this.toRgbString();
                        "rgb" === e && (n = this.toRgbString());
                        "prgb" === e && (n = this.toPercentageRgbString());
                        "hex" !== e && "hex6" !== e || (n = this.toHexString());
                        "hex3" === e && (n = this.toHexString(!0));
                        "hex4" === e && (n = this.toHex8String(!0));
                        "hex8" === e && (n = this.toHex8String());
                        "name" === e && (n = this.toName());
                        "hsl" === e && (n = this.toHslString());
                        "hsv" === e && (n = this.toHsvString());
                        return n || this.toHexString()
                    },
                    clone: function() {
                        return d(this.toString())
                    },
                    _applyModification: function(e, t) {
                        var n = e.apply(null, [this].concat([].slice.call(t)));
                        this._r = n._r;
                        this._g = n._g;
                        this._b = n._b;
                        this.setAlpha(n._a);
                        return this
                    },
                    lighten: function() {
                        return this._applyModification(m, arguments)
                    },
                    brighten: function() {
                        return this._applyModification(O, arguments)
                    },
                    darken: function() {
                        return this._applyModification(y, arguments)
                    },
                    desaturate: function() {
                        return this._applyModification(v, arguments)
                    },
                    saturate: function() {
                        return this._applyModification(b, arguments)
                    },
                    greyscale: function() {
                        return this._applyModification(g, arguments)
                    },
                    spin: function() {
                        return this._applyModification(I, arguments)
                    },
                    _applyCombination: function(e, t) {
                        return e.apply(null, [this].concat([].slice.call(t)))
                    },
                    analogous: function() {
                        return this._applyCombination(R, arguments)
                    },
                    complement: function() {
                        return this._applyCombination(S, arguments)
                    },
                    monochromatic: function() {
                        return this._applyCombination(C, arguments)
                    },
                    splitcomplement: function() {
                        return this._applyCombination(N, arguments)
                    },
                    triad: function() {
                        return this._applyCombination(T, arguments)
                    },
                    tetrad: function() {
                        return this._applyCombination(A, arguments)
                    }
                };
                d.fromRatio = function(e, t) {
                    if ("object" == typeof e) {
                        var n = {};
                        for (var r in e) e.hasOwnProperty(r) && (n[r] = "a" === r ? e[r] : j(e[r]));
                        e = n
                    }
                    return d(e, t)
                };

                function p(e, t, n) {
                    e = M(e, 255);
                    t = M(t, 255);
                    n = M(n, 255);
                    var r, i, o = s(e, t, n),
                        a = c(e, t, n),
                        u = (o + a) / 2;
                    if (o == a) r = i = 0;
                    else {
                        var l = o - a;
                        i = u > .5 ? l / (2 - o - a) : l / (o + a);
                        switch (o) {
                            case e:
                                r = (t - n) / l + (t < n ? 6 : 0);
                                break;
                            case t:
                                r = (n - e) / l + 2;
                                break;
                            case n:
                                r = (e - t) / l + 4
                        }
                        r /= 6
                    }
                    return {
                        h: r,
                        s: i,
                        l: u
                    }
                }

                function _(e, t, n) {
                    e = M(e, 255);
                    t = M(t, 255);
                    n = M(n, 255);
                    var r, i, o = s(e, t, n),
                        a = c(e, t, n),
                        u = o,
                        l = o - a;
                    i = 0 === o ? 0 : l / o;
                    if (o == a) r = 0;
                    else {
                        switch (o) {
                            case e:
                                r = (t - n) / l + (t < n ? 6 : 0);
                                break;
                            case t:
                                r = (n - e) / l + 2;
                                break;
                            case n:
                                r = (e - t) / l + 4
                        }
                        r /= 6
                    }
                    return {
                        h: r,
                        s: i,
                        v: u
                    }
                }

                function h(e, t, n, r) {
                    var i = [Z(l(e).toString(16)), Z(l(t).toString(16)), Z(l(n).toString(16))];
                    return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
                }

                function E(e, t, n, r) {
                    return [Z(G(r)), Z(l(e).toString(16)), Z(l(t).toString(16)), Z(l(n).toString(16))].join("")
                }
                d.equals = function(e, t) {
                    return !(!e || !t) && d(e).toRgbString() == d(t).toRgbString()
                };
                d.random = function() {
                    return d.fromRatio({
                        r: f(),
                        g: f(),
                        b: f()
                    })
                };

                function v(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = d(e).toHsl();
                    n.s -= t / 100;
                    n.s = D(n.s);
                    return d(n)
                }

                function b(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = d(e).toHsl();
                    n.s += t / 100;
                    n.s = D(n.s);
                    return d(n)
                }

                function g(e) {
                    return d(e).desaturate(100)
                }

                function m(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = d(e).toHsl();
                    n.l += t / 100;
                    n.l = D(n.l);
                    return d(n)
                }

                function O(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = d(e).toRgb();
                    n.r = s(0, c(255, n.r - l(-t / 100 * 255)));
                    n.g = s(0, c(255, n.g - l(-t / 100 * 255)));
                    n.b = s(0, c(255, n.b - l(-t / 100 * 255)));
                    return d(n)
                }

                function y(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = d(e).toHsl();
                    n.l -= t / 100;
                    n.l = D(n.l);
                    return d(n)
                }

                function I(e, t) {
                    var n = d(e).toHsl(),
                        r = (n.h + t) % 360;
                    n.h = r < 0 ? 360 + r : r;
                    return d(n)
                }

                function S(e) {
                    var t = d(e).toHsl();
                    t.h = (t.h + 180) % 360;
                    return d(t)
                }

                function T(e) {
                    var t = d(e).toHsl(),
                        n = t.h;
                    return [d(e), d({
                        h: (n + 120) % 360,
                        s: t.s,
                        l: t.l
                    }), d({
                        h: (n + 240) % 360,
                        s: t.s,
                        l: t.l
                    })]
                }

                function A(e) {
                    var t = d(e).toHsl(),
                        n = t.h;
                    return [d(e), d({
                        h: (n + 90) % 360,
                        s: t.s,
                        l: t.l
                    }), d({
                        h: (n + 180) % 360,
                        s: t.s,
                        l: t.l
                    }), d({
                        h: (n + 270) % 360,
                        s: t.s,
                        l: t.l
                    })]
                }

                function N(e) {
                    var t = d(e).toHsl(),
                        n = t.h;
                    return [d(e), d({
                        h: (n + 72) % 360,
                        s: t.s,
                        l: t.l
                    }), d({
                        h: (n + 216) % 360,
                        s: t.s,
                        l: t.l
                    })]
                }

                function R(e, t, n) {
                    t = t || 6;
                    n = n || 30;
                    var r = d(e).toHsl(),
                        i = 360 / n,
                        o = [d(e)];
                    for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t;) {
                        r.h = (r.h + i) % 360;
                        o.push(d(r))
                    }
                    return o
                }

                function C(e, t) {
                    t = t || 6;
                    for (var n = d(e).toHsv(), r = n.h, i = n.s, o = n.v, a = [], u = 1 / t; t--;) {
                        a.push(d({
                            h: r,
                            s: i,
                            v: o
                        }));
                        o = (o + u) % 1
                    }
                    return a
                }
                d.mix = function(e, t, n) {
                    n = 0 === n ? 0 : n || 50;
                    var r = d(e).toRgb(),
                        i = d(t).toRgb(),
                        o = n / 100;
                    return d({
                        r: (i.r - r.r) * o + r.r,
                        g: (i.g - r.g) * o + r.g,
                        b: (i.b - r.b) * o + r.b,
                        a: (i.a - r.a) * o + r.a
                    })
                };
                d.readability = function(e, t) {
                    var n = d(e),
                        r = d(t);
                    return (i.max(n.getLuminance(), r.getLuminance()) + .05) / (i.min(n.getLuminance(), r.getLuminance()) + .05)
                };
                d.isReadable = function(e, t, n) {
                    var r, i, o = d.readability(e, t);
                    i = !1;
                    switch ((r = function(e) {
                            var t, n;
                            t = ((e = e || {
                                level: "AA",
                                size: "small"
                            }).level || "AA").toUpperCase();
                            n = (e.size || "small").toLowerCase();
                            "AA" !== t && "AAA" !== t && (t = "AA");
                            "small" !== n && "large" !== n && (n = "small");
                            return {
                                level: t,
                                size: n
                            }
                        }(n)).level + r.size) {
                        case "AAsmall":
                        case "AAAlarge":
                            i = o >= 4.5;
                            break;
                        case "AAlarge":
                            i = o >= 3;
                            break;
                        case "AAAsmall":
                            i = o >= 7
                    }
                    return i
                };
                d.mostReadable = function(e, t, n) {
                    var r, i, o, a, u = null,
                        l = 0;
                    i = (n = n || {}).includeFallbackColors;
                    o = n.level;
                    a = n.size;
                    for (var c = 0; c < t.length; c++)
                        if ((r = d.readability(e, t[c])) > l) {
                            l = r;
                            u = d(t[c])
                        } if (d.isReadable(e, u, {
                            level: o,
                            size: a
                        }) || !i) return u;
                    n.includeFallbackColors = !1;
                    return d.mostReadable(e, ["#fff", "#000"], n)
                };
                var P = d.names = {
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
                    L = d.hexNames = function(e) {
                        var t = {};
                        for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
                        return t
                    }(P);

                function U(e) {
                    e = parseFloat(e);
                    (isNaN(e) || e < 0 || e > 1) && (e = 1);
                    return e
                }

                function M(e, t) {
                    (function(e) {
                        return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
                    })(e) && (e = "100%");
                    var n = function(e) {
                        return "string" == typeof e && -1 != e.indexOf("%")
                    }(e);
                    e = c(t, s(0, parseFloat(e)));
                    n && (e = parseInt(e * t, 10) / 100);
                    return i.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
                }

                function D(e) {
                    return c(1, s(0, e))
                }

                function w(e) {
                    return parseInt(e, 16)
                }

                function Z(e) {
                    return 1 == e.length ? "0" + e : "" + e
                }

                function j(e) {
                    e <= 1 && (e = 100 * e + "%");
                    return e
                }

                function G(e) {
                    return i.round(255 * parseFloat(e)).toString(16)
                }

                function k(e) {
                    return w(e) / 255
                }
                var x, F, H, B = (F = "[\\s|\\(]+(" + (x = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + x + ")[,|\\s]+(" + x + ")\\s*\\)?", H = "[\\s|\\(]+(" + x + ")[,|\\s]+(" + x + ")[,|\\s]+(" + x + ")[,|\\s]+(" + x + ")\\s*\\)?", {
                    CSS_UNIT: new RegExp(x),
                    rgb: new RegExp("rgb" + F),
                    rgba: new RegExp("rgba" + H),
                    hsl: new RegExp("hsl" + F),
                    hsla: new RegExp("hsla" + H),
                    hsv: new RegExp("hsv" + F),
                    hsva: new RegExp("hsva" + H),
                    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                });

                function V(e) {
                    return !!B.CSS_UNIT.exec(e)
                }
                if (e.exports) e.exports = d;
                else {
                    void 0 !== (r = function() {
                        return d
                    }.call(t, n, t, e)) && (e.exports = r)
                }
            }(Math)
        },
        614443: (e, t, n) => {
            var r = {
                "./activities-rocket-time.mp3": 232369,
                "./activity_end.mp3": 125346,
                "./activity_launch.mp3": 468391,
                "./activity_user_join.mp3": 442466,
                "./activity_user_left.mp3": 107906,
                "./call_calling.mp3": 459735,
                "./call_ringing.mp3": 282884,
                "./call_ringing_beat.mp3": 621136,
                "./call_ringing_halloween.mp3": 236162,
                "./clip_error.mp3": 329450,
                "./clip_save.mp3": 10094,
                "./ddr-down.mp3": 180376,
                "./ddr-left.mp3": 81413,
                "./ddr-right.mp3": 843851,
                "./ddr-up.mp3": 190931,
                "./deafen.mp3": 296568,
                "./detune_call_calling.mp3": 717578,
                "./detune_call_ringing.mp3": 667540,
                "./detune_deafen.mp3": 599855,
                "./detune_discodo.mp3": 403549,
                "./detune_disconnect.mp3": 655109,
                "./detune_message1.mp3": 40335,
                "./detune_mute.mp3": 966306,
                "./detune_ptt_start.mp3": 720586,
                "./detune_ptt_stop.mp3": 982418,
                "./detune_stream_ended.mp3": 298093,
                "./detune_stream_started.mp3": 49319,
                "./detune_stream_user_joined.mp3": 181103,
                "./detune_stream_user_left.mp3": 337381,
                "./detune_undeafen.mp3": 194198,
                "./detune_unmute.mp3": 242898,
                "./detune_user_join.mp3": 437052,
                "./detune_user_leave.mp3": 57232,
                "./detune_user_moved.mp3": 901105,
                "./discodo.mp3": 751007,
                "./disconnect.mp3": 279686,
                "./highfive_clap.mp3": 707580,
                "./highfive_whistle.mp3": 986105,
                "./human_man.mp3": 47317,
                "./mention1.mp3": 860392,
                "./mention2.mp3": 766485,
                "./mention3.mp3": 476670,
                "./message1.mp3": 423796,
                "./message2.mp3": 663,
                "./message3.mp3": 361222,
                "./mute.mp3": 752990,
                "./overlayunlock.mp3": 510323,
                "./poggermode_achievement_unlock.mp3": 465635,
                "./poggermode_applause.mp3": 893151,
                "./poggermode_enabled.mp3": 245984,
                "./poggermode_message_send.mp3": 800987,
                "./ptt_start.mp3": 853866,
                "./ptt_stop.mp3": 122540,
                "./reconnect.mp3": 332961,
                "./robot_man.mp3": 816559,
                "./stage_waiting.mp3": 429586,
                "./stream_ended.mp3": 286944,
                "./stream_started.mp3": 980679,
                "./stream_user_joined.mp3": 302354,
                "./stream_user_left.mp3": 13543,
                "./success.mp3": 214578,
                "./undeafen.mp3": 494615,
                "./unmute.mp3": 499045,
                "./user_join.mp3": 835579,
                "./user_leave.mp3": 236660,
                "./user_moved.mp3": 901897
            };

            function i(e) {
                var t = o(e);
                return n(t)
            }

            function o(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    t.code = "MODULE_NOT_FOUND";
                    throw t
                }
                return r[e]
            }
            i.keys = function() {
                return Object.keys(r)
            };
            i.resolve = o;
            e.exports = i;
            i.id = 614443
        },
        970112: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ue: () => b,
                U2: () => g
            });

            function r(e) {
                const t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    r = atob(n),
                    i = new ArrayBuffer(r.length),
                    o = new Uint8Array(i);
                for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
                return i
            }

            function i(e) {
                const t = new Uint8Array(e);
                let n = "";
                for (const e of t) n += String.fromCharCode(e);
                return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }
            var o = "copy",
                a = "convert";

            function u(e, t, n) {
                if (t === o) return n;
                if (t === a) return e(n);
                if (t instanceof Array) return n.map((n => u(e, t[0], n)));
                if (t instanceof Object) {
                    const r = {};
                    for (const [i, o] of Object.entries(t)) {
                        if (o.derive) {
                            const e = o.derive(n);
                            void 0 !== e && (n[i] = e)
                        }
                        if (i in n) null != n[i] ? r[i] = u(e, o.schema, n[i]) : r[i] = null;
                        else if (o.required) throw new Error(`Missing key: ${i}`)
                    }
                    return r
                }
            }

            function l(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function c(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function s(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var f = {
                    type: c(o),
                    id: c(a),
                    transports: s(o)
                },
                d = {
                    appid: s(o),
                    appidExclude: s(o),
                    credProps: s(o)
                },
                p = {
                    appid: s(o),
                    appidExclude: s(o),
                    credProps: s(o)
                },
                _ = {
                    publicKey: c({
                        rp: c(o),
                        user: c({
                            id: c(a),
                            name: c(o),
                            displayName: c(o)
                        }),
                        challenge: c(a),
                        pubKeyCredParams: c(o),
                        timeout: s(o),
                        excludeCredentials: s([f]),
                        authenticatorSelection: s(o),
                        attestation: s(o),
                        extensions: s(d)
                    }),
                    signal: s(o)
                },
                h = {
                    type: c(o),
                    id: c(o),
                    rawId: c(a),
                    authenticatorAttachment: s(o),
                    response: c({
                        clientDataJSON: c(a),
                        attestationObject: c(a),
                        transports: l(o, (e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        }))
                    }),
                    clientExtensionResults: l(p, (e => e.getClientExtensionResults()))
                },
                E = {
                    mediation: s(o),
                    publicKey: c({
                        challenge: c(a),
                        timeout: s(o),
                        rpId: s(o),
                        allowCredentials: s([f]),
                        userVerification: s(o),
                        extensions: s(d)
                    }),
                    signal: s(o)
                },
                v = {
                    type: c(o),
                    id: c(o),
                    rawId: c(a),
                    authenticatorAttachment: s(o),
                    response: c({
                        clientDataJSON: c(a),
                        authenticatorData: c(a),
                        signature: c(a),
                        userHandle: c(a)
                    }),
                    clientExtensionResults: l(p, (e => e.getClientExtensionResults()))
                };
            async function b(e) {
                const t = await navigator.credentials.create(function(e) {
                    return u(r, _, e)
                }(e));
                return function(e) {
                    return u(i, h, e)
                }(t)
            }
            async function g(e) {
                const t = await navigator.credentials.get(function(e) {
                    return u(r, E, e)
                }(e));
                return function(e) {
                    return u(i, v, e)
                }(t)
            }
        }
    }
]);