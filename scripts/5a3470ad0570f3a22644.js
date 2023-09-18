(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [99676], {
        218156: (e, t) => {
            "use strict";
            ({
                value: !0
            });
            for (var r = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), n = {
                    alt: "altKey",
                    control: "ctrlKey",
                    meta: "metaKey",
                    shift: "shiftKey"
                }, u = {
                    add: "+",
                    break: "pause",
                    cmd: "meta",
                    command: "meta",
                    ctl: "control",
                    ctrl: "control",
                    del: "delete",
                    down: "arrowdown",
                    esc: "escape",
                    ins: "insert",
                    left: "arrowleft",
                    mod: r ? "meta" : "control",
                    opt: "alt",
                    option: "alt",
                    return: "enter",
                    right: "arrowright",
                    space: " ",
                    spacebar: " ",
                    up: "arrowup",
                    win: "meta",
                    windows: "meta"
                }, a = {
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    shift: 16,
                    control: 17,
                    alt: 18,
                    pause: 19,
                    capslock: 20,
                    escape: 27,
                    " ": 32,
                    pageup: 33,
                    pagedown: 34,
                    end: 35,
                    home: 36,
                    arrowleft: 37,
                    arrowup: 38,
                    arrowright: 39,
                    arrowdown: 40,
                    insert: 45,
                    delete: 46,
                    meta: 91,
                    numlock: 144,
                    scrolllock: 145,
                    ";": 186,
                    "=": 187,
                    ",": 188,
                    "-": 189,
                    ".": 190,
                    "/": 191,
                    "`": 192,
                    "[": 219,
                    "\\": 220,
                    "]": 221,
                    "'": 222
                }, o = 1; o < 20; o++) a["f" + o] = 111 + o;

            function i(e, t, r) {
                if (t && !("byKey" in t)) {
                    r = t;
                    t = null
                }
                Array.isArray(e) || (e = [e]);
                var n = e.map((function(e) {
                        return s(e, t)
                    })),
                    u = function(e) {
                        return n.some((function(t) {
                            return l(t, e)
                        }))
                    };
                return null == r ? u : u(r)
            }

            function s(e, t) {
                var r = t && t.byKey,
                    u = {},
                    a = (e = e.replace("++", "+add")).split("+"),
                    o = a.length;
                for (var i in n) u[n[i]] = !1;
                var s = !0,
                    l = !1,
                    d = void 0;
                try {
                    for (var D, h = a[Symbol.iterator](); !(s = (D = h.next()).done); s = !0) {
                        var v = D.value,
                            p = v.endsWith("?") && v.length > 1;
                        p && (v = v.slice(0, -1));
                        var C = f(v),
                            g = n[C];
                        1 !== o && g || (r ? u.key = C : u.which = c(v));
                        g && (u[g] = !p || null)
                    }
                } catch (e) {
                    l = !0;
                    d = e
                } finally {
                    try {
                        !s && h.return && h.return()
                    } finally {
                        if (l) throw d
                    }
                }
                return u
            }

            function l(e, t) {
                for (var r in e) {
                    var n = e[r],
                        u = void 0;
                    if (null != n && ((null != (u = "key" === r && null != t.key ? t.key.toLowerCase() : "which" === r ? 91 === n && 93 === t.which ? 91 : t.which : t[r]) || !1 !== n) && u !== n)) return !1
                }
                return !0
            }

            function c(e) {
                e = f(e);
                return a[e] || e.toUpperCase().charCodeAt(0)
            }

            function f(e) {
                e = e.toLowerCase();
                return e = u[e] || e
            }
            i;
            i;
            (function(e, t) {
                return i(e, t)
            });
            t.TB = function(e, t) {
                return i(e, {
                    byKey: !0
                }, t)
            };
            s;
            l;
            c;
            f
        },
        326470: (e, t, r) => {
            "use strict";
            var n = r(734155);

            function u(e) {
                if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
            }

            function a(e, t) {
                for (var r, n = "", u = 0, a = -1, o = 0, i = 0; i <= e.length; ++i) {
                    if (i < e.length) r = e.charCodeAt(i);
                    else {
                        if (47 === r) break;
                        r = 47
                    }
                    if (47 === r) {
                        if (a === i - 1 || 1 === o);
                        else if (a !== i - 1 && 2 === o) {
                            if (n.length < 2 || 2 !== u || 46 !== n.charCodeAt(n.length - 1) || 46 !== n.charCodeAt(n.length - 2))
                                if (n.length > 2) {
                                    var s = n.lastIndexOf("/");
                                    if (s !== n.length - 1) {
                                        if (-1 === s) {
                                            n = "";
                                            u = 0
                                        } else u = (n = n.slice(0, s)).length - 1 - n.lastIndexOf("/");
                                        a = i;
                                        o = 0;
                                        continue
                                    }
                                } else if (2 === n.length || 1 === n.length) {
                                n = "";
                                u = 0;
                                a = i;
                                o = 0;
                                continue
                            }
                            if (t) {
                                n.length > 0 ? n += "/.." : n = "..";
                                u = 2
                            }
                        } else {
                            n.length > 0 ? n += "/" + e.slice(a + 1, i) : n = e.slice(a + 1, i);
                            u = i - a - 1
                        }
                        a = i;
                        o = 0
                    } else 46 === r && -1 !== o ? ++o : o = -1
                }
                return n
            }
            var o = {
                resolve: function() {
                    for (var e, t = "", r = !1, o = arguments.length - 1; o >= -1 && !r; o--) {
                        var i;
                        if (o >= 0) i = arguments[o];
                        else {
                            void 0 === e && (e = n.cwd());
                            i = e
                        }
                        u(i);
                        if (0 !== i.length) {
                            t = i + "/" + t;
                            r = 47 === i.charCodeAt(0)
                        }
                    }
                    t = a(t, !r);
                    return r ? t.length > 0 ? "/" + t : "/" : t.length > 0 ? t : "."
                },
                normalize: function(e) {
                    u(e);
                    if (0 === e.length) return ".";
                    var t = 47 === e.charCodeAt(0),
                        r = 47 === e.charCodeAt(e.length - 1);
                    0 !== (e = a(e, !t)).length || t || (e = ".");
                    e.length > 0 && r && (e += "/");
                    return t ? "/" + e : e
                },
                isAbsolute: function(e) {
                    u(e);
                    return e.length > 0 && 47 === e.charCodeAt(0)
                },
                join: function() {
                    if (0 === arguments.length) return ".";
                    for (var e, t = 0; t < arguments.length; ++t) {
                        var r = arguments[t];
                        u(r);
                        r.length > 0 && (void 0 === e ? e = r : e += "/" + r)
                    }
                    return void 0 === e ? "." : o.normalize(e)
                },
                relative: function(e, t) {
                    u(e);
                    u(t);
                    if (e === t) return "";
                    if ((e = o.resolve(e)) === (t = o.resolve(t))) return "";
                    for (var r = 1; r < e.length && 47 === e.charCodeAt(r); ++r);
                    for (var n = e.length, a = n - r, i = 1; i < t.length && 47 === t.charCodeAt(i); ++i);
                    for (var s = t.length - i, l = a < s ? a : s, c = -1, f = 0; f <= l; ++f) {
                        if (f === l) {
                            if (s > l) {
                                if (47 === t.charCodeAt(i + f)) return t.slice(i + f + 1);
                                if (0 === f) return t.slice(i + f)
                            } else a > l && (47 === e.charCodeAt(r + f) ? c = f : 0 === f && (c = 0));
                            break
                        }
                        var d = e.charCodeAt(r + f);
                        if (d !== t.charCodeAt(i + f)) break;
                        47 === d && (c = f)
                    }
                    var D = "";
                    for (f = r + c + 1; f <= n; ++f) f !== n && 47 !== e.charCodeAt(f) || (0 === D.length ? D += ".." : D += "/..");
                    if (D.length > 0) return D + t.slice(i + c);
                    i += c;
                    47 === t.charCodeAt(i) && ++i;
                    return t.slice(i)
                },
                _makeLong: function(e) {
                    return e
                },
                dirname: function(e) {
                    u(e);
                    if (0 === e.length) return ".";
                    for (var t = e.charCodeAt(0), r = 47 === t, n = -1, a = !0, o = e.length - 1; o >= 1; --o)
                        if (47 === (t = e.charCodeAt(o))) {
                            if (!a) {
                                n = o;
                                break
                            }
                        } else a = !1;
                    return -1 === n ? r ? "/" : "." : r && 1 === n ? "//" : e.slice(0, n)
                },
                basename: function(e, t) {
                    if (void 0 !== t && "string" != typeof t) throw new TypeError('"ext" argument must be a string');
                    u(e);
                    var r, n = 0,
                        a = -1,
                        o = !0;
                    if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                        if (t.length === e.length && t === e) return "";
                        var i = t.length - 1,
                            s = -1;
                        for (r = e.length - 1; r >= 0; --r) {
                            var l = e.charCodeAt(r);
                            if (47 === l) {
                                if (!o) {
                                    n = r + 1;
                                    break
                                }
                            } else {
                                if (-1 === s) {
                                    o = !1;
                                    s = r + 1
                                }
                                if (i >= 0)
                                    if (l === t.charCodeAt(i)) - 1 == --i && (a = r);
                                    else {
                                        i = -1;
                                        a = s
                                    }
                            }
                        }
                        n === a ? a = s : -1 === a && (a = e.length);
                        return e.slice(n, a)
                    }
                    for (r = e.length - 1; r >= 0; --r)
                        if (47 === e.charCodeAt(r)) {
                            if (!o) {
                                n = r + 1;
                                break
                            }
                        } else if (-1 === a) {
                        o = !1;
                        a = r + 1
                    }
                    return -1 === a ? "" : e.slice(n, a)
                },
                extname: function(e) {
                    u(e);
                    for (var t = -1, r = 0, n = -1, a = !0, o = 0, i = e.length - 1; i >= 0; --i) {
                        var s = e.charCodeAt(i);
                        if (47 !== s) {
                            if (-1 === n) {
                                a = !1;
                                n = i + 1
                            }
                            46 === s ? -1 === t ? t = i : 1 !== o && (o = 1) : -1 !== t && (o = -1)
                        } else if (!a) {
                            r = i + 1;
                            break
                        }
                    }
                    return -1 === t || -1 === n || 0 === o || 1 === o && t === n - 1 && t === r + 1 ? "" : e.slice(t, n)
                },
                format: function(e) {
                    if (null === e || "object" != typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                    return function(e, t) {
                        var r = t.dir || t.root,
                            n = t.base || (t.name || "") + (t.ext || "");
                        return r ? r === t.root ? r + n : r + e + n : n
                    }("/", e)
                },
                parse: function(e) {
                    u(e);
                    var t = {
                        root: "",
                        dir: "",
                        base: "",
                        ext: "",
                        name: ""
                    };
                    if (0 === e.length) return t;
                    var r, n = e.charCodeAt(0),
                        a = 47 === n;
                    if (a) {
                        t.root = "/";
                        r = 1
                    } else r = 0;
                    for (var o = -1, i = 0, s = -1, l = !0, c = e.length - 1, f = 0; c >= r; --c)
                        if (47 !== (n = e.charCodeAt(c))) {
                            if (-1 === s) {
                                l = !1;
                                s = c + 1
                            }
                            46 === n ? -1 === o ? o = c : 1 !== f && (f = 1) : -1 !== o && (f = -1)
                        } else if (!l) {
                        i = c + 1;
                        break
                    }
                    if (-1 === o || -1 === s || 0 === f || 1 === f && o === s - 1 && o === i + 1) - 1 !== s && (t.base = t.name = 0 === i && a ? e.slice(1, s) : e.slice(i, s));
                    else {
                        if (0 === i && a) {
                            t.name = e.slice(1, o);
                            t.base = e.slice(1, s)
                        } else {
                            t.name = e.slice(i, o);
                            t.base = e.slice(i, s)
                        }
                        t.ext = e.slice(o, s)
                    }
                    i > 0 ? t.dir = e.slice(0, i - 1) : a && (t.dir = "/");
                    return t
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null
            };
            o.posix = o;
            e.exports = o
        },
        857793: (e, t, r) => {
            "use strict";
            r.d(t, {
                CX: () => ir,
                F3: () => ot,
                mH: () => Cr,
                UE: () => hr,
                vt: () => xt,
                _7: () => pt,
                BU: () => Fr
            });
            var n = r(451080),
                u = r.n(n),
                a = r(408512),
                o = r.n(a),
                i = r(649911),
                s = r.n(i),
                l = r(667294);

            function c(e) {
                return "object" == typeof e && null != e && 1 === e.nodeType
            }

            function f(e, t) {
                return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e
            }

            function d(e, t) {
                if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
                    var r = getComputedStyle(e, null);
                    return f(r.overflowY, t) || f(r.overflowX, t) || function(e) {
                        var t = function(e) {
                            if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                            try {
                                return e.ownerDocument.defaultView.frameElement
                            } catch (e) {
                                return null
                            }
                        }(e);
                        return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth)
                    }(e)
                }
                return !1
            }

            function D(e, t, r, n, u, a, o, i) {
                return a < e && o > t || a > e && o < t ? 0 : a <= e && i <= r || o >= t && i >= r ? a - e - n : o > t && i < r || a < e && i > r ? o - t + u : 0
            }
            var h = function(e, t) {
                var r = window,
                    n = t.scrollMode,
                    u = t.block,
                    a = t.inline,
                    o = t.boundary,
                    i = t.skipOverflowHiddenElements,
                    s = "function" == typeof o ? o : function(e) {
                        return e !== o
                    };
                if (!c(e)) throw new TypeError("Invalid target");
                for (var l, f, h = document.scrollingElement || document.documentElement, v = [], p = e; c(p) && s(p);) {
                    if ((p = null == (f = (l = p).parentElement) ? l.getRootNode().host || null : f) === h) {
                        v.push(p);
                        break
                    }
                    null != p && p === document.body && d(p) && !d(document.documentElement) || null != p && d(p, i) && v.push(p)
                }
                for (var C = r.visualViewport ? r.visualViewport.width : innerWidth, g = r.visualViewport ? r.visualViewport.height : innerHeight, B = window.scrollX || pageXOffset, E = window.scrollY || pageYOffset, m = e.getBoundingClientRect(), A = m.height, F = m.width, b = m.top, w = m.right, y = m.bottom, x = m.left, O = "start" === u || "nearest" === u ? b : "end" === u ? y : b + A / 2, k = "center" === a ? x + F / 2 : "end" === a ? w : x, P = [], M = 0; M < v.length; M++) {
                    var S = v[M],
                        T = S.getBoundingClientRect(),
                        L = T.height,
                        j = T.width,
                        R = T.top,
                        N = T.right,
                        _ = T.bottom,
                        W = T.left;
                    if ("if-needed" === n && b >= 0 && x >= 0 && y <= g && w <= C && b >= R && y <= _ && x >= W && w <= N) return P;
                    var I = getComputedStyle(S),
                        z = parseInt(I.borderLeftWidth, 10),
                        q = parseInt(I.borderTopWidth, 10),
                        V = parseInt(I.borderRightWidth, 10),
                        $ = parseInt(I.borderBottomWidth, 10),
                        Y = 0,
                        U = 0,
                        H = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - z - V : 0,
                        K = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - q - $ : 0,
                        X = "offsetWidth" in S ? 0 === S.offsetWidth ? 0 : j / S.offsetWidth : 0,
                        J = "offsetHeight" in S ? 0 === S.offsetHeight ? 0 : L / S.offsetHeight : 0;
                    if (h === S) Y = "start" === u ? O : "end" === u ? O - g : "nearest" === u ? D(E, E + g, g, q, $, E + O, E + O + A, A) : O - g / 2, U = "start" === a ? k : "center" === a ? k - C / 2 : "end" === a ? k - C : D(B, B + C, C, z, V, B + k, B + k + F, F), Y = Math.max(0, Y + E), U = Math.max(0, U + B);
                    else {
                        Y = "start" === u ? O - R - q : "end" === u ? O - _ + $ + K : "nearest" === u ? D(R, _, L, q, $ + K, O, O + A, A) : O - (R + L / 2) + K / 2, U = "start" === a ? k - W - z : "center" === a ? k - (W + j / 2) + H / 2 : "end" === a ? k - N + V + H : D(W, N, j, z, V + H, k, k + F, F);
                        var Z = S.scrollLeft,
                            G = S.scrollTop;
                        O += G - (Y = Math.max(0, Math.min(G + Y / J, S.scrollHeight - L / J + K))), k += Z - (U = Math.max(0, Math.min(Z + U / X, S.scrollWidth - j / X + H)))
                    }
                    P.push({
                        el: S,
                        top: Y,
                        left: U
                    })
                }
                return P
            };

            function v(e) {
                return e === Object(e) && 0 !== Object.keys(e).length
            }
            const p = function(e, t) {
                var r = e.isConnected || e.ownerDocument.documentElement.contains(e);
                if (v(t) && "function" == typeof t.behavior) return t.behavior(r ? h(e, t) : []);
                if (r) {
                    var n = function(e) {
                        return !1 === e ? {
                            block: "end",
                            inline: "nearest"
                        } : v(e) ? e : {
                            block: "start",
                            inline: "nearest"
                        }
                    }(t);
                    return function(e, t) {
                        void 0 === t && (t = "auto");
                        var r = "scrollBehavior" in document.body.style;
                        e.forEach((function(e) {
                            var n = e.el,
                                u = e.top,
                                a = e.left;
                            if (n.scroll && r) n.scroll({
                                top: u,
                                left: a,
                                behavior: t
                            });
                            else {
                                n.scrollTop = u;
                                n.scrollLeft = a
                            }
                        }))
                    }(h(e, n), n.behavior)
                }
            };
            var C, g = r(104182),
                B = [],
                E = "ResizeObserver loop completed with undelivered notifications.";
            ! function(e) {
                e.BORDER_BOX = "border-box";
                e.CONTENT_BOX = "content-box";
                e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
            }(C || (C = {}));
            var m, A = function(e) {
                    return Object.freeze(e)
                },
                F = function(e, t) {
                    this.inlineSize = e;
                    this.blockSize = t;
                    A(this)
                },
                b = function() {
                    function e(e, t, r, n) {
                        this.x = e;
                        this.y = t;
                        this.width = r;
                        this.height = n;
                        this.top = this.y;
                        this.left = this.x;
                        this.bottom = this.top + this.height;
                        this.right = this.left + this.width;
                        return A(this)
                    }
                    e.prototype.toJSON = function() {
                        var e = this;
                        return {
                            x: e.x,
                            y: e.y,
                            top: e.top,
                            right: e.right,
                            bottom: e.bottom,
                            left: e.left,
                            width: e.width,
                            height: e.height
                        }
                    };
                    e.fromRect = function(t) {
                        return new e(t.x, t.y, t.width, t.height)
                    };
                    return e
                }(),
                w = function(e) {
                    return e instanceof SVGElement && "getBBox" in e
                },
                y = function(e) {
                    if (w(e)) {
                        var t = e.getBBox(),
                            r = t.width,
                            n = t.height;
                        return !r && !n
                    }
                    var u = e,
                        a = u.offsetWidth,
                        o = u.offsetHeight;
                    return !(a || o || e.getClientRects().length)
                },
                x = function(e) {
                    var t;
                    if (e instanceof Element) return !0;
                    var r = null === (t = null == e ? void 0 : e.ownerDocument) || void 0 === t ? void 0 : t.defaultView;
                    return !!(r && e instanceof r.Element)
                },
                O = "undefined" != typeof window ? window : {},
                k = new WeakMap,
                P = /auto|scroll/,
                M = /^tb|vertical/,
                S = /msie|trident/i.test(O.navigator && O.navigator.userAgent),
                T = function(e) {
                    return parseFloat(e || "0")
                },
                L = function(e, t, r) {
                    void 0 === e && (e = 0);
                    void 0 === t && (t = 0);
                    void 0 === r && (r = !1);
                    return new F((r ? t : e) || 0, (r ? e : t) || 0)
                },
                j = A({
                    devicePixelContentBoxSize: L(),
                    borderBoxSize: L(),
                    contentBoxSize: L(),
                    contentRect: new b(0, 0, 0, 0)
                }),
                R = function(e, t) {
                    void 0 === t && (t = !1);
                    if (k.has(e) && !t) return k.get(e);
                    if (y(e)) {
                        k.set(e, j);
                        return j
                    }
                    var r = getComputedStyle(e),
                        n = w(e) && e.ownerSVGElement && e.getBBox(),
                        u = !S && "border-box" === r.boxSizing,
                        a = M.test(r.writingMode || ""),
                        o = !n && P.test(r.overflowY || ""),
                        i = !n && P.test(r.overflowX || ""),
                        s = n ? 0 : T(r.paddingTop),
                        l = n ? 0 : T(r.paddingRight),
                        c = n ? 0 : T(r.paddingBottom),
                        f = n ? 0 : T(r.paddingLeft),
                        d = n ? 0 : T(r.borderTopWidth),
                        D = n ? 0 : T(r.borderRightWidth),
                        h = n ? 0 : T(r.borderBottomWidth),
                        v = f + l,
                        p = s + c,
                        C = (n ? 0 : T(r.borderLeftWidth)) + D,
                        g = d + h,
                        B = i ? e.offsetHeight - g - e.clientHeight : 0,
                        E = o ? e.offsetWidth - C - e.clientWidth : 0,
                        m = u ? v + C : 0,
                        F = u ? p + g : 0,
                        x = n ? n.width : T(r.width) - m - E,
                        O = n ? n.height : T(r.height) - F - B,
                        R = x + v + E + C,
                        N = O + p + B + g,
                        _ = A({
                            devicePixelContentBoxSize: L(Math.round(x * devicePixelRatio), Math.round(O * devicePixelRatio), a),
                            borderBoxSize: L(R, N, a),
                            contentBoxSize: L(x, O, a),
                            contentRect: new b(f, s, x, O)
                        });
                    k.set(e, _);
                    return _
                },
                N = function(e, t, r) {
                    var n = R(e, r),
                        u = n.borderBoxSize,
                        a = n.contentBoxSize,
                        o = n.devicePixelContentBoxSize;
                    switch (t) {
                        case C.DEVICE_PIXEL_CONTENT_BOX:
                            return o;
                        case C.BORDER_BOX:
                            return u;
                        default:
                            return a
                    }
                },
                _ = function(e) {
                    var t = R(e);
                    this.target = e;
                    this.contentRect = t.contentRect;
                    this.borderBoxSize = A([t.borderBoxSize]);
                    this.contentBoxSize = A([t.contentBoxSize]);
                    this.devicePixelContentBoxSize = A([t.devicePixelContentBoxSize])
                },
                W = function(e) {
                    if (y(e)) return 1 / 0;
                    for (var t = 0, r = e.parentNode; r;) {
                        t += 1;
                        r = r.parentNode
                    }
                    return t
                },
                I = function() {
                    var e = 1 / 0,
                        t = [];
                    B.forEach((function(r) {
                        if (0 !== r.activeTargets.length) {
                            var n = [];
                            r.activeTargets.forEach((function(t) {
                                var r = new _(t.target),
                                    u = W(t.target);
                                n.push(r);
                                t.lastReportedSize = N(t.target, t.observedBox);
                                u < e && (e = u)
                            }));
                            t.push((function() {
                                r.callback.call(r.observer, n, r.observer)
                            }));
                            r.activeTargets.splice(0, r.activeTargets.length)
                        }
                    }));
                    for (var r = 0, n = t; r < n.length; r++) {
                        (0, n[r])()
                    }
                    return e
                },
                z = function(e) {
                    B.forEach((function(t) {
                        t.activeTargets.splice(0, t.activeTargets.length);
                        t.skippedTargets.splice(0, t.skippedTargets.length);
                        t.observationTargets.forEach((function(r) {
                            r.isActive() && (W(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r))
                        }))
                    }))
                },
                q = function() {
                    var e = 0;
                    z(e);
                    for (; B.some((function(e) {
                            return e.activeTargets.length > 0
                        }));) {
                        e = I();
                        z(e)
                    }
                    B.some((function(e) {
                        return e.skippedTargets.length > 0
                    })) && function() {
                        var e;
                        if ("function" == typeof ErrorEvent) e = new ErrorEvent("error", {
                            message: E
                        });
                        else {
                            (e = document.createEvent("Event")).initEvent("error", !1, !1);
                            e.message = E
                        }
                        window.dispatchEvent(e)
                    }();
                    return e > 0
                },
                V = [],
                $ = function(e) {
                    if (!m) {
                        var t = 0,
                            r = document.createTextNode("");
                        new MutationObserver((function() {
                            return V.splice(0).forEach((function(e) {
                                return e()
                            }))
                        })).observe(r, {
                            characterData: !0
                        });
                        m = function() {
                            r.textContent = "".concat(t ? t-- : t++)
                        }
                    }
                    V.push(e);
                    m()
                },
                Y = 0,
                U = {
                    attributes: !0,
                    characterData: !0,
                    childList: !0,
                    subtree: !0
                },
                H = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
                K = function(e) {
                    void 0 === e && (e = 0);
                    return Date.now() + e
                },
                X = !1,
                J = new(function() {
                    function e() {
                        var e = this;
                        this.stopped = !0;
                        this.listener = function() {
                            return e.schedule()
                        }
                    }
                    e.prototype.run = function(e) {
                        var t = this;
                        void 0 === e && (e = 250);
                        if (!X) {
                            X = !0;
                            var r, n = K(e);
                            r = function() {
                                var r = !1;
                                try {
                                    r = q()
                                } finally {
                                    X = !1;
                                    e = n - K();
                                    if (!Y) return;
                                    r ? t.run(1e3) : e > 0 ? t.run(e) : t.start()
                                }
                            }, $((function() {
                                requestAnimationFrame(r)
                            }))
                        }
                    };
                    e.prototype.schedule = function() {
                        this.stop();
                        this.run()
                    };
                    e.prototype.observe = function() {
                        var e = this,
                            t = function() {
                                return e.observer && e.observer.observe(document.body, U)
                            };
                        document.body ? t() : O.addEventListener("DOMContentLoaded", t)
                    };
                    e.prototype.start = function() {
                        var e = this;
                        if (this.stopped) {
                            this.stopped = !1;
                            this.observer = new MutationObserver(this.listener);
                            this.observe();
                            H.forEach((function(t) {
                                return O.addEventListener(t, e.listener, !0)
                            }))
                        }
                    };
                    e.prototype.stop = function() {
                        var e = this;
                        if (!this.stopped) {
                            this.observer && this.observer.disconnect();
                            H.forEach((function(t) {
                                return O.removeEventListener(t, e.listener, !0)
                            }));
                            this.stopped = !0
                        }
                    };
                    return e
                }()),
                Z = function(e) {
                    !Y && e > 0 && J.start();
                    !(Y += e) && J.stop()
                },
                G = function() {
                    function e(e, t) {
                        this.target = e;
                        this.observedBox = t || C.CONTENT_BOX;
                        this.lastReportedSize = {
                            inlineSize: 0,
                            blockSize: 0
                        }
                    }
                    e.prototype.isActive = function() {
                        var e, t = N(this.target, this.observedBox, !0);
                        (e = this.target, w(e) || function(e) {
                            switch (e.tagName) {
                                case "INPUT":
                                    if ("image" !== e.type) break;
                                case "VIDEO":
                                case "AUDIO":
                                case "EMBED":
                                case "OBJECT":
                                case "CANVAS":
                                case "IFRAME":
                                case "IMG":
                                    return !0
                            }
                            return !1
                        }(e) || "inline" !== getComputedStyle(e).display) || (this.lastReportedSize = t);
                        return this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
                    };
                    return e
                }(),
                Q = function(e, t) {
                    this.activeTargets = [];
                    this.skippedTargets = [];
                    this.observationTargets = [];
                    this.observer = e;
                    this.callback = t
                },
                ee = new WeakMap,
                te = function(e, t) {
                    for (var r = 0; r < e.length; r += 1)
                        if (e[r].target === t) return r;
                    return -1
                },
                re = function() {
                    function e() {}
                    e.connect = function(e, t) {
                        var r = new Q(e, t);
                        ee.set(e, r)
                    };
                    e.observe = function(e, t, r) {
                        var n = ee.get(e),
                            u = 0 === n.observationTargets.length;
                        if (te(n.observationTargets, t) < 0) {
                            u && B.push(n);
                            n.observationTargets.push(new G(t, r && r.box));
                            Z(1);
                            J.schedule()
                        }
                    };
                    e.unobserve = function(e, t) {
                        var r = ee.get(e),
                            n = te(r.observationTargets, t),
                            u = 1 === r.observationTargets.length;
                        if (n >= 0) {
                            u && B.splice(B.indexOf(r), 1);
                            r.observationTargets.splice(n, 1);
                            Z(-1)
                        }
                    };
                    e.disconnect = function(e) {
                        var t = this,
                            r = ee.get(e);
                        r.observationTargets.slice().forEach((function(r) {
                            return t.unobserve(e, r.target)
                        }));
                        r.activeTargets.splice(0, r.activeTargets.length)
                    };
                    return e
                }(),
                ne = function() {
                    function e(e) {
                        if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                        if ("function" != typeof e) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                        re.connect(this, e)
                    }
                    e.prototype.observe = function(e, t) {
                        if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                        if (!x(e)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                        re.observe(this, e, t)
                    };
                    e.prototype.unobserve = function(e) {
                        if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                        if (!x(e)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                        re.unobserve(this, e)
                    };
                    e.prototype.disconnect = function() {
                        re.disconnect(this)
                    };
                    e.toString = function() {
                        return "function ResizeObserver () { [polyfill code] }"
                    };
                    return e
                }(),
                ue = r(218156),
                ae = r(973935);

            function oe(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function ie(e, t) {
                if (null == e) return {};
                var r, n, u = function(e, t) {
                    if (null == e) return {};
                    var r, n, u = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || (u[r] = e[r])
                    }
                    return u
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
                    }
                }
                return u
            }
            var se = 0;
            class le {
                constructor() {
                    this.id = "".concat(se++)
                }
            }
            var ce = new WeakMap,
                fe = new WeakMap,
                de = new WeakMap,
                De = new WeakMap,
                he = new WeakMap,
                ve = new WeakMap,
                pe = new WeakMap,
                Ce = new WeakMap,
                ge = new WeakMap,
                Be = new WeakMap,
                Ee = new WeakMap,
                me = new WeakMap,
                Ae = new WeakMap,
                Fe = new WeakMap,
                be = new WeakMap,
                we = new WeakMap,
                ye = new WeakMap,
                xe = new WeakMap,
                Oe = new WeakMap,
                ke = new WeakMap,
                Pe = new WeakMap,
                Me = Symbol("placeholder"),
                Se = Symbol("mark-placeholder"),
                Te = globalThis.Text,
                Le = e => e && e.ownerDocument && e.ownerDocument.defaultView || null,
                je = e => Re(e) && 1 === e.nodeType,
                Re = e => {
                    var t = Le(e);
                    return !!t && e instanceof t.Node
                },
                Ne = e => {
                    var t = e && e.anchorNode && Le(e.anchorNode);
                    return !!t && e instanceof t.Selection
                },
                _e = e => Re(e) && 3 === e.nodeType,
                We = (e, t, r) => {
                    for (var n, {
                            childNodes: u
                        } = e, a = u[t], o = t, i = !1, s = !1;
                        (Re(n = a) && 8 === n.nodeType || je(a) && 0 === a.childNodes.length || je(a) && "false" === a.getAttribute("contenteditable")) && (!i || !s);)
                        if (o >= u.length) {
                            i = !0;
                            o = t - 1;
                            r = "backward"
                        } else if (o < 0) {
                        s = !0;
                        o = t + 1;
                        r = "forward"
                    } else {
                        a = u[o];
                        t = o;
                        o += "forward" === r ? 1 : -1
                    }
                    return [a, t]
                },
                Ie = (e, t, r) => {
                    var [n] = We(e, t, r);
                    return n
                },
                ze = e => {
                    var t = "";
                    if (_e(e) && e.nodeValue) return e.nodeValue;
                    if (je(e)) {
                        for (var r of Array.from(e.childNodes)) t += ze(r);
                        var n = getComputedStyle(e).getPropertyValue("display");
                        "block" !== n && "list" !== n && "BR" !== e.tagName || (t += "\n")
                    }
                    return t
                },
                qe = /data-slate-fragment="(.+?)"/m,
                Ve = e => {
                    var t = e.getData("text/html"),
                        [, r] = t.match(qe) || [];
                    return r
                },
                $e = (e, t, r) => {
                    var {
                        target: n
                    } = t;
                    if (je(n) && n.matches('[contentEditable="false"]')) return !1;
                    var {
                        document: u
                    } = ot.getWindow(e);
                    if (u.contains(n)) return ot.hasDOMNode(e, n, {
                        editable: !0
                    });
                    var a = r.find((e => {
                        var {
                            addedNodes: t,
                            removedNodes: r
                        } = e;
                        for (var u of t)
                            if (u === n || u.contains(n)) return !0;
                        for (var a of r)
                            if (a === n || a.contains(n)) return !0
                    }));
                    return !(!a || a === t) && $e(e, a, r)
                },
                Ye = parseInt(l.version.split(".")[0], 10) >= 17,
                Ue = "undefined" != typeof navigator && "undefined" != typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                He = "undefined" != typeof navigator && /Mac OS X/.test(navigator.userAgent),
                Ke = "undefined" != typeof navigator && /Android/.test(navigator.userAgent),
                Xe = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
                Je = "undefined" != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                Ze = "undefined" != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
                Ge = "undefined" != typeof navigator && /Chrome/i.test(navigator.userAgent),
                Qe = "undefined" != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
                et = Ke && "undefined" != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
                tt = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
                rt = "undefined" != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
                nt = "undefined" != typeof navigator && /.*Wechat/.test(navigator.userAgent),
                ut = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                at = (!Qe || !et) && !Ze && "undefined" != typeof globalThis && globalThis.InputEvent && "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
                ot = {
                    isComposing: e => !!me.get(e),
                    getWindow(e) {
                        var t = de.get(e);
                        if (!t) throw new Error("Unable to find a host window element for this editor");
                        return t
                    },
                    findKey(e, t) {
                        var r = Ce.get(t);
                        if (!r) {
                            r = new le;
                            Ce.set(t, r)
                        }
                        return r
                    },
                    findPath(e, t) {
                        for (var r = [], n = t;;) {
                            var u = fe.get(n);
                            if (null == u) {
                                if (g.ML.isEditor(n)) return r;
                                break
                            }
                            var a = ce.get(n);
                            if (null == a) break;
                            r.unshift(a);
                            n = u
                        }
                        throw new Error("Unable to find the path for Slate node: ".concat(g.o4.stringify(t)))
                    },
                    findDocumentOrShadowRoot(e) {
                        var t = ot.toDOMNode(e, e),
                            r = t.getRootNode();
                        return (r instanceof Document || r instanceof ShadowRoot) && null != r.getSelection ? r : t.ownerDocument
                    },
                    isFocused: e => !!Ee.get(e),
                    isReadOnly: e => !!Be.get(e),
                    blur(e) {
                        var t = ot.toDOMNode(e, e),
                            r = ot.findDocumentOrShadowRoot(e);
                        Ee.set(e, !1);
                        r.activeElement === t && t.blur()
                    },
                    focus(e) {
                        var t = ot.toDOMNode(e, e),
                            r = ot.findDocumentOrShadowRoot(e);
                        Ee.set(e, !0);
                        r.activeElement !== t && t.focus({
                            preventScroll: !0
                        })
                    },
                    deselect(e) {
                        var {
                            selection: t
                        } = e, r = ot.findDocumentOrShadowRoot(e).getSelection();
                        r && r.rangeCount > 0 && r.removeAllRanges();
                        t && g.YR.deselect(e)
                    },
                    hasDOMNode(e, t) {
                        var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                editable: u = !1
                            } = n,
                            a = ot.toDOMNode(e, e);
                        try {
                            r = je(t) ? t : t.parentElement
                        } catch (e) {
                            if (!e.message.includes('Permission denied to access property "nodeType"')) throw e
                        }
                        return !!r && !(r.closest("[data-slate-editor]") !== a || u && !r.isContentEditable && ("boolean" != typeof r.isContentEditable || r.closest('[contenteditable="false"]') !== a) && !r.getAttribute("data-slate-zero-width"))
                    },
                    insertData(e, t) {
                        e.insertData(t)
                    },
                    insertFragmentData: (e, t) => e.insertFragmentData(t),
                    insertTextData: (e, t) => e.insertTextData(t),
                    setFragmentData(e, t, r) {
                        e.setFragmentData(t, r)
                    },
                    toDOMNode(e, t) {
                        var r = ge.get(e),
                            n = g.ML.isEditor(t) ? De.get(e) : null == r ? void 0 : r.get(ot.findKey(e, t));
                        if (!n) throw new Error("Cannot resolve a DOM node from Slate node: ".concat(g.o4.stringify(t)));
                        return n
                    },
                    toDOMPoint(e, t) {
                        var r, [n] = g.ML.node(e, t.path),
                            u = ot.toDOMNode(e, n);
                        g.ML.void(e, {
                            at: t
                        }) && (t = {
                            path: t.path,
                            offset: 0
                        });
                        for (var a = Array.from(u.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), o = 0, i = 0; i < a.length; i++) {
                            var s = a[i],
                                l = s.childNodes[0];
                            if (null != l && null != l.textContent) {
                                var {
                                    length: c
                                } = l.textContent, f = s.getAttribute("data-slate-length"), d = o + (null == f ? c : parseInt(f, 10)), D = a[i + 1];
                                if (t.offset === d && null != D && D.hasAttribute("data-slate-mark-placeholder")) {
                                    var h, v = D.childNodes[0];
                                    r = [v instanceof Te ? v : D, null !== (h = D.textContent) && void 0 !== h && h.startsWith("\ufeff") ? 1 : 0];
                                    break
                                }
                                if (t.offset <= d) {
                                    r = [l, Math.min(c, Math.max(0, t.offset - o))];
                                    break
                                }
                                o = d
                            }
                        }
                        if (!r) throw new Error("Cannot resolve a DOM point from Slate point: ".concat(g.o4.stringify(t)));
                        return r
                    },
                    toDOMRange(e, t) {
                        var {
                            anchor: r,
                            focus: n
                        } = t, u = g.e6.isBackward(t), a = ot.toDOMPoint(e, r), o = g.e6.isCollapsed(t) ? a : ot.toDOMPoint(e, n), i = ot.getWindow(e).document.createRange(), [s, l] = u ? o : a, [c, f] = u ? a : o, d = !!(je(s) ? s : s.parentElement).getAttribute("data-slate-zero-width"), D = !!(je(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
                        i.setStart(s, d ? 1 : l);
                        i.setEnd(c, D ? 1 : f);
                        return i
                    },
                    toSlateNode(e, t) {
                        var r = je(t) ? t : t.parentElement;
                        r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
                        var n = r ? ve.get(r) : null;
                        if (!n) throw new Error("Cannot resolve a Slate node from DOM node: ".concat(r));
                        return n
                    },
                    findEventRange(e, t) {
                        "nativeEvent" in t && (t = t.nativeEvent);
                        var {
                            clientX: r,
                            clientY: n,
                            target: u
                        } = t;
                        if (null == r || null == n) throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                        var a, o = ot.toSlateNode(e, t.target),
                            i = ot.findPath(e, o);
                        if (g.W_.isElement(o) && g.ML.isVoid(e, o)) {
                            var s = u.getBoundingClientRect(),
                                l = e.isInline(o) ? r - s.left < s.left + s.width - r : n - s.top < s.top + s.height - n,
                                c = g.ML.point(e, i, {
                                    edge: l ? "start" : "end"
                                }),
                                f = l ? g.ML.before(e, c) : g.ML.after(e, c);
                            if (f) {
                                return g.ML.range(e, f)
                            }
                        }
                        var {
                            document: d
                        } = ot.getWindow(e);
                        if (d.caretRangeFromPoint) a = d.caretRangeFromPoint(r, n);
                        else {
                            var D = d.caretPositionFromPoint(r, n);
                            if (D) {
                                (a = d.createRange()).setStart(D.offsetNode, D.offset);
                                a.setEnd(D.offsetNode, D.offset)
                            }
                        }
                        if (!a) throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                        return ot.toSlateRange(e, a, {
                            exactMatch: !1,
                            suppressThrow: !1
                        })
                    },
                    toSlatePoint(e, t, r) {
                        var {
                            exactMatch: n,
                            suppressThrow: u
                        } = r, [a, o] = n ? t : (e => {
                            var [t, r] = e;
                            if (je(t) && t.childNodes.length) {
                                var n = r === t.childNodes.length,
                                    u = n ? r - 1 : r;
                                [t, u] = We(t, u, n ? "backward" : "forward");
                                n = u < r;
                                for (; je(t) && t.childNodes.length;) {
                                    var a = n ? t.childNodes.length - 1 : 0;
                                    t = Ie(t, a, n ? "backward" : "forward")
                                }
                                r = n && null != t.textContent ? t.textContent.length : 0
                            }
                            return [t, r]
                        })(t), i = a.parentNode, s = null, l = 0;
                        if (i) {
                            var c, f, d = ot.toDOMNode(e, e),
                                D = i.closest('[data-slate-void="true"]'),
                                h = D && d.contains(D) ? D : null,
                                v = i.closest("[data-slate-leaf]"),
                                p = null;
                            if (v) {
                                if (s = v.closest('[data-slate-node="text"]')) {
                                    var C = ot.getWindow(e).document.createRange();
                                    C.setStart(s, 0);
                                    C.setEnd(a, o);
                                    var B = C.cloneContents();
                                    [...Array.prototype.slice.call(B.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(B.querySelectorAll("[contenteditable=false]"))].forEach((e => {
                                        Ke && !n && e.hasAttribute("data-slate-zero-width") && e.textContent.length > 0 && "\ufeff" !== e.textContext ? e.textContent.startsWith("\ufeff") && (e.textContent = e.textContent.slice(1)) : e.parentNode.removeChild(e)
                                    }));
                                    l = B.textContent.length;
                                    p = s
                                }
                            } else if (h) {
                                for (var E = h.querySelectorAll("[data-slate-leaf]"), m = 0; m < E.length; m++) {
                                    var A = E[m];
                                    if (ot.hasDOMNode(e, A)) {
                                        v = A;
                                        break
                                    }
                                }
                                if (v) {
                                    s = v.closest('[data-slate-node="text"]');
                                    l = (p = v).textContent.length;
                                    p.querySelectorAll("[data-slate-zero-width]").forEach((e => {
                                        l -= e.textContent.length
                                    }))
                                } else l = 1
                            }
                            p && l === p.textContent.length && Ke && "z" === p.getAttribute("data-slate-zero-width") && null !== (c = p.textContent) && void 0 !== c && c.startsWith("\ufeff") && (i.hasAttribute("data-slate-zero-width") || Xe && null !== (f = p.textContent) && void 0 !== f && f.endsWith("\n\n")) && l--
                        }
                        if (Ke && !s && !n) {
                            var F = i.hasAttribute("data-slate-node") ? i : i.closest("[data-slate-node]");
                            if (F && ot.hasDOMNode(e, F, {
                                    editable: !0
                                })) {
                                var b = ot.toSlateNode(e, F),
                                    {
                                        path: w,
                                        offset: y
                                    } = g.ML.start(e, ot.findPath(e, b));
                                F.querySelector("[data-slate-leaf]") || (y = o);
                                return {
                                    path: w,
                                    offset: y
                                }
                            }
                        }
                        if (!s) {
                            if (u) return null;
                            throw new Error("Cannot resolve a Slate point from DOM point: ".concat(t))
                        }
                        var x = ot.toSlateNode(e, s);
                        return {
                            path: ot.findPath(e, x),
                            offset: l
                        }
                    },
                    toSlateRange(e, t, r) {
                        var n, u, a, o, i, {
                            exactMatch: s,
                            suppressThrow: l
                        } = r;
                        if (Ne(t) ? t.anchorNode : t.startContainer)
                            if (Ne(t)) {
                                n = t.anchorNode;
                                u = t.anchorOffset;
                                a = t.focusNode;
                                o = t.focusOffset;
                                i = Ge && (e => {
                                    for (var t = e && e.parentNode; t;) {
                                        if ("[object ShadowRoot]" === t.toString()) return !0;
                                        t = t.parentNode
                                    }
                                    return !1
                                })(n) ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed
                            } else {
                                n = t.startContainer;
                                u = t.startOffset;
                                a = t.endContainer;
                                o = t.endOffset;
                                i = t.collapsed
                            } if (null == n || null == a || null == u || null == o) throw new Error("Cannot resolve a Slate range from DOM range: ".concat(t));
                        if ("getAttribute" in a && "false" === a.getAttribute("contenteditable")) {
                            var c;
                            a = n;
                            o = (null === (c = n.textContent) || void 0 === c ? void 0 : c.length) || 0
                        }
                        var f = ot.toSlatePoint(e, [n, u], {
                            exactMatch: s,
                            suppressThrow: l
                        });
                        if (!f) return null;
                        var d = i ? f : ot.toSlatePoint(e, [a, o], {
                            exactMatch: s,
                            suppressThrow: l
                        });
                        if (!d) return null;
                        if (Xe && !i && n !== a) {
                            var D = g.ML.isEnd(e, f, f.path),
                                h = g.ML.isStart(e, d, d.path);
                            if (D) {
                                f = g.ML.after(e, f) || f
                            }
                            if (h) {
                                d = g.ML.before(e, d) || d
                            }
                        }
                        var v = {
                            anchor: f,
                            focus: d
                        };
                        g.e6.isExpanded(v) && g.e6.isForward(v) && je(a) && g.ML.void(e, {
                            at: v.focus,
                            mode: "highest"
                        }) && (v = g.ML.unhangRange(e, v, {
                            voids: !0
                        }));
                        return v
                    },
                    hasRange(e, t) {
                        var {
                            anchor: r,
                            focus: n
                        } = t;
                        return g.ML.hasPath(e, r.path) && g.ML.hasPath(e, n.path)
                    },
                    hasTarget: (e, t) => Re(t) && ot.hasDOMNode(e, t),
                    hasEditableTarget: (e, t) => Re(t) && ot.hasDOMNode(e, t, {
                        editable: !0
                    }),
                    hasSelectableTarget: (e, t) => ot.hasEditableTarget(e, t) || ot.isTargetInsideNonReadonlyVoid(e, t),
                    isTargetInsideNonReadonlyVoid(e, t) {
                        if (Be.get(e)) return !1;
                        var r = ot.hasTarget(e, t) && ot.toSlateNode(e, t);
                        return g.W_.isElement(r) && g.ML.isVoid(e, r)
                    },
                    androidScheduleFlush(e) {
                        var t;
                        null === (t = be.get(e)) || void 0 === t || t()
                    },
                    androidPendingDiffs: e => xe.get(e)
                },
                it = ["anchor", "focus"],
                st = ["anchor", "focus"],
                lt = (e, t) => {
                    var r, n, u = ie(e, it),
                        a = ie(t, st);
                    return e[Me] === t[Me] && (r = u, n = a, Object.keys(r).length === Object.keys(n).length && Object.keys(r).every((e => n.hasOwnProperty(e) && r[e] === n[e])))
                },
                ct = ut ? l.useLayoutEffect : l.useEffect,
                ft = e => {
                    var {
                        isLast: t,
                        leaf: r,
                        parent: n,
                        text: u
                    } = e, a = pt(), o = ot.findPath(a, u), i = g.y$.parent(o), s = !0 === r[Se];
                    return a.isVoid(n) ? l.createElement(ht, {
                        length: g.NB.string(n).length
                    }) : "" !== r.text || n.children[n.children.length - 1] !== u || a.isInline(n) || "" !== g.ML.string(a, i) ? "" === r.text ? l.createElement(ht, {
                        isMarkPlaceholder: s
                    }) : t && "\n" === r.text.slice(-1) ? l.createElement(dt, {
                        isTrailing: !0,
                        text: r.text
                    }) : l.createElement(dt, {
                        text: r.text
                    }) : l.createElement(ht, {
                        isLineBreak: !0,
                        isMarkPlaceholder: s
                    })
                },
                dt = e => {
                    var {
                        text: t,
                        isTrailing: r = !1
                    } = e, n = (0, l.useRef)(null), u = () => "".concat(null != t ? t : "").concat(r ? "\n" : ""), [a] = (0, l.useState)(u);
                    ct((() => {
                        var e = u();
                        n.current && n.current.textContent !== e && (n.current.textContent = e)
                    }));
                    return l.createElement(Dt, {
                        ref: n
                    }, a)
                },
                Dt = (0, l.memo)((0,
                    l.forwardRef)(((e, t) => l.createElement("span", {
                    "data-slate-string": !0,
                    ref: t
                }, e.children)))),
                ht = e => {
                    var {
                        length: t = 0,
                        isLineBreak: r = !1,
                        isMarkPlaceholder: n = !1
                    } = e, u = {
                        "data-slate-zero-width": r ? "n" : "z",
                        "data-slate-length": t
                    };
                    n && (u["data-slate-mark-placeholder"] = !0);
                    return l.createElement("span", Object.assign({}, u), Ke && r ? null : "\ufeff", r ? l.createElement("br", null) : null)
                },
                vt = (0, l.createContext)(null),
                pt = () => {
                    var e = (0, l.useContext)(vt);
                    if (!e) throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
                    return e
                },
                Ct = e => {
                    var {
                        leaf: t,
                        isLast: r,
                        text: n,
                        parent: u,
                        renderPlaceholder: a,
                        renderLeaf: o = (e => l.createElement(Bt, Object.assign({}, e)))
                    } = e, i = (0, l.useRef)(null), s = (0, l.useRef)(null), c = pt(), f = (0, l.useRef)(null);
                    (0, l.useEffect)((() => () => {
                        f.current && f.current.disconnect()
                    }), []);
                    (0, l.useEffect)((() => {
                        var e = null == s ? void 0 : s.current;
                        e ? he.set(c, e) : he.delete(c);
                        if (f.current) {
                            f.current.disconnect();
                            e && f.current.observe(e)
                        } else if (e) {
                            var t = window.ResizeObserver || ne;
                            f.current = new t((() => {
                                var e = Pe.get(c);
                                null == e || e()
                            }));
                            f.current.observe(e)
                        }
                        if (!e && i.current) {
                            var r = Pe.get(c);
                            null == r || r()
                        }
                        i.current = s.current;
                        return () => {
                            he.delete(c)
                        }
                    }), [s, t]);
                    var d = l.createElement(ft, {
                        isLast: r,
                        leaf: t,
                        parent: u,
                        text: n
                    });
                    if (t[Me]) {
                        var D = {
                            children: t.placeholder,
                            attributes: {
                                "data-slate-placeholder": !0,
                                style: {
                                    position: "absolute",
                                    pointerEvents: "none",
                                    width: "100%",
                                    maxWidth: "100%",
                                    display: "block",
                                    opacity: "0.333",
                                    userSelect: "none",
                                    textDecoration: "none"
                                },
                                contentEditable: !1,
                                ref: s
                            }
                        };
                        d = l.createElement(l.Fragment, null, a(D), d)
                    }
                    return o({
                        attributes: {
                            "data-slate-leaf": !0
                        },
                        children: d,
                        leaf: t,
                        text: n
                    })
                },
                gt = l.memo(Ct, ((e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && g.xv.equals(t.leaf, e.leaf) && t.leaf[Me] === e.leaf[Me])),
                Bt = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return l.createElement("span", Object.assign({}, t), r)
                },
                Et = e => {
                    for (var {
                            decorations: t,
                            isLast: r,
                            parent: n,
                            renderPlaceholder: u,
                            renderLeaf: a,
                            text: o
                        } = e, i = pt(), s = (0, l.useRef)(null), c = g.xv.decorations(o, t), f = ot.findKey(i, o), d = [], D = 0; D < c.length; D++) {
                        var h = c[D];
                        d.push(l.createElement(gt, {
                            isLast: r && D === c.length - 1,
                            key: "".concat(f.id, "-").concat(D),
                            renderPlaceholder: u,
                            leaf: h,
                            text: o,
                            parent: n,
                            renderLeaf: a
                        }))
                    }
                    var v = (0, l.useCallback)((e => {
                        var t = ge.get(i);
                        if (e) {
                            null == t || t.set(f, e);
                            pe.set(o, e);
                            ve.set(e, o)
                        } else {
                            null == t || t.delete(f);
                            pe.delete(o);
                            s.current && ve.delete(s.current)
                        }
                        s.current = e
                    }), [s, i, f, o]);
                    return l.createElement("span", {
                        "data-slate-node": "text",
                        ref: v
                    }, d)
                },
                mt = l.memo(Et, ((e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && ((e, t) => {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r],
                            u = t[r];
                        if (n.anchor.offset !== u.anchor.offset || n.focus.offset !== u.focus.offset || !lt(n, u)) return !1
                    }
                    return !0
                })(t.decorations, e.decorations))),
                At = e => {
                    var {
                        decorations: t,
                        element: r,
                        renderElement: n = (e => l.createElement(bt, Object.assign({}, e))),
                        renderPlaceholder: a,
                        renderLeaf: o,
                        selection: i
                    } = e, s = pt(), c = Pt(), f = s.isInline(r), d = ot.findKey(s, r), D = (0, l.useCallback)((e => {
                        var t = ge.get(s);
                        if (e) {
                            null == t || t.set(d, e);
                            pe.set(r, e);
                            ve.set(e, r)
                        } else {
                            null == t || t.delete(d);
                            pe.delete(r)
                        }
                    }), [s, d, r]), h = Ot({
                        decorations: t,
                        node: r,
                        renderElement: n,
                        renderPlaceholder: a,
                        renderLeaf: o,
                        selection: i
                    }), v = {
                        "data-slate-node": "element",
                        ref: D
                    };
                    f && (v["data-slate-inline"] = !0);
                    if (!f && g.ML.hasInlines(s, r)) {
                        var p = g.NB.string(r),
                            C = u()(p);
                        "rtl" === C && (v.dir = C)
                    }
                    if (g.ML.isVoid(s, r)) {
                        v["data-slate-void"] = !0;
                        !c && f && (v.contentEditable = !1);
                        var B = f ? "span" : "div",
                            [
                                [E]
                            ] = g.NB.texts(r);
                        h = l.createElement(B, {
                            "data-slate-spacer": !0,
                            style: {
                                height: "0",
                                color: "transparent",
                                outline: "none",
                                position: "absolute"
                            }
                        }, l.createElement(mt, {
                            renderPlaceholder: a,
                            decorations: [],
                            isLast: !1,
                            parent: r,
                            text: E
                        }));
                        ce.set(E, 0);
                        fe.set(E, r)
                    }
                    return n({
                        attributes: v,
                        children: h,
                        element: r
                    })
                },
                Ft = l.memo(At, ((e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && ((e, t) => {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r],
                            u = t[r];
                        if (!g.e6.equals(n, u) || !lt(n, u)) return !1
                    }
                    return !0
                })(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && g.e6.equals(e.selection, t.selection)))),
                bt = e => {
                    var {
                        attributes: t,
                        children: r,
                        element: n
                    } = e, u = pt().isInline(n) ? "span" : "div";
                    return l.createElement(u, Object.assign({}, t, {
                        style: {
                            position: "relative"
                        }
                    }), r)
                },
                wt = (0, l.createContext)((() => [])),
                yt = (0, l.createContext)(!1),
                xt = () => (0, l.useContext)(yt),
                Ot = e => {
                    for (var {
                            decorations: t,
                            node: r,
                            renderElement: n,
                            renderPlaceholder: u,
                            renderLeaf: a,
                            selection: o
                        } = e, i = (0, l.useContext)(wt), s = pt(), c = ot.findPath(s, r), f = [], d = g.W_.isElement(r) && !s.isInline(r) && g.ML.hasInlines(s, r), D = 0; D < r.children.length; D++) {
                        var h = c.concat(D),
                            v = r.children[D],
                            p = ot.findKey(s, v),
                            C = g.ML.range(s, h),
                            B = o && g.e6.intersection(C, o),
                            E = i([v, h]);
                        for (var m of t) {
                            var A = g.e6.intersection(m, C);
                            A && E.push(A)
                        }
                        g.W_.isElement(v) ? f.push(l.createElement(yt.Provider, {
                            key: "provider-".concat(p.id),
                            value: !!B
                        }, l.createElement(Ft, {
                            decorations: E,
                            element: v,
                            key: p.id,
                            renderElement: n,
                            renderPlaceholder: u,
                            renderLeaf: a,
                            selection: B
                        }))) : f.push(l.createElement(mt, {
                            decorations: E,
                            key: p.id,
                            isLast: d && D === r.children.length - 1,
                            parent: r,
                            renderPlaceholder: u,
                            renderLeaf: a,
                            text: v
                        }));
                        ce.set(v, D);
                        fe.set(v, r)
                    }
                    return f
                },
                kt = (0, l.createContext)(!1),
                Pt = () => (0, l.useContext)(kt),
                Mt = (0, l.createContext)(null),
                St = {
                    bold: "mod+b",
                    compose: ["down", "left", "right", "up", "backspace", "enter"],
                    moveBackward: "left",
                    moveForward: "right",
                    moveWordBackward: "ctrl+left",
                    moveWordForward: "ctrl+right",
                    deleteBackward: "shift?+backspace",
                    deleteForward: "shift?+delete",
                    extendBackward: "shift+left",
                    extendForward: "shift+right",
                    italic: "mod+i",
                    insertSoftBreak: "shift+enter",
                    splitBlock: "enter",
                    undo: "mod+z"
                },
                Tt = {
                    moveLineBackward: "opt+up",
                    moveLineForward: "opt+down",
                    moveWordBackward: "opt+left",
                    moveWordForward: "opt+right",
                    deleteBackward: ["ctrl+backspace", "ctrl+h"],
                    deleteForward: ["ctrl+delete", "ctrl+d"],
                    deleteLineBackward: "cmd+shift?+backspace",
                    deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
                    deleteWordBackward: "opt+shift?+backspace",
                    deleteWordForward: "opt+shift?+delete",
                    extendLineBackward: "opt+shift+up",
                    extendLineForward: "opt+shift+down",
                    redo: "cmd+shift+z",
                    transposeCharacter: "ctrl+t"
                },
                Lt = {
                    deleteWordBackward: "ctrl+shift?+backspace",
                    deleteWordForward: "ctrl+shift?+delete",
                    redo: ["ctrl+y", "ctrl+shift+z"]
                },
                jt = e => {
                    var t = St[e],
                        r = Tt[e],
                        n = Lt[e],
                        u = t && (0, ue.TB)(t),
                        a = r && (0, ue.TB)(r),
                        o = n && (0, ue.TB)(n);
                    return e => !(!u || !u(e)) || (!!(He && a && a(e)) || !(He || !o || !o(e)))
                },
                Rt = {
                    isBold: jt("bold"),
                    isCompose: jt("compose"),
                    isMoveBackward: jt("moveBackward"),
                    isMoveForward: jt("moveForward"),
                    isDeleteBackward: jt("deleteBackward"),
                    isDeleteForward: jt("deleteForward"),
                    isDeleteLineBackward: jt("deleteLineBackward"),
                    isDeleteLineForward: jt("deleteLineForward"),
                    isDeleteWordBackward: jt("deleteWordBackward"),
                    isDeleteWordForward: jt("deleteWordForward"),
                    isExtendBackward: jt("extendBackward"),
                    isExtendForward: jt("extendForward"),
                    isExtendLineBackward: jt("extendLineBackward"),
                    isExtendLineForward: jt("extendLineForward"),
                    isItalic: jt("italic"),
                    isMoveLineBackward: jt("moveLineBackward"),
                    isMoveLineForward: jt("moveLineForward"),
                    isMoveWordBackward: jt("moveWordBackward"),
                    isMoveWordForward: jt("moveWordForward"),
                    isRedo: jt("redo"),
                    isSoftBreak: jt("insertSoftBreak"),
                    isSplitBlock: jt("splitBlock"),
                    isTransposeCharacter: jt("transposeCharacter"),
                    isUndo: jt("undo")
                },
                Nt = {
                    subtree: !0,
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0
                };
            class _t extends l.Component {
                constructor() {
                    super(...arguments);
                    this.context = null;
                    this.manager = null;
                    this.mutationObserver = null
                }
                observe() {
                    var e, {
                        node: t
                    } = this.props;
                    if (!t.current) throw new Error("Failed to attach MutationObserver, `node` is undefined");
                    null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, Nt)
                }
                componentDidMount() {
                    var {
                        receivedUserInput: e
                    } = this.props, t = this.context;
                    this.manager = ((e, t) => {
                        var r = [],
                            n = () => {
                                r = []
                            };
                        return {
                            registerMutations: n => {
                                if (t.current) {
                                    var u = n.filter((t => $e(e, t, n)));
                                    r.push(...u)
                                }
                            },
                            restoreDOM: function() {
                                if (r.length > 0) {
                                    r.reverse().forEach((e => {
                                        if ("characterData" !== e.type) {
                                            e.removedNodes.forEach((t => {
                                                e.target.insertBefore(t, e.nextSibling)
                                            }));
                                            e.addedNodes.forEach((t => {
                                                e.target.removeChild(t)
                                            }))
                                        }
                                    }));
                                    n()
                                }
                            },
                            clear: n
                        }
                    })(t, e);
                    this.mutationObserver = new MutationObserver(this.manager.registerMutations);
                    this.observe()
                }
                getSnapshotBeforeUpdate() {
                    var e, t, r, n = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
                    if (null != n && n.length) {
                        var u;
                        null === (u = this.manager) || void 0 === u || u.registerMutations(n)
                    }
                    null === (t = this.mutationObserver) || void 0 === t || t.disconnect();
                    null === (r = this.manager) || void 0 === r || r.restoreDOM();
                    return null
                }
                componentDidUpdate() {
                    var e;
                    null === (e = this.manager) || void 0 === e || e.clear();
                    this.observe()
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this.mutationObserver) || void 0 === e || e.disconnect()
                }
                render() {
                    return this.props.children
                }
            }
            _t.contextType = vt;
            var Wt = Ke ? _t : e => {
                var {
                    children: t
                } = e;
                return l.createElement(l.Fragment, null, t)
            };

            function It(e, t) {
                var {
                    path: r,
                    diff: n
                } = t;
                if (!g.ML.hasPath(e, r)) return !1;
                var u = g.NB.get(e, r);
                if (!g.xv.isText(u)) return !1;
                if (n.start !== u.text.length || 0 === n.text.length) return u.text.slice(n.start, n.start + n.text.length) === n.text;
                var a = g.y$.next(r);
                if (!g.ML.hasPath(e, a)) return !1;
                var o = g.NB.get(e, a);
                return g.xv.isText(o) && o.text.startsWith(n.text)
            }

            function zt(e) {
                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                return r.reduce(((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end)), e)
            }

            function qt(e, t) {
                var {
                    start: r,
                    end: n,
                    text: u
                } = t, a = e.slice(r, n), o = function(e, t) {
                    for (var r = Math.min(e.length, t.length), n = 0; n < r; n++)
                        if (e.charAt(n) !== t.charAt(n)) return n;
                    return r
                }(a, u), i = function(e, t, r) {
                    for (var n = Math.min(e.length, t.length, r), u = 0; u < n; u++)
                        if (e.charAt(e.length - u - 1) !== t.charAt(t.length - u - 1)) return u;
                    return n
                }(a, u, Math.min(a.length - o, u.length - o)), s = {
                    start: r + o,
                    end: n - i,
                    text: u.slice(o, u.length - i)
                };
                return s.start === s.end && 0 === s.text.length ? null : s
            }

            function Vt(e) {
                var {
                    path: t,
                    diff: r
                } = e;
                return {
                    anchor: {
                        path: t,
                        offset: r.start
                    },
                    focus: {
                        path: t,
                        offset: r.end
                    }
                }
            }

            function $t(e, t) {
                var {
                    path: r,
                    offset: n
                } = t;
                if (!g.ML.hasPath(e, r)) return null;
                var u = g.NB.get(e, r);
                if (!g.xv.isText(u)) return null;
                var a = g.ML.above(e, {
                    match: t => g.W_.isElement(t) && g.ML.isBlock(e, t),
                    at: r
                });
                if (!a) return null;
                for (; n > u.text.length;) {
                    var o = g.ML.next(e, {
                        at: r,
                        match: g.xv.isText
                    });
                    if (!o || !g.y$.isDescendant(o[1], a[1])) return null;
                    n -= u.text.length;
                    u = o[0];
                    r = o[1]
                }
                return {
                    path: r,
                    offset: n
                }
            }

            function Yt(e, t) {
                var r = $t(e, t.anchor);
                if (!r) return null;
                if (g.e6.isCollapsed(t)) return {
                    anchor: r,
                    focus: r
                };
                var n = $t(e, t.focus);
                return n ? {
                    anchor: r,
                    focus: n
                } : null
            }

            function Ut(e, t, r) {
                var n = xe.get(e),
                    u = null == n ? void 0 : n.find((e => {
                        var {
                            path: r
                        } = e
                        ;
                        return g.y$.equals(r, t.path)
                    }));
                if (!u || t.offset <= u.diff.start) return g.E9.transform(t, r, {
                    affinity: "backward"
                });
                var {
                    diff: a
                } = u;
                if (t.offset <= a.start + a.text.length) {
                    var o = {
                            path: t.path,
                            offset: a.start
                        },
                        i = g.E9.transform(o, r, {
                            affinity: "backward"
                        });
                    return i ? {
                        path: i.path,
                        offset: i.offset + t.offset - a.start
                    } : null
                }
                var s = {
                        path: t.path,
                        offset: t.offset - a.text.length + a.end - a.start
                    },
                    l = g.E9.transform(s, r, {
                        affinity: "backward"
                    });
                return l ? "split_node" === r.type && g.y$.equals(r.path, t.path) && s.offset < r.position && a.start < r.position ? l : {
                    path: l.path,
                    offset: l.offset + a.text.length - a.end + a.start
                } : null
            }

            function Ht(e, t, r) {
                var n = Ut(e, t.anchor, r);
                if (!n) return null;
                if (g.e6.isCollapsed(t)) return {
                    anchor: n,
                    focus: n
                };
                var u = Ut(e, t.focus, r);
                return u ? {
                    anchor: n,
                    focus: u
                } : null
            }

            function Kt(e, t) {
                var {
                    path: r,
                    diff: n,
                    id: u
                } = e;
                switch (t.type) {
                    case "insert_text":
                        return !g.y$.equals(t.path, r) || t.offset >= n.end ? e : t.offset <= n.start ? {
                            diff: {
                                start: t.text.length + n.start,
                                end: t.text.length + n.end,
                                text: n.text
                            },
                            id: u,
                            path: r
                        } : {
                            diff: {
                                start: n.start,
                                end: n.end + t.text.length,
                                text: n.text
                            },
                            id: u,
                            path: r
                        };
                    case "remove_text":
                        return !g.y$.equals(t.path, r) || t.offset >= n.end ? e : t.offset + t.text.length <= n.start ? {
                            diff: {
                                start: n.start - t.text.length,
                                end: n.end - t.text.length,
                                text: n.text
                            },
                            id: u,
                            path: r
                        } : {
                            diff: {
                                start: n.start,
                                end: n.end - t.text.length,
                                text: n.text
                            },
                            id: u,
                            path: r
                        };
                    case "split_node":
                        return !g.y$.equals(t.path, r) || t.position >= n.end ? {
                            diff: n,
                            id: u,
                            path: g.y$.transform(r, t, {
                                affinity: "backward"
                            })
                        } : t.position > n.start ? {
                            diff: {
                                start: n.start,
                                end: Math.min(t.position, n.end),
                                text: n.text
                            },
                            id: u,
                            path: r
                        } : {
                            diff: {
                                start: n.start - t.position,
                                end: n.end - t.position,
                                text: n.text
                            },
                            id: u,
                            path: g.y$.transform(r, t, {
                                affinity: "forward"
                            })
                        };
                    case "merge_node":
                        return g.y$.equals(t.path, r) ? {
                            diff: {
                                start: n.start + t.position,
                                end: n.end + t.position,
                                text: n.text
                            },
                            id: u,
                            path: g.y$.transform(r, t)
                        } : {
                            diff: n,
                            id: u,
                            path: g.y$.transform(r, t)
                        }
                }
                var a = g.y$.transform(r, t);
                return a ? {
                    diff: n,
                    path: a,
                    id: u
                } : null
            }

            function Xt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }

            function Jt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Xt(Object(r), !0).forEach((function(t) {
                        oe(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function Zt(e) {
                var {
                    editor: t,
                    scheduleOnDOMSelectionChange: r,
                    onDOMSelectionChange: n
                } = e, u = !1, a = null, o = null, i = null, s = 0, l = !1, c = () => {
                    var e = ke.get(t);
                    ke.delete(t);
                    if (e) {
                        var {
                            selection: r
                        } = t, n = Yt(t, e);
                        !n || r && g.e6.equals(n, r) || g.YR.select(t, n)
                    }
                }, f = () => {
                    if (o) {
                        clearTimeout(o);
                        o = null
                    }
                    if (i) {
                        clearTimeout(i);
                        i = null
                    }
                    if (p() || v()) {
                        if (!u) {
                            u = !0;
                            setTimeout((() => u = !1))
                        }
                        v() && (u = "action");
                        var e = t.selection && g.ML.rangeRef(t, t.selection, {
                            affinity: "forward"
                        });
                        ye.set(t, t.marks);
                        Oe.get(t), xe.get(t);
                        for (var a, s = p(); a = null === (f = xe.get(t)) || void 0 === f ? void 0 : f[0];) {
                            var f, d, D = we.get(t);
                            if (void 0 !== D) {
                                we.delete(t);
                                t.marks = D
                            }
                            D && !1 === l && (l = null);
                            var h = Vt(a);
                            t.selection && g.e6.equals(t.selection, h) || g.YR.select(t, h);
                            a.diff.text ? g.ML.insertText(t, a.diff.text) : g.ML.deleteFragment(t);
                            xe.set(t, null === (d = xe.get(t)) || void 0 === d ? void 0 : d.filter((e => {
                                var {
                                    id: t
                                } = e;
                                return t !== a.id
                            })));
                            if (!It(t, a)) {
                                s = !1;
                                Oe.delete(t);
                                ye.delete(t);
                                u = "action";
                                ke.delete(t);
                                r.cancel();
                                n.cancel();
                                null == e || e.unref()
                            }
                        }
                        var C = null == e ? void 0 : e.unref();
                        !C || ke.get(t) || t.selection && g.e6.equals(C, t.selection) || g.YR.select(t, C);
                        if (v())(() => {
                            var e = Oe.get(t);
                            Oe.delete(t);
                            if (e) {
                                if (e.at) {
                                    var r = g.E9.isPoint(e.at) ? $t(t, e.at) : Yt(t, e.at);
                                    if (!r) return;
                                    var n = g.ML.range(t, r);
                                    t.selection && g.e6.equals(t.selection, n) || g.YR.select(t, r)
                                }
                                e.run()
                            }
                        })();
                        else {
                            s && r();
                            r.flush();
                            n.flush();
                            c();
                            var B = ye.get(t);
                            ye.delete(t);
                            if (void 0 !== B) {
                                t.marks = B;
                                t.onChange()
                            }
                        }
                    } else c()
                }, d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        r = he.get(t);
                    r && (p() || e ? r.style.display = "none" : r.style.removeProperty("display"))
                }, D = (e, r) => {
                    var n, u = null !== (n = xe.get(t)) && void 0 !== n ? n : [];
                    xe.set(t, u);
                    var a = g.NB.leaf(t, e),
                        o = u.findIndex((t => g.y$.equals(t.path, e)));
                    if (o < 0) {
                        qt(a.text, r) && u.push({
                            path: e,
                            diff: r,
                            id: s++
                        });
                        d()
                    } else {
                        var i, l, c, f, D, h, v, p, C = (i = a.text, l = u[o].diff, c = r, f = Math.min(l.start, c.start), D = Math.max(0, Math.min(l.start + l.text.length, c.end) - c.start), h = zt(i, l, c), v = Math.max(c.start + c.text.length, l.start + l.text.length + (l.start + l.text.length > c.start ? c.text.length : 0) - D), p = h.slice(f, v), qt(i, {
                            start: f,
                            end: Math.max(l.end, c.end - l.text.length + (l.end - l.start)),
                            text: p
                        }));
                        if (C) u[o] = Jt(Jt({}, u[o]), {}, {
                            diff: C
                        });
                        else {
                            u.splice(o, 1);
                            d()
                        }
                    }
                }, h = function(e) {
                    var {
                        at: u
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    l = !1;
                    ke.delete(t);
                    r.cancel();
                    n.cancel();
                    v() && f();
                    Oe.set(t, {
                        at: u,
                        run: e
                    });
                    i = setTimeout(f)
                }, v = () => !!Oe.get(t), p = () => {
                    var e;
                    return !(null === (e = xe.get(t)) || void 0 === e || !e.length)
                }, C = e => {
                    ke.set(t, e);
                    if (o) {
                        clearTimeout(o);
                        o = null
                    }
                    var {
                        selection: r
                    } = t
                    ;
                    if (e) {
                        var n = !r || !g.y$.equals(r.anchor.path, e.anchor.path),
                            u = !r || !g.y$.equals(r.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                        (n && l || u) && (l = !1);
                        (n || p()) && (o = setTimeout(f, 200))
                    }
                }, B = () => {
                    v() || (i = setTimeout(f))
                };
                return {
                    flush: f,
                    scheduleFlush: B,
                    hasPendingDiffs: p,
                    hasPendingAction: v,
                    hasPendingChanges: () => v() || p(),
                    isFlushing: () => u,
                    handleUserSelect: C,
                    handleCompositionEnd: e => {
                        a && clearTimeout(a);
                        a = setTimeout((() => {
                            me.set(t, !1);
                            f()
                        }), 25)
                    },
                    handleCompositionStart: e => {
                        me.set(t, !0);
                        if (a) {
                            clearTimeout(a);
                            a = null
                        }
                    },
                    handleDOMBeforeInput: e => {
                        var r;
                        if (o) {
                            clearTimeout(o);
                            o = null
                        }
                        var {
                            inputType: n
                        } = e, u = null, a = e.dataTransfer || e.data || void 0;
                        !1 !== l && "insertText" !== n && "insertCompositionText" !== n && (l = !1);
                        var [i] = e.getTargetRanges();
                        i && (u = ot.toSlateRange(t, i, {
                            exactMatch: !1,
                            suppressThrow: !0
                        }));
                        var s = ot.getWindow(t).getSelection();
                        if (!u && s) {
                            i = s;
                            u = ot.toSlateRange(t, s, {
                                exactMatch: !1,
                                suppressThrow: !0
                            })
                        }
                        if (u = null !== (r = u) && void 0 !== r ? r : t.selection) {
                            var c, f = !0;
                            if (n.startsWith("delete")) {
                                if (g.e6.isExpanded(u)) {
                                    var [d, v] = g.e6.edges(u);
                                    if (g.NB.leaf(t, d.path).text.length === d.offset && 0 === v.offset) {
                                        var p = g.ML.next(t, {
                                            at: d.path,
                                            match: g.xv.isText
                                        });
                                        p && g.y$.equals(p[1], v.path) && (u = {
                                            anchor: v,
                                            focus: v
                                        })
                                    }
                                }
                                var E = n.endsWith("Backward") ? "backward" : "forward",
                                    [m, A] = g.e6.edges(u),
                                    [F, b] = g.ML.leaf(t, m.path),
                                    w = {
                                        text: "",
                                        start: m.offset,
                                        end: A.offset
                                    },
                                    y = xe.get(t),
                                    x = null == y ? void 0 : y.find((e => g.y$.equals(e.path, b))),
                                    O = x ? [x.diff, w] : [w];
                                0 === zt(F.text, ...O).length && (f = !1);
                                if (g.e6.isExpanded(u)) {
                                    if (f && g.y$.equals(u.anchor.path, u.focus.path)) {
                                        var k = {
                                                path: u.anchor.path,
                                                offset: m.offset
                                            },
                                            P = g.ML.range(t, k, k);
                                        C(P);
                                        return D(u.anchor.path, {
                                            text: "",
                                            end: A.offset,
                                            start: m.offset
                                        })
                                    }
                                    return h((() => g.ML.deleteFragment(t, {
                                        direction: E
                                    })), {
                                        at: u
                                    })
                                }
                            }
                            switch (n) {
                                case "deleteByComposition":
                                case "deleteByCut":
                                case "deleteByDrag":
                                    return h((() => g.ML.deleteFragment(t)), {
                                        at: u
                                    });
                                case "deleteContent":
                                case "deleteContentForward":
                                    var {
                                        anchor: M
                                    } = u;
                                    if (f && g.e6.isCollapsed(u)) {
                                        var S = g.NB.leaf(t, M.path);
                                        if (M.offset < S.text.length) return D(M.path, {
                                            text: "",
                                            start: M.offset,
                                            end: M.offset + 1
                                        })
                                    }
                                    return h((() => g.ML.deleteForward(t)), {
                                        at: u
                                    });
                                case "deleteContentBackward":
                                    var T, {
                                            anchor: L
                                        } = u,
                                        j = Ne(i) ? i.isCollapsed : !(null === (T = i) || void 0 === T || !T.collapsed);
                                    return f && j && g.e6.isCollapsed(u) && L.offset > 0 ? D(L.path, {
                                        text: "",
                                        start: L.offset - 1,
                                        end: L.offset
                                    }) : h((() => g.ML.deleteBackward(t)), {
                                        at: u
                                    });
                                case "deleteEntireSoftLine":
                                    return h((() => {
                                        g.ML.deleteBackward(t, {
                                            unit: "line"
                                        });
                                        g.ML.deleteForward(t, {
                                            unit: "line"
                                        })
                                    }), {
                                        at: u
                                    });
                                case "deleteHardLineBackward":
                                    return h((() => g.ML.deleteBackward(t, {
                                        unit: "block"
                                    })), {
                                        at: u
                                    });
                                case "deleteSoftLineBackward":
                                    return h((() => g.ML.deleteBackward(t, {
                                        unit: "line"
                                    })), {
                                        at: u
                                    });
                                case "deleteHardLineForward":
                                    return h((() => g.ML.deleteForward(t, {
                                        unit: "block"
                                    })), {
                                        at: u
                                    });
                                case "deleteSoftLineForward":
                                    return h((() => g.ML.deleteForward(t, {
                                        unit: "line"
                                    })), {
                                        at: u
                                    });
                                case "deleteWordBackward":
                                    return h((() => g.ML.deleteBackward(t, {
                                        unit: "word"
                                    })), {
                                        at: u
                                    });
                                case "deleteWordForward":
                                    return h((() => g.ML.deleteForward(t, {
                                        unit: "word"
                                    })), {
                                        at: u
                                    });
                                case "insertLineBreak":
                                    return h((() => g.ML.insertSoftBreak(t)), {
                                        at: u
                                    });
                                case "insertParagraph":
                                    return h((() => g.ML.insertBreak(t)), {
                                        at: u
                                    });
                                case "insertCompositionText":
                                case "deleteCompositionText":
                                case "insertFromComposition":
                                case "insertFromDrop":
                                case "insertFromPaste":
                                case "insertFromYank":
                                case "insertReplacementText":
                                case "insertText":
                                    if ("DataTransfer" === (null == (c = a) ? void 0 : c.constructor.name)) return h((() => ot.insertData(t, a)), {
                                        at: u
                                    });
                                    var R = null != a ? a : "";
                                    we.get(t) && (R = R.replace("\ufeff", ""));
                                    "insertText" === n && /.*\n.*\n$/.test(R) && (R = R.slice(0, -1));
                                    if (R.includes("\n")) return h((() => {
                                        var e = R.split("\n");
                                        e.forEach(((r, n) => {
                                            r && g.ML.insertText(t, r);
                                            n !== e.length - 1 && g.ML.insertSoftBreak(t)
                                        }))
                                    }), {
                                        at: u
                                    });
                                    if (g.y$.equals(u.anchor.path, u.focus.path)) {
                                        var [N, _] = g.e6.edges(u), W = {
                                            start: N.offset,
                                            end: _.offset,
                                            text: R
                                        };
                                        if (R && l && "insertCompositionText" === n) {
                                            var I = l.start + l.text.search(/\S|$/);
                                            if (W.start + W.text.search(/\S|$/) === I + 1 && W.end === l.start + l.text.length) {
                                                W.start -= 1;
                                                l = null;
                                                B()
                                            } else l = !1
                                        } else l = "insertText" === n && (null === l ? W : !(!l || !g.e6.isCollapsed(u) || l.end + l.text.length !== N.offset) && Jt(Jt({}, l), {}, {
                                            text: l.text + R
                                        }));
                                        if (f) {
                                            D(N.path, W);
                                            return
                                        }
                                    }
                                    return h((() => g.ML.insertText(t, R)), {
                                        at: u
                                    })
                            }
                        }
                    },
                    handleKeyDown: e => {
                        if (!p()) {
                            d(!0);
                            setTimeout(d)
                        }
                    },
                    handleDomMutations: e => {
                        if (!p() && !v() && e.some((r => $e(t, r, e)))) {
                            var r;
                            null === (r = Pe.get(t)) || void 0 === r || r()
                        }
                    },
                    handleInput: () => {
                        !v() && p() || f()
                    }
                }
            }
            var Gt = ["node"];

            function Qt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }
            var er = {
                subtree: !0,
                childList: !0,
                characterData: !0
            };

            function tr(e) {
                var {
                    node: t
                } = e, r = ie(e, Gt);
                if (!Ke) return null;
                var n = pt(),
                    u = function() {
                        var e = (0, l.useRef)(!1);
                        (0, l.useEffect)((() => {
                            e.current = !0;
                            return () => {
                                e.current = !1
                            }
                        }), []);
                        return e.current
                    }(),
                    [a] = (0, l.useState)((() => Zt(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Qt(Object(r), !0).forEach((function(t) {
                                oe(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qt(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({
                        editor: n
                    }, r))));
                ! function(e, t, r) {
                    var [n] = (0, l.useState)((() => new MutationObserver(t)));
                    ct((() => {
                        n.takeRecords()
                    }));
                    (0, l.useEffect)((() => {
                        if (!e.current) throw new Error("Failed to attach MutationObserver, `node` is undefined");
                        n.observe(e.current, r);
                        return () => n.disconnect()
                    }), [])
                }(t, a.handleDomMutations, er);
                be.set(n, a.scheduleFlush);
                u && a.flush();
                return a
            }
            var rr = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
                nr = ["text"];

            function ur(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }

            function ar(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ur(Object(r), !0).forEach((function(t) {
                        oe(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ur(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var or = e => l.createElement(l.Fragment, null, Ot(e)),
                ir = e => {
                    var t, r, n = (0, l.useCallback)((e => l.createElement(sr, Object.assign({}, e))), []),
                        {
                            autoFocus: a,
                            decorate: i = lr,
                            onDOMBeforeInput: c,
                            placeholder: f,
                            readOnly: d = !1,
                            renderElement: D,
                            renderLeaf: h,
                            renderPlaceholder: v = n,
                            scrollSelectionIntoView: p = cr,
                            style: C = {},
                            as: B = "div",
                            disableDefaultStyles: E = !1
                        } = e,
                        m = ie(e, rr),
                        A = (() => {
                            var e = (0, l.useContext)(Mt);
                            if (!e) throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                            var {
                                editor: t
                            } = e;
                            return t
                        })(),
                        [F, b] = (0, l.useState)(!1),
                        w = (0,
                            l.useRef)(null),
                        y = (0, l.useRef)([]),
                        {
                            onUserInput: x,
                            receivedUserInput: O
                        } = function() {
                            var e = pt(),
                                t = (0, l.useRef)(!1),
                                r = (0, l.useRef)(0),
                                n = (0, l.useCallback)((() => {
                                    if (!t.current) {
                                        t.current = !0;
                                        var n = ot.getWindow(e);
                                        n.cancelAnimationFrame(r.current);
                                        r.current = n.requestAnimationFrame((() => {
                                            t.current = !1
                                        }))
                                    }
                                }), []);
                            (0, l.useEffect)((() => () => cancelAnimationFrame(r.current)), []);
                            return {
                                receivedUserInput: t,
                                onUserInput: n
                            }
                        }(),
                        [, k] = (0, l.useReducer)((e => e + 1), 0);
                    Pe.set(A, k);
                    Be.set(A, d);
                    var P = (0, l.useMemo)((() => ({
                        isDraggingInternally: !1,
                        isUpdatingSelection: !1,
                        latestElement: null,
                        hasMarkPlaceholder: !1
                    })), []);
                    (0, l.useEffect)((() => {
                        w.current && a && w.current.focus()
                    }), [a]);
                    var M = (0, l.useCallback)(s()((() => {
                            if ((Ke || !ot.isComposing(A)) && (!P.isUpdatingSelection || null != T && T.isFlushing()) && !P.isDraggingInternally) {
                                var e = ot.findDocumentOrShadowRoot(A),
                                    {
                                        activeElement: t
                                    } = e,
                                    r = ot.toDOMNode(A, A),
                                    n = e.getSelection();
                                if (t === r) {
                                    P.latestElement = t;
                                    Ee.set(A, !0)
                                } else Ee.delete(A);
                                if (!n) return g.YR.deselect(A);
                                var {
                                    anchorNode: u,
                                    focusNode: a
                                } = n, o = ot.hasEditableTarget(A, u) || ot.isTargetInsideNonReadonlyVoid(A, u), i = ot.hasEditableTarget(A, a) || ot.isTargetInsideNonReadonlyVoid(A, a);
                                if (o && i) {
                                    var s = ot.toSlateRange(A, n, {
                                        exactMatch: !1,
                                        suppressThrow: !0
                                    });
                                    s && (ot.isComposing(A) || null != T && T.hasPendingChanges() || null != T && T.isFlushing() ? null == T || T.handleUserSelect(s) : g.YR.select(A, s))
                                }!d || o && i || g.YR.deselect(A)
                            }
                        }), 100), [d]),
                        S = (0, l.useMemo)((() => o()(M, 0)), [M]),
                        T = tr({
                            node: w,
                            onDOMSelectionChange: M,
                            scheduleOnDOMSelectionChange: S
                        });
                    ct((() => {
                        var e;
                        if (w.current && (e = Le(w.current))) {
                            de.set(A, e);
                            De.set(A, w.current);
                            pe.set(A, w.current);
                            ve.set(w.current, A)
                        } else pe.delete(A);
                        var {
                            selection: t
                        } = A, r = ot.findDocumentOrShadowRoot(A).getSelection();
                        if (r && ot.isFocused(A) && (null == T || !T.hasPendingAction())) {
                            var n = e => {
                                    var n = "None" !== r.type;
                                    if (t || n) {
                                        var u = De.get(A),
                                            a = !1;
                                        u.contains(r.anchorNode) && u.contains(r.focusNode) && (a = !0);
                                        if (n && a && t && !e) {
                                            var o = ot.toSlateRange(A, r, {
                                                exactMatch: !0,
                                                suppressThrow: !0
                                            });
                                            if (o && g.e6.equals(o, t)) {
                                                var i;
                                                if (!P.hasMarkPlaceholder) return;
                                                var {
                                                    anchorNode: s
                                                } = r;
                                                if (null != s && null !== (i = s.parentElement) && void 0 !== i && i.hasAttribute("data-slate-mark-placeholder")) return
                                            }
                                        }
                                        if (!t || ot.hasRange(A, t)) {
                                            P.isUpdatingSelection = !0;
                                            var l = t && ot.toDOMRange(A, t);
                                            if (l) {
                                                g.e6.isBackward(t) ? r.setBaseAndExtent(l.endContainer, l.endOffset, l.startContainer, l.startOffset) : r.setBaseAndExtent(l.startContainer, l.startOffset, l.endContainer, l.endOffset);
                                                p(A, l)
                                            } else r.removeAllRanges();
                                            return l
                                        }
                                        A.selection = ot.toSlateRange(A, r, {
                                            exactMatch: !1,
                                            suppressThrow: !0
                                        })
                                    }
                                },
                                u = n(),
                                a = "action" === (null == T ? void 0 : T.isFlushing());
                            if (Ke && a) {
                                var o = null,
                                    i = requestAnimationFrame((() => {
                                        if (a) {
                                            var e = e => {
                                                try {
                                                    ot.toDOMNode(A, A).focus();
                                                    n(e)
                                                } catch (e) {}
                                            };
                                            e();
                                            o = setTimeout((() => {
                                                e(!0);
                                                P.isUpdatingSelection = !1
                                            }))
                                        }
                                    }));
                                return () => {
                                    cancelAnimationFrame(i);
                                    o && clearTimeout(o)
                                }
                            }
                            setTimeout((() => {
                                if (u && Xe) {
                                    ot.toDOMNode(A, A).focus()
                                }
                                P.isUpdatingSelection = !1
                            }))
                        }
                    }));
                    var L = (0, l.useCallback)((e => {
                            x();
                            if (!d && ot.hasEditableTarget(A, e.target) && !dr(e, c)) {
                                var t;
                                if (T) return T.handleDOMBeforeInput(e);
                                S.flush();
                                M.flush();
                                var {
                                    selection: r
                                } = A, {
                                    inputType: n
                                } = e, u = e.dataTransfer || e.data || void 0, a = "insertCompositionText" === n || "deleteCompositionText" === n;
                                if (a && ot.isComposing(A)) return;
                                var o = !1;
                                if ("insertText" === n && r && g.e6.isCollapsed(r) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== r.anchor.offset) {
                                    var i, s;
                                    o = !0;
                                    A.marks && (o = !1);
                                    var {
                                        anchor: l
                                    } = r, [f, D] = ot.toDOMPoint(A, l), h = null === (i = f.parentElement) || void 0 === i ? void 0 : i.closest("a"), v = ot.getWindow(A);
                                    if (o && h && ot.hasDOMNode(A, h)) {
                                        var p, C = null == v ? void 0 : v.document.createTreeWalker(h, NodeFilter.SHOW_TEXT).lastChild();
                                        C === f && (null === (p = C.textContent) || void 0 === p ? void 0 : p.length) === D && (o = !1)
                                    }
                                    if (o && f.parentElement && "pre" === (null == v || null === (s = v.getComputedStyle(f.parentElement)) || void 0 === s ? void 0 : s.whiteSpace)) {
                                        var B = g.ML.above(A, {
                                            at: l.path,
                                            match: e => g.W_.isElement(e) && g.ML.isBlock(A, e)
                                        });
                                        B && g.NB.string(B[0]).includes("\t") && (o = !1)
                                    }
                                }
                                if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
                                    var [E] = e.getTargetRanges();
                                    if (E) {
                                        var m = ot.toSlateRange(A, E, {
                                            exactMatch: !1,
                                            suppressThrow: !1
                                        });
                                        if (!r || !g.e6.equals(r, m)) {
                                            o = !1;
                                            var F = !a && A.selection && g.ML.rangeRef(A, A.selection);
                                            g.YR.select(A, m);
                                            F && Ae.set(A, F)
                                        }
                                    }
                                }
                                if (a) return;
                                o || e.preventDefault();
                                if (r && g.e6.isExpanded(r) && n.startsWith("delete")) {
                                    var w = n.endsWith("Backward") ? "backward" : "forward";
                                    g.ML.deleteFragment(A, {
                                        direction: w
                                    });
                                    return
                                }
                                switch (n) {
                                    case "deleteByComposition":
                                    case "deleteByCut":
                                    case "deleteByDrag":
                                        g.ML.deleteFragment(A);
                                        break;
                                    case "deleteContent":
                                    case "deleteContentForward":
                                        g.ML.deleteForward(A);
                                        break;
                                    case "deleteContentBackward":
                                        g.ML.deleteBackward(A);
                                        break;
                                    case "deleteEntireSoftLine":
                                        g.ML.deleteBackward(A, {
                                            unit: "line"
                                        });
                                        g.ML.deleteForward(A, {
                                            unit: "line"
                                        });
                                        break;
                                    case "deleteHardLineBackward":
                                        g.ML.deleteBackward(A, {
                                            unit: "block"
                                        });
                                        break;
                                    case "deleteSoftLineBackward":
                                        g.ML.deleteBackward(A, {
                                            unit: "line"
                                        });
                                        break;
                                    case "deleteHardLineForward":
                                        g.ML.deleteForward(A, {
                                            unit: "block"
                                        });
                                        break;
                                    case "deleteSoftLineForward":
                                        g.ML.deleteForward(A, {
                                            unit: "line"
                                        });
                                        break;
                                    case "deleteWordBackward":
                                        g.ML.deleteBackward(A, {
                                            unit: "word"
                                        });
                                        break;
                                    case "deleteWordForward":
                                        g.ML.deleteForward(A, {
                                            unit: "word"
                                        });
                                        break;
                                    case "insertLineBreak":
                                        g.ML.insertSoftBreak(A);
                                        break;
                                    case "insertParagraph":
                                        g.ML.insertBreak(A);
                                        break;
                                    case "insertFromComposition":
                                    case "insertFromDrop":
                                    case "insertFromPaste":
                                    case "insertFromYank":
                                    case "insertReplacementText":
                                    case "insertText":
                                        if ("insertFromComposition" === n && ot.isComposing(A)) {
                                            b(!1);
                                            me.set(A, !1)
                                        }
                                        "DataTransfer" === (null == u ? void 0 : u.constructor.name) ? ot.insertData(A, u): "string" == typeof u && (o ? y.current.push((() => g.ML.insertText(A, u))) : g.ML.insertText(A, u))
                                }
                                var O = null === (t = Ae.get(A)) || void 0 === t ? void 0 : t.unref();
                                Ae.delete(A);
                                !O || A.selection && g.e6.equals(A.selection, O) || g.YR.select(A, O)
                            }
                        }), [d, c]),
                        j = (0, l.useCallback)((e => {
                            if (null == e) {
                                M.cancel();
                                S.cancel();
                                De.delete(A);
                                pe.delete(A);
                                w.current && at && w.current.removeEventListener("beforeinput", L)
                            } else at && e.addEventListener("beforeinput", L);
                            w.current = e
                        }), [w, L, M, S]);
                    ct((() => {
                        var e = ot.getWindow(A);
                        e.document.addEventListener("selectionchange", S);
                        return () => {
                            e.document.removeEventListener("selectionchange", S)
                        }
                    }), [S]);
                    var R = i([A, []]);
                    if (f && 1 === A.children.length && 1 === Array.from(g.NB.texts(A)).length && "" === g.NB.string(A) && !F) {
                        var N = g.ML.start(A, []);
                        R.push({
                            [Me]: !0,
                            placeholder: f,
                            anchor: N,
                            focus: N
                        })
                    }
                    var {
                        marks: _
                    } = A;
                    P.hasMarkPlaceholder = !1;
                    if (A.selection && g.e6.isCollapsed(A.selection) && _) {
                        var {
                            anchor: W
                        } = A.selection, I = g.NB.leaf(A, W.path), z = ie(I, nr);
                        if (!g.xv.equals(I, _, {
                                loose: !0
                            })) {
                            P.hasMarkPlaceholder = !0;
                            var q = Object.fromEntries(Object.keys(z).map((e => [e, null])));
                            R.push(ar(ar(ar({
                                [Se]: !0
                            }, q), _), {}, {
                                anchor: W,
                                focus: W
                            }))
                        }
                    }(0, l.useEffect)((() => {
                        setTimeout((() => {
                            var {
                                selection: e
                            } = A;
                            if (e) {
                                var {
                                    anchor: t
                                } = e, r = g.NB.leaf(A, t.path);
                                if (_ && !g.xv.equals(r, _, {
                                        loose: !0
                                    })) {
                                    we.set(A, _);
                                    return
                                }
                            }
                            we.delete(A)
                        }))
                    }));
                    var V = null === (t = he.get(A)) || void 0 === t || null === (r = t.getBoundingClientRect()) || void 0 === r ? void 0 : r.height;
                    return l.createElement(kt.Provider, {
                        value: d
                    }, l.createElement(wt.Provider, {
                        value: i
                    }, l.createElement(Wt, {
                        node: w,
                        receivedUserInput: O
                    }, l.createElement(B, Object.assign({
                        role: d ? void 0 : "textbox",
                        "aria-multiline": !d || void 0
                    }, m, {
                        spellCheck: !(!at && ut) && m.spellCheck,
                        autoCorrect: at || !ut ? m.autoCorrect : "false",
                        autoCapitalize: at || !ut ? m.autoCapitalize : "false",
                        "data-slate-editor": !0,
                        "data-slate-node": "value",
                        contentEditable: !d,
                        zindex: -1,
                        suppressContentEditableWarning: !0,
                        ref: j,
                        style: ar(ar({}, E ? {} : ar({
                            position: "relative",
                            outline: "none",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }, V ? {
                            minHeight: V
                        } : {})), C),
                        onBeforeInput: (0, l.useCallback)((e => {
                            if (!at && !d && !fr(e, m.onBeforeInput) && ot.hasSelectableTarget(A, e.target)) {
                                e.preventDefault();
                                if (!ot.isComposing(A)) {
                                    var t = e.data;
                                    g.ML.insertText(A, t)
                                }
                            }
                        }), [d]),
                        onInput: (0, l.useCallback)((e => {
                            if (!fr(e, m.onInput))
                                if (T) T.handleInput();
                                else {
                                    for (var t of y.current) t();
                                    y.current = []
                                }
                        }), []),
                        onBlur: (0, l.useCallback)((e => {
                            if (!d && !P.isUpdatingSelection && ot.hasSelectableTarget(A, e.target) && !fr(e, m.onBlur)) {
                                var t = ot.findDocumentOrShadowRoot(A);
                                if (P.latestElement !== t.activeElement) {
                                    var {
                                        relatedTarget: r
                                    } = e;
                                    if (!(r === ot.toDOMNode(A, A) || je(r) && r.hasAttribute("data-slate-spacer"))) {
                                        if (null != r && Re(r) && ot.hasDOMNode(A, r)) {
                                            var n = ot.toSlateNode(A, r);
                                            if (g.W_.isElement(n) && !A.isVoid(n)) return
                                        }
                                        if (Je) {
                                            var u = t.getSelection();
                                            null == u || u.removeAllRanges()
                                        }
                                        Ee.delete(A)
                                    }
                                }
                            }
                        }), [d, m.onBlur]),
                        onClick: (0, l.useCallback)((e => {
                            if (ot.hasTarget(A, e.target) && !fr(e, m.onClick) && Re(e.target)) {
                                var t = ot.toSlateNode(A, e.target),
                                    r = ot.findPath(A, t);
                                if (!g.ML.hasPath(A, r) || g.NB.get(A, r) !== t) return;
                                if (3 === e.detail && r.length >= 1) {
                                    var n = r;
                                    if (!g.W_.isElement(t) || !g.ML.isBlock(A, t)) {
                                        var u, a = g.ML.above(A, {
                                            match: e => g.W_.isElement(e) && g.ML.isBlock(A, e),
                                            at: r
                                        });
                                        n = null !== (u = null == a ? void 0 : a[1]) && void 0 !== u ? u : r.slice(0, 1)
                                    }
                                    var o = g.ML.range(A, n);
                                    g.YR.select(A, o);
                                    return
                                }
                                if (d) return;
                                var i = g.ML.start(A, r),
                                    s = g.ML.end(A, r),
                                    l = g.ML.void(A, {
                                        at: i
                                    }),
                                    c = g.ML.void(A, {
                                        at: s
                                    });
                                if (l && c && g.y$.equals(l[1], c[1])) {
                                    var f = g.ML.range(A, i);
                                    g.YR.select(A, f)
                                }
                            }
                        }), [d, m.onClick]),
                        onCompositionEnd: (0,
                            l.useCallback)((e => {
                            if (ot.hasSelectableTarget(A, e.target)) {
                                if (ot.isComposing(A)) {
                                    b(!1);
                                    me.set(A, !1)
                                }
                                null == T || T.handleCompositionEnd(e);
                                if (fr(e, m.onCompositionEnd) || Ke) return;
                                if (!Je && !tt && !Ue && !nt && !rt && e.data) {
                                    var t = we.get(A);
                                    we.delete(A);
                                    if (void 0 !== t) {
                                        ye.set(A, A.marks);
                                        A.marks = t
                                    }
                                    g.ML.insertText(A, e.data);
                                    var r = ye.get(A);
                                    ye.delete(A);
                                    void 0 !== r && (A.marks = r)
                                }
                            }
                        }), [m.onCompositionEnd]),
                        onCompositionUpdate: (0, l.useCallback)((e => {
                            if (ot.hasSelectableTarget(A, e.target) && !fr(e, m.onCompositionUpdate) && !ot.isComposing(A)) {
                                b(!0);
                                me.set(A, !0)
                            }
                        }), [m.onCompositionUpdate]),
                        onCompositionStart: (0, l.useCallback)((e => {
                            if (ot.hasSelectableTarget(A, e.target)) {
                                null == T || T.handleCompositionStart(e);
                                if (fr(e, m.onCompositionStart) || Ke) return;
                                b(!0);
                                var {
                                    selection: t
                                } = A;
                                if (t) {
                                    if (g.e6.isExpanded(t)) {
                                        g.ML.deleteFragment(A);
                                        return
                                    }
                                    var r = g.ML.above(A, {
                                        match: e => g.W_.isElement(e) && g.ML.isInline(A, e),
                                        mode: "highest"
                                    });
                                    if (r) {
                                        var [, n] = r;
                                        if (g.ML.isEnd(A, t.anchor, n)) {
                                            var u = g.ML.after(A, n);
                                            g.YR.setSelection(A, {
                                                anchor: u,
                                                focus: u
                                            })
                                        }
                                    }
                                }
                            }
                        }), [m.onCompositionStart]),
                        onCopy: (0, l.useCallback)((e => {
                            if (ot.hasSelectableTarget(A, e.target) && !fr(e, m.onCopy)) {
                                e.preventDefault();
                                ot.setFragmentData(A, e.clipboardData, "copy")
                            }
                        }), [m.onCopy]),
                        onCut: (0, l.useCallback)((e => {
                            if (!d && ot.hasSelectableTarget(A, e.target) && !fr(e, m.onCut)) {
                                e.preventDefault();
                                ot.setFragmentData(A, e.clipboardData, "cut");
                                var {
                                    selection: t
                                } = A;
                                if (t)
                                    if (g.e6.isExpanded(t)) g.ML.deleteFragment(A);
                                    else {
                                        var r = g.NB.parent(A, t.anchor.path);
                                        g.ML.isVoid(A, r) && g.YR.delete(A)
                                    }
                            }
                        }), [d, m.onCut]),
                        onDragOver: (0, l.useCallback)((e => {
                            if (ot.hasTarget(A, e.target) && !fr(e, m.onDragOver)) {
                                var t = ot.toSlateNode(A, e.target);
                                g.W_.isElement(t) && g.ML.isVoid(A, t) && e.preventDefault()
                            }
                        }), [m.onDragOver]),
                        onDragStart: (0, l.useCallback)((e => {
                            if (!d && ot.hasTarget(A, e.target) && !fr(e, m.onDragStart)) {
                                var t = ot.toSlateNode(A, e.target),
                                    r = ot.findPath(A, t);
                                if (g.W_.isElement(t) && g.ML.isVoid(A, t) || g.ML.void(A, {
                                        at: r,
                                        voids: !0
                                    })) {
                                    var n = g.ML.range(A, r);
                                    g.YR.select(A, n)
                                }
                                P.isDraggingInternally = !0;
                                ot.setFragmentData(A, e.dataTransfer, "drag")
                            }
                        }), [d, m.onDragStart]),
                        onDrop: (0, l.useCallback)((e => {
                            if (!d && ot.hasTarget(A, e.target) && !fr(e, m.onDrop)) {
                                e.preventDefault();
                                var t = A.selection,
                                    r = ot.findEventRange(A, e),
                                    n = e.dataTransfer;
                                g.YR.select(A, r);
                                P.isDraggingInternally && (!t || g.e6.equals(t, r) || g.ML.void(A, {
                                    at: r,
                                    voids: !0
                                }) || g.YR.delete(A, {
                                    at: t
                                }));
                                ot.insertData(A, n);
                                ot.isFocused(A) || ot.focus(A)
                            }
                            P.isDraggingInternally = !1
                        }), [d, m.onDrop]),
                        onDragEnd: (0, l.useCallback)((e => {
                            !d && P.isDraggingInternally && m.onDragEnd && ot.hasTarget(A, e.target) && m.onDragEnd(e);
                            P.isDraggingInternally = !1
                        }), [d, m.onDragEnd]),
                        onFocus: (0, l.useCallback)((e => {
                            if (!d && !P.isUpdatingSelection && ot.hasEditableTarget(A, e.target) && !fr(e, m.onFocus)) {
                                var t = ot.toDOMNode(A, A),
                                    r = ot.findDocumentOrShadowRoot(A);
                                P.latestElement = r.activeElement;
                                if (Xe && e.target !== t) {
                                    t.focus();
                                    return
                                }
                                Ee.set(A, !0)
                            }
                        }), [d, m.onFocus]),
                        onKeyDown: (0, l.useCallback)((e => {
                            if (!d && ot.hasEditableTarget(A, e.target)) {
                                null == T || T.handleKeyDown(e);
                                var {
                                    nativeEvent: t
                                } = e
                                ;
                                if (ot.isComposing(A) && !1 === t.isComposing) {
                                    me.set(A, !1);
                                    b(!1)
                                }
                                if (fr(e, m.onKeyDown) || ot.isComposing(A)) return;
                                var {
                                    selection: r
                                } = A, n = A.children[null !== r ? r.focus.path[0] : 0], a = "rtl" === u()(g.NB.string(n));
                                if (Rt.isRedo(t)) {
                                    e.preventDefault();
                                    var o = A;
                                    "function" == typeof o.redo && o.redo();
                                    return
                                }
                                if (Rt.isUndo(t)) {
                                    e.preventDefault();
                                    var i = A;
                                    "function" == typeof i.undo && i.undo();
                                    return
                                }
                                if (Rt.isMoveLineBackward(t)) {
                                    e.preventDefault();
                                    g.YR.move(A, {
                                        unit: "line",
                                        reverse: !0
                                    });
                                    return
                                }
                                if (Rt.isMoveLineForward(t)) {
                                    e.preventDefault();
                                    g.YR.move(A, {
                                        unit: "line"
                                    });
                                    return
                                }
                                if (Rt.isExtendLineBackward(t)) {
                                    e.preventDefault();
                                    g.YR.move(A, {
                                        unit: "line",
                                        edge: "focus",
                                        reverse: !0
                                    });
                                    return
                                }
                                if (Rt.isExtendLineForward(t)) {
                                    e.preventDefault();
                                    g.YR.move(A, {
                                        unit: "line",
                                        edge: "focus"
                                    });
                                    return
                                }
                                if (Rt.isMoveBackward(t)) {
                                    e.preventDefault();
                                    r && g.e6.isCollapsed(r) ? g.YR.move(A, {
                                        reverse: !a
                                    }) : g.YR.collapse(A, {
                                        edge: "start"
                                    });
                                    return
                                }
                                if (Rt.isMoveForward(t)) {
                                    e.preventDefault();
                                    r && g.e6.isCollapsed(r) ? g.YR.move(A, {
                                        reverse: a
                                    }) : g.YR.collapse(A, {
                                        edge: "end"
                                    });
                                    return
                                }
                                if (Rt.isMoveWordBackward(t)) {
                                    e.preventDefault();
                                    r && g.e6.isExpanded(r) && g.YR.collapse(A, {
                                        edge: "focus"
                                    });
                                    g.YR.move(A, {
                                        unit: "word",
                                        reverse: !a
                                    });
                                    return
                                }
                                if (Rt.isMoveWordForward(t)) {
                                    e.preventDefault();
                                    r && g.e6.isExpanded(r) && g.YR.collapse(A, {
                                        edge: "focus"
                                    });
                                    g.YR.move(A, {
                                        unit: "word",
                                        reverse: a
                                    });
                                    return
                                }
                                if (at) {
                                    if ((Ge || Je) && r && (Rt.isDeleteBackward(t) || Rt.isDeleteForward(t)) && g.e6.isCollapsed(r)) {
                                        var s = g.NB.parent(A, r.anchor.path);
                                        if (g.W_.isElement(s) && g.ML.isVoid(A, s) && (g.ML.isInline(A, s) || g.ML.isBlock(A, s))) {
                                            e.preventDefault();
                                            g.ML.deleteBackward(A, {
                                                unit: "block"
                                            });
                                            return
                                        }
                                    }
                                } else {
                                    if (Rt.isBold(t) || Rt.isItalic(t) || Rt.isTransposeCharacter(t)) {
                                        e.preventDefault();
                                        return
                                    }
                                    if (Rt.isSoftBreak(t)) {
                                        e.preventDefault();
                                        g.ML.insertSoftBreak(A);
                                        return
                                    }
                                    if (Rt.isSplitBlock(t)) {
                                        e.preventDefault();
                                        g.ML.insertBreak(A);
                                        return
                                    }
                                    if (Rt.isDeleteBackward(t)) {
                                        e.preventDefault();
                                        r && g.e6.isExpanded(r) ? g.ML.deleteFragment(A, {
                                            direction: "backward"
                                        }) : g.ML.deleteBackward(A);
                                        return
                                    }
                                    if (Rt.isDeleteForward(t)) {
                                        e.preventDefault();
                                        r && g.e6.isExpanded(r) ? g.ML.deleteFragment(A, {
                                            direction: "forward"
                                        }) : g.ML.deleteForward(A);
                                        return
                                    }
                                    if (Rt.isDeleteLineBackward(t)) {
                                        e.preventDefault();
                                        r && g.e6.isExpanded(r) ? g.ML.deleteFragment(A, {
                                            direction: "backward"
                                        }) : g.ML.deleteBackward(A, {
                                            unit: "line"
                                        });
                                        return
                                    }
                                    if (Rt.isDeleteLineForward(t)) {
                                        e.preventDefault();
                                        r && g.e6.isExpanded(r) ? g.ML.deleteFragment(A, {
                                            direction: "forward"
                                        }) : g.ML.deleteForward(A, {
                                            unit: "line"
                                        });
                                        return
                                    }
                                    if (Rt.isDeleteWordBackward(t)) {
                                        e.preventDefault();
                                        r && g.e6.isExpanded(r) ? g.ML.deleteFragment(A, {
                                            direction: "backward"
                                        }) : g.ML.deleteBackward(A, {
                                            unit: "word"
                                        });
                                        return
                                    }
                                    if (Rt.isDeleteWordForward(t)) {
                                        e.preventDefault();
                                        r && g.e6.isExpanded(r) ? g.ML.deleteFragment(A, {
                                            direction: "forward"
                                        }) : g.ML.deleteForward(A, {
                                            unit: "word"
                                        });
                                        return
                                    }
                                }
                            }
                        }), [d, m.onKeyDown]),
                        onPaste: (0, l.useCallback)((e => {
                            if (!d && ot.hasEditableTarget(A, e.target) && !fr(e, m.onPaste) && (!at || (e => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length)(e.nativeEvent) || Je)) {
                                e.preventDefault();
                                ot.insertData(A, e.clipboardData)
                            }
                        }), [d, m.onPaste])
                    }), l.createElement(or, {
                        decorations: R,
                        node: A,
                        renderElement: D,
                        renderPlaceholder: v,
                        renderLeaf: h,
                        selection: A.selection
                    })))))
                },
                sr = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return l.createElement("span", Object.assign({}, t), r, Ke && l.createElement("br", null))
                },
                lr = () => [],
                cr = (e, t) => {
                    if (t.getBoundingClientRect && (!e.selection || e.selection && g.e6.isCollapsed(e.selection))) {
                        var r = t.startContainer.parentElement;
                        r.getBoundingClientRect = t.getBoundingClientRect.bind(t);
                        p(r, {
                            scrollMode: "if-needed"
                        });
                        delete r.getBoundingClientRect
                    }
                },
                fr = (e, t) => {
                    if (!t) return !1;
                    var r = t(e);
                    return null != r ? r : e.isDefaultPrevented() || e.isPropagationStopped()
                },
                dr = (e, t) => {
                    if (!t) return !1;
                    var r = t(e);
                    return null != r ? r : e.defaultPrevented
                },
                Dr = (0, l.createContext)(!1),
                hr = () => (0, l.useContext)(Dr);
            var vr = (0, l.createContext)({});
            var pr = ["editor", "children", "onChange", "value"],
                Cr = e => {
                    var {
                        editor: t,
                        children: r,
                        onChange: n,
                        value: u
                    } = e, a = ie(e, pr), o = (0, l.useRef)(!1), [i, s] = l.useState((() => {
                        if (!g.NB.isNodeList(u)) throw new Error("[Slate] value is invalid! Expected a list of elements but got: ".concat(g.o4.stringify(u)));
                        if (!g.ML.isEditor(t)) throw new Error("[Slate] editor is invalid! You passed: ".concat(g.o4.stringify(t)));
                        t.children = u;
                        Object.assign(t, a);
                        return {
                            v: 0,
                            editor: t
                        }
                    })), {
                        selectorContext: c,
                        onChange: f
                    } = function(e) {
                        var t = (0, l.useRef)([]).current,
                            r = (0, l.useRef)({
                                editor: e
                            }).current,
                            n = (0, l.useCallback)((e => {
                                r.editor = e;
                                t.forEach((t => t(e)))
                            }), []);
                        return {
                            selectorContext: (0, l.useMemo)((() => ({
                                getSlate: () => r.editor,
                                addEventListener: e => {
                                    t.push(e);
                                    return () => {
                                        t.splice(t.indexOf(e), 1)
                                    }
                                }
                            })), [t, r]),
                            onChange: n
                        }
                    }(t), d = (0, l.useCallback)((() => {
                        n && n(t.children);
                        s((e => ({
                            v: e.v + 1,
                            editor: t
                        })));
                        f(t)
                    }), [n]);
                    (0, l.useEffect)((() => {
                        Fe.set(t, d);
                        return () => {
                            Fe.set(t, (() => {}));
                            o.current = !0
                        }
                    }), [d]);
                    var [D, h] = (0, l.useState)(ot.isFocused(t));
                    (0, l.useEffect)((() => {
                        h(ot.isFocused(t))
                    }));
                    ct((() => {
                        var e = () => h(ot.isFocused(t));
                        if (Ye) {
                            document.addEventListener("focusin", e);
                            document.addEventListener("focusout", e);
                            return () => {
                                document.removeEventListener("focusin", e);
                                document.removeEventListener("focusout", e)
                            }
                        }
                        document.addEventListener("focus", e, !0);
                        document.addEventListener("blur", e, !0);
                        return () => {
                            document.removeEventListener("focus", e, !0);
                            document.removeEventListener("blur", e, !0)
                        }
                    }), []);
                    return l.createElement(vr.Provider, {
                        value: c
                    }, l.createElement(Mt.Provider, {
                        value: i
                    }, l.createElement(vt.Provider, {
                        value: i.editor
                    }, l.createElement(Dr.Provider, {
                        value: D
                    }, r))))
                },
                gr = (e, t) => {
                    var r = (t.top + t.bottom) / 2;
                    return e.top <= r && e.bottom >= r
                },
                Br = (e, t, r) => {
                    var n = ot.toDOMRange(e, t).getBoundingClientRect(),
                        u = ot.toDOMRange(e, r).getBoundingClientRect();
                    return gr(n, u) && gr(u, n)
                },
                Er = (e, t) => {
                    var r = g.ML.range(e, g.e6.end(t)),
                        n = Array.from(g.ML.positions(e, {
                            at: t
                        })),
                        u = 0,
                        a = n.length,
                        o = Math.floor(a / 2);
                    if (Br(e, g.ML.range(e, n[u]), r)) return g.ML.range(e, n[u], r);
                    if (n.length < 2) return g.ML.range(e, n[n.length - 1], r);
                    for (; o !== n.length && o !== u;) {
                        Br(e, g.ML.range(e, n[o]), r) ? a = o : u = o;
                        o = Math.floor((u + a) / 2)
                    }
                    return g.ML.range(e, n[a], r)
                };

            function mr(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }

            function Ar(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? mr(Object(r), !0).forEach((function(t) {
                        oe(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mr(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Fr = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
                        r = e,
                        {
                            apply: n,
                            onChange: u,
                            deleteBackward: a,
                            addMark: o,
                            removeMark: i
                        } = r;
                    ge.set(r, new WeakMap);
                    r.addMark = (e, t) => {
                        var n, u;
                        null === (n = be.get(r)) || void 0 === n || n();
                        !we.get(r) && null !== (u = xe.get(r)) && void 0 !== u && u.length && we.set(r, null);
                        ye.delete(r);
                        o(e, t)
                    };
                    r.removeMark = e => {
                        var t;
                        !we.get(r) && null !== (t = xe.get(r)) && void 0 !== t && t.length && we.set(r, null);
                        ye.delete(r);
                        i(e)
                    };
                    r.deleteBackward = e => {
                        if ("line" !== e) return a(e);
                        if (r.selection && g.e6.isCollapsed(r.selection)) {
                            var t = g.ML.above(r, {
                                match: e => g.W_.isElement(e) && g.ML.isBlock(r, e),
                                at: r.selection
                            });
                            if (t) {
                                var [, n] = t, u = g.ML.range(r, n, r.selection.anchor), o = Er(r, u);
                                g.e6.isCollapsed(o) || g.YR.delete(r, {
                                    at: o
                                })
                            }
                        }
                    };
                    r.apply = e => {
                        var t = [],
                            u = xe.get(r);
                        if (null != u && u.length) {
                            var a = u.map((t => Kt(t, e))).filter(Boolean);
                            xe.set(r, a)
                        }
                        var o = ke.get(r);
                        o && ke.set(r, Ht(r, o, e));
                        var i = Oe.get(r);
                        if (null != i && i.at) {
                            var s = g.E9.isPoint(null == i ? void 0 : i.at) ? Ut(r, i.at, e) : Ht(r, i.at, e);
                            Oe.set(r, s ? Ar(Ar({}, i), {}, {
                                at: s
                            }) : null)
                        }
                        switch (e.type) {
                            case "insert_text":
                            case "remove_text":
                            case "set_node":
                            case "split_node":
                                t.push(...br(r, e.path));
                                break;
                            case "set_selection":
                                var l;
                                null === (l = Ae.get(r)) || void 0 === l || l.unref();
                                Ae.delete(r);
                                break;
                            case "insert_node":
                            case "remove_node":
                                t.push(...br(r, g.y$.parent(e.path)));
                                break;
                            case "merge_node":
                                var c = g.y$.previous(e.path);
                                t.push(...br(r, c));
                                break;
                            case "move_node":
                                var f = g.y$.common(g.y$.parent(e.path), g.y$.parent(e.newPath));
                                t.push(...br(r, f))
                        }
                        n(e);
                        for (var [d, D] of t) {
                            var [h] = g.ML.node(r, d);
                            Ce.set(h, D)
                        }
                    };
                    r.setFragmentData = e => {
                        var {
                            selection: n
                        } = r;
                        if (n) {
                            var [u, a] = g.e6.edges(n), o = g.ML.void(r, {
                                at: u.path
                            }), i = g.ML.void(r, {
                                at: a.path
                            });
                            if (!g.e6.isCollapsed(n) || o) {
                                var s = ot.toDOMRange(r, n),
                                    l = s.cloneContents(),
                                    c = l.childNodes[0];
                                l.childNodes.forEach((e => {
                                    e.textContent && "" !== e.textContent.trim() && (c = e)
                                }));
                                if (i) {
                                    var [f] = i, d = s.cloneRange(), D = ot.toDOMNode(r, f);
                                    d.setEndAfter(D);
                                    l = d.cloneContents()
                                }
                                o && (c = l.querySelector("[data-slate-spacer]"));
                                Array.from(l.querySelectorAll("[data-slate-zero-width]")).forEach((e => {
                                    var t = "n" === e.getAttribute("data-slate-zero-width");
                                    e.textContent = t ? "\n" : ""
                                }));
                                if (_e(c)) {
                                    var h = c.ownerDocument.createElement("span");
                                    h.style.whiteSpace = "pre";
                                    h.appendChild(c);
                                    l.appendChild(h);
                                    c = h
                                }
                                var v = r.getFragment(),
                                    p = JSON.stringify(v),
                                    C = window.btoa(encodeURIComponent(p));
                                c.setAttribute("data-slate-fragment", C);
                                e.setData("application/".concat(t), C);
                                var B = l.ownerDocument.createElement("div");
                                B.appendChild(l);
                                B.setAttribute("hidden", "true");
                                l.ownerDocument.body.appendChild(B);
                                e.setData("text/html", B.innerHTML);
                                e.setData("text/plain", ze(B));
                                l.ownerDocument.body.removeChild(B);
                                return e
                            }
                        }
                    };
                    r.insertData = e => {
                        r.insertFragmentData(e) || r.insertTextData(e)
                    };
                    r.insertFragmentData = e => {
                        var n = e.getData("application/".concat(t)) || Ve(e);
                        if (n) {
                            var u = decodeURIComponent(window.atob(n)),
                                a = JSON.parse(u);
                            r.insertFragment(a);
                            return !0
                        }
                        return !1
                    };
                    r.insertTextData = e => {
                        var t = e.getData("text/plain");
                        if (t) {
                            var n = t.split(/\r\n|\r|\n/),
                                u = !1;
                            for (var a of n) {
                                u && g.YR.splitNodes(r, {
                                    always: !0
                                });
                                r.insertText(a);
                                u = !0
                            }
                            return !0
                        }
                        return !1
                    };
                    r.onChange = e => {
                        ae.unstable_batchedUpdates((() => {
                            var t = Fe.get(r);
                            t && t();
                            u(e)
                        }))
                    };
                    return r
                },
                br = (e, t) => {
                    var r = [];
                    for (var [n, u] of g.ML.levels(e, {
                            at: t
                        })) {
                        var a = ot.findKey(e, n);
                        r.push([u, a])
                    }
                    return r
                }
        },
        451080: e => {
            "use strict";
            e.exports = function(e) {
                e = String(e || "");
                if (n.test(e)) return "rtl";
                if (u.test(e)) return "ltr";
                return "neutral"
            };
            var t = "֑-߿יִ-﷽ﹰ-ﻼ",
                r = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                n = new RegExp("^[^" + r + "]*[" + t + "]"),
                u = new RegExp("^[^" + t + "]*[" + r + "]")
        },
        849302: (e, t, r) => {
            var n = r(627560).Symbol;
            e.exports = n
        },
        972388: (e, t, r) => {
            var n = r(849302),
                u = r(780569),
                a = r(847718),
                o = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? u(e) : a(e)
            }
        },
        828283: (e, t, r) => {
            var n = r(988527),
                u = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, n(e) + 1).replace(u, "") : e
            }
        },
        512729: (e, t, r) => {
            var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
            e.exports = n
        },
        780569: (e, t, r) => {
            var n = r(849302),
                u = Object.prototype,
                a = u.hasOwnProperty,
                o = u.toString,
                i = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                var t = a.call(e, i),
                    r = e[i];
                try {
                    e[i] = void 0;
                    var n = !0
                } catch (e) {}
                var u = o.call(e);
                n && (t ? e[i] = r : delete e[i]);
                return u
            }
        },
        847718: e => {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        },
        627560: (e, t, r) => {
            var n = r(512729),
                u = "object" == typeof self && self && self.Object === Object && self,
                a = n || u || Function("return this")();
            e.exports = a
        },
        988527: e => {
            var t = /\s/;
            e.exports = function(e) {
                for (var r = e.length; r-- && t.test(e.charAt(r)););
                return r
            }
        },
        408512: (e, t, r) => {
            var n = r(647969),
                u = r(567637),
                a = r(233683),
                o = Math.max,
                i = Math.min;
            e.exports = function(e, t, r) {
                var s, l, c, f, d, D, h = 0,
                    v = !1,
                    p = !1,
                    C = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                t = a(t) || 0;
                if (n(r)) {
                    v = !!r.leading;
                    c = (p = "maxWait" in r) ? o(a(r.maxWait) || 0, t) : c;
                    C = "trailing" in r ? !!r.trailing : C
                }

                function g(t) {
                    var r = s,
                        n = l;
                    s = l = void 0;
                    h = t;
                    return f = e.apply(n, r)
                }

                function B(e) {
                    h = e;
                    d = setTimeout(m, t);
                    return v ? g(e) : f
                }

                function E(e) {
                    var r = e - D;
                    return void 0 === D || r >= t || r < 0 || p && e - h >= c
                }

                function m() {
                    var e = u();
                    if (E(e)) return A(e);
                    d = setTimeout(m, function(e) {
                        var r = t - (e - D);
                        return p ? i(r, c - (e - h)) : r
                    }(e))
                }

                function A(e) {
                    d = void 0;
                    if (C && s) return g(e);
                    s = l = void 0;
                    return f
                }

                function F() {
                    var e = u(),
                        r = E(e);
                    s = arguments;
                    l = this;
                    D = e;
                    if (r) {
                        if (void 0 === d) return B(D);
                        if (p) {
                            clearTimeout(d);
                            d = setTimeout(m, t);
                            return g(D)
                        }
                    }
                    void 0 === d && (d = setTimeout(m, t));
                    return f
                }
                F.cancel = function() {
                    void 0 !== d && clearTimeout(d);
                    h = 0;
                    s = D = l = d = void 0
                };
                F.flush = function() {
                    return void 0 === d ? f : A(u())
                };
                return F
            }
        },
        647969: e => {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        474934: e => {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        216153: (e, t, r) => {
            var n = r(972388),
                u = r(474934);
            e.exports = function(e) {
                return "symbol" == typeof e || u(e) && "[object Symbol]" == n(e)
            }
        },
        567637: (e, t, r) => {
            var n = r(627560);
            e.exports = function() {
                return n.Date.now()
            }
        },
        649911: (e, t, r) => {
            var n = r(408512),
                u = r(647969);
            e.exports = function(e, t, r) {
                var a = !0,
                    o = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                if (u(r)) {
                    a = "leading" in r ? !!r.leading : a;
                    o = "trailing" in r ? !!r.trailing : o
                }
                return n(e, t, {
                    leading: a,
                    maxWait: t,
                    trailing: o
                })
            }
        },
        233683: (e, t, r) => {
            var n = r(828283),
                u = r(647969),
                a = r(216153),
                o = /^[-+]0x[0-9a-f]+$/i,
                i = /^0b[01]+$/i,
                s = /^0o[0-7]+$/i,
                l = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (a(e)) return NaN;
                if (u(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = u(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = n(e);
                var r = i.test(e);
                return r || s.test(e) ? l(e.slice(2), r ? 2 : 8) : o.test(e) ? NaN : +e
            }
        },
        104182: (e, t, r) => {
            "use strict";
            r.d(t, {
                ML: () => Ze,
                W_: () => Ye,
                NB: () => rt,
                y$: () => ot,
                E9: () => ct,
                e6: () => ht,
                o4: () => Ct,
                xv: () => Ft,
                YR: () => zt,
                Jh: () => ve
            });

            function n(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function u(e) {
                var t, r;
                return !1 !== n(e) && (void 0 === (t = e.constructor) || !1 !== n(r = t.prototype) && !1 !== r.hasOwnProperty("isPrototypeOf"))
            }

            function a(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map((function(e) {
                    return "'" + e + "'"
                })).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
            }

            function o(e) {
                return !!e && !!e[H]
            }

            function i(e) {
                var t;
                return !!e && (function(e) {
                    if (!e || "object" != typeof e) return !1;
                    var t = Object.getPrototypeOf(e);
                    if (null === t) return !0;
                    var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                    return r === Object || "function" == typeof r && Function.toString.call(r) === K
                }(e) || Array.isArray(e) || !!e[U] || !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[U]) || h(e) || v(e))
            }

            function s(e, t, r) {
                void 0 === r && (r = !1), 0 === l(e) ? (r ? Object.keys : X)(e).forEach((function(n) {
                    r && "symbol" == typeof n || t(n, e[n], e)
                })) : e.forEach((function(r, n) {
                    return t(n, r, e)
                }))
            }

            function l(e) {
                var t = e[H];
                return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : h(e) ? 2 : v(e) ? 3 : 0
            }

            function c(e, t) {
                return 2 === l(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
            }

            function f(e, t) {
                return 2 === l(e) ? e.get(t) : e[t]
            }

            function d(e, t, r) {
                var n = l(e);
                2 === n ? e.set(t, r) : 3 === n ? (e.delete(t), e.add(r)) : e[t] = r
            }

            function D(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
            }

            function h(e) {
                return q && e instanceof Map
            }

            function v(e) {
                return V && e instanceof Set
            }

            function p(e) {
                return e.o || e.t
            }

            function C(e) {
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                var t = J(e);
                delete t[H];
                for (var r = X(t), n = 0; n < r.length; n++) {
                    var u = r[n],
                        a = t[u];
                    !1 === a.writable && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (t[u] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: a.enumerable,
                        value: e[u]
                    })
                }
                return Object.create(Object.getPrototypeOf(e), t)
            }

            function g(e, t) {
                return void 0 === t && (t = !1), E(e) || o(e) || !i(e) || (l(e) > 1 && (e.set = e.add = e.clear = e.delete = B), Object.freeze(e), t && s(e, (function(e, t) {
                    return g(t, !0)
                }), !0)), e
            }

            function B() {
                a(2)
            }

            function E(e) {
                return null == e || "object" != typeof e || Object.isFrozen(e)
            }

            function m(e) {
                var t = Z[e];
                return t || a(18, e), t
            }

            function A() {
                return I
            }

            function F(e, t) {
                t && (m("Patches"), e.u = [], e.s = [], e.v = t)
            }

            function b(e) {
                w(e), e.p.forEach(x), e.p = null
            }

            function w(e) {
                e === I && (I = e.l)
            }

            function y(e) {
                return I = {
                    p: [],
                    l: I,
                    h: e,
                    m: !0,
                    _: 0
                }
            }

            function x(e) {
                var t = e[H];
                0 === t.i || 1 === t.i ? t.j() : t.O = !0
            }

            function O(e, t) {
                t._ = t.p.length;
                var r = t.p[0],
                    n = void 0 !== e && e !== r;
                return t.h.g || m("ES5").S(t, e, n), n ? (r[H].P && (b(t), a(4)), i(e) && (e = k(t, e), t.l || M(t, e)), t.u && m("Patches").M(r[H].t, e, t.u, t.s)) : e = k(t, r, []), b(t),
                    t.u && t.v(t.u, t.s), e !== Y ? e : void 0
            }

            function k(e, t, r) {
                if (E(t)) return t;
                var n = t[H];
                if (!n) return s(t, (function(u, a) {
                    return P(e, n, t, u, a, r)
                }), !0), t;
                if (n.A !== e) return t;
                if (!n.P) return M(e, n.t, !0), n.t;
                if (!n.I) {
                    n.I = !0, n.A._--;
                    var u = 4 === n.i || 5 === n.i ? n.o = C(n.k) : n.o;
                    s(3 === n.i ? new Set(u) : u, (function(t, a) {
                        return P(e, n, u, t, a, r)
                    })), M(e, u, !1), r && e.u && m("Patches").R(n, r, e.u, e.s)
                }
                return n.o
            }

            function P(e, t, r, n, u, a) {
                if (o(u)) {
                    var s = k(e, u, a && t && 3 !== t.i && !c(t.D, n) ? a.concat(n) : void 0);
                    if (d(r, n, s), !o(s)) return;
                    e.m = !1
                }
                if (i(u) && !E(u)) {
                    if (!e.h.F && e._ < 1) return;
                    k(e, u), t && t.A.l || M(e, u)
                }
            }

            function M(e, t, r) {
                void 0 === r && (r = !1), e.h.F && e.m && g(t, r)
            }

            function S(e, t) {
                var r = e[H];
                return (r ? p(r) : e)[t]
            }

            function T(e, t) {
                if (t in e)
                    for (var r = Object.getPrototypeOf(e); r;) {
                        var n = Object.getOwnPropertyDescriptor(r, t);
                        if (n) return n;
                        r = Object.getPrototypeOf(r)
                    }
            }

            function L(e) {
                e.P || (e.P = !0, e.l && L(e.l))
            }

            function j(e) {
                e.o || (e.o = C(e.t))
            }

            function R(e, t, r) {
                var n = h(t) ? m("MapSet").N(t, r) : v(t) ? m("MapSet").T(t, r) : e.g ? function(e, t) {
                    var r = Array.isArray(e),
                        n = {
                            i: r ? 1 : 0,
                            A: t ? t.A : A(),
                            P: !1,
                            I: !1,
                            D: {},
                            l: t,
                            t: e,
                            k: null,
                            o: null,
                            j: null,
                            C: !1
                        },
                        u = n,
                        a = G;
                    r && (u = [n], a = Q);
                    var o = Proxy.revocable(u, a),
                        i = o.revoke,
                        s = o.proxy;
                    return n.k = s, n.j = i, s
                }(t, r) : m("ES5").J(t, r);
                return (r ? r.A : A()).p.push(n), n
            }

            function N(e) {
                return o(e) || a(22, e),
                    function e(t) {
                        if (!i(t)) return t;
                        var r, n = t[H],
                            u = l(t);
                        if (n) {
                            if (!n.P && (n.i < 4 || !m("ES5").K(n))) return n.t;
                            n.I = !0, r = _(t, u), n.I = !1
                        } else r = _(t, u);
                        return s(r, (function(t, u) {
                            n && f(n.t, t) === u || d(r, t, e(u))
                        })), 3 === u ? new Set(r) : r
                    }(e)
            }

            function _(e, t) {
                switch (t) {
                    case 2:
                        return new Map(e);
                    case 3:
                        return Array.from(e)
                }
                return C(e)
            }
            var W, I, z = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
                q = "undefined" != typeof Map,
                V = "undefined" != typeof Set,
                $ = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
                Y = z ? Symbol.for("immer-nothing") : ((W = {})["immer-nothing"] = !0, W),
                U = z ? Symbol.for("immer-draftable") : "__$immer_draftable",
                H = z ? Symbol.for("immer-state") : "__$immer_state",
                K = ("undefined" != typeof Symbol && Symbol.iterator,
                    "" + Object.prototype.constructor),
                X = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                } : Object.getOwnPropertyNames,
                J = Object.getOwnPropertyDescriptors || function(e) {
                    var t = {};
                    return X(e).forEach((function(r) {
                        t[r] = Object.getOwnPropertyDescriptor(e, r)
                    })), t
                },
                Z = {},
                G = {
                    get: function(e, t) {
                        if (t === H) return e;
                        var r = p(e);
                        if (!c(r, t)) return function(e, t, r) {
                            var n, u = T(t, r);
                            return u ? "value" in u ? u.value : null === (n = u.get) || void 0 === n ? void 0 : n.call(e.k) : void 0
                        }(e, r, t);
                        var n = r[t];
                        return e.I || !i(n) ? n : n === S(e.t, t) ? (j(e), e.o[t] = R(e.A.h, n, e)) : n
                    },
                    has: function(e, t) {
                        return t in p(e)
                    },
                    ownKeys: function(e) {
                        return Reflect.ownKeys(p(e))
                    },
                    set: function(e, t, r) {
                        var n = T(p(e), t);
                        if (null == n ? void 0 : n.set) return n.set.call(e.k, r), !0;
                        if (!e.P) {
                            var u = S(p(e), t),
                                a = null == u ? void 0 : u[H];
                            if (a && a.t === r) return e.o[t] = r, e.D[t] = !1, !0;
                            if (D(r, u) && (void 0 !== r || c(e.t, t))) return !0;
                            j(e), L(e)
                        }
                        return e.o[t] === r && "number" != typeof r && (void 0 !== r || t in e.o) || (e.o[t] = r, e.D[t] = !0, !0)
                    },
                    deleteProperty: function(e, t) {
                        return void 0 !== S(e.t, t) || t in e.t ? (e.D[t] = !1, j(e), L(e)) : delete e.D[t], e.o && delete e.o[t], !0
                    },
                    getOwnPropertyDescriptor: function(e, t) {
                        var r = p(e),
                            n = Reflect.getOwnPropertyDescriptor(r, t);
                        return n ? {
                            writable: !0,
                            configurable: 1 !== e.i || "length" !== t,
                            enumerable: n.enumerable,
                            value: r[t]
                        } : n
                    },
                    defineProperty: function() {
                        a(11)
                    },
                    getPrototypeOf: function(e) {
                        return Object.getPrototypeOf(e.t)
                    },
                    setPrototypeOf: function() {
                        a(12)
                    }
                },
                Q = {};
            s(G, (function(e, t) {
                Q[e] = function() {
                    return arguments[0] = arguments[0][0], t.apply(this, arguments)
                }
            })), Q.deleteProperty = function(e, t) {
                return Q.set.call(this, e, t, void 0)
            }, Q.set = function(e, t, r) {
                return G.set.call(this, e[0], t, r, e[0])
            };
            var ee = function() {
                    function e(e) {
                        var t = this;
                        this.g = $, this.F = !0, this.produce = function(e, r, n) {
                            if ("function" == typeof e && "function" != typeof r) {
                                var u = r;
                                r = e;
                                var o = t;
                                return function(e) {
                                    var t = this;
                                    void 0 === e && (e = u);
                                    for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                                    return o.produce(e, (function(e) {
                                        var n;
                                        return (n = r).call.apply(n, [t, e].concat(a))
                                    }))
                                }
                            }
                            var s;
                            if ("function" != typeof r && a(6), void 0 !== n && "function" != typeof n && a(7), i(e)) {
                                var l = y(t),
                                    c = R(t, e, void 0),
                                    f = !0;
                                try {
                                    s = r(c), f = !1
                                } finally {
                                    f ? b(l) : w(l)
                                }
                                return "undefined" != typeof Promise && s instanceof Promise ? s.then((function(e) {
                                    return F(l, n), O(e, l)
                                }), (function(e) {
                                    throw b(l), e
                                })) : (F(l, n), O(s, l))
                            }
                            if (!e || "object" != typeof e) {
                                if (void 0 === (s = r(e)) && (s = e), s === Y && (s = void 0), t.F && g(s, !0), n) {
                                    var d = [],
                                        D = [];
                                    m("Patches").M(e, s, d, D), n(d, D)
                                }
                                return s
                            }
                            a(21, e)
                        }, this.produceWithPatches = function(e, r) {
                            if ("function" == typeof e) return function(r) {
                                for (var n = arguments.length, u = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) u[a - 1] = arguments[a];
                                return t.produceWithPatches(r, (function(t) {
                                    return e.apply(void 0, [t].concat(u))
                                }))
                            };
                            var n, u, a = t.produce(e, r, (function(e, t) {
                                n = e, u = t
                            }));
                            return "undefined" != typeof Promise && a instanceof Promise ? a.then((function(e) {
                                return [e, n, u]
                            })) : [a, n, u]
                        }, "boolean" == typeof(null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof(null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
                    }
                    var t = e.prototype;
                    return t.createDraft = function(e) {
                        i(e) || a(8), o(e) && (e = N(e));
                        var t = y(this),
                            r = R(this, e, void 0);
                        return r[H].C = !0, w(t), r
                    }, t.finishDraft = function(e, t) {
                        var r = (e && e[H]).A;
                        return F(r, t), O(void 0, r)
                    }, t.setAutoFreeze = function(e) {
                        this.F = e
                    }, t.setUseProxies = function(e) {
                        e && !$ && a(20), this.g = e
                    }, t.applyPatches = function(e, t) {
                        var r;
                        for (r = t.length - 1; r >= 0; r--) {
                            var n = t[r];
                            if (0 === n.path.length && "replace" === n.op) {
                                e = n.value;
                                break
                            }
                        }
                        r > -1 && (t = t.slice(r + 1));
                        var u = m("Patches").$;
                        return o(e) ? u(e, t) : this.produce(e, (function(e) {
                            return u(e, t)
                        }))
                    }, e
                }(),
                te = new ee,
                re = te.produce,
                ne = (te.produceWithPatches.bind(te), te.setAutoFreeze.bind(te), te.setUseProxies.bind(te), te.applyPatches.bind(te), te.createDraft.bind(te)),
                ue = te.finishDraft.bind(te);

            function ae(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var oe = new WeakMap,
                ie = new WeakMap,
                se = new WeakMap,
                le = new WeakMap,
                ce = new WeakMap,
                fe = new WeakMap,
                de = new WeakMap;

            function De(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }

            function he(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? De(Object(r), !0).forEach((function(t) {
                        ae(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : De(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ve = () => {
                var e = {
                    children: [],
                    operations: [],
                    selection: null,
                    marks: null,
                    isInline: () => !1,
                    isVoid: () => !1,
                    markableVoid: () => !1,
                    onChange: () => {},
                    apply: t => {
                        for (var r of Ze.pathRefs(e)) it.transform(r, t);
                        for (var n of Ze.pointRefs(e)) ft.transform(n, t);
                        for (var u of Ze.rangeRefs(e)) vt.transform(u, t);
                        var a, o, i = oe.get(e) || [],
                            s = ie.get(e) || new Set,
                            l = e => {
                                if (e) {
                                    var t = e.join(",");
                                    if (!o.has(t)) {
                                        o.add(t);
                                        a.push(e)
                                    }
                                }
                            };
                        if (ot.operationCanTransformPath(t)) {
                            a = [];
                            o = new Set;
                            for (var c of i) {
                                l(ot.transform(c, t))
                            }
                        } else {
                            a = i;
                            o = s
                        }
                        var f = e.getDirtyPaths(t);
                        for (var d of f) l(d);
                        oe.set(e, a);
                        ie.set(e, o);
                        zt.transform(e, t);
                        e.operations.push(t);
                        Ze.normalize(e, {
                            operation: t
                        });
                        "set_selection" === t.type && (e.marks = null);
                        if (!se.get(e)) {
                            se.set(e, !0);
                            Promise.resolve().then((() => {
                                se.set(e, !1);
                                e.onChange({
                                    operation: t
                                });
                                e.operations = []
                            }))
                        }
                    },
                    addMark: (t, r) => {
                        var {
                            selection: n,
                            markableVoid: u
                        } = e;
                        if (n) {
                            var a = (t, r) => {
                                    if (!Ft.isText(t)) return !1;
                                    var [n, u] = Ze.parent(e, r);
                                    return !e.isVoid(n) || e.markableVoid(n)
                                },
                                o = ht.isExpanded(n),
                                i = !1;
                            if (!o) {
                                var [s, l] = Ze.node(e, n);
                                if (s && a(s, l)) {
                                    var [c] = Ze.parent(e, l);
                                    i = c && e.markableVoid(c)
                                }
                            }
                            if (o || i) zt.setNodes(e, {
                                [t]: r
                            }, {
                                match: a,
                                split: !0,
                                voids: !0
                            });
                            else {
                                var f = he(he({}, Ze.marks(e) || {}), {}, {
                                    [t]: r
                                });
                                e.marks = f;
                                se.get(e) || e.onChange()
                            }
                        }
                    },
                    deleteBackward: t => {
                        var {
                            selection: r
                        } = e;
                        r && ht.isCollapsed(r) && zt.delete(e, {
                            unit: t,
                            reverse: !0
                        })
                    },
                    deleteForward: t => {
                        var {
                            selection: r
                        } = e;
                        r && ht.isCollapsed(r) && zt.delete(e, {
                            unit: t
                        })
                    },
                    deleteFragment: t => {
                        var {
                            selection: r
                        } = e;
                        r && ht.isExpanded(r) && zt.delete(e, {
                            reverse: "backward" === t
                        })
                    },
                    getFragment: () => {
                        var {
                            selection: t
                        } = e;
                        return t ? rt.fragment(e, t) : []
                    },
                    insertBreak: () => {
                        zt.splitNodes(e, {
                            always: !0
                        })
                    },
                    insertSoftBreak: () => {
                        zt.splitNodes(e, {
                            always: !0
                        })
                    },
                    insertFragment: t => {
                        zt.insertFragment(e, t)
                    },
                    insertNode: t => {
                        zt.insertNodes(e, t)
                    },
                    insertText: t => {
                        var {
                            selection: r,
                            marks: n
                        } = e;
                        if (r) {
                            if (n) {
                                var u = he({
                                    text: t
                                }, n);
                                zt.insertNodes(e, u)
                            } else zt.insertText(e, t);
                            e.marks = null
                        }
                    },
                    normalizeNode: t => {
                        var [r, n] = t;
                        if (!Ft.isText(r))
                            if (Ye.isElement(r) && 0 === r.children.length) {
                                zt.insertNodes(e, {
                                    text: ""
                                }, {
                                    at: n.concat(0),
                                    voids: !0
                                })
                            } else
                                for (var u = !Ze.isEditor(r) && (Ye.isElement(r) && (e.isInline(r) || 0 === r.children.length || Ft.isText(r.children[0]) || e.isInline(r.children[0]))), a = 0, o = 0; o < r.children.length; o++, a++) {
                                    var i = rt.get(e, n);
                                    if (!Ft.isText(i)) {
                                        var s = r.children[o],
                                            l = i.children[a - 1],
                                            c = o === r.children.length - 1;
                                        if ((Ft.isText(s) || Ye.isElement(s) && e.isInline(s)) !== u) {
                                            zt.removeNodes(e, {
                                                at: n.concat(a),
                                                voids: !0
                                            });
                                            a--
                                        } else if (Ye.isElement(s)) {
                                            if (e.isInline(s))
                                                if (null != l && Ft.isText(l)) {
                                                    if (c) {
                                                        zt.insertNodes(e, {
                                                            text: ""
                                                        }, {
                                                            at: n.concat(a + 1),
                                                            voids: !0
                                                        });
                                                        a++
                                                    }
                                                } else {
                                                    zt.insertNodes(e, {
                                                        text: ""
                                                    }, {
                                                        at: n.concat(a),
                                                        voids: !0
                                                    });
                                                    a++
                                                }
                                        } else if (null != l && Ft.isText(l))
                                            if (Ft.equals(s, l, {
                                                    loose: !0
                                                })) {
                                                zt.mergeNodes(e, {
                                                    at: n.concat(a),
                                                    voids: !0
                                                });
                                                a--
                                            } else if ("" === l.text) {
                                            zt.removeNodes(e, {
                                                at: n.concat(a - 1),
                                                voids: !0
                                            });
                                            a--
                                        } else if ("" === s.text) {
                                            zt.removeNodes(e, {
                                                at: n.concat(a),
                                                voids: !0
                                            });
                                            a--
                                        }
                                    }
                                }
                    },
                    removeMark: t => {
                        var {
                            selection: r
                        } = e;
                        if (r) {
                            var n = (t, r) => {
                                    if (!Ft.isText(t)) return !1;
                                    var [n, u] = Ze.parent(e, r);
                                    return !e.isVoid(n) || e.markableVoid(n)
                                },
                                u = ht.isExpanded(r),
                                a = !1;
                            if (!u) {
                                var [o, i] = Ze.node(e, r);
                                if (o && n(o, i)) {
                                    var [s] = Ze.parent(e, i);
                                    a = s && e.markableVoid(s)
                                }
                            }
                            if (u || a) zt.unsetNodes(e, t, {
                                match: n,
                                split: !0,
                                voids: !0
                            });
                            else {
                                var l = he({}, Ze.marks(e) || {});
                                delete l[t];
                                e.marks = l;
                                se.get(e) || e.onChange()
                            }
                        }
                    },
                    getDirtyPaths: e => {
                        switch (e.type) {
                            case "insert_text":
                            case "remove_text":
                            case "set_node":
                                var {
                                    path: t
                                } = e;
                                return ot.levels(t);
                            case "insert_node":
                                var {
                                    node: r, path: n
                                } = e, u = ot.levels(n), a = Ft.isText(r) ? [] : Array.from(rt.nodes(r), (e => {
                                    var [, t] = e;
                                    return n.concat(t)
                                }));
                                return [...u, ...a];
                            case "merge_node":
                                var {
                                    path: o
                                } = e;
                                return [...ot.ancestors(o), ot.previous(o)];
                            case "move_node":
                                var {
                                    path: i, newPath: s
                                } = e;
                                if (ot.equals(i, s)) return [];
                                var l = [],
                                    c = [];
                                for (var f of ot.ancestors(i)) {
                                    var d = ot.transform(f, e);
                                    l.push(d)
                                }
                                for (var D of ot.ancestors(s)) {
                                    var h = ot.transform(D, e);
                                    c.push(h)
                                }
                                var v = c[c.length - 1],
                                    p = s[s.length - 1],
                                    C = v.concat(p);
                                return [...l, ...c, C];
                            case "remove_node":
                                var {
                                    path: g
                                } = e;
                                return [...ot.ancestors(g)];
                            case "split_node":
                                var {
                                    path: B
                                } = e;
                                return [...ot.levels(B), ot.next(B)];
                            default:
                                return []
                        }
                    },
                    shouldNormalize: e => {
                        var {
                            iteration: t,
                            initialDirtyPathsLength: r
                        } = e, n = 42 * r;
                        if (t > n) throw new Error("Could not completely normalize the editor after ".concat(n, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
                        return !0
                    }
                };
                return e
            };

            function pe(e, t) {
                if (null == e) return {};
                var r, n, u = function(e, t) {
                    if (null == e) return {};
                    var r, n, u = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || (u[r] = e[r])
                    }
                    return u
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
                    }
                }
                return u
            }
            var Ce, ge = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = !t,
                        n = t ? be(e) : e,
                        u = Ce.None,
                        a = Ce.None,
                        o = 0,
                        i = null;
                    for (var s of n) {
                        var l = s.codePointAt(0);
                        if (!l) break;
                        var c = Re(s, l);
                        [u, a] = r ? [a, c] : [c, u];
                        if (Ne(u, Ce.ZWJ) && Ne(a, Ce.ExtPict) && !ze(r ? e.substring(0, o) : e.substring(0, e.length - o))) break;
                        if (Ne(u, Ce.RI) && Ne(a, Ce.RI) && !(i = null !== i ? !i : !!r || Ve(e.substring(0, e.length - o)))) break;
                        if (u !== Ce.None && a !== Ce.None && We(u, a)) break;
                        o += s.length
                    }
                    return o || 1
                },
                Be = /\s/,
                Ee = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
                me = /['\u2018\u2019]/,
                Ae = (e, t, r) => {
                    if (r) {
                        var n = e.length - t;
                        return [e.slice(n, e.length), e.slice(0, n)]
                    }
                    return [e.slice(0, t), e.slice(t)]
                },
                Fe = function e(t, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (Be.test(t)) return !1;
                    if (me.test(t)) {
                        var u = ge(r, n),
                            [a, o] = Ae(r, u, n);
                        if (e(a, o, n)) return !0
                    }
                    return !Ee.test(t)
                },
                be = function*(e) {
                    for (var t = e.length - 1, r = 0; r < e.length; r++) {
                        var n = e.charAt(t - r);
                        if (ye(n.charCodeAt(0))) {
                            var u = e.charAt(t - r - 1);
                            if (we(u.charCodeAt(0))) {
                                yield u + n;
                                r++;
                                continue
                            }
                        }
                        yield n
                    }
                },
                we = e => e >= 55296 && e <= 56319,
                ye = e => e >= 56320 && e <= 57343;
            ! function(e) {
                e[e.None = 0] = "None";
                e[e.Extend = 1] = "Extend";
                e[e.ZWJ = 2] = "ZWJ";
                e[e.RI = 4] = "RI";
                e[e.Prepend = 8] = "Prepend";
                e[e.SpacingMark = 16] = "SpacingMark";
                e[e.L = 32] = "L";
                e[e.V = 64] = "V";
                e[e.T = 128] = "T";
                e[e.LV = 256] = "LV";
                e[e.LVT = 512] = "LVT";
                e[e.ExtPict = 1024] = "ExtPict";
                e[e.Any = 2048] = "Any"
            }(Ce || (Ce = {}));
            var xe = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
                Oe = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
                ke = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
                Pe = /^[\u1100-\u115F\uA960-\uA97C]$/,
                Me = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
                Se = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
                Te = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
                Le = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
                je = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
                Re = (e, t) => {
                    var r = Ce.Any; - 1 !== e.search(xe) && (r |= Ce.Extend);
                    8205 === t && (r |= Ce.ZWJ);
                    t >= 127462 && t <= 127487 && (r |= Ce.RI); - 1 !== e.search(Oe) && (r |= Ce.Prepend); - 1 !== e.search(ke) && (r |= Ce.SpacingMark); - 1 !== e.search(Pe) && (r |= Ce.L); - 1 !== e.search(Me) && (r |= Ce.V); - 1 !== e.search(Se) && (r |= Ce.T); - 1 !== e.search(Te) && (r |= Ce.LV); - 1 !== e.search(Le) && (r |= Ce.LVT); - 1 !== e.search(je) && (r |= Ce.ExtPict);
                    return r
                };

            function Ne(e, t) {
                return 0 != (e & t)
            }
            var _e = [
                [Ce.L, Ce.L | Ce.V | Ce.LV | Ce.LVT],
                [Ce.LV | Ce.V, Ce.V | Ce.T],
                [Ce.LVT | Ce.T, Ce.T],
                [Ce.Any, Ce.Extend | Ce.ZWJ],
                [Ce.Any, Ce.SpacingMark],
                [Ce.Prepend, Ce.Any],
                [Ce.ZWJ, Ce.ExtPict],
                [Ce.RI, Ce.RI]
            ];

            function We(e, t) {
                return -1 === _e.findIndex((r => Ne(e, r[0]) && Ne(t, r[1])))
            }
            var Ie = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
                ze = e => -1 !== e.search(Ie),
                qe = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
                Ve = e => {
                    var t = e.match(qe);
                    return null !== t && t[0].length / 2 % 2 == 1
                },
                $e = e => u(e) && rt.isNodeList(e.children) && !Ze.isEditor(e),
                Ye = {
                    isAncestor: e => u(e) && rt.isNodeList(e.children),
                    isElement: $e,
                    isElementList: e => Array.isArray(e) && e.every((e => Ye.isElement(e))),
                    isElementProps: e => void 0 !== e.children,
                    isElementType: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
                        return $e(e) && e[r] === t
                    },
                    matches(e, t) {
                        for (var r in t)
                            if ("children" !== r && e[r] !== t[r]) return !1;
                        return !0
                    }
                },
                Ue = ["text"],
                He = ["text"];

            function Ke(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }

            function Xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ke(Object(r), !0).forEach((function(t) {
                        ae(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ke(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Je = new WeakMap,
                Ze = {
                    above(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                voids: r = !1,
                                mode: n = "lowest",
                                at: u = e.selection,
                                match: a
                            } = t;
                        if (u) {
                            var o = Ze.path(e, u),
                                i = "lowest" === n;
                            for (var [s, l] of Ze.levels(e, {
                                    at: o,
                                    voids: r,
                                    match: a,
                                    reverse: i
                                }))
                                if (!Ft.isText(s))
                                    if (ht.isRange(u)) {
                                        if (ot.isAncestor(l, u.anchor.path) && ot.isAncestor(l, u.focus.path)) return [s, l]
                                    } else if (!ot.equals(o, l)) return [s, l]
                        }
                    },
                    addMark(e, t, r) {
                        e.addMark(t, r)
                    },
                    after(e, t) {
                        var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            u = {
                                anchor: Ze.point(e, t, {
                                    edge: "end"
                                }),
                                focus: Ze.end(e, [])
                            },
                            {
                                distance: a = 1
                            } = n,
                            o = 0;
                        for (var i of Ze.positions(e, Xe(Xe({}, n), {}, {
                                at: u
                            }))) {
                            if (o > a) break;
                            0 !== o && (r = i);
                            o++
                        }
                        return r
                    },
                    before(e, t) {
                        var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            u = {
                                anchor: Ze.start(e, []),
                                focus: Ze.point(e, t, {
                                    edge: "start"
                                })
                            },
                            {
                                distance: a = 1
                            } = n,
                            o = 0;
                        for (var i of Ze.positions(e, Xe(Xe({}, n), {}, {
                                at: u,
                                reverse: !0
                            }))) {
                            if (o > a) break;
                            0 !== o && (r = i);
                            o++
                        }
                        return r
                    },
                    deleteBackward(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                unit: r = "character"
                            } = t;
                        e.deleteBackward(r)
                    },
                    deleteForward(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                unit: r = "character"
                            } = t;
                        e.deleteForward(r)
                    },
                    deleteFragment(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                direction: r = "forward"
                            } = t;
                        e.deleteFragment(r)
                    },
                    edges: (e, t) => [Ze.start(e, t), Ze.end(e, t)],
                    end: (e, t) => Ze.point(e, t, {
                        edge: "end"
                    }),
                    first(e, t) {
                        var r = Ze.path(e, t, {
                            edge: "start"
                        });
                        return Ze.node(e, r)
                    },
                    fragment(e, t) {
                        var r = Ze.range(e, t);
                        return rt.fragment(e, r)
                    },
                    hasBlocks: (e, t) => t.children.some((t => Ye.isElement(t) && Ze.isBlock(e, t))),
                    hasInlines: (e, t) => t.children.some((t => Ft.isText(t) || Ze.isInline(e, t))),
                    hasTexts: (e, t) => t.children.every((e => Ft.isText(e))),
                    insertBreak(e) {
                        e.insertBreak()
                    },
                    insertSoftBreak(e) {
                        e.insertSoftBreak()
                    },
                    insertFragment(e, t) {
                        e.insertFragment(t)
                    },
                    insertNode(e, t) {
                        e.insertNode(t)
                    },
                    insertText(e, t) {
                        e.insertText(t)
                    },
                    isBlock: (e, t) => !e.isInline(t),
                    isEditor(e) {
                        var t = Je.get(e);
                        if (void 0 !== t) return t;
                        if (!u(e)) return !1;
                        var r = "function" == typeof e.addMark && "function" == typeof e.apply && "function" == typeof e.deleteBackward && "function" == typeof e.deleteForward && "function" == typeof e.deleteFragment && "function" == typeof e.insertBreak && "function" == typeof e.insertSoftBreak && "function" == typeof e.insertFragment && "function" == typeof e.insertNode && "function" == typeof e.insertText && "function" == typeof e.isInline && "function" == typeof e.isVoid && "function" == typeof e.normalizeNode && "function" == typeof e.onChange && "function" == typeof e.removeMark && "function" == typeof e.getDirtyPaths && (null === e.marks || u(e.marks)) && (null === e.selection || ht.isRange(e.selection)) && rt.isNodeList(e.children) && at.isOperationList(e.operations);
                        Je.set(e, r);
                        return r
                    },
                    isEnd(e, t, r) {
                        var n = Ze.end(e, r);
                        return ct.equals(t, n)
                    },
                    isEdge: (e, t, r) => Ze.isStart(e, t, r) || Ze.isEnd(e, t, r),
                    isEmpty(e, t) {
                        var {
                            children: r
                        } = t, [n] = r;
                        return 0 === r.length || 1 === r.length && Ft.isText(n) && "" === n.text && !e.isVoid(t)
                    },
                    isInline: (e, t) => e.isInline(t),
                    isNormalizing(e) {
                        var t = le.get(e);
                        return void 0 === t || t
                    },
                    isStart(e, t, r) {
                        if (0 !== t.offset) return !1;
                        var n = Ze.start(e, r);
                        return ct.equals(t, n)
                    },
                    isVoid: (e, t) => e.isVoid(t),
                    last(e, t) {
                        var r = Ze.path(e, t, {
                            edge: "end"
                        });
                        return Ze.node(e, r)
                    },
                    leaf(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = Ze.path(e, t, r);
                        return [rt.leaf(e, n), n]
                    },
                    * levels(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: r = e.selection,
                                reverse: n = !1,
                                voids: u = !1
                            } = t,
                            {
                                match: a
                            } = t;
                        null == a && (a = () => !0);
                        if (r) {
                            var o = [],
                                i = Ze.path(e, r);
                            for (var [s, l] of rt.levels(e, i))
                                if (a(s, l)) {
                                    o.push([s, l]);
                                    if (!u && Ye.isElement(s) && Ze.isVoid(e, s)) break
                                } n && o.reverse();
                            yield* o
                        }
                    },
                    marks(e) {
                        var {
                            marks: t,
                            selection: r
                        } = e;
                        if (!r) return null;
                        if (t) return t;
                        if (ht.isExpanded(r)) {
                            var [n] = Ze.nodes(e, {
                                match: Ft.isText
                            });
                            if (n) {
                                var [u] = n;
                                return pe(u, Ue)
                            }
                            return {}
                        }
                        var {
                            anchor: a
                        } = r, {
                            path: o
                        } = a, [i] = Ze.leaf(e, o);
                        if (0 === a.offset) {
                            var s = Ze.previous(e, {
                                    at: o,
                                    match: Ft.isText
                                }),
                                l = Ze.above(e, {
                                    match: t => Ye.isElement(t) && Ze.isVoid(e, t) && e.markableVoid(t)
                                });
                            if (!l) {
                                var c = Ze.above(e, {
                                    match: t => Ye.isElement(t) && Ze.isBlock(e, t)
                                });
                                if (s && c) {
                                    var [f, d] = s, [, D] = c;
                                    ot.isAncestor(D, d) && (i = f)
                                }
                            }
                        }
                        return pe(i, He)
                    },
                    next(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                mode: r = "lowest",
                                voids: n = !1
                            } = t,
                            {
                                match: u,
                                at: a = e.selection
                            } = t;
                        if (a) {
                            var o = Ze.after(e, a, {
                                voids: n
                            });
                            if (o) {
                                var [, i] = Ze.last(e, []), s = [o.path, i];
                                if (ot.isPath(a) && 0 === a.length) throw new Error("Cannot get the next node from the root node!");
                                if (null == u)
                                    if (ot.isPath(a)) {
                                        var [l] = Ze.parent(e, a);
                                        u = e => l.children.includes(e)
                                    } else u = () => !0;
                                var [c] = Ze.nodes(e, {
                                    at: s,
                                    match: u,
                                    mode: r,
                                    voids: n
                                });
                                return c
                            }
                        }
                    },
                    node(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = Ze.path(e, t, r);
                        return [rt.get(e, n), n]
                    },
                    * nodes(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: r = e.selection,
                                mode: n = "all",
                                universal: u = !1,
                                reverse: a = !1,
                                voids: o = !1
                            } = t,
                            {
                                match: i
                            } = t;
                        i || (i = () => !0);
                        if (r) {
                            var s, l;
                            if (Ge.isSpan(r)) {
                                s = r[0];
                                l = r[1]
                            } else {
                                var c = Ze.path(e, r, {
                                        edge: "start"
                                    }),
                                    f = Ze.path(e, r, {
                                        edge: "end"
                                    });
                                s = a ? f : c;
                                l = a ? c : f
                            }
                            var d, D = rt.nodes(e, {
                                    reverse: a,
                                    from: s,
                                    to: l,
                                    pass: t => {
                                        var [r] = t;
                                        return !o && (Ye.isElement(r) && Ze.isVoid(e, r))
                                    }
                                }),
                                h = [];
                            for (var [v, p] of D) {
                                var C = d && 0 === ot.compare(p, d[1]);
                                if ("highest" !== n || !C)
                                    if (i(v, p))
                                        if ("lowest" === n && C) d = [v, p];
                                        else {
                                            var g = "lowest" === n ? d : [v, p];
                                            g && (u ? h.push(g) : yield g);
                                            d = [v, p]
                                        }
                                else if (u && !C && Ft.isText(v)) return
                            }
                            "lowest" === n && d && (u ? h.push(d) : yield d);
                            u && (yield* h)
                        }
                    },
                    normalize(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                force: r = !1,
                                operation: n
                            } = t,
                            u = e => oe.get(e) || [],
                            a = e => {
                                var t = u(e).pop(),
                                    r = t.join(",");
                                (e => ie.get(e) || new Set)(e).delete(r);
                                return t
                            };
                        if (Ze.isNormalizing(e)) {
                            if (r) {
                                var o = Array.from(rt.nodes(e), (e => {
                                        var [, t] = e;
                                        return t
                                    })),
                                    i = new Set(o.map((e => e.join(","))));
                                oe.set(e, o);
                                ie.set(e, i)
                            }
                            0 !== u(e).length && Ze.withoutNormalizing(e, (() => {
                                for (var t of u(e))
                                    if (rt.has(e, t)) {
                                        var r = Ze.node(e, t),
                                            [o, i] = r;
                                        Ye.isElement(o) && 0 === o.children.length && e.normalizeNode(r, {
                                            operation: n
                                        })
                                    } for (var s = u(e), l = s.length, c = 0; 0 !== s.length;) {
                                    if (!e.shouldNormalize({
                                            dirtyPaths: s,
                                            iteration: c,
                                            initialDirtyPathsLength: l,
                                            operation: n
                                        })) return;
                                    var f = a(e);
                                    if (rt.has(e, f)) {
                                        var d = Ze.node(e, f);
                                        e.normalizeNode(d, {
                                            operation: n
                                        })
                                    }
                                    c++;
                                    s = u(e)
                                }
                            }))
                        }
                    },
                    parent(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = Ze.path(e, t, r),
                            u = ot.parent(n);
                        return Ze.node(e, u)
                    },
                    path(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                depth: n,
                                edge: u
                            } = r;
                        if (ot.isPath(t))
                            if ("start" === u) {
                                var [, a] = rt.first(e, t);
                                t = a
                            } else if ("end" === u) {
                            var [, o] = rt.last(e, t);
                            t = o
                        }
                        ht.isRange(t) && (t = "start" === u ? ht.start(t) : "end" === u ? ht.end(t) : ot.common(t.anchor.path, t.focus.path));
                        ct.isPoint(t) && (t = t.path);
                        null != n && (t = t.slice(0, n));
                        return t
                    },
                    hasPath: (e, t) => rt.has(e, t),
                    pathRef(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: n = "forward"
                            } = r,
                            u = {
                                current: t,
                                affinity: n,
                                unref() {
                                    var {
                                        current: t
                                    } = u;
                                    Ze.pathRefs(e).delete(u);
                                    u.current = null;
                                    return t
                                }
                            };
                        Ze.pathRefs(e).add(u);
                        return u
                    },
                    pathRefs(e) {
                        var t = ce.get(e);
                        if (!t) {
                            t = new Set;
                            ce.set(e, t)
                        }
                        return t
                    },
                    point(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                edge: n = "start"
                            } = r;
                        if (ot.isPath(t)) {
                            var u;
                            if ("end" === n) {
                                var [, a] = rt.last(e, t);
                                u = a
                            } else {
                                var [, o] = rt.first(e, t);
                                u = o
                            }
                            var i = rt.get(e, u);
                            if (!Ft.isText(i)) throw new Error("Cannot get the ".concat(n, " point in the node at path [").concat(t, "] because it has no ").concat(n, " text node."));
                            return {
                                path: u,
                                offset: "end" === n ? i.text.length : 0
                            }
                        }
                        if (ht.isRange(t)) {
                            var [s, l] = ht.edges(t);
                            return "start" === n ? s : l
                        }
                        return t
                    },
                    pointRef(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: n = "forward"
                            } = r,
                            u = {
                                current: t,
                                affinity: n,
                                unref() {
                                    var {
                                        current: t
                                    } = u;
                                    Ze.pointRefs(e).delete(u);
                                    u.current = null;
                                    return t
                                }
                            };
                        Ze.pointRefs(e).add(u);
                        return u
                    },
                    pointRefs(e) {
                        var t = fe.get(e);
                        if (!t) {
                            t = new Set;
                            fe.set(e, t)
                        }
                        return t
                    },
                    * positions(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: r = e.selection,
                                unit: n = "offset",
                                reverse: u = !1,
                                voids: a = !1
                            } = t;
                        if (r) {
                            var o = Ze.range(e, r),
                                [i, s] = ht.edges(o),
                                l = u ? s : i,
                                c = !1,
                                f = "",
                                d = 0,
                                D = 0,
                                h = 0;
                            for (var [v, p] of Ze.nodes(e, {
                                    at: r,
                                    reverse: u,
                                    voids: a
                                })) {
                                if (Ye.isElement(v)) {
                                    if (!a && e.isVoid(v)) {
                                        yield Ze.start(e, p);
                                        continue
                                    }
                                    if (e.isInline(v)) continue;
                                    if (Ze.hasInlines(e, v)) {
                                        var C = ot.isAncestor(p, s.path) ? s : Ze.end(e, p),
                                            g = ot.isAncestor(p, i.path) ? i : Ze.start(e, p);
                                        f = Ze.string(e, {
                                            anchor: g,
                                            focus: C
                                        }, {
                                            voids: a
                                        });
                                        c = !0
                                    }
                                }
                                if (Ft.isText(v)) {
                                    var B = ot.equals(p, l.path);
                                    if (B) {
                                        D = u ? l.offset : v.text.length - l.offset;
                                        h = l.offset
                                    } else {
                                        D = v.text.length;
                                        h = u ? D : 0
                                    }
                                    if (B || c || "offset" === n) {
                                        yield {
                                            path: p,
                                            offset: h
                                        };
                                        c = !1
                                    }
                                    for (;;) {
                                        if (0 === d) {
                                            if ("" === f) break;
                                            d = E(f, n, u);
                                            f = Ae(f, d, u)[1]
                                        }
                                        h = u ? h - d : h + d;
                                        if ((D -= d) < 0) {
                                            d = -D;
                                            break
                                        }
                                        d = 0;
                                        yield {
                                            path: p,
                                            offset: h
                                        }
                                    }
                                }
                            }
                        }

                        function E(e, t, r) {
                            return "character" === t ? ge(e, r) : "word" === t ? function(e) {
                                for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = 0, n = !1; e.length > 0;) {
                                    var u = ge(e, t),
                                        [a, o] = Ae(e, u, t);
                                    if (Fe(a, o, t)) {
                                        n = !0;
                                        r += u
                                    } else {
                                        if (n) break;
                                        r += u
                                    }
                                    e = o
                                }
                                return r
                            }(e, r) : "line" === t || "block" === t ? e.length : 1
                        }
                    },
                    previous(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                mode: r = "lowest",
                                voids: n = !1
                            } = t,
                            {
                                match: u,
                                at: a = e.selection
                            } = t;
                        if (a) {
                            var o = Ze.before(e, a, {
                                voids: n
                            });
                            if (o) {
                                var [, i] = Ze.first(e, []), s = [o.path, i];
                                if (ot.isPath(a) && 0 === a.length) throw new Error("Cannot get the previous node from the root node!");
                                if (null == u)
                                    if (ot.isPath(a)) {
                                        var [l] = Ze.parent(e, a);
                                        u = e => l.children.includes(e)
                                    } else u = () => !0;
                                var [c] = Ze.nodes(e, {
                                    reverse: !0,
                                    at: s,
                                    match: u,
                                    mode: r,
                                    voids: n
                                });
                                return c
                            }
                        }
                    },
                    range: (e, t, r) => ht.isRange(t) && !r ? t : {
                        anchor: Ze.start(e, t),
                        focus: Ze.end(e, r || t)
                    },
                    rangeRef(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: n = "forward"
                            } = r,
                            u = {
                                current: t,
                                affinity: n,
                                unref() {
                                    var {
                                        current: t
                                    } = u;
                                    Ze.rangeRefs(e).delete(u);
                                    u.current = null;
                                    return t
                                }
                            };
                        Ze.rangeRefs(e).add(u);
                        return u
                    },
                    rangeRefs(e) {
                        var t = de.get(e);
                        if (!t) {
                            t = new Set;
                            de.set(e, t)
                        }
                        return t
                    },
                    removeMark(e, t) {
                        e.removeMark(t)
                    },
                    setNormalizing(e, t) {
                        le.set(e, t)
                    },
                    start: (e, t) => Ze.point(e, t, {
                        edge: "start"
                    }),
                    string(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                voids: n = !1
                            } = r,
                            u = Ze.range(e, t),
                            [a, o] = ht.edges(u),
                            i = "";
                        for (var [s, l] of Ze.nodes(e, {
                                at: u,
                                match: Ft.isText,
                                voids: n
                            })) {
                            var c = s.text;
                            ot.equals(l, o.path) && (c = c.slice(0, o.offset));
                            ot.equals(l, a.path) && (c = c.slice(a.offset));
                            i += c
                        }
                        return i
                    },
                    unhangRange(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                voids: n = !1
                            } = r,
                            [u, a] = ht.edges(t);
                        if (0 !== u.offset || 0 !== a.offset || ht.isCollapsed(t) || ot.hasPrevious(a.path)) return t;
                        var o = Ze.above(e, {
                                at: a,
                                match: t => Ye.isElement(t) && Ze.isBlock(e, t),
                                voids: n
                            }),
                            i = o ? o[1] : [],
                            s = {
                                anchor: Ze.start(e, u),
                                focus: a
                            },
                            l = !0;
                        for (var [c, f] of Ze.nodes(e, {
                                at: s,
                                match: Ft.isText,
                                reverse: !0,
                                voids: n
                            }))
                            if (l) l = !1;
                            else if ("" !== c.text || ot.isBefore(f, i)) {
                            a = {
                                path: f,
                                offset: c.text.length
                            };
                            break
                        }
                        return {
                            anchor: u,
                            focus: a
                        }
                    },
                    void(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Ze.above(e, Xe(Xe({}, t), {}, {
                            match: t => Ye.isElement(t) && Ze.isVoid(e, t)
                        }))
                    },
                    withoutNormalizing(e, t) {
                        var r = Ze.isNormalizing(e);
                        Ze.setNormalizing(e, !1);
                        try {
                            t()
                        } finally {
                            Ze.setNormalizing(e, r)
                        }
                        Ze.normalize(e)
                    }
                },
                Ge = {
                    isSpan: e => Array.isArray(e) && 2 === e.length && e.every(ot.isPath)
                },
                Qe = ["children"],
                et = ["text"],
                tt = new WeakMap,
                rt = {
                    ancestor(e, t) {
                        var r = rt.get(e, t);
                        if (Ft.isText(r)) throw new Error("Cannot get the ancestor node at path [".concat(t, "] because it refers to a text node instead: ").concat(Ct.stringify(r)));
                        return r
                    },
                    * ancestors(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        for (var n of ot.ancestors(t, r)) {
                            var u = [rt.ancestor(e, n), n];
                            yield u
                        }
                    },
                    child(e, t) {
                        if (Ft.isText(e)) throw new Error("Cannot get the child of a text node: ".concat(Ct.stringify(e)));
                        var r = e.children[t];
                        if (null == r) throw new Error("Cannot get child at index `".concat(t, "` in node: ").concat(Ct.stringify(e)));
                        return r
                    },
                    * children(e, t) {
                        for (var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                                reverse: n = !1
                            } = r, u = rt.ancestor(e, t), {
                                children: a
                            } = u, o = n ? a.length - 1 : 0; n ? o >= 0 : o < a.length;) {
                            var i = rt.child(u, o),
                                s = t.concat(o);
                            yield [i, s];
                            o = n ? o - 1 : o + 1
                        }
                    },
                    common(e, t, r) {
                        var n = ot.common(t, r);
                        return [rt.get(e, n), n]
                    },
                    descendant(e, t) {
                        var r = rt.get(e, t);
                        if (Ze.isEditor(r)) throw new Error("Cannot get the descendant node at path [".concat(t, "] because it refers to the root editor node instead: ").concat(Ct.stringify(r)));
                        return r
                    },
                    * descendants(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [r, n] of rt.nodes(e, t)) 0 !== n.length && (yield [r, n])
                    },
                    * elements(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [r, n] of rt.nodes(e, t)) Ye.isElement(r) && (yield [r, n])
                    },
                    extractProps(e) {
                        if (Ye.isAncestor(e)) {
                            return pe(e, Qe)
                        }
                        return pe(e, et)
                    },
                    first(e, t) {
                        for (var r = t.slice(), n = rt.get(e, r); n && !Ft.isText(n) && 0 !== n.children.length;) {
                            n = n.children[0];
                            r.push(0)
                        }
                        return [n, r]
                    },
                    fragment(e, t) {
                        if (Ft.isText(e)) throw new Error("Cannot get a fragment starting from a root text node: ".concat(Ct.stringify(e)));
                        var r = re({
                            children: e.children
                        }, (e => {
                            var [r, n] = ht.edges(t), u = rt.nodes(e, {
                                reverse: !0,
                                pass: e => {
                                    var [, r] = e;
                                    return !ht.includes(t, r)
                                }
                            });
                            for (var [, a] of u) {
                                if (!ht.includes(t, a)) {
                                    var o = rt.parent(e, a),
                                        i = a[a.length - 1];
                                    o.children.splice(i, 1)
                                }
                                if (ot.equals(a, n.path)) {
                                    var s = rt.leaf(e, a);
                                    s.text = s.text.slice(0, n.offset)
                                }
                                if (ot.equals(a, r.path)) {
                                    var l = rt.leaf(e, a);
                                    l.text = l.text.slice(r.offset)
                                }
                            }
                            Ze.isEditor(e) && (e.selection = null)
                        }));
                        return r.children
                    },
                    get(e, t) {
                        for (var r = e, n = 0; n < t.length; n++) {
                            var u = t[n];
                            if (Ft.isText(r) || !r.children[u]) throw new Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(Ct.stringify(e)));
                            r = r.children[u]
                        }
                        return r
                    },
                    has(e, t) {
                        for (var r = e, n = 0; n < t.length; n++) {
                            var u = t[n];
                            if (Ft.isText(r) || !r.children[u]) return !1;
                            r = r.children[u]
                        }
                        return !0
                    },
                    isNode: e => Ft.isText(e) || Ye.isElement(e) || Ze.isEditor(e),
                    isNodeList(e) {
                        if (!Array.isArray(e)) return !1;
                        var t = tt.get(e);
                        if (void 0 !== t) return t;
                        var r = e.every((e => rt.isNode(e)));
                        tt.set(e, r);
                        return r
                    },
                    last(e, t) {
                        for (var r = t.slice(), n = rt.get(e, r); n && !Ft.isText(n) && 0 !== n.children.length;) {
                            var u = n.children.length - 1;
                            n = n.children[u];
                            r.push(u)
                        }
                        return [n, r]
                    },
                    leaf(e, t) {
                        var r = rt.get(e, t);
                        if (!Ft.isText(r)) throw new Error("Cannot get the leaf node at path [".concat(t, "] because it refers to a non-leaf node: ").concat(Ct.stringify(r)));
                        return r
                    },
                    * levels(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        for (var n of ot.levels(t, r)) {
                            var u = rt.get(e, n);
                            yield [u, n]
                        }
                    },
                    matches: (e, t) => Ye.isElement(e) && Ye.isElementProps(t) && Ye.matches(e, t) || Ft.isText(e) && Ft.isTextProps(t) && Ft.matches(e, t),
                    * nodes(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                                pass: r,
                                reverse: n = !1
                            } = t, {
                                from: u = [],
                                to: a
                            } = t, o = new Set, i = [], s = e; !a || !(n ? ot.isBefore(i, a) : ot.isAfter(i, a));) {
                            o.has(s) || (yield [s, i]);
                            if (o.has(s) || Ft.isText(s) || 0 === s.children.length || null != r && !1 !== r([s, i])) {
                                if (0 === i.length) break;
                                if (!n) {
                                    var l = ot.next(i);
                                    if (rt.has(e, l)) {
                                        i = l;
                                        s = rt.get(e, i);
                                        continue
                                    }
                                }
                                if (n && 0 !== i[i.length - 1]) {
                                    i = ot.previous(i);
                                    s = rt.get(e, i)
                                } else {
                                    i = ot.parent(i);
                                    s = rt.get(e, i);
                                    o.add(s)
                                }
                            } else {
                                o.add(s);
                                var c = n ? s.children.length - 1 : 0;
                                ot.isAncestor(i, u) && (c = u[i.length]);
                                i = i.concat(c);
                                s = rt.get(e, i)
                            }
                        }
                    },
                    parent(e, t) {
                        var r = ot.parent(t),
                            n = rt.get(e, r);
                        if (Ft.isText(n)) throw new Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
                        return n
                    },
                    string: e => Ft.isText(e) ? e.text : e.children.map(rt.string).join(""),
                    * texts(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [r, n] of rt.nodes(e, t)) Ft.isText(r) && (yield [r, n])
                    }
                };

            function nt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }

            function ut(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nt(Object(r), !0).forEach((function(t) {
                        ae(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var at = {
                    isNodeOperation: e => at.isOperation(e) && e.type.endsWith("_node"),
                    isOperation(e) {
                        if (!u(e)) return !1;
                        switch (e.type) {
                            case "insert_node":
                            case "remove_node":
                                return ot.isPath(e.path) && rt.isNode(e.node);
                            case "insert_text":
                            case "remove_text":
                                return "number" == typeof e.offset && "string" == typeof e.text && ot.isPath(e.path);
                            case "merge_node":
                                return "number" == typeof e.position && ot.isPath(e.path) && u(e.properties);
                            case "move_node":
                                return ot.isPath(e.path) && ot.isPath(e.newPath);
                            case "set_node":
                                return ot.isPath(e.path) && u(e.properties) && u(e.newProperties);
                            case "set_selection":
                                return null === e.properties && ht.isRange(e.newProperties) || null === e.newProperties && ht.isRange(e.properties) || u(e.properties) && u(e.newProperties);
                            case "split_node":
                                return ot.isPath(e.path) && "number" == typeof e.position && u(e.properties);
                            default:
                                return !1
                        }
                    },
                    isOperationList: e => Array.isArray(e) && e.every((e => at.isOperation(e))),
                    isSelectionOperation: e => at.isOperation(e) && e.type.endsWith("_selection"),
                    isTextOperation: e => at.isOperation(e) && e.type.endsWith("_text"),
                    inverse(e) {
                        switch (e.type) {
                            case "insert_node":
                                return ut(ut({}, e), {}, {
                                    type: "remove_node"
                                });
                            case "insert_text":
                                return ut(ut({}, e), {}, {
                                    type: "remove_text"
                                });
                            case "merge_node":
                                return ut(ut({}, e), {}, {
                                    type: "split_node",
                                    path: ot.previous(e.path)
                                });
                            case "move_node":
                                var {
                                    newPath: t, path: r
                                } = e;
                                if (ot.equals(t, r)) return e;
                                if (ot.isSibling(r, t)) return ut(ut({}, e), {}, {
                                    path: t,
                                    newPath: r
                                });
                                var n = ot.transform(r, e),
                                    u = ot.transform(ot.next(r), e);
                                return ut(ut({}, e), {}, {
                                    path: n,
                                    newPath: u
                                });
                            case "remove_node":
                                return ut(ut({}, e), {}, {
                                    type: "insert_node"
                                });
                            case "remove_text":
                                return ut(ut({}, e), {}, {
                                    type: "insert_text"
                                });
                            case "set_node":
                                var {
                                    properties: a, newProperties: o
                                } = e;
                                return ut(ut({}, e), {}, {
                                    properties: o,
                                    newProperties: a
                                });
                            case "set_selection":
                                var {
                                    properties: i, newProperties: s
                                } = e
                                ;
                                return ut(ut({}, e), {}, null == i ? {
                                    properties: s,
                                    newProperties: null
                                } : null == s ? {
                                    properties: null,
                                    newProperties: i
                                } : {
                                    properties: s,
                                    newProperties: i
                                });
                            case "split_node":
                                return ut(ut({}, e), {}, {
                                    type: "merge_node",
                                    path: ot.next(e.path)
                                })
                        }
                    }
                },
                ot = {
                    ancestors(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                reverse: r = !1
                            } = t,
                            n = ot.levels(e, t);
                        return n = r ? n.slice(1) : n.slice(0, -1)
                    },
                    common(e, t) {
                        for (var r = [], n = 0; n < e.length && n < t.length; n++) {
                            var u = e[n];
                            if (u !== t[n]) break;
                            r.push(u)
                        }
                        return r
                    },
                    compare(e, t) {
                        for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) {
                            if (e[n] < t[n]) return -1;
                            if (e[n] > t[n]) return 1
                        }
                        return 0
                    },
                    endsAfter(e, t) {
                        var r = e.length - 1,
                            n = e.slice(0, r),
                            u = t.slice(0, r),
                            a = e[r],
                            o = t[r];
                        return ot.equals(n, u) && a > o
                    },
                    endsAt(e, t) {
                        var r = e.length,
                            n = e.slice(0, r),
                            u = t.slice(0, r);
                        return ot.equals(n, u)
                    },
                    endsBefore(e, t) {
                        var r = e.length - 1,
                            n = e.slice(0, r),
                            u = t.slice(0, r),
                            a = e[r],
                            o = t[r];
                        return ot.equals(n, u) && a < o
                    },
                    equals: (e, t) => e.length === t.length && e.every(((e, r) => e === t[r])),
                    hasPrevious: e => e[e.length - 1] > 0,
                    isAfter: (e, t) => 1 === ot.compare(e, t),
                    isAncestor: (e, t) => e.length < t.length && 0 === ot.compare(e, t),
                    isBefore: (e, t) => -1 === ot.compare(e, t),
                    isChild: (e, t) => e.length === t.length + 1 && 0 === ot.compare(e, t),
                    isCommon: (e, t) => e.length <= t.length && 0 === ot.compare(e, t),
                    isDescendant: (e, t) => e.length > t.length && 0 === ot.compare(e, t),
                    isParent: (e, t) => e.length + 1 === t.length && 0 === ot.compare(e, t),
                    isPath: e => Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
                    isSibling(e, t) {
                        if (e.length !== t.length) return !1;
                        var r = e.slice(0, -1),
                            n = t.slice(0, -1);
                        return e[e.length - 1] !== t[t.length - 1] && ot.equals(r, n)
                    },
                    levels(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                                reverse: r = !1
                            } = t, n = [], u = 0; u <= e.length; u++) n.push(e.slice(0, u));
                        r && n.reverse();
                        return n
                    },
                    next(e) {
                        if (0 === e.length) throw new Error("Cannot get the next path of a root path [".concat(e, "], because it has no next index."));
                        var t = e[e.length - 1];
                        return e.slice(0, -1).concat(t + 1)
                    },
                    operationCanTransformPath(e) {
                        switch (e.type) {
                            case "insert_node":
                            case "remove_node":
                            case "merge_node":
                            case "split_node":
                            case "move_node":
                                return !0;
                            default:
                                return !1
                        }
                    },
                    parent(e) {
                        if (0 === e.length) throw new Error("Cannot get the parent path of the root path [".concat(e, "]."));
                        return e.slice(0, -1)
                    },
                    previous(e) {
                        if (0 === e.length) throw new Error("Cannot get the previous path of a root path [".concat(e, "], because it has no previous index."));
                        var t = e[e.length - 1];
                        if (t <= 0) throw new Error("Cannot get the previous path of a first child path [".concat(e, "] because it would result in a negative index."));
                        return e.slice(0, -1).concat(t - 1)
                    },
                    relative(e, t) {
                        if (!ot.isAncestor(t, e) && !ot.equals(e, t)) throw new Error("Cannot get the relative path of [".concat(e, "] inside ancestor [").concat(t, "], because it is not above or equal to the path."));
                        return e.slice(t.length)
                    },
                    transform(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e) return null;
                        var n = [...e],
                            {
                                affinity: u = "forward"
                            } = r;
                        if (0 === e.length) return n;
                        switch (t.type) {
                            case "insert_node":
                                var {
                                    path: a
                                } = t
                                ;
                                (ot.equals(a, n) || ot.endsBefore(a, n) || ot.isAncestor(a, n)) && (n[a.length - 1] += 1);
                                break;
                            case "remove_node":
                                var {
                                    path: o
                                } = t;
                                if (ot.equals(o, n) || ot.isAncestor(o, n)) return null;
                                ot.endsBefore(o, n) && (n[o.length - 1] -= 1);
                                break;
                            case "merge_node":
                                var {
                                    path: i, position: s
                                } = t;
                                if (ot.equals(i, n) || ot.endsBefore(i, n)) n[i.length - 1] -= 1;
                                else if (ot.isAncestor(i, n)) {
                                    n[i.length - 1] -= 1;
                                    n[i.length] += s
                                }
                                break;
                            case "split_node":
                                var {
                                    path: l, position: c
                                } = t;
                                if (ot.equals(l, n)) {
                                    if ("forward" === u) n[n.length - 1] += 1;
                                    else if ("backward" !== u) return null
                                } else if (ot.endsBefore(l, n)) n[l.length - 1] += 1;
                                else if (ot.isAncestor(l, n) && e[l.length] >= c) {
                                    n[l.length - 1] += 1;
                                    n[l.length] -= c
                                }
                                break;
                            case "move_node":
                                var {
                                    path: f, newPath: d
                                } = t;
                                if (ot.equals(f, d)) return n;
                                if (ot.isAncestor(f, n) || ot.equals(f, n)) {
                                    var D = d.slice();
                                    ot.endsBefore(f, d) && f.length < d.length && (D[f.length - 1] -= 1);
                                    return D.concat(n.slice(f.length))
                                }
                                if (ot.isSibling(f, d) && (ot.isAncestor(d, n) || ot.equals(d, n))) ot.endsBefore(f, n) ? n[f.length - 1] -= 1 : n[f.length - 1] += 1;
                                else if (ot.endsBefore(d, n) || ot.equals(d, n) || ot.isAncestor(d, n)) {
                                    ot.endsBefore(f, n) && (n[f.length - 1] -= 1);
                                    n[d.length - 1] += 1
                                } else if (ot.endsBefore(f, n)) {
                                    ot.equals(d, n) && (n[d.length - 1] += 1);
                                    n[f.length - 1] -= 1
                                }
                        }
                        return n
                    }
                },
                it = {
                    transform(e, t) {
                        var {
                            current: r,
                            affinity: n
                        } = e;
                        if (null != r) {
                            var u = ot.transform(r, t, {
                                affinity: n
                            });
                            e.current = u;
                            null == u && e.unref()
                        }
                    }
                };

            function st(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }

            function lt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? st(Object(r), !0).forEach((function(t) {
                        ae(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : st(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ct = {
                    compare(e, t) {
                        var r = ot.compare(e.path, t.path);
                        return 0 === r ? e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0 : r
                    },
                    isAfter: (e, t) => 1 === ct.compare(e, t),
                    isBefore: (e, t) => -1 === ct.compare(e, t),
                    equals: (e, t) => e.offset === t.offset && ot.equals(e.path, t.path),
                    isPoint: e => u(e) && "number" == typeof e.offset && ot.isPath(e.path),
                    transform(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return re(e, (e => {
                            if (null === e) return null;
                            var {
                                affinity: n = "forward"
                            } = r, {
                                path: u,
                                offset: a
                            } = e;
                            switch (t.type) {
                                case "insert_node":
                                case "move_node":
                                    e.path = ot.transform(u, t, r);
                                    break;
                                case "insert_text":
                                    ot.equals(t.path, u) && (t.offset < a || t.offset === a && "forward" === n) && (e.offset += t.text.length);
                                    break;
                                case "merge_node":
                                    ot.equals(t.path, u) && (e.offset += t.position);
                                    e.path = ot.transform(u, t, r);
                                    break;
                                case "remove_text":
                                    ot.equals(t.path, u) && t.offset <= a && (e.offset -= Math.min(a - t.offset, t.text.length));
                                    break;
                                case "remove_node":
                                    if (ot.equals(t.path, u) || ot.isAncestor(t.path, u)) return null;
                                    e.path = ot.transform(u, t, r);
                                    break;
                                case "split_node":
                                    if (ot.equals(t.path, u)) {
                                        if (t.position === a && null == n) return null;
                                        if (t.position < a || t.position === a && "forward" === n) {
                                            e.offset -= t.position;
                                            e.path = ot.transform(u, t, lt(lt({}, r), {}, {
                                                affinity: "forward"
                                            }))
                                        }
                                    } else e.path = ot.transform(u, t, r)
                            }
                        }))
                    }
                },
                ft = {
                    transform(e, t) {
                        var {
                            current: r,
                            affinity: n
                        } = e;
                        if (null != r) {
                            var u = ct.transform(r, t, {
                                affinity: n
                            });
                            e.current = u;
                            null == u && e.unref()
                        }
                    }
                },
                dt = ["anchor", "focus"];

            function Dt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }
            var ht = {
                    edges(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                reverse: r = !1
                            } = t,
                            {
                                anchor: n,
                                focus: u
                            } = e;
                        return ht.isBackward(e) === r ? [n, u] : [u, n]
                    },
                    end(e) {
                        var [, t] = ht.edges(e);
                        return t
                    },
                    equals: (e, t) => ct.equals(e.anchor, t.anchor) && ct.equals(e.focus, t.focus),
                    includes(e, t) {
                        if (ht.isRange(t)) {
                            if (ht.includes(e, t.anchor) || ht.includes(e, t.focus)) return !0;
                            var [r, n] = ht.edges(e), [u, a] = ht.edges(t);
                            return ct.isBefore(r, u) && ct.isAfter(n, a)
                        }
                        var [o, i] = ht.edges(e), s = !1, l = !1;
                        if (ct.isPoint(t)) {
                            s = ct.compare(t, o) >= 0;
                            l = ct.compare(t, i) <= 0
                        } else {
                            s = ot.compare(t, o.path) >= 0;
                            l = ot.compare(t, i.path) <= 0
                        }
                        return s && l
                    },
                    intersection(e, t) {
                        var r = pe(e, dt),
                            [n, u] = ht.edges(e),
                            [a, o] = ht.edges(t),
                            i = ct.isBefore(n, a) ? a : n,
                            s = ct.isBefore(u, o) ? u : o;
                        return ct.isBefore(s, i) ? null : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Dt(Object(r), !0).forEach((function(t) {
                                    ae(e, t, r[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dt(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }))
                            }
                            return e
                        }({
                            anchor: i,
                            focus: s
                        }, r)
                    },
                    isBackward(e) {
                        var {
                            anchor: t,
                            focus: r
                        } = e;
                        return ct.isAfter(t, r)
                    },
                    isCollapsed(e) {
                        var {
                            anchor: t,
                            focus: r
                        } = e;
                        return ct.equals(t, r)
                    },
                    isExpanded: e => !ht.isCollapsed(e),
                    isForward: e => !ht.isBackward(e),
                    isRange: e => u(e) && ct.isPoint(e.anchor) && ct.isPoint(e.focus),
                    * points(e) {
                        yield [e.anchor, "anchor"];
                        yield [e.focus, "focus"]
                    },
                    start(e) {
                        var [t] = ht.edges(e);
                        return t
                    },
                    transform(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return re(e, (e => {
                            if (null === e) return null;
                            var n, u, {
                                affinity: a = "inward"
                            } = r;
                            if ("inward" === a) {
                                var o = ht.isCollapsed(e);
                                if (ht.isForward(e)) {
                                    n = "forward";
                                    u = o ? n : "backward"
                                } else {
                                    n = "backward";
                                    u = o ? n : "forward"
                                }
                            } else if ("outward" === a)
                                if (ht.isForward(e)) {
                                    n = "backward";
                                    u = "forward"
                                } else {
                                    n = "forward";
                                    u = "backward"
                                }
                            else {
                                n = a;
                                u = a
                            }
                            var i = ct.transform(e.anchor, t, {
                                    affinity: n
                                }),
                                s = ct.transform(e.focus, t, {
                                    affinity: u
                                });
                            if (!i || !s) return null;
                            e.anchor = i;
                            e.focus = s
                        }))
                    }
                },
                vt = {
                    transform(e, t) {
                        var {
                            current: r,
                            affinity: n
                        } = e;
                        if (null != r) {
                            var u = ht.transform(r, t, {
                                affinity: n
                            });
                            e.current = u;
                            null == u && e.unref()
                        }
                    }
                },
                pt = void 0,
                Ct = {
                    setScrubber(e) {
                        pt = e
                    },
                    stringify: e => JSON.stringify(e, pt)
                },
                gt = (e, t) => {
                    for (var r in e) {
                        var n = e[r],
                            a = t[r];
                        if (u(n) && u(a)) {
                            if (!gt(n, a)) return !1
                        } else if (Array.isArray(n) && Array.isArray(a)) {
                            if (n.length !== a.length) return !1;
                            for (var o = 0; o < n.length; o++)
                                if (n[o] !== a[o]) return !1
                        } else if (n !== a) return !1
                    }
                    for (var i in t)
                        if (void 0 === e[i] && void 0 !== t[i]) return !1;
                    return !0
                },
                Bt = ["text"],
                Et = ["anchor", "focus"];

            function mt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }

            function At(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? mt(Object(r), !0).forEach((function(t) {
                        ae(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Ft = {
                equals(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            loose: n = !1
                        } = r;

                    function u(e) {
                        return pe(e, Bt)
                    }
                    return gt(n ? u(e) : e, n ? u(t) : t)
                },
                isText: e => u(e) && "string" == typeof e.text,
                isTextList: e => Array.isArray(e) && e.every((e => Ft.isText(e))),
                isTextProps: e => void 0 !== e.text,
                matches(e, t) {
                    for (var r in t)
                        if ("text" !== r && (!e.hasOwnProperty(r) || e[r] !== t[r])) return !1;
                    return !0
                },
                decorations(e, t) {
                    var r = [At({}, e)];
                    for (var n of t) {
                        var u = pe(n, Et),
                            [a, o] = ht.edges(n),
                            i = [],
                            s = 0,
                            l = a.offset,
                            c = o.offset;
                        for (var f of r) {
                            var {
                                length: d
                            } = f.text, D = s;
                            s += d;
                            if (l <= D && s <= c) {
                                Object.assign(f, u);
                                i.push(f)
                            } else if (l !== c && (l === s || c === D) || l > s || c < D || c === D && 0 !== D) i.push(f);
                            else {
                                var h = f,
                                    v = void 0,
                                    p = void 0;
                                if (c < s) {
                                    var C = c - D;
                                    p = At(At({}, h), {}, {
                                        text: h.text.slice(C)
                                    });
                                    h = At(At({}, h), {}, {
                                        text: h.text.slice(0, C)
                                    })
                                }
                                if (l > D) {
                                    var g = l - D;
                                    v = At(At({}, h), {}, {
                                        text: h.text.slice(0, g)
                                    });
                                    h = At(At({}, h), {}, {
                                        text: h.text.slice(g)
                                    })
                                }
                                Object.assign(h, u);
                                v && i.push(v);
                                i.push(h);
                                p && i.push(p)
                            }
                        }
                        r = i
                    }
                    return r
                }
            };

            function bt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }

            function wt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? bt(Object(r), !0).forEach((function(t) {
                        ae(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var yt = {
                    transform(e, t) {
                        e.children = ne(e.children);
                        var r = e.selection && ne(e.selection);
                        try {
                            r = ((e, t, r) => {
                                switch (r.type) {
                                    case "insert_node":
                                        var {
                                            path: n, node: u
                                        } = r, a = rt.parent(e, n), o = n[n.length - 1];
                                        if (o > a.children.length) throw new Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
                                        a.children.splice(o, 0, u);
                                        if (t)
                                            for (var [i, s] of ht.points(t)) t[s] = ct.transform(i, r);
                                        break;
                                    case "insert_text":
                                        var {
                                            path: l, offset: c, text: f
                                        } = r;
                                        if (0 === f.length) break;
                                        var d = rt.leaf(e, l),
                                            D = d.text.slice(0, c),
                                            h = d.text.slice(c);
                                        d.text = D + f + h;
                                        if (t)
                                            for (var [v, p] of ht.points(t)) t[p] = ct.transform(v, r);
                                        break;
                                    case "merge_node":
                                        var {
                                            path: C
                                        } = r, g = rt.get(e, C), B = ot.previous(C), E = rt.get(e, B), m = rt.parent(e, C), A = C[C.length - 1];
                                        if (Ft.isText(g) && Ft.isText(E)) E.text += g.text;
                                        else {
                                            if (Ft.isText(g) || Ft.isText(E)) throw new Error('Cannot apply a "merge_node" operation at path ['.concat(C, "] to nodes of different interfaces: ").concat(Ct.stringify(g), " ").concat(Ct.stringify(E)));
                                            E.children.push(...g.children)
                                        }
                                        m.children.splice(A, 1);
                                        if (t)
                                            for (var [F, b] of ht.points(t)) t[b] = ct.transform(F, r);
                                        break;
                                    case "move_node":
                                        var {
                                            path: w, newPath: y
                                        } = r;
                                        if (ot.isAncestor(w, y)) throw new Error("Cannot move a path [".concat(w, "] to new path [").concat(y, "] because the destination is inside itself."));
                                        var x = rt.get(e, w),
                                            O = rt.parent(e, w),
                                            k = w[w.length - 1];
                                        O.children.splice(k, 1);
                                        var P = ot.transform(w, r),
                                            M = rt.get(e, ot.parent(P)),
                                            S = P[P.length - 1];
                                        M.children.splice(S, 0, x);
                                        if (t)
                                            for (var [T, L] of ht.points(t)) t[L] = ct.transform(T, r);
                                        break;
                                    case "remove_node":
                                        var {
                                            path: j
                                        } = r, R = j[j.length - 1];
                                        rt.parent(e, j).children.splice(R, 1);
                                        if (t)
                                            for (var [N, _] of ht.points(t)) {
                                                var W = ct.transform(N, r);
                                                if (null != t && null != W) t[_] = W;
                                                else {
                                                    var I = void 0,
                                                        z = void 0;
                                                    for (var [q, V] of rt.texts(e)) {
                                                        if (-1 !== ot.compare(V, j)) {
                                                            z = [q, V];
                                                            break
                                                        }
                                                        I = [q, V]
                                                    }
                                                    var $ = !1;
                                                    I && z && ($ = ot.equals(z[1], j) ? !ot.hasPrevious(z[1]) : ot.common(I[1], j).length < ot.common(z[1], j).length);
                                                    if (I && !$) {
                                                        N.path = I[1];
                                                        N.offset = I[0].text.length
                                                    } else if (z) {
                                                        N.path = z[1];
                                                        N.offset = 0
                                                    } else t = null
                                                }
                                            }
                                        break;
                                    case "remove_text":
                                        var {
                                            path: Y, offset: U, text: H
                                        } = r;
                                        if (0 === H.length) break;
                                        var K = rt.leaf(e, Y),
                                            X = K.text.slice(0, U),
                                            J = K.text.slice(U + H.length);
                                        K.text = X + J;
                                        if (t)
                                            for (var [Z, G] of ht.points(t)) t[G] = ct.transform(Z, r);
                                        break;
                                    case "set_node":
                                        var {
                                            path: Q, properties: ee, newProperties: te
                                        } = r;
                                        if (0 === Q.length) throw new Error("Cannot set properties on the root node!");
                                        var re = rt.get(e, Q);
                                        for (var ne in te) {
                                            if ("children" === ne || "text" === ne) throw new Error('Cannot set the "'.concat(ne, '" property of nodes!'));
                                            var ue = te[ne];
                                            null == ue ? delete re[ne] : re[ne] = ue
                                        }
                                        for (var ae in ee) te.hasOwnProperty(ae) || delete re[ae];
                                        break;
                                    case "set_selection":
                                        var {
                                            newProperties: oe
                                        } = r;
                                        if (null == oe) t = oe;
                                        else {
                                            if (null == t) {
                                                if (!ht.isRange(oe)) throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(Ct.stringify(oe), " when there is no current selection."));
                                                t = wt({}, oe)
                                            }
                                            for (var ie in oe) {
                                                var se = oe[ie];
                                                if (null == se) {
                                                    if ("anchor" === ie || "focus" === ie) throw new Error('Cannot remove the "'.concat(ie, '" selection property'));
                                                    delete t[ie]
                                                } else t[ie] = se
                                            }
                                        }
                                        break;
                                    case "split_node":
                                        var {
                                            path: le, position: ce, properties: fe
                                        } = r;
                                        if (0 === le.length) throw new Error('Cannot apply a "split_node" operation at path ['.concat(le, "] because the root node cannot be split."));
                                        var de, De = rt.get(e, le),
                                            he = rt.parent(e, le),
                                            ve = le[le.length - 1];
                                        if (Ft.isText(De)) {
                                            var pe = De.text.slice(0, ce),
                                                Ce = De.text.slice(ce);
                                            De.text = pe;
                                            de = wt(wt({}, fe), {}, {
                                                text: Ce
                                            })
                                        } else {
                                            var ge = De.children.slice(0, ce),
                                                Be = De.children.slice(ce);
                                            De.children = ge;
                                            de = wt(wt({}, fe), {}, {
                                                children: Be
                                            })
                                        }
                                        he.children.splice(ve + 1, 0, de);
                                        if (t)
                                            for (var [Ee, me] of ht.points(t)) t[me] = ct.transform(Ee, r)
                                }
                                return t
                            })(e, r, t)
                        } finally {
                            e.children = ue(e.children);
                            e.selection = r ? o(r) ? ue(r) : r : null
                        }
                    }
                },
                xt = ["text"],
                Ot = ["children"];

            function kt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }

            function Pt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? kt(Object(r), !0).forEach((function(t) {
                        ae(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Mt = {
                    insertNodes(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        Ze.withoutNormalizing(e, (() => {
                            var {
                                hanging: n = !1,
                                voids: u = !1,
                                mode: a = "lowest"
                            } = r, {
                                at: o,
                                match: i,
                                select: s
                            } = r;
                            rt.isNode(t) && (t = [t]);
                            if (0 !== t.length) {
                                var [l] = t;
                                if (!o) {
                                    o = e.selection ? e.selection : e.children.length > 0 ? Ze.end(e, []) : [0];
                                    s = !0
                                }
                                null == s && (s = !1);
                                if (ht.isRange(o)) {
                                    n || (o = Ze.unhangRange(e, o, {
                                        voids: u
                                    }));
                                    if (ht.isCollapsed(o)) o = o.anchor;
                                    else {
                                        var [, c] = ht.edges(o), f = Ze.pointRef(e, c);
                                        zt.delete(e, {
                                            at: o
                                        });
                                        o = f.unref()
                                    }
                                }
                                if (ct.isPoint(o)) {
                                    null == i && (i = Ft.isText(l) ? e => Ft.isText(e) : e.isInline(l) ? t => Ft.isText(t) || Ze.isInline(e, t) : t => Ye.isElement(t) && Ze.isBlock(e, t));
                                    var [d] = Ze.nodes(e, {
                                        at: o.path,
                                        match: i,
                                        mode: a,
                                        voids: u
                                    });
                                    if (!d) return;
                                    var [, D] = d, h = Ze.pathRef(e, D), v = Ze.isEnd(e, o, D);
                                    zt.splitNodes(e, {
                                        at: o,
                                        match: i,
                                        mode: a,
                                        voids: u
                                    });
                                    var p = h.unref();
                                    o = v ? ot.next(p) : p
                                }
                                var C = ot.parent(o),
                                    g = o[o.length - 1];
                                if (u || !Ze.void(e, {
                                        at: C
                                    })) {
                                    for (var B of t) {
                                        var E = C.concat(g);
                                        g++;
                                        e.apply({
                                            type: "insert_node",
                                            path: E,
                                            node: B
                                        });
                                        o = ot.next(o)
                                    }
                                    o = ot.previous(o);
                                    if (s) {
                                        var m = Ze.end(e, o);
                                        m && zt.select(e, m)
                                    }
                                }
                            }
                        }))
                    },
                    liftNodes(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        Ze.withoutNormalizing(e, (() => {
                            var {
                                at: r = e.selection,
                                mode: n = "lowest",
                                voids: u = !1
                            } = t, {
                                match: a
                            } = t;
                            null == a && (a = ot.isPath(r) ? Lt(e, r) : t => Ye.isElement(t) && Ze.isBlock(e, t));
                            if (r) {
                                var o = Ze.nodes(e, {
                                        at: r,
                                        match: a,
                                        mode: n,
                                        voids: u
                                    }),
                                    i = Array.from(o, (t => {
                                        var [, r] = t;
                                        return Ze.pathRef(e, r)
                                    }));
                                for (var s of i) {
                                    var l = s.unref();
                                    if (l.length < 2) throw new Error("Cannot lift node at a path [".concat(l, "] because it has a depth of less than `2`."));
                                    var c = Ze.node(e, ot.parent(l)),
                                        [f, d] = c,
                                        D = l[l.length - 1],
                                        {
                                            length: h
                                        } = f.children;
                                    if (1 === h) {
                                        var v = ot.next(d);
                                        zt.moveNodes(e, {
                                            at: l,
                                            to: v,
                                            voids: u
                                        });
                                        zt.removeNodes(e, {
                                            at: d,
                                            voids: u
                                        })
                                    } else if (0 === D) zt.moveNodes(e, {
                                        at: l,
                                        to: d,
                                        voids: u
                                    });
                                    else if (D === h - 1) {
                                        var p = ot.next(d);
                                        zt.moveNodes(e, {
                                            at: l,
                                            to: p,
                                            voids: u
                                        })
                                    } else {
                                        var C = ot.next(l),
                                            g = ot.next(d);
                                        zt.splitNodes(e, {
                                            at: C,
                                            voids: u
                                        });
                                        zt.moveNodes(e, {
                                            at: l,
                                            to: g,
                                            voids: u
                                        })
                                    }
                                }
                            }
                        }))
                    },
                    mergeNodes(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        Ze.withoutNormalizing(e, (() => {
                            var {
                                match: r,
                                at: n = e.selection
                            } = t, {
                                hanging: u = !1,
                                voids: a = !1,
                                mode: o = "lowest"
                            } = t;
                            if (n) {
                                if (null == r)
                                    if (ot.isPath(n)) {
                                        var [i] = Ze.parent(e, n);
                                        r = e => i.children.includes(e)
                                    } else r = t => Ye.isElement(t) && Ze.isBlock(e, t);
                                !u && ht.isRange(n) && (n = Ze.unhangRange(e, n, {
                                    voids: a
                                }));
                                if (ht.isRange(n))
                                    if (ht.isCollapsed(n)) n = n.anchor;
                                    else {
                                        var [, s] = ht.edges(n), l = Ze.pointRef(e, s);
                                        zt.delete(e, {
                                            at: n
                                        });
                                        n = l.unref();
                                        null == t.at && zt.select(e, n)
                                    } var [c] = Ze.nodes(e, {
                                    at: n,
                                    match: r,
                                    voids: a,
                                    mode: o
                                }), f = Ze.previous(e, {
                                    at: n,
                                    match: r,
                                    voids: a,
                                    mode: o
                                });
                                if (c && f) {
                                    var [d, D] = c, [h, v] = f;
                                    if (0 !== D.length && 0 !== v.length) {
                                        var p, C, g = ot.next(v),
                                            B = ot.common(D, v),
                                            E = ot.isSibling(D, v),
                                            m = Array.from(Ze.levels(e, {
                                                at: D
                                            }), (e => {
                                                var [t] = e;
                                                return t
                                            })).slice(B.length).slice(0, -1),
                                            A = Ze.above(e, {
                                                at: D,
                                                mode: "highest",
                                                match: t => m.includes(t) && St(e, t)
                                            }),
                                            F = A && Ze.pathRef(e, A[1]);
                                        if (Ft.isText(d) && Ft.isText(h)) {
                                            var b = pe(d, xt);
                                            C = h.text.length;
                                            p = b
                                        } else {
                                            if (!Ye.isElement(d) || !Ye.isElement(h)) throw new Error("Cannot merge the node at path [".concat(D, "] with the previous sibling because it is not the same kind: ").concat(Ct.stringify(d), " ").concat(Ct.stringify(h)));
                                            b = pe(d, Ot);
                                            C = h.children.length;
                                            p = b
                                        }
                                        E || zt.moveNodes(e, {
                                            at: D,
                                            to: g,
                                            voids: a
                                        });
                                        F && zt.removeNodes(e, {
                                            at: F.current,
                                            voids: a
                                        });
                                        Ye.isElement(h) && Ze.isEmpty(e, h) || Ft.isText(h) && "" === h.text && 0 !== v[v.length - 1] ? zt.removeNodes(e, {
                                            at: v,
                                            voids: a
                                        }) : e.apply({
                                            type: "merge_node",
                                            path: g,
                                            position: C,
                                            properties: p
                                        });
                                        F && F.unref()
                                    }
                                }
                            }
                        }))
                    },
                    moveNodes(e, t) {
                        Ze.withoutNormalizing(e, (() => {
                            var {
                                to: r,
                                at: n = e.selection,
                                mode: u = "lowest",
                                voids: a = !1
                            } = t, {
                                match: o
                            } = t;
                            if (n) {
                                null == o && (o = ot.isPath(n) ? Lt(e, n) : t => Ye.isElement(t) && Ze.isBlock(e, t));
                                var i = Ze.pathRef(e, r),
                                    s = Ze.nodes(e, {
                                        at: n,
                                        match: o,
                                        mode: u,
                                        voids: a
                                    }),
                                    l = Array.from(s, (t => {
                                        var [, r] = t;
                                        return Ze.pathRef(e, r)
                                    }));
                                for (var c of l) {
                                    var f = c.unref(),
                                        d = i.current;
                                    0 !== f.length && e.apply({
                                        type: "move_node",
                                        path: f,
                                        newPath: d
                                    });
                                    i.current && ot.isSibling(d, f) && ot.isAfter(d, f) && (i.current = ot.next(i.current))
                                }
                                i.unref()
                            }
                        }))
                    },
                    removeNodes(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        Ze.withoutNormalizing(e, (() => {
                            var {
                                hanging: r = !1,
                                voids: n = !1,
                                mode: u = "lowest"
                            } = t, {
                                at: a = e.selection,
                                match: o
                            } = t;
                            if (a) {
                                null == o && (o = ot.isPath(a) ? Lt(e, a) : t => Ye.isElement(t) && Ze.isBlock(e, t));
                                !r && ht.isRange(a) && (a = Ze.unhangRange(e, a, {
                                    voids: n
                                }));
                                var i = Ze.nodes(e, {
                                        at: a,
                                        match: o,
                                        mode: u,
                                        voids: n
                                    }),
                                    s = Array.from(i, (t => {
                                        var [, r] = t;
                                        return Ze.pathRef(e, r)
                                    }));
                                for (var l of s) {
                                    var c = l.unref();
                                    if (c) {
                                        var [f] = Ze.node(e, c);
                                        e.apply({
                                            type: "remove_node",
                                            path: c,
                                            node: f
                                        })
                                    }
                                }
                            }
                        }))
                    },
                    setNodes(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        Ze.withoutNormalizing(e, (() => {
                            var {
                                match: n,
                                at: u = e.selection,
                                compare: a,
                                merge: o
                            } = r, {
                                hanging: i = !1,
                                mode: s = "lowest",
                                split: l = !1,
                                voids: c = !1
                            } = r;
                            if (u) {
                                null == n && (n = ot.isPath(u) ? Lt(e, u) : t => Ye.isElement(t) && Ze.isBlock(e, t));
                                !i && ht.isRange(u) && (u = Ze.unhangRange(e, u, {
                                    voids: c
                                }));
                                if (l && ht.isRange(u)) {
                                    if (ht.isCollapsed(u) && Ze.leaf(e, u.anchor)[0].text.length > 0) return;
                                    var f = Ze.rangeRef(e, u, {
                                            affinity: "inward"
                                        }),
                                        [d, D] = ht.edges(u),
                                        h = "lowest" === s ? "lowest" : "highest",
                                        v = Ze.isEnd(e, D, D.path);
                                    zt.splitNodes(e, {
                                        at: D,
                                        match: n,
                                        mode: h,
                                        voids: c,
                                        always: !v
                                    });
                                    var p = Ze.isStart(e, d, d.path);
                                    zt.splitNodes(e, {
                                        at: d,
                                        match: n,
                                        mode: h,
                                        voids: c,
                                        always: !p
                                    });
                                    u = f.unref();
                                    null == r.at && zt.select(e, u)
                                }
                                a || (a = (e, t) => e !== t);
                                for (var [C, g] of Ze.nodes(e, {
                                        at: u,
                                        match: n,
                                        mode: s,
                                        voids: c
                                    })) {
                                    var B = {},
                                        E = {};
                                    if (0 !== g.length) {
                                        var m = !1;
                                        for (var A in t)
                                            if ("children" !== A && "text" !== A && a(t[A], C[A])) {
                                                m = !0;
                                                C.hasOwnProperty(A) && (B[A] = C[A]);
                                                o ? null != t[A] && (E[A] = o(C[A], t[A])) : null != t[A] && (E[A] = t[A])
                                            } m && e.apply({
                                            type: "set_node",
                                            path: g,
                                            properties: B,
                                            newProperties: E
                                        })
                                    }
                                }
                            }
                        }))
                    },
                    splitNodes(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        Ze.withoutNormalizing(e, (() => {
                            var {
                                mode: r = "lowest",
                                voids: n = !1
                            } = t, {
                                match: u,
                                at: a = e.selection,
                                height: o = 0,
                                always: i = !1
                            } = t;
                            null == u && (u = t => Ye.isElement(t) && Ze.isBlock(e, t));
                            ht.isRange(a) && (a = Tt(e, a));
                            if (ot.isPath(a)) {
                                var s = a,
                                    l = Ze.point(e, s),
                                    [c] = Ze.parent(e, s);
                                u = e => e === c;
                                o = l.path.length - s.length + 1;
                                a = l;
                                i = !0
                            }
                            if (a) {
                                var f, d = Ze.pointRef(e, a, {
                                    affinity: "backward"
                                });
                                try {
                                    var [D] = Ze.nodes(e, {
                                        at: a,
                                        match: u,
                                        mode: r,
                                        voids: n
                                    });
                                    if (!D) return;
                                    var h = Ze.void(e, {
                                        at: a,
                                        mode: "highest"
                                    });
                                    if (!n && h) {
                                        var [v, p] = h;
                                        if (Ye.isElement(v) && e.isInline(v)) {
                                            var C = Ze.after(e, p);
                                            if (!C) {
                                                var g = ot.next(p);
                                                zt.insertNodes(e, {
                                                    text: ""
                                                }, {
                                                    at: g,
                                                    voids: n
                                                });
                                                C = Ze.point(e, g)
                                            }
                                            a = C;
                                            i = !0
                                        }
                                        o = a.path.length - p.length + 1;
                                        i = !0
                                    }
                                    f = Ze.pointRef(e, a);
                                    var B = a.path.length - o,
                                        [, E] = D,
                                        m = a.path.slice(0, B),
                                        A = 0 === o ? a.offset : a.path[B] + 0;
                                    for (var [F, b] of Ze.levels(e, {
                                            at: m,
                                            reverse: !0,
                                            voids: n
                                        })) {
                                        var w = !1;
                                        if (b.length < E.length || 0 === b.length || !n && Ye.isElement(F) && Ze.isVoid(e, F)) break;
                                        var y = d.current,
                                            x = Ze.isEnd(e, y, b);
                                        if (i || !d || !Ze.isEdge(e, y, b)) {
                                            w = !0;
                                            var O = rt.extractProps(F);
                                            e.apply({
                                                type: "split_node",
                                                path: b,
                                                position: A,
                                                properties: O
                                            })
                                        }
                                        A = b[b.length - 1] + (w || x ? 1 : 0)
                                    }
                                    if (null == t.at) {
                                        var k = f.current || Ze.end(e, []);
                                        zt.select(e, k)
                                    }
                                } finally {
                                    var P;
                                    d.unref();
                                    null === (P = f) || void 0 === P || P.unref()
                                }
                            }
                        }))
                    },
                    unsetNodes(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        Array.isArray(t) || (t = [t]);
                        var n = {};
                        for (var u of t) n[u] = null;
                        zt.setNodes(e, n, r)
                    },
                    unwrapNodes(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        Ze.withoutNormalizing(e, (() => {
                            var {
                                mode: r = "lowest",
                                split: n = !1,
                                voids: u = !1
                            } = t, {
                                at: a = e.selection,
                                match: o
                            } = t;
                            if (a) {
                                null == o && (o = ot.isPath(a) ? Lt(e, a) : t => Ye.isElement(t) && Ze.isBlock(e, t));
                                ot.isPath(a) && (a = Ze.range(e, a));
                                var i = ht.isRange(a) ? Ze.rangeRef(e, a) : null,
                                    s = Ze.nodes(e, {
                                        at: a,
                                        match: o,
                                        mode: r,
                                        voids: u
                                    }),
                                    l = Array.from(s, (t => {
                                        var [, r] = t;
                                        return Ze.pathRef(e, r)
                                    })).reverse(),
                                    c = function(t) {
                                        var r = t.unref(),
                                            [a] = Ze.node(e, r),
                                            o = Ze.range(e, r);
                                        n && i && (o = ht.intersection(i.current, o));
                                        zt.liftNodes(e, {
                                            at: o,
                                            match: e => Ye.isAncestor(a) && a.children.includes(e),
                                            voids: u
                                        })
                                    };
                                for (var f of l) c(f);
                                i && i.unref()
                            }
                        }))
                    },
                    wrapNodes(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        Ze.withoutNormalizing(e, (() => {
                            var {
                                mode: n = "lowest",
                                split: u = !1,
                                voids: a = !1
                            } = r, {
                                match: o,
                                at: i = e.selection
                            } = r;
                            if (i) {
                                null == o && (o = ot.isPath(i) ? Lt(e, i) : e.isInline(t) ? t => Ye.isElement(t) && Ze.isInline(e, t) || Ft.isText(t) : t => Ye.isElement(t) && Ze.isBlock(e, t));
                                if (u && ht.isRange(i)) {
                                    var [s, l] = ht.edges(i), c = Ze.rangeRef(e, i, {
                                        affinity: "inward"
                                    });
                                    zt.splitNodes(e, {
                                        at: l,
                                        match: o,
                                        voids: a
                                    });
                                    zt.splitNodes(e, {
                                        at: s,
                                        match: o,
                                        voids: a
                                    });
                                    i = c.unref();
                                    null == r.at && zt.select(e, i)
                                }
                                var f = Array.from(Ze.nodes(e, {
                                    at: i,
                                    match: e.isInline(t) ? t => Ye.isElement(t) && Ze.isBlock(e, t) : e => Ze.isEditor(e),
                                    mode: "lowest",
                                    voids: a
                                }));
                                for (var [, d] of f) {
                                    var D = ht.isRange(i) ? ht.intersection(i, Ze.range(e, d)) : i;
                                    if (D) {
                                        var h = Array.from(Ze.nodes(e, {
                                            at: D,
                                            match: o,
                                            mode: n,
                                            voids: a
                                        }));
                                        if (h.length > 0) {
                                            var v = function() {
                                                var [r] = h, n = h[h.length - 1], [, u] = r, [, o] = n;
                                                if (0 === u.length && 0 === o.length) return "continue";
                                                var i = ot.equals(u, o) ? ot.parent(u) : ot.common(u, o),
                                                    s = Ze.range(e, u, o),
                                                    l = Ze.node(e, i),
                                                    [c] = l,
                                                    f = i.length + 1,
                                                    d = ot.next(o.slice(0, f)),
                                                    D = Pt(Pt({}, t), {}, {
                                                        children: []
                                                    });
                                                zt.insertNodes(e, D, {
                                                    at: d,
                                                    voids: a
                                                });
                                                zt.moveNodes(e, {
                                                    at: s,
                                                    match: e => Ye.isAncestor(c) && c.children.includes(e),
                                                    to: d.concat(0),
                                                    voids: a
                                                })
                                            }();
                                            if ("continue" === v) continue
                                        }
                                    }
                                }
                            }
                        }))
                    }
                },
                St = (e, t) => {
                    if (Ye.isElement(t)) {
                        var r = t;
                        return !!Ze.isVoid(e, t) || 1 === r.children.length && St(e, r.children[0])
                    }
                    return !Ze.isEditor(t)
                },
                Tt = (e, t) => {
                    if (ht.isCollapsed(t)) return t.anchor;
                    var [, r] = ht.edges(t), n = Ze.pointRef(e, r);
                    zt.delete(e, {
                        at: t
                    });
                    return n.unref()
                },
                Lt = (e, t) => {
                    var [r] = Ze.node(e, t);
                    return e => e === r
                };

            function jt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }

            function Rt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? jt(Object(r), !0).forEach((function(t) {
                        ae(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Nt = {
                    collapse(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                edge: r = "anchor"
                            } = t,
                            {
                                selection: n
                            } = e;
                        if (n)
                            if ("anchor" === r) zt.select(e, n.anchor);
                            else if ("focus" === r) zt.select(e, n.focus);
                        else if ("start" === r) {
                            var [u] = ht.edges(n);
                            zt.select(e, u)
                        } else if ("end" === r) {
                            var [, a] = ht.edges(n);
                            zt.select(e, a)
                        }
                    },
                    deselect(e) {
                        var {
                            selection: t
                        } = e;
                        t && e.apply({
                            type: "set_selection",
                            properties: t,
                            newProperties: null
                        })
                    },
                    move(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                selection: r
                            } = e,
                            {
                                distance: n = 1,
                                unit: u = "character",
                                reverse: a = !1
                            } = t,
                            {
                                edge: o = null
                            } = t;
                        if (r) {
                            "start" === o && (o = ht.isBackward(r) ? "focus" : "anchor");
                            "end" === o && (o = ht.isBackward(r) ? "anchor" : "focus");
                            var {
                                anchor: i,
                                focus: s
                            } = r, l = {
                                distance: n,
                                unit: u
                            }, c = {};
                            if (null == o || "anchor" === o) {
                                var f = a ? Ze.before(e, i, l) : Ze.after(e, i, l);
                                f && (c.anchor = f)
                            }
                            if (null == o || "focus" === o) {
                                var d = a ? Ze.before(e, s, l) : Ze.after(e, s, l);
                                d && (c.focus = d)
                            }
                            zt.setSelection(e, c)
                        }
                    },
                    select(e, t) {
                        var {
                            selection: r
                        } = e;
                        t = Ze.range(e, t);
                        if (r) zt.setSelection(e, t);
                        else {
                            if (!ht.isRange(t)) throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(Ct.stringify(t)));
                            e.apply({
                                type: "set_selection",
                                properties: r,
                                newProperties: t
                            })
                        }
                    },
                    setPoint(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                selection: n
                            } = e,
                            {
                                edge: u = "both"
                            } = r;
                        if (n) {
                            "start" === u && (u = ht.isBackward(n) ? "focus" : "anchor");
                            "end" === u && (u = ht.isBackward(n) ? "anchor" : "focus");
                            var {
                                anchor: a,
                                focus: o
                            } = n, i = "anchor" === u ? a : o;
                            zt.setSelection(e, {
                                ["anchor" === u ? "anchor" : "focus"]: Rt(Rt({}, i), t)
                            })
                        }
                    },
                    setSelection(e, t) {
                        var {
                            selection: r
                        } = e, n = {}, u = {};
                        if (r) {
                            for (var a in t)
                                if ("anchor" === a && null != t.anchor && !ct.equals(t.anchor, r.anchor) || "focus" === a && null != t.focus && !ct.equals(t.focus, r.focus) || "anchor" !== a && "focus" !== a && t[a] !== r[a]) {
                                    n[a] = r[a];
                                    u[a] = t[a]
                                } Object.keys(n).length > 0 && e.apply({
                                type: "set_selection",
                                properties: n,
                                newProperties: u
                            })
                        }
                    }
                },
                _t = {
                    delete(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        Ze.withoutNormalizing(e, (() => {
                            var {
                                reverse: r = !1,
                                unit: n = "character",
                                distance: u = 1,
                                voids: a = !1
                            } = t, {
                                at: o = e.selection,
                                hanging: i = !1
                            } = t;
                            if (o) {
                                var s = !1;
                                if (ht.isRange(o) && ht.isCollapsed(o)) {
                                    s = !0;
                                    o = o.anchor
                                }
                                if (ct.isPoint(o)) {
                                    var l = Ze.void(e, {
                                        at: o,
                                        mode: "highest"
                                    });
                                    if (!a && l) {
                                        var [, c] = l;
                                        o = c
                                    } else {
                                        var f = {
                                            unit: n,
                                            distance: u
                                        };
                                        o = {
                                            anchor: o,
                                            focus: r ? Ze.before(e, o, f) || Ze.start(e, []) : Ze.after(e, o, f) || Ze.end(e, [])
                                        };
                                        i = !0
                                    }
                                }
                                if (ot.isPath(o)) zt.removeNodes(e, {
                                    at: o,
                                    voids: a
                                });
                                else if (!ht.isCollapsed(o)) {
                                    if (!i) {
                                        var [, d] = ht.edges(o), D = Ze.end(e, []);
                                        ct.equals(d, D) || (o = Ze.unhangRange(e, o, {
                                            voids: a
                                        }))
                                    }
                                    var [h, v] = ht.edges(o), p = Ze.above(e, {
                                        match: t => Ye.isElement(t) && Ze.isBlock(e, t),
                                        at: h,
                                        voids: a
                                    }), C = Ze.above(e, {
                                        match: t => Ye.isElement(t) && Ze.isBlock(e, t),
                                        at: v,
                                        voids: a
                                    }), g = p && C && !ot.equals(p[1], C[1]), B = ot.equals(h.path, v.path), E = a ? null : Ze.void(e, {
                                        at: h,
                                        mode: "highest"
                                    }), m = a ? null : Ze.void(e, {
                                        at: v,
                                        mode: "highest"
                                    });
                                    if (E) {
                                        var A = Ze.before(e, h);
                                        A && p && ot.isAncestor(p[1], A.path) && (h = A)
                                    }
                                    if (m) {
                                        var F = Ze.after(e, v);
                                        F && C && ot.isAncestor(C[1], F.path) && (v = F)
                                    }
                                    var b, w = [];
                                    for (var y of Ze.nodes(e, {
                                            at: o,
                                            voids: a
                                        })) {
                                        var [x, O] = y;
                                        if ((!b || 0 !== ot.compare(O, b)) && (!a && Ye.isElement(x) && Ze.isVoid(e, x) || !ot.isCommon(O, h.path) && !ot.isCommon(O, v.path))) {
                                            w.push(y);
                                            b = O
                                        }
                                    }
                                    var k = Array.from(w, (t => {
                                            var [, r] = t;
                                            return Ze.pathRef(e, r)
                                        })),
                                        P = Ze.pointRef(e, h),
                                        M = Ze.pointRef(e, v),
                                        S = "";
                                    if (!B && !E) {
                                        var T = P.current,
                                            [L] = Ze.leaf(e, T),
                                            {
                                                path: j
                                            } = T,
                                            {
                                                offset: R
                                            } = h,
                                            N = L.text.slice(R);
                                        if (N.length > 0) {
                                            e.apply({
                                                type: "remove_text",
                                                path: j,
                                                offset: R,
                                                text: N
                                            });
                                            S = N
                                        }
                                    }
                                    k.reverse().map((e => e.unref())).filter((e => null !== e)).forEach((t => zt.removeNodes(e, {
                                        at: t,
                                        voids: a
                                    })));
                                    if (!m) {
                                        var _ = M.current,
                                            [W] = Ze.leaf(e, _),
                                            {
                                                path: I
                                            } = _,
                                            z = B ? h.offset : 0,
                                            q = W.text.slice(z, v.offset);
                                        if (q.length > 0) {
                                            e.apply({
                                                type: "remove_text",
                                                path: I,
                                                offset: z,
                                                text: q
                                            });
                                            S = q
                                        }
                                    }!B && g && M.current && P.current && zt.mergeNodes(e, {
                                        at: M.current,
                                        hanging: !0,
                                        voids: a
                                    });
                                    s && r && "character" === n && S.length > 1 && S.match(/[\u0E00-\u0E7F]+/) && zt.insertText(e, S.slice(0, S.length - u));
                                    var V = P.unref(),
                                        $ = M.unref(),
                                        Y = r ? V || $ : $ || V;
                                    null == t.at && Y && zt.select(e, Y)
                                }
                            }
                        }))
                    },
                    insertFragment(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        Ze.withoutNormalizing(e, (() => {
                            var {
                                hanging: n = !1,
                                voids: u = !1
                            } = r, {
                                at: a = e.selection
                            } = r;
                            if (t.length && a) {
                                if (ht.isRange(a)) {
                                    n || (a = Ze.unhangRange(e, a, {
                                        voids: u
                                    }));
                                    if (ht.isCollapsed(a)) a = a.anchor;
                                    else {
                                        var [, o] = ht.edges(a);
                                        if (!u && Ze.void(e, {
                                                at: o
                                            })) return;
                                        var i = Ze.pointRef(e, o);
                                        zt.delete(e, {
                                            at: a
                                        });
                                        a = i.unref()
                                    }
                                } else ot.isPath(a) && (a = Ze.start(e, a));
                                if (u || !Ze.void(e, {
                                        at: a
                                    })) {
                                    var s = Ze.above(e, {
                                        at: a,
                                        match: t => Ye.isElement(t) && Ze.isInline(e, t),
                                        mode: "highest",
                                        voids: u
                                    });
                                    if (s) {
                                        var [, l] = s;
                                        if (Ze.isEnd(e, a, l)) {
                                            a = Ze.after(e, l)
                                        } else if (Ze.isStart(e, a, l)) {
                                            a = Ze.before(e, l)
                                        }
                                    }
                                    var c = Ze.above(e, {
                                            match: t => Ye.isElement(t) && Ze.isBlock(e, t),
                                            at: a,
                                            voids: u
                                        }),
                                        [, f] = c,
                                        d = Ze.isStart(e, a, f),
                                        D = Ze.isEnd(e, a, f),
                                        h = d && D,
                                        v = !d || d && D,
                                        p = !D,
                                        [, C] = rt.first({
                                            children: t
                                        }, []),
                                        [, g] = rt.last({
                                            children: t
                                        }, []),
                                        B = [],
                                        E = t => {
                                            var [r, n] = t;
                                            return !(0 === n.length) && (!!h || !(v && ot.isAncestor(n, C) && Ye.isElement(r) && !e.isVoid(r) && !e.isInline(r)) && !(p && ot.isAncestor(n, g) && Ye.isElement(r) && !e.isVoid(r) && !e.isInline(r)))
                                        };
                                    for (var m of rt.nodes({
                                            children: t
                                        }, {
                                            pass: E
                                        })) E(m) && B.push(m);
                                    var A = [],
                                        F = [],
                                        b = [],
                                        w = !0,
                                        y = !1;
                                    for (var [x] of B)
                                        if (Ye.isElement(x) && !e.isInline(x)) {
                                            w = !1;
                                            y = !0;
                                            F.push(x)
                                        } else w ? A.push(x) : b.push(x);
                                    var [O] = Ze.nodes(e, {
                                        at: a,
                                        match: t => Ft.isText(t) || Ze.isInline(e, t),
                                        mode: "highest",
                                        voids: u
                                    }), [, k] = O, P = Ze.isStart(e, a, k), M = Ze.isEnd(e, a, k), S = Ze.pathRef(e, D && !b.length ? ot.next(f) : f), T = Ze.pathRef(e, M ? ot.next(k) : k);
                                    zt.splitNodes(e, {
                                        at: a,
                                        match: t => y ? Ye.isElement(t) && Ze.isBlock(e, t) : Ft.isText(t) || Ze.isInline(e, t),
                                        mode: y ? "lowest" : "highest",
                                        always: y && (!d || A.length > 0) && (!D || b.length > 0),
                                        voids: u
                                    });
                                    var L = Ze.pathRef(e, !P || P && M ? ot.next(k) : k);
                                    zt.insertNodes(e, A, {
                                        at: L.current,
                                        match: t => Ft.isText(t) || Ze.isInline(e, t),
                                        mode: "highest",
                                        voids: u
                                    });
                                    h && !A.length && F.length && !b.length && zt.delete(e, {
                                        at: f,
                                        voids: u
                                    });
                                    zt.insertNodes(e, F, {
                                        at: S.current,
                                        match: t => Ye.isElement(t) && Ze.isBlock(e, t),
                                        mode: "lowest",
                                        voids: u
                                    });
                                    zt.insertNodes(e, b, {
                                        at: T.current,
                                        match: t => Ft.isText(t) || Ze.isInline(e, t),
                                        mode: "highest",
                                        voids: u
                                    });
                                    if (!r.at) {
                                        var j;
                                        b.length > 0 && T.current ? j = ot.previous(T.current) : F.length > 0 && S.current ? j = ot.previous(S.current) : L.current && (j = ot.previous(L.current));
                                        if (j) {
                                            var R = Ze.end(e, j);
                                            zt.select(e, R)
                                        }
                                    }
                                    L.unref();
                                    S.unref();
                                    T.unref()
                                }
                            }
                        }))
                    },
                    insertText(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        Ze.withoutNormalizing(e, (() => {
                            var {
                                voids: n = !1
                            } = r, {
                                at: u = e.selection
                            } = r;
                            if (u) {
                                ot.isPath(u) && (u = Ze.range(e, u));
                                if (ht.isRange(u))
                                    if (ht.isCollapsed(u)) u = u.anchor;
                                    else {
                                        var a = ht.end(u);
                                        if (!n && Ze.void(e, {
                                                at: a
                                            })) return;
                                        var o = ht.start(u),
                                            i = Ze.pointRef(e, o),
                                            s = Ze.pointRef(e, a);
                                        zt.delete(e, {
                                            at: u,
                                            voids: n
                                        });
                                        var l = i.unref(),
                                            c = s.unref();
                                        u = l || c;
                                        zt.setSelection(e, {
                                            anchor: u,
                                            focus: u
                                        })
                                    } if (n || !Ze.void(e, {
                                        at: u
                                    })) {
                                    var {
                                        path: f,
                                        offset: d
                                    } = u;
                                    t.length > 0 && e.apply({
                                        type: "insert_text",
                                        path: f,
                                        offset: d,
                                        text: t
                                    })
                                }
                            }
                        }))
                    }
                };

            function Wt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }

            function It(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Wt(Object(r), !0).forEach((function(t) {
                        ae(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var zt = It(It(It(It({}, yt), Mt), Nt), _t)
        },
        957083: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = function() {
                function e(t, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._elements = [];
                    this._createElement = t;
                    this._cleanElement = r
                }
                var t = e.prototype;
                t.getElement = function() {
                    return 0 === this._elements.length ? this._createElement() : this._elements.pop()
                };
                t.poolElement = function(e) {
                    this._cleanElement(e);
                    this._elements.push(e)
                };
                t.clearPool = function() {
                    this._elements.length = 0
                };
                return e
            }()
        }
    }
]);