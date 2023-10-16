(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [83966, 14136, 84832, 88110, 96043, 53686, 77357, 56645, 71402], {
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
                    for (var u, c = []; t.length;) {
                        var l = t.shift();
                        if (1 === l.length)
                            if (u) {
                                a.push({
                                    singleton: u,
                                    extension: c
                                });
                                u = l;
                                c = []
                            } else u = l;
                        else c.push(l)
                    }
                    a.push({
                        singleton: u,
                        extension: c
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
                c = n(285022),
                l = n(406557);
            e.exports = function(e, t, n) {
                var s = -1;
                t = r(t.length ? t : [l], u(i));
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
                    return c(e, t, n)
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
                        c = null === t,
                        l = t == t,
                        s = r(t);
                    if (!c && !s && !a && e > t || a && u && l && !c && !s || i && u && l || !n && l || !o) return 1;
                    if (!i && !a && !s && e < t || s && n && o && !i && !a || c && n && o || !u && o || !l) return -1
                }
                return 0
            }
        },
        285022: (e, t, n) => {
            var r = n(626393);
            e.exports = function(e, t, n) {
                for (var i = -1, o = e.criteria, a = t.criteria, u = o.length, c = n.length; ++i < u;) {
                    var l = r(o[i], a[i]);
                    if (l) {
                        return i >= c ? l : l * ("desc" == n[i] ? -1 : 1)
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
                    for (var o = arguments, a = -1, u = i(o.length - t, 0), c = Array(u); ++a < u;) c[a] = o[t + a];
                    a = -1;
                    for (var l = Array(t + 1); ++a < t;) l[a] = o[a];
                    l[t] = n(c);
                    return r(e, this, l)
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
                Z: () => b
            });
            var r = n(744564),
                i = n(704560),
                o = n(359721),
                a = n(912735),
                u = n(973469),
                c = n(652591),
                l = n(716118),
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

            function E() {
                (0, l.GN)("mention3")
            }

            function h(e, t, n, r, i) {
                if (t !== n) {
                    var o = e[t],
                        u = e[n];
                    c.default.track(f.rMx.MEDIA_DEVICE_CHANGED, {
                        device_from_name: a.Z.getCertifiedDeviceName(t, null != o ? o.name : ""),
                        device_to_name: a.Z.getCertifiedDeviceName(n, null != u ? u.name : ""),
                        device_type: r,
                        device_is_certified: a.Z.isCertified(n),
                        location: i
                    })
                }
            }
            var I = {
                    isNotSupported: function() {
                        return !1
                    },
                    enable: function(e) {
                        return Promise.resolve(!0)
                    }
                },
                O = (I = n(660977)).enable,
                g = I.isNotSupported;
            const b = {
                enable: O,
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
                            h(u.Z.getInputDevices(), u.Z.getInputDeviceId(), e, "Audio Input", t)
                        }
                        r.Z.dispatch({
                            type: "AUDIO_SET_INPUT_DEVICE",
                            id: e
                        });
                        E()
                    }
                },
                setOutputDevice: function(e, t) {
                    if (!g()) {
                        if (null != t) {
                            h(u.Z.getOutputDevices(), u.Z.getOutputDeviceId(), e, "Audio Output", t)
                        }
                        r.Z.dispatch({
                            type: "AUDIO_SET_OUTPUT_DEVICE",
                            id: e
                        });
                        E()
                    }
                },
                setVideoDevice: function(e, t) {
                    if (!g()) {
                        if (null != t) {
                            h(u.Z.getVideoDevices(), u.Z.getVideoDeviceId(), e, "Video", t)
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

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
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
                    var c, f, d = 0,
                        p = 0;
                    if ("pageX" in e) {
                        d = e.pageX;
                        p = e.pageY
                    }
                    if (0 === d && 0 === p) {
                        var _, E = null === (_ = e.target) || void 0 === _ ? void 0 : _.getBoundingClientRect(),
                            h = null != E ? E : {},
                            I = h.left,
                            O = void 0 === I ? 0 : I,
                            g = h.top,
                            b = void 0 === g ? 0 : g,
                            T = h.width,
                            v = void 0 === T ? 0 : T,
                            m = h.height;
                        d = O + v / 2;
                        p = b + (void 0 === m ? 0 : m) / 2
                    }
                    var S = {
                        render: t,
                        renderLazy: r,
                        target: null !== (c = e.target) && void 0 !== c ? c : e.currentTarget,
                        rect: new DOMRect(d, p, 0, 0),
                        config: l({
                            context: __OVERLAY__ ? u.IlC.OVERLAY : null !== (f = (0, i.GB)()) && void 0 !== f ? f : u.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.nI)()) var y = (0, a.RD)((function() {
                        y();
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
        623934: (e, t, n) => {
            "use strict";
            n.d(t, {
                ym: () => o,
                w5: () => a,
                b8: () => u,
                TV: () => c
            });
            var r = n(744564),
                i = n(168024);

            function o(e, t) {
                r.Z.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t) {
                r.Z.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t, n) {
                r.Z.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function c(e) {
                var t = e.guildId,
                    n = e.channelId,
                    r = e.y,
                    o = e.height,
                    a = e.rowHeight,
                    c = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return Math.max(0, Math.ceil(Math.ceil(e / a)) + t)
                    },
                    l = function(e) {
                        var t = e + (i.dj - 1);
                        s.push([e, t]);
                        return t + 1
                    },
                    s = [],
                    f = c(.5 * o),
                    d = c(r, -f),
                    p = c(r + o, f);
                d > 0 && (d = Math.max(l(0), d));
                d = Math.floor(d / i.dj) * i.dj;
                for (; d <= p;) d = l(d);
                u(t, n, s)
            }
        },
        577357: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(744564),
                i = n(703790),
                o = n(945514),
                a = n(823530);

            function u(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            u(o, r, i, a, c, "next", e)
                        }

                        function c(e) {
                            u(o, r, i, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var l = function(e, t) {
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
            const s = {
                init: function() {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_INIT"
                    })
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_SET_SECTION",
                        section: e,
                        sectionId: t
                    })
                },
                startEditingCommandPermissions: function(e) {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
                        commandId: e
                    })
                },
                stopEditingCommandPermissions: function(e) {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
                        commandId: e
                    })
                },
                startEditingIntegration: function(e) {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
                        integrationId: e
                    })
                },
                stopEditingIntegration: function() {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
                    })
                },
                updateIntegration: function(e) {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
                        settings: e
                    })
                },
                startEditingWebhook: function(e) {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
                        webhookId: e
                    })
                },
                stopEditingWebhook: function() {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
                    })
                },
                updateWebhook: function(e) {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
                        settings: e
                    })
                },
                saveApplicationPermissions: function(e, t, n) {
                    return c((function() {
                        var i;
                        return l(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    a.trys.push([0, 2, , 3]);
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SUBMITTING"
                                    });
                                    return [4, o.U3({
                                        applicationId: e,
                                        commandId: e,
                                        defaultEveryoneValue: !0,
                                        defaultEverywhereValue: !0,
                                        guildId: t,
                                        permissions: n
                                    })];
                                case 1:
                                    a.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                                    });
                                    return [3, 3];
                                case 2:
                                    i = a.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                        errors: i.body
                                    });
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                },
                saveIntegration: function(e, t) {
                    return c((function() {
                        var n;
                        return l(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    o.trys.push([0, 2, , 3]);
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SUBMITTING"
                                    });
                                    return [4, i.Z.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons)];
                                case 1:
                                    o.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                                    });
                                    return [3, 3];
                                case 2:
                                    n = o.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                        errors: n.body
                                    });
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                },
                saveWebhook: function(e, t) {
                    return c((function() {
                        var n;
                        return l(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    i.trys.push([0, 2, , 3]);
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SUBMITTING"
                                    });
                                    return [4, a.Z.update(e, t.id, t)];
                                case 1:
                                    i.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                                    });
                                    return [3, 3];
                                case 2:
                                    n = i.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                        errors: n.body
                                    });
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                }
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
                Gn: () => h,
                Y2: () => I,
                mE: () => O
            });
            var r = n(281110),
                i = n(744564),
                o = n(973889),
                a = n(615796),
                u = n(264628),
                c = n(673679),
                l = n(2590),
                s = n(203600);

            function f(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
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

            function _(e, t, n, r, i) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = d((function(e, t, n, s, f) {
                    var d, _, E, h;
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
                                    url: l.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                _ = {};
                                null != t && (_.country_code = t);
                                null != n && (_.payment_source_id = n);
                                null != s && (_.include_unpublished = s);
                                null != f && (_.revenue_surface = f);
                                d.query = _;
                                return a.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, c.GE)()];
                            case 2:
                                p.sent();
                                p.label = 3;
                            case 3:
                                return [4, r.ZP.get(d)];
                            case 4:
                                E = p.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: E.body
                                });
                                return [3, 6];
                            case 5:
                                h = p.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, u.q2)(h);
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
                    return _(e, t)
                })))
            }

            function I(e, t, n) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return _(r, e, t, void 0, n)
                })))
            }

            function O() {
                i.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        224134: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(744564);
            const i = {
                startTyping: function(e) {
                    r.Z.dispatch({
                        type: "TYPING_START_LOCAL",
                        channelId: e
                    })
                },
                stopTyping: function(e) {
                    r.Z.dispatch({
                        type: "TYPING_STOP_LOCAL",
                        channelId: e
                    })
                }
            }
        },
        396179: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var r = n(281110),
                i = n(630631),
                o = n(744564),
                a = n(735885),
                u = n(2590);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
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

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                o.Z.dispatch(l({
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
                E = n(239620),
                h = n(473708);

            function I(e, t, n) {
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
                        I(e, t, n[t])
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
            const b = {
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
                    o.Z.dispatch(O({
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
                    o.Z.dispatch(O({
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
                        c = e.email,
                        l = e.emailToken,
                        s = e.password,
                        f = e.avatar,
                        I = e.newPassword,
                        b = e.discriminator,
                        T = t.close;
                    return (0, _.Z)((function(e) {
                        var t = g(O({
                                username: a,
                                email: c,
                                email_token: l,
                                password: s,
                                avatar: f,
                                new_password: I
                            }, e), {
                                discriminator: null != b && "" !== b ? b : void 0
                            }),
                            n = i.Z.get(u.JkL),
                            o = (0, E.xJ)();
                        if (null != o && null != n) {
                            t.push_provider = o;
                            t.push_token = n
                        }
                        var d = i.Z.get(u.scU);
                        if (null != E.mv && null != d) {
                            t.push_voip_provider = E.mv;
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
                            title: h.Z.Messages.TWO_FA_CHANGE_ACCOUNT
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
                        null != I && o.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: I
                        });
                        null != s && null != I && o.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        T ? n.close() : n.submitComplete();
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
        823530: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(496486),
                i = n.n(r),
                o = n(281110),
                a = n(744564),
                u = n(2590),
                c = ["Spidey Bot", "Captain Hook"];
            const l = {
                fetchForGuild: function(e) {
                    a.Z.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e
                    });
                    o.ZP.get({
                        url: u.ANM.GUILD_WEBHOOKS(e),
                        oldFormErrors: !0
                    }).then((function(t) {
                        var n = t.body;
                        return a.Z.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            webhooks: n
                        })
                    })).catch((function(t) {
                        var n = t.body;
                        a.Z.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            error: n.message
                        })
                    }))
                },
                fetchForChannel: function(e, t) {
                    a.Z.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e,
                        channelId: t
                    });
                    o.ZP.get({
                        url: u.ANM.CHANNEL_WEBHOOKS(t),
                        oldFormErrors: !0
                    }).then((function(n) {
                        var r = n.body;
                        return a.Z.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            channelId: t,
                            webhooks: r
                        })
                    }))
                },
                create: function(e, t, n) {
                    null == n && (n = c[i().random(0, c.length - 1)]);
                    return o.ZP.post({
                        url: u.ANM.CHANNEL_WEBHOOKS(t),
                        body: {
                            name: n
                        },
                        oldFormErrors: !0
                    }).then((function(t) {
                        var n = t.body;
                        a.Z.dispatch({
                            type: "WEBHOOK_CREATE",
                            guildId: e,
                            webhook: n
                        });
                        return n
                    }))
                },
                delete: function(e, t) {
                    return o.ZP.delete({
                        url: u.ANM.WEBHOOK(t),
                        oldFormErrors: !0
                    }).then((function() {
                        a.Z.dispatch({
                            type: "WEBHOOK_DELETE",
                            guildId: e,
                            webhookId: t
                        })
                    }))
                },
                update: function(e, t, n) {
                    return o.ZP.patch({
                        url: u.ANM.WEBHOOK(t),
                        body: n,
                        oldFormErrors: !0
                    }).then((function(t) {
                        var n = t.body;
                        a.Z.dispatch({
                            type: "WEBHOOK_UPDATE",
                            guildId: e,
                            webhook: n
                        });
                        return n
                    }))
                }
            }
        },
        660977: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                isNotSupported: () => b,
                enable: () => v
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(744564),
                a = n(296602),
                u = n(973469),
                c = n(652591),
                l = n(2590),
                s = n(785915),
                f = n(473708);

            function d(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
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
            var I = function(e, t) {
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
                O = new a.Z("AudioActionCreators");

            function g() {
                (0, i.openModalLazy)(p((function() {
                    var e, t;
                    return I(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(8056)]).then(n.bind(n, 908056))];
                            case 1:
                                e = i.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(t, E({
                                        source: "Unsupported Browser"
                                    }, e))
                                }]
                        }
                    }))
                })))
            }

            function b() {
                if (u.Z.isSupported()) return !1;
                (0, i.openModal)((function(e) {
                    return (0, r.jsx)(i.ConfirmModal, h(E({
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

            function T(e) {
                c.default.track(l.rMx.PERMISSIONS_ACKED, {
                    type: "audio",
                    action: e
                })
            }

            function v() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (b()) return Promise.resolve(!1);
                c.default.track(l.rMx.PERMISSIONS_REQUESTED, {
                    type: "audio"
                });
                return u.Z.getMediaEngine().enable().then((function() {
                    o.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                        enabled: !0,
                        unmute: e
                    });
                    T(s.PQ.ACCEPTED)
                }), (function(e) {
                    switch (e) {
                        case l.ETv.NO_DEVICES_FOUND:
                            T(s.PQ.NO_DEVICES);
                            break;
                        case l.ETv.PERMISSION_DENIED:
                            T(s.PQ.DENIED);
                            break;
                        case l.ETv.PERMISSION_DISMISSED:
                            T(s.PQ.DISMISSED);
                            break;
                        default:
                            T(s.PQ.ERROR);
                            O.warn("unknown getUserMedia error: ".concat(e))
                    }
                })).then((function() {
                    return !0
                }))
            }
        },
        213276: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                i = n(667294),
                o = n(228721),
                a = n(652591),
                u = n(295652),
                c = n(2590);

            function l(e, t, n) {
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
                    r.getLocation = (0, u.oH)((function(e, t, n, r) {
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
                                    l(e, t, n[t])
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
                        c = i.object,
                        l = i.objectType,
                        s = i.children,
                        f = this.mergeLocation(e.location, this.getLocation(u, o, c, l)),
                        d = this.getContext(f, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                    return (0, r.jsx)(a.AnalyticsContext.Provider, {
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
            E.Pages = c.ZY5;
            E.Sections = c.jXE;
            E.Objects = c.qAy;
            E.ObjectTypes = c.Qqv;
            E.defaultProps = {
                root: !1
            }
        },
        919244: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                u = n(304548),
                c = n(473708),
                l = n(949095),
                s = n.n(l);

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
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
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
            var E = function(e) {
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
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var I = function(e) {
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
                var t = h(n);

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
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? c.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : c.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? c.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : c.Z.Messages.TWO_FA_AUTH_CODE
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
                        l = t.children,
                        f = t.error,
                        d = t.isLoading,
                        p = t.maxLength,
                        _ = t.transitionState,
                        E = t.helpMessage,
                        h = t.retryPrompt,
                        I = t.retrySuccessMessage,
                        O = this.state,
                        g = O.code,
                        b = O.errorMessage,
                        T = O.retrySuccess,
                        v = i.Children.count(l) > 0 ? (0, r.jsx)(u.Card, {
                            type: u.Card.Types.WARNING,
                            className: s().card,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: l
                            })
                        }) : null,
                        m = null != h ? (0, r.jsxs)(u.Text, {
                            className: a()(s().submitText, s().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(u.Clickable, {
                                className: a()(s().spacing, s().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(u.Anchor, {
                                    children: h
                                })
                            })]
                        }) : null,
                        S = T ? (0, r.jsx)(u.Card, {
                            type: u.Card.Types.SUCCESS,
                            className: s().card,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: I
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
                                children: [null != E ? (0, r.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s().spacing,
                                    children: E
                                }) : null, v, S, (0, r.jsxs)(u.FormItem, {
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
                                        children: null != f ? f : b
                                    }) : null, m]
                                })]
                            }), (0, r.jsxs)(u.ModalFooter, {
                                children: [(0,
                                    r.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: d || 0 === g.length,
                                    children: null != o ? o : c.Z.Messages.CONFIRM
                                }), (0, r.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    children: c.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(i.PureComponent);
            I.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const O = I
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
                return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
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
            var l = function(e) {
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
                    t && c(e, t)
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
        357088: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => u
            });
            n(785893);
            var r = n(667294),
                i = n(496486),
                o = n.n(i),
                a = n(623934);

            function u(e) {
                r.useEffect((function() {
                    o().forEach(e, (function(e, t) {
                        return (0, a.ym)(t, e)
                    }));
                    return function() {
                        o().forEach(e, (function(e, t) {
                            return (0, a.w5)(t, e)
                        }))
                    }
                }), [e])
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
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function o(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function u(e) {
                            i(a, r, o, u, c, "next", e)
                        }

                        function c(e) {
                            i(a, r, o, u, c, "throw", e)
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
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
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

            function u(e, t) {
                return c.apply(this, arguments)
            }

            function c() {
                return (c = o((function(e, t) {
                    var i, o, u, c;
                    return a(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(14990), n.e(33227), n.e(24501), n.e(25066)]).then(n.bind(n, 624501))];
                            case 1:
                                i = a.sent(), o = i.default;
                                if (null != (u = o(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) u(null);
                                else if (r.FB) window.open(e);
                                else {
                                    (c = document.createElement("a")).href = e;
                                    c.target = "_blank";
                                    c.rel = "noreferrer noopener";
                                    c.click()
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
                JS: () => C,
                hH: () => P,
                AB: () => U,
                ZP: () => G,
                oG: () => Z,
                kO: () => w,
                yw: () => D
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                a = n(382060),
                u = n(664625),
                c = n(61209),
                l = n(5544),
                s = n(27851),
                f = n(21372),
                d = n(567403),
                p = n(973469),
                _ = n(682776),
                E = n(491260),
                h = n(563367),
                I = n(715107),
                O = n(464187),
                g = n(407561),
                b = n(652591),
                T = n(563135),
                v = n(671723);
            var m = n(2590),
                S = n(897196);

            function y(e, t, n) {
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
                        y(e, t, n[t])
                    }))
                }
                return e
            }

            function N(e) {
                var t = 0;
                for (var n in e) t += 1;
                return t
            }

            function P(e) {
                if (null == e) return null;
                var t = d.Z.getGuild(e);
                if (null == t) return null;
                var n, r = u.default.getId(),
                    i = f.ZP.getMember(e, r),
                    o = l.ZP.getChannels(e),
                    a = o[l.sH].length,
                    c = o[l.Zb].length,
                    p = g.Z.getVoiceStates(e);
                return {
                    guild_id: t.id,
                    guild_size_total: s.Z.getMemberCount(e),
                    guild_num_channels: a + c,
                    guild_num_text_channels: a,
                    guild_num_voice_channels: c,
                    guild_num_roles: N(t.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = _.Z.getGuildPermissions(t)) && void 0 !== n ? n : T.ZP.NONE),
                    guild_is_vip: t.hasFeature(m.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: N(p)
                }
            }

            function R(e, t) {
                return {
                    channel_static_route: t,
                    channel_hidden: !1
                }
            }

            function C(e) {
                if (null == e) return null;
                var t = c.Z.getChannel(e);
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
                        return null != t && o.Z.has(t.deny, m.Plq.VIEW_CHANNEL)
                    };
                    n = a.Ec.has(e.type) && null != e.parent_id ? i(c.Z.getChannel(e.parent_id)) : i(e)
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
                var t = c.Z.getChannel(e);
                if (null == t) return null;
                var n, r = p.Z.isVideoEnabled(),
                    i = h.Z.getMediaSessionId();
                return A({
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: i
                }, w(t.getGuildId(), t.id, r), {
                    game_name: null != (n = v.ZP.getCurrentGameForAnalytics()) ? n.name : null,
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
                if (!b.default.isThrottled(e)) {
                    var r = !("location" in t) || t.location !== m.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in t ? t.guild_id : r ? O.Z.getGuildId() : null,
                        o = "channel_id" in t ? t.channel_id : r ? I.Z.getChannelId(i) : null,
                        a = c.Z.getChannel(o),
                        u = M(a, i),
                        l = A({}, t, P(u), null != i && null != o && (0, S.AB)(o) ? R(0, o) : L(a));
                    b.default.track(e, l, {
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
                    e.channelId === t && null != E.Z.findActivity(e.userId, (function(e) {
                        return e.type === m.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const G = {
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
                bB: () => c
            });
            var r, i, o, a, u, c;
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
            }(c || (c = {}))
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
                i = (n(667294),
                    n(944010)),
                o = n(895303),
                a = n(470856),
                u = n(473708);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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

            function s(e) {
                var t = e.type,
                    n = e.onConfirm,
                    s = l(e, ["type", "onConfirm"]),
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
                            c(e, t, n[t])
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
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(247250),
                u = n(566706),
                c = n(473708);

            function l(e) {
                var t = (0, i.e7)([u.Z], (function() {
                    return u.Z.getVoiceParticipantsHidden(e)
                }));
                return (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: c.Z.Messages.STREAM_SHOW_NON_VIDEO,
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
                Z: () => T
            });
            var r = n(785893),
                i = (n(667294),
                    n(202351)),
                o = n(304548),
                a = n(379991),
                u = n(656645),
                c = n(664625),
                l = n(973469),
                s = n(2590),
                f = n(36256);

            function d(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    n = (0, i.e7)([c.default], (function() {
                        return c.default.getId()
                    })),
                    r = (0, i.e7)([l.Z], (function() {
                        return l.Z.supports(f.AN.DISABLE_VIDEO) && l.Z.isVideoEnabled()
                    })),
                    o = (0, i.e7)([l.Z], (function() {
                        return l.Z.isLocalVideoDisabled(n, t)
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
                E = n(473708);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function O(e) {
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

            function b(e, t) {
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

            function T(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    n = b(d(e, t), 3),
                    u = n[0],
                    c = n[1],
                    l = n[2],
                    s = (0, i.e7)([a.ZP], (function() {
                        return a.ZP.disableHideSelfStreamAndVideoConfirmationAlert
                    })),
                    h = function() {
                        if (s || c) return l(!c);
                        (0, o.openModal)((function(e) {
                            return (0, r.jsx)(p.Z, g(O({}, e), {
                                type: _.K.VIDEO,
                                onConfirm: function() {
                                    return l(!c)
                                }
                            }))
                        }))
                    };
                return u ? (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: E.Z.Messages.SHOW_SELF_VIDEO,
                    checked: !c,
                    action: h
                }) : null
            }
        },
        289150: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => I
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(504001),
                u = n(664625),
                c = n(973469),
                l = n(473708),
                s = n(352062),
                f = n.n(s);

            function d(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
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

            function I(e) {
                var t = (0, o.useModalContext)(),
                    s = (0, i.e7)([c.Z], (function() {
                        return c.Z.isVideoEnabled()
                    })),
                    d = (0, i.e7)([u.default], (function() {
                        return u.default.getId() === e
                    })),
                    I = (0, a.Z)();
                return s && !I || !d ? null : (0, r.jsx)(o.MenuItem, {
                    id: "change-video-background",
                    label: (0, r.jsx)("div", {
                        className: f().item,
                        children: s ? l.Z.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : l.Z.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, o.openModalLazy)(p((function() {
                            var e, t;
                            return h(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(79249), n.e(17586), n.e(89975), n.e(10675), n.e(73679), n.e(96043), n.e(58905), n.e(52050)]).then(n.bind(n, 763361))];
                                    case 1:
                                        e = i.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, E(function(e) {
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
        737331: (e, t, n) => {
            "use strict";
            n.d(t, {
                R8: () => c
            });
            var r = n(202351),
                i = n(260561),
                o = n(567403),
                a = n(23925),
                u = (0, i.B)({
                    kind: "user",
                    id: "2023-05_clyde_ai_dm",
                    label: "DMs to Clyde",
                    defaultConfig: {
                        isDMsToClydeEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable dms to clyde",
                        config: {
                            isDMsToClydeEnabled: !0
                        }
                    }]
                });

            function c() {
                var e = u.useExperiment({
                        location: "dbd3ac_1"
                    }, {
                        autoTrackExposure: !1
                    }).isDMsToClydeEnabled,
                    t = (0, r.Wu)([o.Z], (function() {
                        return o.Z.getGuildIds()
                    })).some((function(e) {
                        return (0, a.M9)(o.Z.getGuild(e))
                    }));
                return e && t
            }
        },
        112897: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(968449),
                a = n(416644),
                u = n(691797);

            function c(e) {
                var t = e.id,
                    n = e.label,
                    c = e.onSuccess,
                    l = e.shiftId,
                    s = e.showIconFirst,
                    f = o.Sb.useSetting();
                if (__OVERLAY__ || !f || !u.wS) return null;
                var d = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(i.MenuItem, {
                    id: d,
                    label: n,
                    action: function(e) {
                        var n = null != l && e.shiftKey ? l : t;
                        (0, u.JG)(n);
                        null == c || c()
                    },
                    icon: a.Z,
                    showIconFirst: s
                }, d)
            }
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
                WC: () => h,
                z8: () => I,
                km: () => g,
                k0: () => b,
                af: () => T
            });
            var r, i, o, a, u = n(2590),
                c = n(203600),
                l = n(473708);

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
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_30,
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15,
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5,
                    preset: o.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_30,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_15,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_30,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_15,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_1,
                    quality: c.ys.MID_STREAMING_QUALITY
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
                    quality: c.ys.MID_STREAMING_QUALITY
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
                    return l.Z.Messages.SCREENSHARE_SOURCE
                }))],
                I = [E(r.RESOLUTION_720), E(r.RESOLUTION_1080), E(r.RESOLUTION_1440)],
                O = function(e) {
                    return "".concat(e, "p")
                },
                g = [E(r.RESOLUTION_480, (function() {
                    return O(r.RESOLUTION_480)
                })), E(r.RESOLUTION_720, (function() {
                    return O(r.RESOLUTION_720)
                })), E(r.RESOLUTION_1080, (function() {
                    return O(r.RESOLUTION_1080)
                })), E(r.RESOLUTION_1440, (function() {
                    return O(r.RESOLUTION_1440)
                })), E(r.RESOLUTION_SOURCE, (function() {
                    return l.Z.Messages.SCREENSHARE_SOURCE
                }))],
                b = [E(i.FPS_15), E(i.FPS_30), E(i.FPS_60)],
                T = [E(i.FPS_15, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_15
                    })
                })), E(i.FPS_30, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_30
                    })
                })), E(i.FPS_60, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_60
                    })
                }))]
        },
        90003: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => s,
                q: () => f
            });
            var r = n(785893),
                i = (n(667294), n(304548));

            function o(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function u(e) {
                            o(a, r, i, u, c, "next", e)
                        }

                        function c(e) {
                            o(a, r, i, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

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
            var l = function(e, t) {
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

            function s(e, t, o) {
                (0, i.openModalLazy)(a((function() {
                    var i, a;
                    return l(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(89975), n.e(27499), n.e(6331)]).then(n.bind(n, 736576))];
                            case 1:
                                i = u.sent(), a = i.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(a, c({
                                        guildId: e,
                                        userId: t,
                                        anaylticsLocations: o
                                    }, n))
                                }]
                        }
                    }))
                })))
            }

            function f(e, t, o) {
                (0, i.openModalLazy)(a((function() {
                    var i, a;
                    return l(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(89975), n.e(27499), n.e(76141)]).then(n.bind(n, 916782))];
                            case 1:
                                i = u.sent(), a = i.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(a, c({
                                        guildId: e,
                                        userId: t,
                                        anaylticsLocations: o
                                    }, n))
                                }]
                        }
                    }))
                })))
            }
        },
        773411: (e, t, n) => {
            "use strict";
            n.d(t, {
                N2: () => f,
                YM: () => d,
                Dx: () => p,
                jD: () => _,
                bO: () => E,
                Xp: () => h,
                fV: () => I
            });
            var r = n(202351),
                i = n(747820),
                o = n(260561),
                a = n(621696),
                u = n(5544),
                c = n(567403),
                l = n(2590);

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
                return !__OVERLAY__ && (!!t && (null != e && e.hasFeature(l.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function d(e) {
                if (__OVERLAY__) return !1;
                if (e === l.ME || e === l.I_8) return !1;
                if ((0, a.cn)()) return !1;
                var t = c.Z.getGuild(e);
                return null != t && (!!s(e, u.ZP, i.Z) && t.hasFeature(l.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
            }
            var p = (0,
                    o.B)({
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
                E = (0, o.B)({
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
                h = ((0, o.B)({
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
                I = (0, o.B)({
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
        482139: (e, t, n) => {
            "use strict";
            n.d(t, {
                iq: () => s,
                HP: () => d,
                Fq: () => p,
                jR: () => _,
                It: () => E,
                I5: () => h,
                g_: () => I,
                Cf: () => O,
                ID: () => g,
                sr: () => b,
                z5: () => T,
                IO: () => v,
                pG: () => m,
                W3: () => S,
                b9: () => y,
                _V: () => A
            });
            var r = n(281110),
                i = n(744564),
                o = n(735885),
                a = n(2590);

            function u(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            u(o, r, i, a, c, "next", e)
                        }

                        function c(e) {
                            u(o, r, i, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var l = function(e, t) {
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

            function s(e, t) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = c((function(e, t) {
                    var n, o, u, c, s, f;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                n = t.nick, o = t.avatar;
                                if (null == e) throw new Error("Need guildId");
                                i.Z.dispatch({
                                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                                });
                                u = {
                                    nick: n,
                                    avatar: o
                                };
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                return [4, r.ZP.patch({
                                    url: a.ANM.SET_GUILD_MEMBER(e),
                                    body: u,
                                    oldFormErrors: !0
                                })];
                            case 2:
                                c = l.sent();
                                i.Z.dispatch({
                                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                                });
                                i.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildMember: c.body,
                                    guildId: e
                                });
                                return [2, c];
                            case 3:
                                s = l.sent();
                                if (null != (null == (f = s.body) ? void 0 : f.username)) {
                                    f.nick = f.username;
                                    delete f.username
                                }
                                i.Z.dispatch({
                                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                                    errors: s.body
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function d(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function p(e, t) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function _() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                });
                (0, o.xf)()
            }

            function E() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function h(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function I(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function O(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function g(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function b(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function T(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function v() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function m() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function S() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function y() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function A(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        825781: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => R
            });
            var r = n(202351),
                i = n(744564),
                o = n(2590);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function c(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
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
                    return c(this, n)
                }
            }
            var d, p, _, E, h, I, O, g, b, T = o.QZA.CLOSED,
                v = {},
                m = !1;

            function S() {
                T = o.QZA.CLOSED;
                v = {};
                O = null;
                g = void 0;
                b = []
            }

            function y() {
                A();
                N();
                v = {};
                T = o.QZA.OPEN
            }

            function A() {
                d = void 0;
                h = void 0
            }

            function N() {
                p = void 0;
                _ = void 0;
                E = void 0;
                I = void 0
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
                    t && l(e, t)
                }(n, e);
                var t = f(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getFormState = function() {
                    return T
                };
                r.getErrors = function() {
                    return v
                };
                r.showNotice = function() {
                    return void 0 !== d || void 0 !== p || void 0 !== _ || void 0 !== E || void 0 !== h || void 0 !== I
                };
                r.getPendingAvatar = function() {
                    return d
                };
                r.getPendingBanner = function() {
                    return p
                };
                r.getPendingBio = function() {
                    return _
                };
                r.getPendingNickname = function() {
                    return h
                };
                r.getPendingPronouns = function() {
                    return E
                };
                r.getPendingAccentColor = function() {
                    return h
                };
                r.getPendingThemeColors = function() {
                    return I
                };
                r.getAllPending = function() {
                    return {
                        pendingAvatar: d,
                        pendingBanner: p,
                        pendingBio: _,
                        pendingPronouns: E,
                        pendingNickname: h,
                        pendingThemeColors: I
                    }
                };
                r.getGuild = function() {
                    return O
                };
                r.getSource = function() {
                    return g
                };
                r.getAnalyticsLocations = function() {
                    return b
                };
                r.getIsDisableSubmit = function() {
                    return m
                };
                return n
            }(r.ZP.Store);
            P.displayName = "GuildIdentitySettingsStore";
            const R = new P(i.Z, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    O = e.guild;
                    T = o.QZA.OPEN;
                    v = {};
                    g = e.source;
                    b = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: S,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    y();
                    S()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    O = e.guild;
                    v = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    T = o.QZA.SUBMITTING;
                    v = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    if (T !== o.QZA.SUBMITTING) return !1;
                    T = o.QZA.OPEN;
                    var t;
                    v = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    T = o.QZA.OPEN;
                    v = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    var t = e.avatar;
                    d = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    var t = e.banner;
                    p = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    var t = e.bio;
                    _ = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    var t = e.pronouns;
                    E = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    var t = e.nickname;
                    h = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    var t = e.themeColors;
                    I = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: A,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: N,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: y,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: y,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    v = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    var t = e.disable;
                    m = t
                }
            })
        },
        822003: (e, t, n) => {
            "use strict";
            n.d(t, {
                gm: () => p,
                BG: () => _,
                aY: () => r,
                dW: () => E,
                jQ: () => i,
                sE: () => h
            });
            var r, i, o = n(667294),
                a = n(153686),
                u = n(396043),
                c = n(664625),
                l = n(652591),
                s = n(2590);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t, n) {
                var r, i = function(e) {
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
                }({}, t, (0, u.hH)(null !== (r = t.guild_id) && void 0 !== r ? r : n));
                l.default.track(e, i)
            }

            function p(e) {
                return o.useCallback((function(t) {
                    ! function(e) {
                        var t = {
                            guild_id: e,
                            location: a.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }), [e])
            }

            function _(e) {
                return o.useCallback((function(t) {
                    ! function(e, t) {
                        var n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: a.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }), [e])
            }! function(e) {
                e.UNUSUAL_DM_ACTIVITY = "unusual_dm_activity";
                e.COMMUNICATION_DISABLED = "communication_disabled"
            }(r || (r = {}));

            function E(e) {
                return o.useCallback((function(t) {
                    ! function(e, t) {
                        var n = {
                            flag_type: t,
                            guild_id: e,
                            location: a.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }), [e])
            }! function(e) {
                e.BAN = "ban";
                e.KICK = "kick";
                e.MUTE = "mute";
                e.TIMEOUT = "timeout";
                e.ADD_ROLE = "add_role";
                e.REMOVE_ROLE = "remove_role";
                e.COPY_ID = "copy_id";
                e.CHANGE_NICKNAME = "change_nickname"
            }(i || (i = {}));

            function h(e, t) {
                var n = t.location,
                    r = t.targetUserId,
                    i = t.targets;
                return o.useCallback((function(t) {
                    var o = {
                        action_type: t,
                        mod_user_id: c.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != r ? r : void 0,
                        targets: null != i ? i : void 0
                    };
                    d(s.rMx.MODERATION_ACTION, o)
                }), [e, n, r, i])
            }
        },
        414306: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l,
                $: () => s
            });
            var r = n(202351),
                i = n(747820),
                o = n(61209),
                a = n(682776),
                u = n(2590),
                c = {
                    needSubscriptionToAccess: !1,
                    isSubscriptionGated: !1
                };

            function l(e) {
                return (0, r.cj)([o.Z, i.Z, a.Z], (function() {
                    return s(e, o.Z, i.Z, a.Z)
                }), [e])
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.Z,
                    l = t.getChannel(e);
                if (null == l ? void 0 : l.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == l || !n.isChannelGated(l.guild_id, l.id)) return c;
                var s = l.isGuildVocal() ? !r.can(u.Plq.CONNECT, l) : !r.can(u.Plq.VIEW_CHANNEL, l);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: s
                }
            }
        },
        945514: (e, t, n) => {
            "use strict";
            n.d(t, {
                kZ: () => d,
                W4: () => p,
                Sn: () => _,
                gq: () => E,
                I4: () => I,
                Ui: () => O,
                U3: () => g
            });
            var r = n(281110),
                i = n(744564),
                o = n(49621),
                a = n(248046),
                u = n(2590);

            function c(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function l(e) {
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

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
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
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
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

            function d() {
                i.Z.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
                })
            }

            function p(e, t, n) {
                i.Z.dispatch({
                    applicationId: e,
                    commandId: t,
                    permissions: n,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function _(e, t) {
                r.ZP.get(u.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then((function(n) {
                    i.Z.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: t,
                        commands: n.body.application_commands,
                        guildId: e,
                        permissions: n.body.permissions
                    })
                }), (function() {
                    i.Z.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
                        applicationId: t
                    })
                }))
            }

            function E(e, t, n) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = l((function(e, t, n) {
                    var o, a;
                    return f(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                o = [];
                                c.label = 1;
                            case 1:
                                c.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get(u.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n))];
                            case 2:
                                (a = c.sent()).ok && (o = a.body.permissions);
                                return [3, 4];
                            case 3:
                                if (404 !== c.sent().status) {
                                    i.Z.dispatch({
                                        type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                                        applicationId: e,
                                        commandId: n,
                                        guildId: t
                                    });
                                    return [2]
                                }
                                return [3, 4];
                            case 4:
                                i.Z.dispatch({
                                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                                    applicationId: e,
                                    commandId: n,
                                    guildId: t,
                                    permissions: o
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function I(e) {
                i.Z.dispatch({
                    applicationId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
                })
            }

            function O(e) {
                i.Z.dispatch({
                    commandId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }

            function g(e) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = l((function(e) {
                    var t, n, r, a, u, c, l, s;
                    return f(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                t = e.applicationId, n = e.commandId, r = e.defaultEveryoneValue, a = e.defaultEverywhereValue, u = e.guildId, c = e.permissions;
                                l = n === t ? T(u, c, r, a) : c;
                                return [4, o.dh(t, u, n, l)];
                            case 1:
                                (s = f.sent()).ok && i.Z.dispatch({
                                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                                    applicationId: t,
                                    commandId: n,
                                    guildId: u,
                                    permissions: s.body.permissions
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function T(e, t, n, r) {
                if (!n || !r) return t;
                var i, o = (s(i = {}, e, n), s(i, (0, a.bD)(e), r), i);
                return t.filter((function(e) {
                    var t = o[e.id];
                    return null == t || e.permission !== t
                }))
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
        327930: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jv: () => E,
                M0: () => h,
                Qj: () => I,
                Ao: () => O,
                YO: () => g,
                VO: () => b
            });
            var r = n(61209),
                i = n(567403),
                o = n(682776),
                a = n(968696),
                u = n(2590),
                c = n(897196),
                l = Array.from(c.Vg).map((function(e) {
                    return a.Z.escape(e)
                })).join("|"),
                s = new RegExp("^/channels/(\\d+|".concat(u.ME, ")(?:/)?(\\d+|").concat(l, ")?")),
                f = new RegExp("^/channels/(\\d+|".concat(u.ME, ")(?:/)(\\d+|").concat(l, ")(?:/)(\\d+)")),
                d = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                p = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                _ = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                E = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(u.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                h = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function I(e) {
                if (null == e) return null;
                var t = e.match(f);
                if (null != t && t.length > 3) return {
                    guildId: t[1],
                    channelId: t[2],
                    messageId: t[3]
                };
                var n = e.match(d);
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
                var o = e.match(p);
                return null != o && o.length > 1 ? {
                    guildId: o[1]
                } : null
            }

            function O(e) {
                if (null == e) return null;
                var t = e.match(_);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2]
                } : null
            }

            function g(e) {
                return !!e.isPrivate() || o.Z.can(u.Plq.VIEW_CHANNEL, e)
            }

            function b(e) {
                var t = e.guildId,
                    n = e.channelId;
                if (null == i.Z.getGuild(t) && t !== u.ME) return !1;
                if (null == n) return !0;
                var o = r.Z.getChannel(n);
                return null != o && g(o)
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
        401080: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(667294),
                i = n(396179),
                o = n(19585),
                a = n(482139),
                u = (n(825781), n(2590)),
                c = n(131559);

            function l(e) {
                var t = e.guild,
                    n = e.scrollPosition,
                    l = e.analyticsLocation,
                    s = e.analyticsLocations,
                    f = e.openWithoutBackstack,
                    d = void 0 !== f && f,
                    p = (0, o.Z)().analyticsLocations;
                return (0, r.useCallback)((function() {
                    null != t && (0, a.Fq)(t, null != s ? s : p);
                    i.Z.open(u.oAB.PROFILE_CUSTOMIZATION, null != t ? c.NB.GUILD : c.NB.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: l,
                        analyticsLocations: s,
                        openWithoutBackstack: d
                    })
                }), [t, n, l, s, d, p])
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
                Z: () => E
            });
            var r = n(202351),
                i = n(744564),
                o = n(956206),
                a = n(292832);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function l(e, t) {
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
                    var n, r = c(e);
                    if (t) {
                        var i = c(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
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
            const E = new _(i.Z, {
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
                Z: () => I
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(567403),
                u = n(473903),
                c = n(407561),
                l = n(771575),
                s = n(162723),
                f = n(933022),
                d = n(664625),
                p = n(715107),
                _ = n(525261);
            var E = n(499219),
                h = n(473708);

            function I(e) {
                var t, n = (0, E.Z)(),
                    I = null == n ? void 0 : n.id,
                    O = null == n ? void 0 : n.guild_id,
                    g = (0, i.e7)([a.Z], (function() {
                        return a.Z.getGuild(O)
                    }), [O]),
                    b = (0, i.e7)([c.Z], (function() {
                        return null != I ? c.Z.getVoiceStateForChannel(I, e.id) : null
                    }), [I, e.id]),
                    T = (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
                    v = function() {
                        var e = (0, i.e7)([p.Z], (function() {
                                return p.Z.getVoiceChannelId()
                            })),
                            t = (0, i.e7)([d.default], (function() {
                                return d.default.getId()
                            }));
                        return (0, _.ZP)(t, e) === _.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                    }(),
                    m = (0, i.e7)([f.ZP], (function() {
                        return f.ZP.getPermissionsForUser(e.id, I)
                    }), [I, e.id]),
                    S = (0, s.B)(I);
                if (null == n || null == g || null == b) return null;
                if (m.speaker) return null;
                var y = function() {
                    T ? (0, l.RK)(n, !1) : (0, l._0)(n, e.id)
                };
                return S ? (0, r.jsx)(o.MenuItem, {
                    id: "invite-speaker",
                    label: T ? h.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : h.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: y
                }) : v && T ? (0, r.jsx)(o.MenuItem, {
                    id: "invite-speaker",
                    label: h.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: y
                }) : null
            }
        },
        18882: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => ce
            });
            var r = n(496486),
                i = n.n(r),
                o = n(842227),
                a = n(202351),
                u = n(744564),
                c = n(656793),
                l = n(382060),
                s = n(61209),
                f = n(567403),
                d = n(179913),
                p = n(715107),
                _ = n(536945),
                E = n(487685),
                h = n(102921);

            function I(e) {
                if (null == e.threadMetadata) return 0;
                var t = 60 * e.threadMetadata.autoArchiveDuration * 1e3;
                return function(e) {
                    if (null == e.threadMetadata) return 0;
                    var t, n = null !== (t = d.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
                        r = h.Z.extractTimestamp(n),
                        i = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, i)
                }(e) + t
            }
            var O = n(897196);

            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
                T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return T(e)
            }

            function v(e) {
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

            function m(e, t) {
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

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
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
                    var n, r = T(e);
                    if (t) {
                        var i = T(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }
            var P = {},
                R = {},
                C = {},
                L = {},
                U = {},
                M = {},
                D = null,
                w = {};

            function Z() {
                P = {};
                U = {};
                R = {};
                C = {};
                L = {};
                D = p.Z.getChannelId();
                for (var e in w) clearTimeout(w[e]);
                w = {};
                _.Z.forEachGuild((function(e) {
                    j(e)
                }));
                k()
            }

            function G(e) {
                delete P[e];
                delete U[e];
                delete R[e];
                delete C[e];
                delete L[e];
                j(e);
                for (var t in C[e]) F(e, t)
            }

            function j(e) {
                var t = _.Z.getThreadsForGuild(e);
                for (var n in t)
                    for (var r in t[n]) {
                        J(r);
                        var i = s.Z.getChannel(r);
                        if (null != i) {
                            var o = E.Z.joinTimestamp(r);
                            if (null != o) {
                                var a = {
                                        channel: i,
                                        joinTimestamp: o.getTime()
                                    },
                                    u = z(i),
                                    c = u.isUnread,
                                    l = u.isRelevant,
                                    f = u.isTimedRelevant;
                                X(P, i, a, !1);
                                X(U, i, l ? a : null, !1);
                                X(R, i, c ? a : null, !1);
                                f && Q(i, !0)
                            } else {
                                X(C, i, i, !1);
                                var p = d.ZP.isForumPostUnread(i.id);
                                X(L, i, p ? i : null, !1)
                            }
                        }
                    }
            }

            function k() {
                M = {};
                for (var e in C)
                    for (var t in C[e]) F(e, t)
            }

            function x(e) {
                var t = s.Z.getBasicChannel(e);
                null != t && l.uC.has(t.type) && F(t.guild_id, t.id)
            }

            function F(e, t) {
                var n = s.Z.getChannel(t);
                if (null != n && n.isForumLikeChannel()) {
                    null == M[e] && (M[e] = {});
                    M[e][t] = 0;
                    if (null != C[e] && null != C[e][t]) {
                        var r = f.Z.getGuild(e);
                        if (null != r) {
                            var i = d.ZP.getTrackedAckMessageId(t);
                            if (null == i) {
                                var a = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? a = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (a = new Date(r.joinedAt).getTime()));
                                i = o.default.fromTimestamp(a)
                            }
                            for (var u in C[e][t]) t === D ? d.ZP.isNewForumThread(u, t, r) && M[e][t]++ : o.default.compare(u, i) > 0 && !d.ZP.hasOpenedThread(u) && M[e][t]++
                        }
                    }
                }
            }

            function H(e, t, n) {
                if (null == t) return !1;
                var r = s.Z.getChannel(n),
                    i = E.Z.joinTimestamp(n);
                if (null != r && _.Z.isActive(e, t, n)) {
                    if (null != i) {
                        var o = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            a = z(r),
                            u = a.isUnread,
                            c = a.isRelevant,
                            l = a.isTimedRelevant;
                        X(P, r, o, !0);
                        X(U, r, c ? o : null, !0);
                        X(R, r, u ? o : null, !0);
                        X(C, r, null, !0);
                        X(L, r, null, !0);
                        Q(r, l)
                    } else {
                        var f = d.ZP.isForumPostUnread(r.id);
                        X(P, r, null, !0);
                        X(R, r, null, !0);
                        X(U, r, null, !0);
                        X(C, r, r, !0);
                        X(L, r, f ? r : null, !0);
                        J(r.id)
                    }
                    F(e, t)
                } else {
                    $(P, e, t, n);
                    $(U, e, t, n);
                    $(R, e, t, n);
                    $(C, e, t, n);
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
                var n = P[e],
                    r = null == n ? null : n[t];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var o = C[e],
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
                    if (!l.Ec.has(t.type)) {
                        var i;
                        if (Number(null === (i = M[n]) || void 0 === i ? void 0 : i[t.id]) > 0) {
                            F(n, t.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (ee(P, t)) {
                        var o = z(t),
                            a = o.isUnread,
                            u = o.isRelevant;
                        Q(t, o.isTimedRelevant);
                        var c = ee(R, t),
                            f = ee(U, t);
                        if (a === c && u === f) return !1;
                        var p = P[n][r][t.id],
                            _ = u ? p : null;
                        X(R, t, a ? p : null, !0);
                        X(U, t, _, !0);
                        F(n, r)
                    } else {
                        var E = ee(L, t),
                            h = d.ZP.isForumPostUnread(t.id);
                        if (h === E) return !1;
                        X(L, t, h ? t : null, !0)
                    }
                }
            }

            function K() {
                R = {};
                U = {};
                for (var e in P)
                    for (var t in P[e])
                        for (var n in P[e][t]) {
                            var r = P[e][t][n],
                                i = z(r.channel),
                                o = i.isUnread,
                                a = i.isRelevant,
                                u = i.isTimedRelevant;
                            o && X(R, r.channel, r, !1);
                            a && X(U, r.channel, r, !1);
                            Q(r.channel, u)
                        }
                L = {};
                for (var c in C)
                    for (var l in C[c])
                        for (var s in C[c][l]) {
                            var f = C[c][l][s];
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
                    n = d.ZP.hasRelevantUnread(e) && (!E.Z.isMuted(e.id) || t) || (0, c.c)() && t,
                    r = e.hasFlag(O.zZ.PINNED),
                    i = e.isActiveThread(),
                    o = i && I(e) > Date.now();
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
                    }), I(e) - Date.now() + 1)
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
                    r && (e[o] = m(v({}, e[o]), b({}, a, v({}, e[o][a]))));
                    if (null === n) {
                        delete e[o][a][u];
                        i().isEmpty(e[o][a]) && delete e[o][a]
                    } else e[o][a][u] = n
                }
            }

            function $(e, t, n, r) {
                if (null != t && null != n && null != r && te(e, t, n, r)) {
                    e[t] = m(v({}, e[t]), b({}, n, v({}, e[t][n])));
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
                        t && y(e, t)
                    }(n, e);
                    var t = N(n);

                    function n() {
                        g(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(_.Z, s.Z, E.Z, d.ZP);
                        this.syncWith([p.Z], q)
                    };
                    r.hasActiveJoinedUnreadThreads = function(e, t) {
                        return e in R && t in R[e]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in C && null !== (n = C[e][t]) && void 0 !== n ? n : oe
                    };
                    r.getActiveJoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in P && null !== (n = P[e][t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = P[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = R[e]) && void 0 !== t ? t : ne
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
                        return null !== (t = C[e]) && void 0 !== t ? t : re
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
                        for (var n in P)
                            if (n === e || null == e)
                                for (var r in P[n])
                                    for (var i in P[n][r]) t.push(P[n][r][i].channel);
                        return t
                    };
                    r.getNewThreadCount = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = M[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0
                    };
                    r.getActiveThreadCount = function(e, t) {
                        var n, r, o, a;
                        return i().size(null !== (o = null === (n = P[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : {}) + i().size(null !== (a = null === (r = C[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== a ? a : {})
                    };
                    return n
                }(a.ZP.Store);
            ue.displayName = "ActiveJoinedThreadsStore";
            const ce = new ue(u.Z, {
                CONNECTION_OPEN: Z,
                OVERLAY_INITIALIZE: Z,
                THREAD_LIST_SYNC: function(e) {
                    return G(e.guildId)
                },
                LOAD_THREADS_SUCCESS: Z,
                LOAD_ARCHIVED_THREADS_SUCCESS: Z,
                SEARCH_FINISH: Z,
                GUILD_CREATE: function(e) {
                    return G(e.guild.id)
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
                        if (t.guild_id in P && t.parent_id in P[t.guild_id]) {
                            delete P[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in R && t.parent_id in R[t.guild_id]) {
                            delete R[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in U && t.parent_id in U[t.guild_id]) {
                            Object.keys(U[t.guild_id][t.parent_id]).forEach(J);
                            delete U[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in C && t.parent_id in C[t.guild_id]) {
                            delete C[t.guild_id][t.parent_id];
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
                tM: () => h,
                NE: () => I,
                ki: () => O,
                Xu: () => g,
                cD: () => b,
                Ek: () => v,
                JQ: () => m,
                C7: () => S,
                tc: () => N,
                kn: () => P,
                $R: () => R,
                RG: () => C,
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
                c = n(774930),
                l = n(791707),
                s = n(382060),
                f = n(664625),
                d = n(61209),
                p = n(682776),
                _ = n(18882),
                E = n(2590),
                h = (0, u.Z)({
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

            function I(e, t) {
                return T((0, a.e7)([p.Z], (function() {
                    var t = e.isForumLikeChannel() ? E.Plq.SEND_MESSAGES : o.Z.combine(E.Plq.CREATE_PUBLIC_THREADS, E.Plq.READ_MESSAGE_HISTORY);
                    return p.Z.can(t, e)
                }), [e]), e, t)
            }

            function O(e, t) {
                var n = e.isForumLikeChannel() ? E.Plq.SEND_MESSAGES : o.Z.combine(E.Plq.CREATE_PUBLIC_THREADS, E.Plq.READ_MESSAGE_HISTORY);
                return T(p.Z.can(n, e), e, t)
            }

            function g(e) {
                var t = (0, a.e7)([p.Z], (function() {
                    return p.Z.can(o.Z.combine(E.Plq.CREATE_PRIVATE_THREADS), e)
                }), [e]);
                return e.type === E.d4z.GUILD_TEXT && T(t, e)
            }

            function b(e) {
                var t = I(e),
                    n = g(e);
                return t || n
            }

            function T(e, t, n) {
                if (__OVERLAY__) return !1;
                if (!e) return !1;
                if (!s.uC.has(t.type)) return !1;
                if (null != n) {
                    if (n.hasFlag(E.iLy.HAS_THREAD)) return !1;
                    if ((0, l.Z)(n)) return !1
                }
                return !0
            }

            function v(e) {
                var t = (0, a.e7)([d.Z], (function() {
                    return d.Z.getChannel(e.id)
                }), [e]);
                return function(e, t, n) {
                    return !!t.hasFlag(E.iLy.HAS_THREAD) && (null != n && !!e)
                }((0, a.e7)([p.Z], (function() {
                    return p.Z.can(E.Plq.VIEW_CHANNEL, t)
                }), [t]), e, t)
            }

            function m(e) {
                return (0, a.cj)([_.Z, p.Z], (function() {
                    var t = _.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        n = _.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        r = _.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        o = i()(n).some((function(e) {
                            return p.Z.can(E.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        a = i()(t).some((function(e) {
                            return !(e.channel.id in n) && p.Z.can(E.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        u = i()(r).some((function(e) {
                            return p.Z.can(E.Plq.VIEW_CHANNEL, e)
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
                        return null != t && p.Z.can(E.Plq.MANAGE_THREADS, t)
                    }), [t]),
                    r = (0, a.e7)([f.default], (function() {
                        return f.default.getId()
                    }));
                return null != e && null != t && (!!e.isThread() && (!!n || !e.isLockedThread() && e.ownerId === r))
            }

            function y(e, t) {
                return null != e && t.can(E.Plq.SEND_MESSAGES_IN_THREADS, e)
            }

            function A(e, t, n) {
                var r;
                return !(null == e || !e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
            }

            function N(e) {
                var t = (0, a.e7)([p.Z], (function() {
                        return y(e, p.Z)
                    })),
                    n = M(e);
                return A(e, t, n)
            }

            function P(e) {
                return A(e, y(e, p.Z), D(e))
            }

            function R(e) {
                var t, n = (0, a.e7)([p.Z], (function() {
                    return null != e && p.Z.can(E.Plq.SEND_MESSAGES_IN_THREADS, e)
                }));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) && n)
            }

            function C(e) {
                var t;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) && p.Z.can(E.Plq.SEND_MESSAGES_IN_THREADS, e))
            }

            function L(e) {
                var t = p.Z.can(E.Plq.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !t
            }

            function U(e, t) {
                return null != e && t.can(E.Plq.MANAGE_THREADS, e)
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
                var t = (0, c.Z)(),
                    n = (0, a.e7)([p.Z], (function() {
                        return p.Z.can(E.Plq.CONNECT, e)
                    })),
                    r = R(e),
                    i = h.useExperiment({
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
        914136: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => Y
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(971402),
                a = n(343639),
                u = n(567678),
                c = n(73904),
                l = n(82055),
                s = n(153686),
                f = n(950761),
                d = n(492692),
                p = n(289150),
                _ = n(737331),
                E = n(112897),
                h = n(434651),
                I = n(332349),
                O = n(575351),
                g = n(202351),
                b = n(61209),
                T = n(567403),
                v = n(682776),
                m = n(473903),
                S = n(771575),
                y = n(933022),
                A = n(2590),
                N = n(473708);
            var P = n(662851),
                R = n(343315),
                C = n(171384),
                L = n(430198),
                U = n(699050),
                M = n(836448),
                D = n(441738),
                w = n(982348),
                Z = n(578142),
                G = n(827991),
                j = n(93439),
                k = n(100856),
                x = n(598955),
                F = n(536130),
                H = n(973424),
                B = n(234617),
                V = n(394212);
            const Y = (0, u.Z)((0, a.Z)((function(e) {
                var t = e.user,
                    n = e.guildId,
                    a = e.channel,
                    u = e.showMediaItems,
                    s = void 0 !== u && u,
                    Y = e.showChatItems,
                    W = void 0 === Y || Y,
                    K = e.showChannelCallItems,
                    q = void 0 !== K && K,
                    z = e.showModalItems,
                    Q = void 0 === z || z,
                    J = e.showStageChannelItems,
                    X = void 0 !== J && J,
                    $ = e.context,
                    ee = e.onSelect,
                    te = e.onHeightUpdate,
                    ne = (0, F.Z)(t.id, n, a.id),
                    re = (0, G.Z)(t, n, $),
                    ie = (0, j.Z)(t.id, $),
                    oe = (0, V.Z)(t.id),
                    ae = (0, D.Z)(t, $),
                    ue = (0, C.Z)({
                        user: t,
                        guildId: n,
                        context: $
                    }),
                    ce = (0, R.Z)(t),
                    le = (0, B.Z)(t.id),
                    se = (0, x.Z)(t.id),
                    fe = (0, h.Z)({
                        guildId: n,
                        userId: t.id,
                        analyticsLocation: {
                            page: A.ZY5.GUILD_CHANNEL,
                            section: A.jXE.CHAT_USERNAME,
                            object: A.qAy.CONTEXT_MENU_ITEM
                        },
                        context: $
                    }),
                    de = (0, Z.Z)(t, n),
                    pe = (0, l.Z)(null, t),
                    _e = (0, P.Z)(t),
                    Ee = (0, M.Z)(t),
                    he = (0, L.Z)(t, n, a.id),
                    Ie = (0, H.Z)(t.id, n),
                    Oe = (0, k.Z)(t, n),
                    ge = (0, E.Z)({
                        id: t.id,
                        label: N.Z.Messages.COPY_ID_USER
                    }),
                    be = (0, w.Z)(t.id, a.id),
                    Te = (0, d.Z)(t.id),
                    ve = (0, f.Z)(a.id),
                    me = (0, O.Z)(t),
                    Se = function(e, t, n) {
                        var o, a = b.Z.getChannel(n),
                            u = (0, g.e7)([T.Z], (function() {
                                return T.Z.getGuild(t)
                            }), [t]),
                            c = (0, g.e7)([y.ZP], (function() {
                                return y.ZP.getPermissionsForUser(e.id, n)
                            }), [n, e.id]),
                            l = (null === (o = m.default.getCurrentUser()) || void 0 === o ? void 0 : o.id) === e.id,
                            s = (0, g.e7)([v.Z], (function() {
                                return null != n && v.Z.canWithPartialContext(A.Plq.MUTE_MEMBERS, {
                                    channelId: n
                                })
                            }), [n]);
                        return null == a || null == u ? null : (s || l) && c.speaker ? (0, r.jsx)(i.MenuItem, {
                            id: "audience",
                            label: l ? N.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : N.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                            action: function() {
                                l ? (0, S.yi)(a) : (0, S.hz)(e, a)
                            }
                        }) : null
                    }(t, n, a.id),
                    ye = (0, U.Z)({
                        commandType: c.yU.USER,
                        commandTargetId: t.id,
                        channel: a,
                        guildId: n,
                        location: "GuildChannelUserContextMenu",
                        onShow: te
                    }),
                    Ae = (0, p.Z)(t.id),
                    Ne = (0, I.Z)(t, n, $),
                    Pe = t.isNonUserBot(),
                    Re = t.isClyde(),
                    Ce = (0, _.R8)();
                return (0, r.jsxs)(i.Menu, {
                    navId: "user-context",
                    onClose: o.Zy,
                    "aria-label": N.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: ee,
                    children: [!Pe && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(i.MenuGroup, {
                            children: [me, X && Se]
                        }), (0, r.jsxs)(i.MenuGroup, {
                            children: [Q && ne, W && re, ie, ae, Q && ue, Q && ce, oe]
                        }), s && (0,
                            r.jsx)(i.MenuGroup, {
                            children: le
                        }), (0, r.jsx)(i.MenuGroup, {
                            children: Q && pe
                        }), (0, r.jsxs)(i.MenuGroup, {
                            children: [s && se, s && be, Q && fe, ye, Ne, Q && de, _e, Q && Ee, q && Ae]
                        }), (0, r.jsx)(i.MenuGroup, {
                            children: he
                        }), (0, r.jsxs)(i.MenuGroup, {
                            children: [Ie, Oe]
                        }), q && (0, r.jsxs)(i.MenuGroup, {
                            children: [ve, Te]
                        })]
                    }), Re && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(i.MenuGroup, {
                            children: [Q && ne, Ce && ie]
                        }), (0, r.jsx)(i.MenuGroup, {
                            children: he
                        })]
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: ge
                    })]
                })
            }), {
                object: A.qAy.CONTEXT_MENU
            }), [s.Z.CONTEXT_MENU, s.Z.GUILD_CHANNEL_USER_MENU])
        },
        699050: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                i = n(667294),
                o = n(441143),
                a = n.n(o),
                u = n(202351),
                c = n(304548),
                l = n(219217),
                s = n(272200),
                f = n(248046),
                d = n(698847),
                p = n(242922),
                _ = n(767846),
                E = n.n(_);
            const h = function() {
                return (0, r.jsx)("div", {
                    className: E().loadingWrapper,
                    children: (0, r.jsx)(c.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
            };
            var I = n(567403),
                O = n(127624),
                g = n(473708),
                b = n(929945),
                T = n.n(b);
            const v = function(e) {
                var t = e.commandType,
                    n = e.commandTargetId,
                    o = e.channel,
                    _ = e.guildId,
                    E = e.onShow,
                    b = e.location,
                    v = i.useRef(!1),
                    m = i.useRef(0),
                    S = (0, u.e7)([I.Z], (function() {
                        return I.Z.getGuild(null != _ ? _ : o.guild_id)
                    })),
                    y = (0, l.o)(o, {
                        commandType: t
                    }, {
                        location: b,
                        placeholderCount: O.Mn,
                        limit: O.lr
                    }),
                    A = y.hasMoreAfter,
                    N = y.scrollDown,
                    P = y.sectionDescriptors,
                    R = y.commands,
                    C = y.placeholders,
                    L = i.useMemo((function() {
                        var e = R.concat(C),
                            t = {};
                        P.forEach((function(e) {
                            t[e.id] = e
                        }));
                        return {
                            visibleCommands: e,
                            sections: t
                        }
                    }), [R, P, C]),
                    U = L.visibleCommands,
                    M = L.sections,
                    D = i.useMemo((function() {
                        return (0, f.nT)(o, t, U.length, null == S ? void 0 : S.applicationCommandCounts)
                    }), [o, t, null == S ? void 0 : S.applicationCommandCounts, U.length]);
                i.useEffect((function() {
                    if (D !== v.current) {
                        D && (null == E || E());
                        v.current = D
                    }
                }), [D, E]);
                i.useEffect((function() {
                    w(m.current)
                }), [U]);
                var w = i.useCallback((function(e) {
                        A && e + 500 > 34 * U.length - 40 && N();
                        m.current = e
                    }), [A, N, U]),
                    Z = i.useCallback((function(e) {
                        if (e.inputType === s.iw.PLACEHOLDER) return (0, r.jsx)(c.MenuItem, {
                            id: "menu-command-".concat(e.id),
                            render: function() {
                                return (0, r.jsx)(h, {})
                            }
                        }, "menu-command-".concat(e.id));
                        a()(null != o, "menu item should not show if channel is null");
                        var t = M[e.applicationId],
                            i = null != t ? (0, p.ky)(t) : void 0;
                        return (0, r.jsx)(c.MenuItem, {
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
                return D && (0, r.jsx)(c.MenuItem, {
                    id: "apps",
                    label: g.Z.Messages.APPS,
                    onChildrenScroll: w,
                    childRowHeight: 34,
                    listClassName: T().list,
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
                c = n(407561),
                l = n(2590),
                s = n(473708);

            function f(e, t) {
                var n = (0, i.e7)([u.Z], (function() {
                    return e === u.Z.getSelectedParticipantId(t)
                }), [t, e]);
                return (0, i.e7)([u.Z, c.Z], (function() {
                    var n = c.Z.isInChannel(t, e) && c.Z.hasVideo(t),
                        r = u.Z.getLayout(t),
                        i = r === l.AEg.MINIMUM || r === l.AEg.NORMAL;
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
        827991: (e, t, n) => {
            "use strict";
            n.d(t, {
                q: () => h,
                Z: () => I
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(224134),
                u = n(61209),
                c = n(682776),
                l = n(715107),
                s = n(930948),
                f = n(749565),
                d = n(2590),
                p = n(473708);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t) {
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
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e, t) {
                var n = e.id,
                    r = "@".concat(f.ZP.getUserTag(e, {
                        decoration: "never"
                    })),
                    i = "<@".concat(n, ">");
                s.S.dispatchToLastSubscribed(d.CkL.INSERT_TEXT, {
                    plainText: r,
                    rawText: i
                });
                null != t && a.Z.startTyping(t)
            }

            function I(e, t, n) {
                var a = E((0, i.Wu)([l.Z, u.Z, c.Z], (function() {
                        var e = l.Z.getChannelId(t),
                            n = u.Z.getChannel(e);
                        return [e, null != n && (n.isMultiUserDM() || c.Z.can(d.Plq.SEND_MESSAGES, n))]
                    }), [t]), 2),
                    s = a[0],
                    f = a[1],
                    _ = n === d.IlC.POPOUT;
                return !f || _ ? null : (0, r.jsx)(o.MenuItem, {
                    id: "mention",
                    label: p.Z.Messages.MENTION,
                    action: function() {
                        h(e, s)
                    }
                })
            }
        },
        93439: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(761953),
                a = n(735885),
                u = n(664625),
                c = n(2590),
                l = n(473708);

            function s(e, t) {
                var n = u.default.getId(),
                    s = t === c.IlC.POPOUT;
                return n === e || s ? null : (0, r.jsx)(i.MenuItem, {
                    id: "message-user",
                    label: l.Z.Messages.USER_POPOUT_MESSAGE,
                    action: function() {
                        o.Z.openPrivateChannel(e);
                        (0, a.xf)()
                    }
                })
            }
        },
        100856: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(327499),
                u = n(116404),
                c = n(773011),
                l = n(664625),
                s = n(61209),
                f = n(5544),
                d = n(21372),
                p = n(567403),
                _ = n(682776),
                E = n(840922),
                h = n(473903),
                I = n(407561),
                O = n(176758),
                g = n(563135),
                b = n(2590),
                T = n(473708);

            function v(e, t) {
                var n = (0, i.e7)([f.ZP], (function() {
                        return f.ZP.getChannels(t)[f.Zb]
                    }), [t]),
                    v = (0, i.e7)([I.Z, s.Z], (function() {
                        var n = I.Z.getUserVoiceChannelId(t, e.id);
                        return s.Z.getChannel(n)
                    }), [t, e.id]);
                if ((0, i.e7)([d.ZP], (function() {
                        return d.ZP.isGuestOrLurker(t, e.id)
                    }), [t, e.id])) return null;
                if (null == v) return null;
                var m = e.id === l.default.getId();
                if (!m && !_.Z.can(b.Plq.MOVE_MEMBERS, v)) return null;
                var S = n.filter((function(t) {
                    var n = t.channel;
                    return n.id !== v.id && (m ? _.Z.can(b.Plq.CONNECT, n) && !(0, O.rY)(n, I.Z, p.Z) : _.Z.can(b.Plq.MOVE_MEMBERS, n) && (_.Z.can(b.Plq.CONNECT, n) || g.ZP.can({
                        permission: b.Plq.CONNECT,
                        user: e,
                        context: n
                    })) && !(0, O.rY)(n, I.Z, p.Z))
                }));
                return 0 === S.length ? null : (0, r.jsx)(o.MenuItem, {
                    id: "voice-move",
                    label: T.Z.Messages.MOVE_TO,
                    children: S.map((function(n) {
                        var i = n.channel;
                        return (0, r.jsx)(o.MenuItem, {
                            id: i.id,
                            action: function() {
                                return function(n) {
                                    e.id === l.default.getId() ? u.default.selectVoiceChannel(n.id) : a.Z.setChannel(t, e.id, n.id)
                                }(i)
                            },
                            label: (0, c.F6)(i, h.default, E.Z)
                        }, i.id)
                    }))
                })
            }
        },
        234617: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                a = n(656645),
                u = n(973469),
                c = n(473903),
                l = n(615457),
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

            function h(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    p = (0, i.e7)([u.Z], (function() {
                        return u.Z.getLocalVolume(e, n)
                    }), [e, n]),
                    h = e === (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    I = n === f.Yn.STREAM;
                return h ? null : (0, r.jsx)(o.MenuControlItem, {
                    id: "user-volume",
                    label: I ? d.Z.Messages.STREAM_VOLUME : d.Z.Messages.USER_VOLUME,
                    control: function(t, i) {
                        return (0, r.jsx)(o.MenuSliderControl, E(_({}, t), {
                            ref: i,
                            value: (0, l.P)(p),
                            maxValue: s.FB ? 200 : 100,
                            onChange: function(t) {
                                return a.Z.setLocalVolume(e, (0, l.A)(t), n)
                            },
                            "aria-label": I ? d.Z.Messages.STREAM_VOLUME : d.Z.Messages.USER_VOLUME
                        }))
                    }
                })
            }
        },
        232806: (e, t, n) => {
            "use strict";
            n.d(t, {
                xV: () => o,
                dp: () => a,
                X7: () => u,
                E1: () => c,
                f7: () => l,
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
                c = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10, a.OPTION_1, a.OPTION_2, a.OPTION_3, a.OPTION_4].reduce((function(e, t, n) {
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
                l = "blur",
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
                i = n(973469),
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
                Z: () => l
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

            function c(e) {
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
            const l = function(e) {
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
                var t = c(n);

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
                Z: () => h
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

            function c(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
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
                    return c(this, n)
                }
            }
            var p = [];

            function _() {
                p = []
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
                    t && l(e, t)
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
            E.displayName = "LayerStore";
            const h = new E(i.Z, {
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
                c = n(744564),
                l = n(83797),
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

            function I(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
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
                }(e, t) || v(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || v(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e, t) {
                if (e) {
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
                }
            }

            function m(e) {
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
                    return I(this, n)
                }
            }
            var S = Object.freeze([]),
                y = {},
                A = {},
                N = {},
                P = {},
                R = {};

            function C(e, t) {
                var n = y[e];
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
                return (0, l.Z)(e) ? 1 : 0
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
                delete P[e];
                if (null != y[e]) {
                    var t = g(a().sortBy(y[e], (function(e) {
                            return -e.timestamp
                        })), 1),
                        n = t[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        A[e] = n.status;
                        N[e] = n.activities;
                        null != n.clientStatus && (P[e] = n.clientStatus)
                    } else a().every(y[e], (function(e) {
                        return e.status === d.Skl.OFFLINE
                    })) && delete y[e]
                }
            }

            function w(e) {
                var t = y[e];
                if (null != t) {
                    var n = a().maxBy(Object.values(t), (function(e) {
                        return e.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        A[e] = n.status;
                        N[e] = n.activities;
                        null != n.clientStatus && (P[e] = n.clientStatus)
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
                var u = y[n];
                if (null == u) {
                    if (r === d.Skl.OFFLINE) return !1;
                    u = y[n] = {}
                }
                if (r === d.Skl.OFFLINE) u[t] = {
                    status: r,
                    clientStatus: o,
                    activities: S,
                    timestamp: Date.now()
                };
                else {
                    var c = a.length > 1 ? b(a).sort(M) : a,
                        l = u[t];
                    a = null != l && i()(l.activities, c) ? l.activities : c;
                    u[t] = {
                        status: r,
                        clientStatus: o,
                        activities: a,
                        timestamp: Date.now()
                    }
                }
                delete R[n];
                D(n);
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
                    var u = y[n];
                    if (null == u) {
                        if (r === d.Skl.OFFLINE) return;
                        u = y[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) u[t] = {
                        status: r,
                        clientStatus: i,
                        activities: S,
                        timestamp: Date.now()
                    };
                    else {
                        var c = o.length > 1 ? b(o).sort(M) : o;
                        u[t] = {
                            status: r,
                            clientStatus: i,
                            activities: c,
                            timestamp: a
                        }
                    }
                }
            }

            function j(e, t) {
                if (t === s.default.getId()) return !1;
                var n = y[t];
                if (null == n || null == n[e]) return !1;
                delete n[e];
                0 === Object.keys(n).length && delete y[t];
                D(t)
            }

            function k(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = Object.keys(y)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        j(e, i.value)
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
                    t && O(e, t)
                }(n, e);
                var t = m(n);

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
                    var o, a = C(e, t);
                    return null !== (o = null == a ? void 0 : a.status) && void 0 !== o ? o : n
                };
                r.getActivities = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == t) {
                        var n;
                        return null !== (n = N[e]) && void 0 !== n ? n : S
                    }
                    var r = C(e, t);
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
                                c = N[u],
                                l = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, p = c[Symbol.iterator](); !(l = (d = p.next()).done); l = !0) {
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
                                    l || null == p.return || p.return()
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
                    return Object.keys(N)
                };
                r.isMobileOnline = function(e) {
                    var t = P[e];
                    return null != t && t[d.X5t.MOBILE] === d.Skl.ONLINE && t[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: y,
                        statuses: A,
                        activities: N,
                        activityMetadata: R,
                        clientStatuses: P
                    }
                };
                return n
            }(u.ZP.Store);
            x.displayName = "PresenceStore";
            const F = new x(c.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds,
                        n = e.presences,
                        r = s.default.getId();
                    y = {};
                    R = {};
                    A = E({}, r, A[r]);
                    N = E({}, r, N[r]);
                    P = E({}, r, {});
                    var i = new Set,
                        o = Date.now();
                    t.forEach((function(e) {
                        e.presences.forEach((function(t) {
                            var n = t.user,
                                r = t.status,
                                a = t.clientStatus,
                                u = t.activities;
                            G({
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
                    i.forEach(w)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.presences;
                    y = t.presencesForGuilds;
                    A = t.statuses;
                    N = t.activities;
                    R = t.activityMetadata
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
                    return j(e.guildId, e.user.id)
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
                    R[t] = n;
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
                    delete R[t]
                }
            })
        },
        223219: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => j
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                a = n(744564),
                u = n(473903),
                c = n(2590);

            function l(e, t) {
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
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
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
            var h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

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
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var O = c.QZA.CLOSED,
                g = null,
                b = null,
                T = {},
                v = {},
                m = {},
                S = null,
                y = null,
                A = !1,
                N = !1,
                P = null,
                R = null,
                C = null,
                L = [],
                U = null,
                M = null;

            function D(e) {
                var t, n, r, i, o, a, l = u.default.getCurrentUser();
                if (null == l) return w();
                b = null !== (t = e.section) && void 0 !== t ? t : b;
                U = null !== (n = e.section) && void 0 !== n ? n : b;
                null != e.subsection && null != b && (T[b] = e.subsection);
                null != e.scrollPosition && null != b && (v[b] = e.scrollPosition);
                N = !!e.openWithoutBackstack;
                O = c.QZA.OPEN;
                m = {};
                S = f({}, c.oAB.ACCOUNT, {
                    userId: l.id,
                    username: l.username,
                    discriminator: l.discriminator,
                    email: l.email,
                    avatar: l.avatar,
                    password: "",
                    newPassword: null,
                    claimed: l.isClaimed()
                });
                y = p({}, S);
                R = null !== (r = e.onClose) && void 0 !== r ? r : null;
                C = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null;
                L = null !== (o = e.analyticsLocations) && void 0 !== o ? o : [];
                M = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function w() {
                O = c.QZA.CLOSED;
                A = !1;
                S = null;
                U = null;
                y = null;
                g = null;
                b = null;
                T = {};
                v = {};
                R = null;
                C = null;
                L = [];
                M = null
            }

            function Z() {
                O = c.QZA.OPEN;
                m = {}
            }
            var G = function(e) {
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
                var t = I(n);

                function n() {
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.default)
                };
                r.hasChanges = function() {
                    return null != y && null != S && (!(!this.isOpen() && P !== c.cII.USER_SETTINGS) && !i().isEqual(y, S))
                };
                r.isOpen = function() {
                    return A
                };
                r.getPreviousSection = function() {
                    return g
                };
                r.getSection = function() {
                    return b
                };
                r.getSubsection = function() {
                    return null != b ? T[b] : null
                };
                r.getScrollPosition = function() {
                    return null != b ? v[b] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return N
                };
                r.getProps = function() {
                    return {
                        submitting: O === c.QZA.SUBMITTING,
                        section: b,
                        subsection: null != b ? T[b] : null,
                        scrollPosition: null != b ? v[b] : null,
                        settings: y,
                        errors: m,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: N,
                        analyticsLocation: C,
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
                        return R
                    }
                }]);
                return n
            }(o.ZP.Store);
            G.displayName = "UserSettingsModalStore";
            const j = new G(a.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    A = !0;
                    D(e)
                },
                USER_SETTINGS_MODAL_INIT: D,
                USER_SETTINGS_MODAL_CLOSE: w,
                LOGOUT: w,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    O = c.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (O !== c.QZA.SUBMITTING) return !1;
                    O = c.QZA.OPEN;
                    b = c.oAB.ACCOUNT;
                    var t;
                    m = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    g = b;
                    b = e.section;
                    C = null;
                    var t;
                    L = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (T[b] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete T[t] : null != b && delete T[b]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete v[t] : null != b && delete v[b]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == y && (y = {});
                    var n = y[c.oAB.ACCOUNT];
                    y[c.oAB.ACCOUNT] = p({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: Z,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = u.default.getCurrentUser();
                    Z();
                    if (null != e) {
                        S = f({}, c.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        y = p({}, S)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    P = e.tab;
                    return null == b && P === c.cII.USER_SETTINGS && D({
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

            function c(e, t) {
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
                    c = void 0 === u ? "currentColor" : u,
                    l = e.foreground,
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
                        className: l,
                        fill: c,
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
                    E = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", c(function(e) {
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
                }({}, (0, a.Z)(E)), {
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
                Z: () => h
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

            function c(e, t) {
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
                    l = (void 0 === a ? {} : a).onEarlyClose,
                    p = function() {
                        null == l || l()
                    },
                    _ = function(e) {
                        f(O);
                        n(e)
                    },
                    h = function(e) {
                        f(O);
                        r(e)
                    },
                    I = function(e) {
                        var t = e.res;
                        d(O, g, p, c(u({}, o), {
                            error: t.body.message
                        }))
                    };
                if (null != s) var O = s(g, p, o);
                else null == l || l();

                function g(e) {
                    d(O, g, p, c(u({}, o), {
                        isLoading: !0
                    }));
                    return E({
                        promiseFn: t,
                        resolve: _,
                        reject: h,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }
            }

            function E(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    i = e.code,
                    o = e.mfaCodeHandler,
                    a = void 0 === o ? _ : o,
                    c = e.isModalOpen,
                    s = void 0 !== c && c,
                    f = l(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
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

            function h(e, t) {
                var n, i, a = null != t ? t : {},
                    c = a.checkEnabled,
                    s = void 0 === c ? null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i : c,
                    f = l(a, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (o(s) ? _ : E)(u({
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

            function c(e) {
                return u[e]
            }
            var l, s = n(793461);
            l = n(162383).j;

            function f(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    i = c(t);
                return d(null !== (n = i[e]) && void 0 !== n ? n : e, e, r)
            }

            function d(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return new l(e, t, n)
            }

            function p(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                if (!s.Z.disableSounds) {
                    var r, o = c(i.Z.getSoundpack()),
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
                fG: () => G
            });
            var r = n(306472),
                i = n(737264),
                o = n(496486),
                a = n.n(o),
                u = n(809784),
                c = n(296602),
                l = n(384411),
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

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function I(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            h(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            h(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function O(e, t) {
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
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = function(e, t) {
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
                                    (r = 0,
                                        i) && (o = [2 & o[0], i.value]);
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
                T = new c.Z("Spellchecker"),
                v = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function m(e) {
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
            var S = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = g(l.default.locale.split("-"), 2),
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
                        t && O(e.prototype, t);
                        n && O(e, n)
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
                y = a().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, u.k)(e, HTMLInputElement) || (0, u.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, u.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function A(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return y(e, t.target)
                }), !0)
            }

            function N() {
                return (N = I((function() {
                    var e, t, n, r;
                    return b(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, v.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = i.sent()) && void 0 !== e ? e : [];
                                n = t.map(m).filter(s.lm);
                                A(r = new S(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var P = n(120415);

            function R(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function C(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            R(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            R(o, r, i, a, u, "throw", e)
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
                                (r = 0,
                                    i) && (o = [2 & o[0], i.value]);
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
                return (0, P.nI)() && U()
            }
            var D = M() ? function() {
                return N.apply(this, arguments)
            }() : null;

            function w(e) {
                return Z.apply(this, arguments)
            }

            function Z() {
                return (Z = C((function(e) {
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

            function G(e) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = C((function(e) {
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
                x = C((function(e) {
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
                H = C((function(e) {
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
                return (V = C((function(e) {
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
                return (W = C((function(e) {
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
                Z: () => l
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

            function c(e, t, n) {
                var r = t.trackedActionData,
                    o = u(t, ["trackedActionData"]),
                    c = {
                        url: o.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(o).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, a({
                            status_code: e.status
                        }, c, n));
                        t(e)
                    })).catch((function(e) {
                        var t, o, u = r.properties;
                        "function" == typeof r.properties && (u = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, a({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message
                        }, c, u));
                        n(e)
                    }))
                }))
            }
            const l = {
                get: function(e) {
                    return c(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return c(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return c(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return c(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return c(r.ZP.delete, e, "del")
                }
            }
        },
        680918: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                showModal: () => c,
                updateModalProps: () => l
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

            function c(e, t, n) {
                return (0, i.h7)(u(e, t, n), {
                    onCloseCallback: t
                })
            }

            function l(e, t, n, r) {
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
                o = n(973469),
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
            var c = "default",
                l = c;

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
                    l = null != u ? u.deviceId : c
                })).catch((function() {
                    l = c
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
                            a.FB && i.setSinkId(l);
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

            function l(e, t) {
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
                        c = !1,
                        f = void 0;
                    try {
                        for (var d, p = o.entries()[Symbol.iterator](); !(u = (d = p.next()).done); u = !0) {
                            var _ = l(d.value, 2),
                                E = _[0],
                                h = _[1];
                            a[E] = h
                        }
                    } catch (e) {
                        c = !0;
                        f = e
                    } finally {
                        try {
                            u || null == p.return || p.return()
                        } finally {
                            if (c) throw f
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
                    u = c(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    l = new URL(e);
                for (var f in u) {
                    var d = u[f];
                    null != d && l.searchParams.set(f, d)
                }
                var p, _, E, h, I, O = encodeURIComponent(l.toString()),
                    g = encodeURIComponent(a()),
                    b = (E = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), h = null != (null === i() || void 0 === i() || null === (p = i().ua) || void 0 === p ? void 0 : p.match(E)), I = "Safari" === (null === i() || void 0 === i() ? void 0 : i().name) && !h, "iOS" !== (null === i() || void 0 === i() || null === (_ = i().os) || void 0 === _ ? void 0 : _.family) || I ? 1 : 0),
                    T = null != r ? encodeURIComponent(r) : null,
                    v = null != o ? encodeURIComponent(o) : null,
                    m = "".concat(s, "/?link=").concat(O, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(g, "&efr=").concat(b);
                null != T && (m += "&afl=".concat(T));
                null != v && (m += "&ifl=".concat(v));
                return m
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
                    c = i.round,
                    l = i.min,
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
                            c = null,
                            f = !1,
                            d = !1;
                        "string" == typeof e && (e = function(e) {
                            e = e.replace(o, "").replace(a, "").toLowerCase();
                            var t, n = !1;
                            if (C[e]) {
                                e = C[e];
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
                                t = (p = e.r, _ = e.g, E = e.b, {
                                    r: 255 * M(p, 255),
                                    g: 255 * M(_, 255),
                                    b: 255 * M(E, 255)
                                });
                                f = !0;
                                d = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"
                            } else if (V(e.h) && V(e.s) && V(e.v)) {
                                r = G(e.s);
                                u = G(e.v);
                                t = function(e, t, n) {
                                    e = 6 * M(e, 360);
                                    t = M(t, 100);
                                    n = M(n, 100);
                                    var r = i.floor(e),
                                        o = e - r,
                                        a = n * (1 - t),
                                        u = n * (1 - o * t),
                                        c = n * (1 - (1 - o) * t),
                                        l = r % 6;
                                    return {
                                        r: 255 * [n, u, a, a, c, n][l],
                                        g: 255 * [c, n, n, u, a, a][l],
                                        b: 255 * [a, a, c, n, n, u][l]
                                    }
                                }(e.h, r, u);
                                f = !0;
                                d = "hsv"
                            } else if (V(e.h) && V(e.s) && V(e.l)) {
                                r = G(e.s);
                                c = G(e.l);
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
                                            c = 2 * n - u;
                                        r = a(c, u, e + 1 / 3);
                                        i = a(c, u, e);
                                        o = a(c, u, e - 1 / 3)
                                    }
                                    return {
                                        r: 255 * r,
                                        g: 255 * i,
                                        b: 255 * o
                                    }
                                }(e.h, r, c);
                                f = !0;
                                d = "hsl"
                            }
                            e.hasOwnProperty("a") && (n = e.a)
                        }
                        var p, _, E;
                        n = U(n);
                        return {
                            ok: f,
                            format: e.format || d,
                            r: l(255, s(t.r, 0)),
                            g: l(255, s(t.g, 0)),
                            b: l(255, s(t.b, 0)),
                            a: n
                        }
                    }(e);
                    this._originalInput = e, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = c(100 * this._a) / 100, this._format = t.format || n.format;
                    this._gradientType = t.gradientType;
                    this._r < 1 && (this._r = c(this._r));
                    this._g < 1 && (this._g = c(this._g));
                    this._b < 1 && (this._b = c(this._b));
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
                        this._roundA = c(100 * this._a) / 100;
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
                            t = c(360 * e.h),
                            n = c(100 * e.s),
                            r = c(100 * e.v);
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
                            t = c(360 * e.h),
                            n = c(100 * e.s),
                            r = c(100 * e.l);
                        return 1 == this._a ? "hsl(" + t + ", " + n + "%, " + r + "%)" : "hsla(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
                    },
                    toHex: function(e) {
                        return E(this._r, this._g, this._b, e)
                    },
                    toHexString: function(e) {
                        return "#" + this.toHex(e)
                    },
                    toHex8: function(e) {
                        return function(e, t, n, r, i) {
                            var o = [Z(c(e).toString(16)), Z(c(t).toString(16)), Z(c(n).toString(16)), Z(j(r))];
                            if (i && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1)) return o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0);
                            return o.join("")
                        }(this._r, this._g, this._b, this._a, e)
                    },
                    toHex8String: function(e) {
                        return "#" + this.toHex8(e)
                    },
                    toRgb: function() {
                        return {
                            r: c(this._r),
                            g: c(this._g),
                            b: c(this._b),
                            a: this._a
                        }
                    },
                    toRgbString: function() {
                        return 1 == this._a ? "rgb(" + c(this._r) + ", " + c(this._g) + ", " + c(this._b) + ")" : "rgba(" + c(this._r) + ", " + c(this._g) + ", " + c(this._b) + ", " + this._roundA + ")"
                    },
                    toPercentageRgb: function() {
                        return {
                            r: c(100 * M(this._r, 255)) + "%",
                            g: c(100 * M(this._g, 255)) + "%",
                            b: c(100 * M(this._b, 255)) + "%",
                            a: this._a
                        }
                    },
                    toPercentageRgbString: function() {
                        return 1 == this._a ? "rgb(" + c(100 * M(this._r, 255)) + "%, " + c(100 * M(this._g, 255)) + "%, " + c(100 * M(this._b, 255)) + "%)" : "rgba(" + c(100 * M(this._r, 255)) + "%, " + c(100 * M(this._g, 255)) + "%, " + c(100 * M(this._b, 255)) + "%, " + this._roundA + ")"
                    },
                    toName: function() {
                        return 0 === this._a ? "transparent" : !(this._a < 1) && (L[E(this._r, this._g, this._b, !0)] || !1)
                    },
                    toFilter: function(e) {
                        var t = "#" + h(this._r, this._g, this._b, this._a),
                            n = t,
                            r = this._gradientType ? "GradientType = 1, " : "";
                        if (e) {
                            var i = d(e);
                            n = "#" + h(i._r, i._g, i._b, i._a)
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
                        return this._applyModification(b, arguments)
                    },
                    brighten: function() {
                        return this._applyModification(T, arguments)
                    },
                    darken: function() {
                        return this._applyModification(v, arguments)
                    },
                    desaturate: function() {
                        return this._applyModification(I, arguments)
                    },
                    saturate: function() {
                        return this._applyModification(O, arguments)
                    },
                    greyscale: function() {
                        return this._applyModification(g, arguments)
                    },
                    spin: function() {
                        return this._applyModification(m, arguments)
                    },
                    _applyCombination: function(e, t) {
                        return e.apply(null, [this].concat([].slice.call(t)))
                    },
                    analogous: function() {
                        return this._applyCombination(P, arguments)
                    },
                    complement: function() {
                        return this._applyCombination(S, arguments)
                    },
                    monochromatic: function() {
                        return this._applyCombination(R, arguments)
                    },
                    splitcomplement: function() {
                        return this._applyCombination(N, arguments)
                    },
                    triad: function() {
                        return this._applyCombination(y, arguments)
                    },
                    tetrad: function() {
                        return this._applyCombination(A, arguments)
                    }
                };
                d.fromRatio = function(e, t) {
                    if ("object" == typeof e) {
                        var n = {};
                        for (var r in e) e.hasOwnProperty(r) && (n[r] = "a" === r ? e[r] : G(e[r]));
                        e = n
                    }
                    return d(e, t)
                };

                function p(e, t, n) {
                    e = M(e, 255);
                    t = M(t, 255);
                    n = M(n, 255);
                    var r, i, o = s(e, t, n),
                        a = l(e, t, n),
                        u = (o + a) / 2;
                    if (o == a) r = i = 0;
                    else {
                        var c = o - a;
                        i = u > .5 ? c / (2 - o - a) : c / (o + a);
                        switch (o) {
                            case e:
                                r = (t - n) / c + (t < n ? 6 : 0);
                                break;
                            case t:
                                r = (n - e) / c + 2;
                                break;
                            case n:
                                r = (e - t) / c + 4
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
                        a = l(e, t, n),
                        u = o,
                        c = o - a;
                    i = 0 === o ? 0 : c / o;
                    if (o == a) r = 0;
                    else {
                        switch (o) {
                            case e:
                                r = (t - n) / c + (t < n ? 6 : 0);
                                break;
                            case t:
                                r = (n - e) / c + 2;
                                break;
                            case n:
                                r = (e - t) / c + 4
                        }
                        r /= 6
                    }
                    return {
                        h: r,
                        s: i,
                        v: u
                    }
                }

                function E(e, t, n, r) {
                    var i = [Z(c(e).toString(16)), Z(c(t).toString(16)), Z(c(n).toString(16))];
                    return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
                }

                function h(e, t, n, r) {
                    return [Z(j(r)), Z(c(e).toString(16)), Z(c(t).toString(16)), Z(c(n).toString(16))].join("")
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

                function I(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = d(e).toHsl();
                    n.s -= t / 100;
                    n.s = D(n.s);
                    return d(n)
                }

                function O(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = d(e).toHsl();
                    n.s += t / 100;
                    n.s = D(n.s);
                    return d(n)
                }

                function g(e) {
                    return d(e).desaturate(100)
                }

                function b(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = d(e).toHsl();
                    n.l += t / 100;
                    n.l = D(n.l);
                    return d(n)
                }

                function T(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = d(e).toRgb();
                    n.r = s(0, l(255, n.r - c(-t / 100 * 255)));
                    n.g = s(0, l(255, n.g - c(-t / 100 * 255)));
                    n.b = s(0, l(255, n.b - c(-t / 100 * 255)));
                    return d(n)
                }

                function v(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = d(e).toHsl();
                    n.l -= t / 100;
                    n.l = D(n.l);
                    return d(n)
                }

                function m(e, t) {
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

                function y(e) {
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

                function P(e, t, n) {
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

                function R(e, t) {
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
                        c = 0;
                    i = (n = n || {}).includeFallbackColors;
                    o = n.level;
                    a = n.size;
                    for (var l = 0; l < t.length; l++)
                        if ((r = d.readability(e, t[l])) > c) {
                            c = r;
                            u = d(t[l])
                        } if (d.isReadable(e, u, {
                            level: o,
                            size: a
                        }) || !i) return u;
                    n.includeFallbackColors = !1;
                    return d.mostReadable(e, ["#fff", "#000"], n)
                };
                var C = d.names = {
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
                    }(C);

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
                    e = l(t, s(0, parseFloat(e)));
                    n && (e = parseInt(e * t, 10) / 100);
                    return i.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
                }

                function D(e) {
                    return l(1, s(0, e))
                }

                function w(e) {
                    return parseInt(e, 16)
                }

                function Z(e) {
                    return 1 == e.length ? "0" + e : "" + e
                }

                function G(e) {
                    e <= 1 && (e = 100 * e + "%");
                    return e
                }

                function j(e) {
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
                Ue: () => O,
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

            function c(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function l(e) {
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
                    type: l(o),
                    id: l(a),
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
                    publicKey: l({
                        rp: l(o),
                        user: l({
                            id: l(a),
                            name: l(o),
                            displayName: l(o)
                        }),
                        challenge: l(a),
                        pubKeyCredParams: l(o),
                        timeout: s(o),
                        excludeCredentials: s([f]),
                        authenticatorSelection: s(o),
                        attestation: s(o),
                        extensions: s(d)
                    }),
                    signal: s(o)
                },
                E = {
                    type: l(o),
                    id: l(o),
                    rawId: l(a),
                    authenticatorAttachment: s(o),
                    response: l({
                        clientDataJSON: l(a),
                        attestationObject: l(a),
                        transports: c(o, (e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        }))
                    }),
                    clientExtensionResults: c(p, (e => e.getClientExtensionResults()))
                },
                h = {
                    mediation: s(o),
                    publicKey: l({
                        challenge: l(a),
                        timeout: s(o),
                        rpId: s(o),
                        allowCredentials: s([f]),
                        userVerification: s(o),
                        extensions: s(d)
                    }),
                    signal: s(o)
                },
                I = {
                    type: l(o),
                    id: l(o),
                    rawId: l(a),
                    authenticatorAttachment: s(o),
                    response: l({
                        clientDataJSON: l(a),
                        authenticatorData: l(a),
                        signature: l(a),
                        userHandle: l(a)
                    }),
                    clientExtensionResults: c(p, (e => e.getClientExtensionResults()))
                };
            async function O(e) {
                const t = await navigator.credentials.create(function(e) {
                    return u(r, _, e)
                }(e));
                return function(e) {
                    return u(i, E, e)
                }(t)
            }
            async function g(e) {
                const t = await navigator.credentials.get(function(e) {
                    return u(r, h, e)
                }(e));
                return function(e) {
                    return u(i, I, e)
                }(t)
            }
        }
    }
]);