(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [945, 40056, 58093, 84832], {
        737264: t => {
            "use strict";
            t.exports.Q = function(t) {
                var e, n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!n) return null;
                n.shift();
                var r = null,
                    i = [];
                if (n[2]) {
                    r = (e = n[2].split("-")).shift();
                    i = e
                }
                var o = [];
                n[5] && (o = n[5].split("-")).shift();
                var s = [];
                if (n[6]) {
                    (e = n[6].split("-")).shift();
                    for (var a, c = []; e.length;) {
                        var u = e.shift();
                        if (1 === u.length)
                            if (a) {
                                s.push({
                                    singleton: a,
                                    extension: c
                                });
                                a = u;
                                c = []
                            } else a = u;
                        else c.push(u)
                    }
                    s.push({
                        singleton: a,
                        extension: c
                    })
                }
                var l = [];
                if (n[7]) {
                    (l = n[7].split("-")).shift();
                    l.shift()
                }
                var h = [];
                n[8] && (h = n[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: r,
                            extlang: i
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: o,
                        extension: s,
                        privateuse: l
                    },
                    privateuse: h,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        824390: t => {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    r = t.length;
                if (r > n) return !1;
                if (r === n) return t === e;
                t: for (var i = 0, o = 0; i < r; i++) {
                    for (var s = t.charCodeAt(i); o < n;)
                        if (e.charCodeAt(o++) === s) continue t;
                    return !1
                }
                return !0
            }
        },
        753074: t => {
            "use strict";
            var e = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                n = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                r = "function" == typeof Object.getOwnPropertySymbols;
            t.exports = function(t, i, o) {
                if ("string" != typeof i) {
                    var s = Object.getOwnPropertyNames(i);
                    r && (s = s.concat(Object.getOwnPropertySymbols(i)));
                    for (var a = 0; a < s.length; ++a)
                        if (!(e[s[a]] || n[s[a]] || o && o[s[a]])) try {
                            t[s[a]] = i[s[a]]
                        } catch (t) {}
                }
                return t
            }
        },
        966337: () => {
            ! function(t, e) {
                "use strict";
                if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype) "isIntersecting" in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                });
                else {
                    var n = [];
                    i.prototype.THROTTLE_TIMEOUT = 100;
                    i.prototype.POLL_INTERVAL = null;
                    i.prototype.USE_MUTATION_OBSERVER = !0;
                    i.prototype.observe = function(t) {
                        if (!this._observationTargets.some((function(e) {
                                return e.element == t
                            }))) {
                            if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                            this._registerInstance();
                            this._observationTargets.push({
                                element: t,
                                entry: null
                            });
                            this._monitorIntersections();
                            this._checkForIntersections()
                        }
                    };
                    i.prototype.unobserve = function(t) {
                        this._observationTargets = this._observationTargets.filter((function(e) {
                            return e.element != t
                        }));
                        if (!this._observationTargets.length) {
                            this._unmonitorIntersections();
                            this._unregisterInstance()
                        }
                    };
                    i.prototype.disconnect = function() {
                        this._observationTargets = [];
                        this._unmonitorIntersections();
                        this._unregisterInstance()
                    };
                    i.prototype.takeRecords = function() {
                        var t = this._queuedEntries.slice();
                        this._queuedEntries = [];
                        return t
                    };
                    i.prototype._initThresholds = function(t) {
                        var e = t || [0];
                        Array.isArray(e) || (e = [e]);
                        return e.sort().filter((function(t, e, n) {
                            if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                            return t !== n[e - 1]
                        }))
                    };
                    i.prototype._parseRootMargin = function(t) {
                        var e = (t || "0px").split(/\s+/).map((function(t) {
                            var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                            if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(e[1]),
                                unit: e[2]
                            }
                        }));
                        e[1] = e[1] || e[0];
                        e[2] = e[2] || e[0];
                        e[3] = e[3] || e[1];
                        return e
                    };
                    i.prototype._monitorIntersections = function() {
                        if (!this._monitoringIntersections) {
                            this._monitoringIntersections = !0;
                            if (this.POLL_INTERVAL) this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
                            else {
                                o(t, "resize", this._checkForIntersections, !0);
                                o(e, "scroll", this._checkForIntersections, !0);
                                if (this.USE_MUTATION_OBSERVER && "MutationObserver" in t) {
                                    this._domObserver = new MutationObserver(this._checkForIntersections);
                                    this._domObserver.observe(e, {
                                        attributes: !0,
                                        childList: !0,
                                        characterData: !0,
                                        subtree: !0
                                    })
                                }
                            }
                        }
                    };
                    i.prototype._unmonitorIntersections = function() {
                        if (this._monitoringIntersections) {
                            this._monitoringIntersections = !1;
                            clearInterval(this._monitoringInterval);
                            this._monitoringInterval = null;
                            s(t, "resize", this._checkForIntersections, !0);
                            s(e, "scroll", this._checkForIntersections, !0);
                            if (this._domObserver) {
                                this._domObserver.disconnect();
                                this._domObserver = null
                            }
                        }
                    };
                    i.prototype._checkForIntersections = function() {
                        var e = this._rootIsInDom(),
                            n = e ? this._getRootRect() : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            };
                        this._observationTargets.forEach((function(i) {
                            var o = i.element,
                                s = a(o),
                                c = this._rootContainsTarget(o),
                                u = i.entry,
                                l = e && c && this._computeTargetAndRootIntersection(o, n),
                                h = i.entry = new r({
                                    time: t.performance && performance.now && performance.now(),
                                    target: o,
                                    boundingClientRect: s,
                                    rootBounds: n,
                                    intersectionRect: l
                                });
                            u ? e && c ? this._hasCrossedThreshold(u, h) && this._queuedEntries.push(h) : u && u.isIntersecting && this._queuedEntries.push(h) : this._queuedEntries.push(h)
                        }), this);
                        this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    };
                    i.prototype._computeTargetAndRootIntersection = function(n, r) {
                        if ("none" != t.getComputedStyle(n).display) {
                            for (var i, o, s, c, l, h, f, p, v = a(n), d = u(n), g = !1; !g;) {
                                var y = null,
                                    m = 1 == d.nodeType ? t.getComputedStyle(d) : {};
                                if ("none" == m.display) return;
                                if (d == this.root || d == e) {
                                    g = !0;
                                    y = r
                                } else d != e.body && d != e.documentElement && "visible" != m.overflow && (y = a(d));
                                if (y && !(v = (i = y, o = v, s = void 0, c = void 0, l = void 0, h = void 0, f = void 0, p = void 0, s = Math.max(i.top, o.top), c = Math.min(i.bottom, o.bottom), l = Math.max(i.left, o.left), h = Math.min(i.right, o.right), p = c - s,
                                        (f = h - l) >= 0 && p >= 0 && {
                                            top: s,
                                            bottom: c,
                                            left: l,
                                            right: h,
                                            width: f,
                                            height: p
                                        }))) break;
                                d = u(d)
                            }
                            return v
                        }
                    };
                    i.prototype._getRootRect = function() {
                        var t;
                        if (this.root) t = a(this.root);
                        else {
                            var n = e.documentElement,
                                r = e.body;
                            t = {
                                top: 0,
                                left: 0,
                                right: n.clientWidth || r.clientWidth,
                                width: n.clientWidth || r.clientWidth,
                                bottom: n.clientHeight || r.clientHeight,
                                height: n.clientHeight || r.clientHeight
                            }
                        }
                        return this._expandRectByRootMargin(t)
                    };
                    i.prototype._expandRectByRootMargin = function(t) {
                        var e = this._rootMarginValues.map((function(e, n) {
                                return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                            })),
                            n = {
                                top: t.top - e[0],
                                right: t.right + e[1],
                                bottom: t.bottom + e[2],
                                left: t.left - e[3]
                            };
                        n.width = n.right - n.left;
                        n.height = n.bottom - n.top;
                        return n
                    };
                    i.prototype._hasCrossedThreshold = function(t, e) {
                        var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                            r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                        if (n !== r)
                            for (var i = 0; i < this.thresholds.length; i++) {
                                var o = this.thresholds[i];
                                if (o == n || o == r || o < n != o < r) return !0
                            }
                    };
                    i.prototype._rootIsInDom = function() {
                        return !this.root || c(e, this.root)
                    };
                    i.prototype._rootContainsTarget = function(t) {
                        return c(this.root || e, t)
                    };
                    i.prototype._registerInstance = function() {
                        n.indexOf(this) < 0 && n.push(this)
                    };
                    i.prototype._unregisterInstance = function() {
                        var t = n.indexOf(this); - 1 != t && n.splice(t, 1)
                    };
                    t.IntersectionObserver = i;
                    t.IntersectionObserverEntry = r
                }

                function r(t) {
                    this.time = t.time;
                    this.target = t.target;
                    this.rootBounds = t.rootBounds;
                    this.boundingClientRect = t.boundingClientRect;
                    this.intersectionRect = t.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    };
                    this.isIntersecting = !!t.intersectionRect;
                    var e = this.boundingClientRect,
                        n = e.width * e.height,
                        r = this.intersectionRect,
                        i = r.width * r.height;
                    this.intersectionRatio = n ? i / n : this.isIntersecting ? 1 : 0
                }

                function i(t, e) {
                    var n, r, i, o = e || {};
                    if ("function" != typeof t) throw new Error("callback must be a function");
                    if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
                    this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT,
                        i = null,
                        function() {
                            i || (i = setTimeout((function() {
                                n();
                                i = null
                            }), r))
                        });
                    this._callback = t;
                    this._observationTargets = [];
                    this._queuedEntries = [];
                    this._rootMarginValues = this._parseRootMargin(o.rootMargin);
                    this.thresholds = this._initThresholds(o.threshold);
                    this.root = o.root || null;
                    this.rootMargin = this._rootMarginValues.map((function(t) {
                        return t.value + t.unit
                    })).join(" ")
                }

                function o(t, e, n, r) {
                    "function" == typeof t.addEventListener ? t.addEventListener(e, n, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
                }

                function s(t, e, n, r) {
                    "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
                }

                function a(t) {
                    var e;
                    try {
                        e = t.getBoundingClientRect()
                    } catch (t) {}
                    if (!e) return {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    };
                    e.width && e.height || (e = {
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                        left: e.left,
                        width: e.right - e.left,
                        height: e.bottom - e.top
                    });
                    return e
                }

                function c(t, e) {
                    for (var n = e; n;) {
                        if (n == t) return !0;
                        n = u(n)
                    }
                    return !1
                }

                function u(t) {
                    var e = t.parentNode;
                    return e && 11 == e.nodeType && e.host ? e.host : e
                }
            }(window, document)
        },
        896874: t => {
            t.exports = function(t, e, n) {
                switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
            }
        },
        70151: (t, e, n) => {
            var r = n(200278),
                i = n(173480);
            t.exports = function(t) {
                return i(r(t))
            }
        },
        269199: (t, e, n) => {
            var r = n(989881),
                i = n(498612);
            t.exports = function(t, e) {
                var n = -1,
                    o = i(t) ? Array(t.length) : [];
                r(t, (function(t, r, i) {
                    o[++n] = e(t, r, i)
                }));
                return o
            }
        },
        882689: (t, e, n) => {
            var r = n(829932),
                i = n(267206),
                o = n(269199),
                s = n(571131),
                a = n(307518),
                c = n(285022),
                u = n(406557);
            t.exports = function(t, e, n) {
                var l = -1;
                e = r(e.length ? e : [u], a(i));
                var h = o(t, (function(t, n, i) {
                    return {
                        criteria: r(e, (function(e) {
                            return e(t)
                        })),
                        index: ++l,
                        value: t
                    }
                }));
                return s(h, (function(t, e) {
                    return c(t, e, n)
                }))
            }
        },
        105976: (t, e, n) => {
            var r = n(406557),
                i = n(545357),
                o = n(430061);
            t.exports = function(t, e) {
                return o(i(t, e, r), t + "")
            }
        },
        356560: (t, e, n) => {
            var r = n(575703),
                i = n(538777),
                o = n(406557),
                s = i ? function(t, e) {
                    return i(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(e),
                        writable: !0
                    })
                } : o;
            t.exports = s
        },
        525127: (t, e, n) => {
            var r = n(173480),
                i = n(252628);
            t.exports = function(t) {
                return r(i(t))
            }
        },
        571131: t => {
            t.exports = function(t, e) {
                var n = t.length;
                t.sort(e);
                for (; n--;) t[n] = t[n].value;
                return t
            }
        },
        747415: (t, e, n) => {
            var r = n(829932);
            t.exports = function(t, e) {
                return r(e, (function(e) {
                    return t[e]
                }))
            }
        },
        626393: (t, e, n) => {
            var r = n(733448);
            t.exports = function(t, e) {
                if (t !== e) {
                    var n = void 0 !== t,
                        i = null === t,
                        o = t == t,
                        s = r(t),
                        a = void 0 !== e,
                        c = null === e,
                        u = e == e,
                        l = r(e);
                    if (!c && !l && !s && t > e || s && a && u && !c && !l || i && a && u || !n && u || !o) return 1;
                    if (!i && !s && !l && t < e || l && n && o && !i && !s || c && n && o || !a && o || !u) return -1
                }
                return 0
            }
        },
        285022: (t, e, n) => {
            var r = n(626393);
            t.exports = function(t, e, n) {
                for (var i = -1, o = t.criteria, s = e.criteria, a = o.length, c = n.length; ++i < a;) {
                    var u = r(o[i], s[i]);
                    if (u) {
                        return i >= c ? u : u * ("desc" == n[i] ? -1 : 1)
                    }
                }
                return t.index - e.index
            }
        },
        200278: t => {
            t.exports = function(t, e) {
                var n = -1,
                    r = t.length;
                e || (e = Array(r));
                for (; ++n < r;) e[n] = t[n];
                return e
            }
        },
        545357: (t, e, n) => {
            var r = n(896874),
                i = Math.max;
            t.exports = function(t, e, n) {
                e = i(void 0 === e ? t.length - 1 : e, 0);
                return function() {
                    for (var o = arguments, s = -1, a = i(o.length - e, 0), c = Array(a); ++s < a;) c[s] = o[e + s];
                    s = -1;
                    for (var u = Array(e + 1); ++s < e;) u[s] = o[s];
                    u[e] = n(c);
                    return r(t, this, u)
                }
            }
        },
        430061: (t, e, n) => {
            var r = n(356560),
                i = n(521275)(r);
            t.exports = i
        },
        521275: t => {
            var e = Date.now;
            t.exports = function(t) {
                var n = 0,
                    r = 0;
                return function() {
                    var i = e(),
                        o = 16 - (i - r);
                    r = i;
                    if (o > 0) {
                        if (++n >= 800) return arguments[0]
                    } else n = 0;
                    return t.apply(void 0, arguments)
                }
            }
        },
        173480: (t, e, n) => {
            var r = n(769877);
            t.exports = function(t, e) {
                var n = -1,
                    i = t.length,
                    o = i - 1;
                e = void 0 === e ? i : e;
                for (; ++n < e;) {
                    var s = r(n, o),
                        a = t[s];
                    t[s] = t[n];
                    t[n] = a
                }
                t.length = e;
                return t
            }
        },
        575703: t => {
            t.exports = function(t) {
                return function() {
                    return t
                }
            }
        },
        208804: (t, e, n) => {
            t.exports = n(91175)
        },
        91175: t => {
            t.exports = function(t) {
                return t && t.length ? t[0] : void 0
            }
        },
        531351: t => {
            var e = Array.prototype.reverse;
            t.exports = function(t) {
                return null == t ? t : e.call(t)
            }
        },
        369983: (t, e, n) => {
            var r = n(70151),
                i = n(525127),
                o = n(701469);
            t.exports = function(t) {
                return (o(t) ? r : i)(t)
            }
        },
        189734: (t, e, n) => {
            var r = n(121078),
                i = n(882689),
                o = n(105976),
                s = n(816612),
                a = o((function(t, e) {
                    if (null == t) return [];
                    var n = e.length;
                    n > 1 && s(t, e[0], e[1]) ? e = [] : n > 2 && s(e[0], e[1], e[2]) && (e = [e[0]]);
                    return i(t, r(e, 1), [])
                }));
            t.exports = a
        },
        252628: (t, e, n) => {
            var r = n(747415),
                i = n(3674);
            t.exports = function(t) {
                return null == t ? [] : r(t, i(t))
            }
        },
        620745: (t, e, n) => {
            "use strict";
            var r = n(973935);
            e.s = r.createRoot;
            r.hydrateRoot
        },
        180735: (t, e, n) => {
            "use strict";
            n.d(e, {
                h: () => r
            });
            var r;
            ! function(t) {
                t[t.USER = 100] = "USER";
                t[t.STREAM = 18] = "STREAM"
            }(r || (r = {}))
        },
        248634: (t, e, n) => {
            "use strict";
            n.d(e, {
                z: () => r
            });
            var r;
            ! function(t) {
                t.MATCH_ALL = "match_all";
                t.MATCH_SOME = "match_some"
            }(r || (r = {}));
            new Set(["match_all", "match_some"])
        },
        482507: (t, e, n) => {
            "use strict";
            n.d(e, {
                J: () => r
            });

            function r(t) {
                var e = document.body;
                if (null == e) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var n = document.createRange(),
                    r = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = t;
                i.contentEditable = "true";
                i.style.visibility = "none";
                e.appendChild(i);
                n.selectNodeContents(i);
                null == r || r.removeAllRanges();
                null == r || r.addRange(n);
                i.focus();
                i.setSelectionRange(0, t.length);
                var o = document.execCommand("copy");
                e.removeChild(i);
                return o
            }
        },
        125333: (t, e, n) => {
            "use strict";
            n.d(e, {
                z0: () => r,
                Oh: () => i,
                Gk: () => o
            });

            function r(t) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(t)
            }

            function i(t) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(t)
            }

            function o() {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
            }
        },
        58964: (t, e, n) => {
            "use strict";
            n.d(e, {
                ZP: () => v,
                WS: () => f,
                zS: () => p
            });
            var r = n(131795),
                i = n.n(r),
                o = n(468811),
                s = n.n(o);
            const a = n(426080).Z;

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function u(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }

            function l(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return c(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var h = "https://discordapp.page.link";

            function f() {
                return s().v4()
            }

            function p(t) {
                if (!t.startsWith(h)) return null;
                try {
                    var e = new URL(t).searchParams,
                        n = e.get("link");
                    if (null == n) return null;
                    var r, i = decodeURIComponent(n),
                        o = new URL(i).searchParams,
                        s = {
                            utmSource: null !== (r = e.get("utm_source")) && void 0 !== r ? r : void 0
                        },
                        a = !0,
                        c = !1,
                        u = void 0;
                    try {
                        for (var f, p = o.entries()[Symbol.iterator](); !(a = (f = p.next()).done); a = !0) {
                            var v = l(f.value, 2),
                                d = v[0],
                                g = v[1];
                            s[d] = g
                        }
                    } catch (t) {
                        c = !0;
                        u = t
                    } finally {
                        try {
                            a || null == p.return || p.return()
                        } finally {
                            if (c) throw u
                        }
                    }
                    return s
                } catch (t) {
                    return null
                }
            }

            function v(t, e) {
                var n = e.utmSource,
                    r = e.androidFallbackLink,
                    o = e.iosFallbackLink,
                    s = u(e, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    c = new URL(t);
                for (var l in s) {
                    var f = s[l];
                    null != f && c.searchParams.set(l, f)
                }
                var p, v, d, g, y, m = encodeURIComponent(c.toString()),
                    b = encodeURIComponent(a()),
                    _ = (d = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), g = null != (null === i() || void 0 === i() || null === (p = i().ua) || void 0 === p ? void 0 : p.match(d)), y = "Safari" === (null === i() || void 0 === i() ? void 0 : i().name) && !g, "iOS" !== (null === i() || void 0 === i() || null === (v = i().os) || void 0 === v ? void 0 : v.family) || y ? 1 : 0),
                    w = null != r ? encodeURIComponent(r) : null,
                    O = null != o ? encodeURIComponent(o) : null,
                    I = "".concat(h, "/?link=").concat(m, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(b, "&efr=").concat(_);
                null != w && (I += "&afl=".concat(w));
                null != O && (I += "&ifl=".concat(O));
                return I
            }
        },
        426080: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => i
            });
            var r = n(805829);

            function i() {
                return r.Z.Messages.DynamicLinks.IOS_APP_PREVIEW_DESCRIPTION
            }
        },
        222789: (t, e, n) => {
            "use strict";
            n.d(e, {
                Rp: () => c,
                ge: () => o,
                RA: () => a
            });

            function r(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) ? t.forEach((function(t) {
                    return r(t, e)
                })) : "string" == typeof t.content ? e.push(t.content) : null != t.content && r(t.content, e);
                return e
            }

            function i(t, e) {
                if (Array.isArray(e))
                    for (var n = e.length, r = 0; r < n; r++) t.push(e[r]);
                else t.push(e)
            }

            function o(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (Array.isArray(t)) {
                    for (var n = t.length, r = [], s = 0; s < n; s++) i(r, o(t[s], e));
                    return r
                }
                null != t.content && (t.content = o(t.content, t));
                return null != e && t.type === e.type ? t.content : t
            }
            var s = {};

            function a(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    limit: 200
                };
                if (Array.isArray(t))
                    for (var n = t.length, r = 0; r < n; r++) {
                        var i = a(t[r], e);
                        if (i === s) {
                            t.length = r;
                            break
                        }
                        t[r] = i
                    } else if ("text" !== t.type) {
                        e.limit -= 1;
                        if (e.limit <= 0) return s;
                        Array.isArray(t.content) && (t.content = a(t.content, e))
                    } return t
            }

            function c(t) {
                return r(t).join("")
            }
        },
        894012: (t, e, n) => {
            "use strict";
            n.d(e, {
                Rp: () => i.Rp,
                w4: () => o,
                _p: () => s
            });
            var r, i = n(222789),
                o = (r = n(25788).Z).reactParserFor,
                s = r.astParserFor
        },
        25788: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var r = n(120053),
                i = n.n(r),
                o = n(222789);

            function s(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function a(t, e, n, r, i) {
                n || (e += "\n\n");
                var a;
                a = t(e, function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            s(t, e, n[e])
                        }))
                    }
                    return t
                }({
                    inline: n
                }, r));
                a = (0, o.ge)(a);
                a = (0, o.RA)(a);
                null != i && (a = i(a, n));
                return a
            }
            const c = {
                reactParserFor: function(t) {
                    var e = i().parserFor(t),
                        n = i().reactFor(i().ruleOutput(t, "react"));
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return n(a(e, t, r, i, o), i)
                    }
                },
                astParserFor: function(t) {
                    var e = i().parserFor(t);
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return a(e, t, n, r, i)
                    }
                }
            }
        },
        431710: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => a
            });
            var r = n(973935),
                i = n(809784);

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var s = {
                    root: null,
                    rootMargin: "0px",
                    threshold: .5
                },
                a = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
                            n = this;
                        o(this, t);
                        this._nodes = new WeakMap;
                        this._components = new WeakMap;
                        this._visibleComponents = new WeakSet;
                        this._handleEntries = function(t) {
                            t.forEach((function(t) {
                                var e;
                                if (null != t.isIntersecting) e = t.isIntersecting;
                                else {
                                    var r = n._options.threshold;
                                    e = null == r ? t.intersectionRatio > 0 : Array.isArray(r) ? r.some((function(e) {
                                        return t.intersectionRatio > e
                                    })) : t.intersectionRatio > r
                                }
                                var i = n._nodes.get(t.target);
                                if (null != i) {
                                    var o = !1;
                                    if (e) {
                                        if (!n._visibleComponents.has(i)) {
                                            n._visibleComponents.add(i);
                                            o = !0
                                        }
                                    } else if (n._visibleComponents.has(i)) {
                                        n._visibleComponents.delete(i);
                                        o = !0
                                    }
                                    o && i.forceUpdate()
                                }
                            }))
                        };
                        this._options = e;
                        null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                    }
                    var e = t.prototype;
                    e.isVisible = function(t) {
                        return null == this._observer || this._visibleComponents.has(t)
                    };
                    e.observe = function(t) {
                        var e = this._observer;
                        if (null != e) {
                            this.unobserve(t);
                            var n = (0, r.findDOMNode)(t);
                            if ((0, i.k)(n, HTMLElement)) {
                                this._nodes.set(n, t);
                                this._components.set(t, n);
                                e.observe(n)
                            }
                        }
                    };
                    e.unobserve = function(t) {
                        var e = this._observer;
                        if (null != e) {
                            var n = this._components.get(t);
                            if (null != n) {
                                this._nodes.delete(n);
                                this._components.delete(t);
                                this._visibleComponents.delete(t);
                                e.unobserve(n)
                            }
                        }
                    };
                    return t
                }()
        },
        593549: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => g
            });
            var r = n(667294),
                i = n(468811),
                o = n.n(i),
                s = n(431710);

            function a(t) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return a(t)
            }

            function c(t, e) {
                return !e || "object" !== l(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function u(t, e) {
                u = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return u(t, e)
            }
            var l = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function h(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(t);
                    if (e) {
                        var i = a(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var f = o().v4(),
                p = new Map,
                v = new Map,
                d = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        e && u(t, e)
                    }(n, t);
                    var e = h(n);

                    function n(t) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = e.call(this, t)).isVisible = !1;
                        var i = t.root,
                            a = t.rootMargin,
                            c = t.threshold;
                        i ? p.has(i) ? r.elementId = p.get(i) || "" : p.set(i, o().v4()) : r.elementId = f;
                        var u = r.getVisibilityObserverId();
                        v.has(u) || v.set(u, new s.Z({
                            root: i,
                            rootMargin: a,
                            threshold: c
                        }));
                        return r
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        if (this.props.active) {
                            var t = this.getVisibilityObserver();
                            t.observe(this);
                            this.isVisible = t.isVisible(this);
                            this.props.onChange(this.isVisible)
                        }
                    };
                    i.componentDidUpdate = function(t) {
                        var e = this.getVisibilityObserver(),
                            n = e.isVisible(this);
                        this.props.active && n !== this.isVisible && this.props.onChange(n);
                        !t.active && this.props.active ? e.observe(this) : t.active && !this.props.active && e.unobserve(this);
                        this.isVisible = n
                    };
                    i.componentWillUnmount = function() {
                        this.getVisibilityObserver().unobserve(this)
                    };
                    i.getVisibilityObserverId = function() {
                        var t = this.props,
                            e = t.rootMargin,
                            n = t.threshold;
                        return "".concat(this.elementId, " ").concat(e, " ").concat(n)
                    };
                    i.getVisibilityObserver = function() {
                        var t = this.getVisibilityObserverId(),
                            e = v.get(t);
                        if (!e) throw new Error("Visibility sensor with id ".concat(t, " not found."));
                        return e
                    };
                    i.render = function() {
                        return r.Children.only(this.props.children)
                    };
                    return n
                }(r.Component);
            d.defaultProps = {
                active: !0,
                children: r.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            const g = d
        },
        935576: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => r.Z,
                $: () => i.Z
            });
            n(966337);
            var r = n(431710),
                i = n(593549)
        },
        283151: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => s
            });
            var r = n(667294);

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return i(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s() {
                var t = o((0, r.useState)({}), 2)[1];
                return (0, r.useCallback)((function() {
                    return t({})
                }), [])
            }
        },
        989824: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => o
            });
            var r = n(667294),
                i = {};

            function o(t) {
                var e = (0, r.useRef)(i);
                e.current === i && (e.current = t());
                return e.current
            }
        },
        498964: (t, e, n) => {
            "use strict";
            n.d(e, {
                P: () => J,
                EQ: () => X
            });
            const r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                s = t => Boolean(t && "object" == typeof t),
                a = t => t && !!t[r],
                c = (t, e, n) => {
                    if (a(t)) {
                        const i = t[r](),
                            {
                                matched: o,
                                selections: s
                            } = i.match(e);
                        return o && s && Object.keys(s).forEach((t => n(t, s[t]))), o
                    }
                    if (s(t)) {
                        if (!s(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let r = [],
                                o = [],
                                s = [];
                            for (const e of t.keys()) {
                                const n = t[e];
                                a(n) && n[i] ? s.push(n) : s.length ? o.push(n) : r.push(n)
                            }
                            if (s.length) {
                                if (s.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < r.length + o.length) return !1;
                                const t = e.slice(0, r.length),
                                    i = 0 === o.length ? [] : e.slice(-o.length),
                                    a = e.slice(r.length, 0 === o.length ? 1 / 0 : -o.length);
                                return r.every(((e, r) => c(e, t[r], n))) && o.every(((t, e) => c(t, i[e], n))) && (0 === s.length || c(s[0], a, n))
                            }
                            return t.length === e.length && t.every(((t, r) => c(t, e[r], n)))
                        }
                        return Object.keys(t).every((i => {
                            const o = t[i];
                            return (i in e || a(s = o) && "optional" === s[r]().matcherType) && c(o, e[i], n);
                            var s
                        }))
                    }
                    return Object.is(e, t)
                },
                u = t => {
                    var e, n, i;
                    return s(t) ? a(t) ? null != (e = null == (n = (i = t[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? e : [] : Array.isArray(t) ? l(t, u) : l(Object.values(t), u) : []
                },
                l = (t, e) => t.reduce(((t, n) => t.concat(e(n))), []);

            function h(t) {
                return Object.assign(t, {
                    optional: () => p(t),
                    and: e => g(t, e),
                    or: e => y(t, e),
                    select: e => void 0 === e ? b(t) : b(e, t)
                })
            }

            function f(t) {
                return Object.assign((t => Object.assign(t, {
                    *[Symbol.iterator]() {
                        yield Object.assign(t, {
                            [i]: !0
                        })
                    }
                }))(t), {
                    optional: () => f(p(t)),
                    select: e => f(void 0 === e ? b(t) : b(e, t))
                })
            }

            function p(t) {
                return h({
                    [r]: () => ({
                        match: e => {
                            let n = {};
                            const r = (t, e) => {
                                n[t] = e
                            };
                            return void 0 === e ? (u(t).forEach((t => r(t, void 0))), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: c(t, e, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => u(t),
                        matcherType: "optional"
                    })
                })
            }
            const v = (t, e) => {
                    for (const n of t)
                        if (!e(n)) return !1;
                    return !0
                },
                d = (t, e) => {
                    for (const [n, r] of t.entries())
                        if (!e(r, n)) return !1;
                    return !0
                };

            function g(...t) {
                return h({
                    [r]: () => ({
                        match: e => {
                            let n = {};
                            const r = (t, e) => {
                                n[t] = e
                            };
                            return {
                                matched: t.every((t => c(t, e, r))),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(t, u),
                        matcherType: "and"
                    })
                })
            }

            function y(...t) {
                return h({
                    [r]: () => ({
                        match: e => {
                            let n = {};
                            const r = (t, e) => {
                                n[t] = e
                            };
                            return l(t, u).forEach((t => r(t, void 0))), {
                                matched: t.some((t => c(t, e, r))),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(t, u),
                        matcherType: "or"
                    })
                })
            }

            function m(t) {
                return {
                    [r]: () => ({
                        match: e => ({
                            matched: Boolean(t(e))
                        })
                    })
                }
            }

            function b(...t) {
                const e = "string" == typeof t[0] ? t[0] : void 0,
                    n = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return h({
                    [r]: () => ({
                        match: t => {
                            let r = {
                                [null != e ? e : o]: t
                            };
                            return {
                                matched: void 0 === n || c(n, t, ((t, e) => {
                                    r[t] = e
                                })),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => [null != e ? e : o].concat(void 0 === n ? [] : u(n))
                    })
                })
            }

            function _(t) {
                return "number" == typeof t
            }

            function w(t) {
                return "string" == typeof t
            }

            function O(t) {
                return "bigint" == typeof t
            }
            const I = h(m((function(t) {
                    return !0
                }))),
                E = I,
                R = t => Object.assign(h(t), {
                    startsWith: e => {
                        return R(g(t, (n = e, m((t => w(t) && t.startsWith(n))))));
                        var n
                    },
                    endsWith: e => {
                        return R(g(t, (n = e, m((t => w(t) && t.endsWith(n))))));
                        var n
                    },
                    minLength: e => R(g(t, (t => m((e => w(e) && e.length >= t)))(e))),
                    maxLength: e => R(g(t, (t => m((e => w(e) && e.length <= t)))(e))),
                    includes: e => {
                        return R(g(t, (n = e, m((t => w(t) && t.includes(n))))));
                        var n
                    },
                    regex: e => {
                        return R(g(t, (n = e, m((t => w(t) && Boolean(t.match(n)))))));
                        var n
                    }
                }),
                x = R(m(w)),
                S = (t, e) => m((n => _(n) && t <= n && e >= n)),
                T = t => m((e => _(e) && e < t)),
                A = t => m((e => _(e) && e > t)),
                k = t => m((e => _(e) && e <= t)),
                C = t => m((e => _(e) && e >= t)),
                M = () => m((t => _(t) && Number.isInteger(t))),
                P = () => m((t => _(t) && Number.isFinite(t))),
                j = () => m((t => _(t) && t > 0)),
                L = () => m((t => _(t) && t < 0)),
                V = t => Object.assign(h(t), {
                    between: (e, n) => V(g(t, S(e, n))),
                    lt: e => V(g(t, T(e))),
                    gt: e => V(g(t, A(e))),
                    lte: e => V(g(t, k(e))),
                    gte: e => V(g(t, C(e))),
                    int: () => V(g(t, M())),
                    finite: () => V(g(t, P())),
                    positive: () => V(g(t, j())),
                    negative: () => V(g(t, L()))
                }),
                B = V(m(_)),
                U = (t, e) => m((n => O(n) && t <= n && e >= n)),
                N = t => m((e => O(e) && e < t)),
                z = t => m((e => O(e) && e > t)),
                F = t => m((e => O(e) && e <= t)),
                W = t => m((e => O(e) && e >= t)),
                D = () => m((t => O(t) && t > 0)),
                Z = () => m((t => O(t) && t < 0)),
                H = t => Object.assign(h(t), {
                    between: (e, n) => H(g(t, U(e, n))),
                    lt: e => H(g(t, N(e))),
                    gt: e => H(g(t, z(e))),
                    lte: e => H(g(t, F(e))),
                    gte: e => H(g(t, W(e))),
                    positive: () => H(g(t, D())),
                    negative: () => H(g(t, Z()))
                }),
                $ = H(m(O)),
                K = h(m((function(t) {
                    return "boolean" == typeof t
                }))),
                q = h(m((function(t) {
                    return "symbol" == typeof t
                }))),
                G = h(m((function(t) {
                    return null == t
                })));
            var J = {
                __proto__: null,
                matcher: r,
                optional: p,
                array: function(...t) {
                    return f({
                        [r]: () => ({
                            match: e => {
                                if (!Array.isArray(e)) return {
                                    matched: !1
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                const n = t[0];
                                let r = {};
                                if (0 === e.length) return u(n).forEach((t => {
                                    r[t] = []
                                })), {
                                    matched: !0,
                                    selections: r
                                };
                                const i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                return {
                                    matched: e.every((t => c(n, t, i))),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : u(t[0])
                        })
                    })
                },
                set: function(...t) {
                    return h({
                        [r]: () => ({
                            match: e => {
                                if (!(e instanceof Set)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                const r = (t, e) => {
                                        n[t] = (n[t] || []).concat([e])
                                    },
                                    i = t[0];
                                return {
                                    matched: v(e, (t => c(i, t, r))),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : u(t[0])
                        })
                    })
                },
                map: function(...t) {
                    return h({
                        [r]: () => ({
                            match: e => {
                                if (!(e instanceof Map)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                const r = (t, e) => {
                                    n[t] = (n[t] || []).concat([e])
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                var i;
                                if (1 === t.length) throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null==(i=t[0])?void 0:i.toString()}`);
                                const [o, s] = t;
                                return {
                                    matched: d(e, ((t, e) => {
                                        const n = c(o, e, r),
                                            i = c(s, t, r);
                                        return n && i
                                    })),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : [...u(t[0]), ...u(t[1])]
                        })
                    })
                },
                intersection: g,
                union: y,
                not: function(t) {
                    return h({
                        [r]: () => ({
                            match: e => ({
                                matched: !c(t, e, (() => {}))
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: m,
                select: b,
                any: I,
                _: E,
                string: x,
                between: S,
                lt: T,
                gt: A,
                lte: k,
                gte: C,
                int: M,
                finite: P,
                positive: j,
                negative: L,
                number: B,
                betweenBigInt: U,
                ltBigInt: N,
                gtBigInt: z,
                lteBigInt: F,
                gteBigInt: W,
                positiveBigInt: D,
                negativeBigInt: Z,
                bigint: $,
                boolean: K,
                symbol: q,
                nullish: G,
                instanceOf: function(t) {
                    return h(m(function(t) {
                        return e => e instanceof t
                    }(t)))
                },
                shape: function(t) {
                    return h(m(function(...t) {
                        if (1 === t.length) {
                            const [e] = t;
                            return t => c(e, t, (() => {}))
                        }
                        if (2 === t.length) {
                            const [e, n] = t;
                            return c(e, n, (() => {}))
                        }
                        throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${t.length}.`)
                    }(t)))
                }
            };
            const Q = {
                matched: !1,
                value: void 0
            };

            function X(t) {
                return new Y(t, Q)
            }
            class Y {
                constructor(t, e) {
                    this.input = void 0, this.state = void 0, this.input = t, this.state = e
                }
                with(...t) {
                    if (this.state.matched) return this;
                    const e = t[t.length - 1],
                        n = [t[0]];
                    let r;
                    3 === t.length && "function" == typeof t[1] ? (n.push(t[0]), r = t[1]) : t.length > 2 && n.push(...t.slice(1, t.length - 1));
                    let i = !1,
                        s = {};
                    const a = (t, e) => {
                            i = !0, s[t] = e
                        },
                        u = !n.some((t => c(t, this.input, a))) || r && !Boolean(r(this.input)) ? Q : {
                            matched: !0,
                            value: e(i ? o in s ? s[o] : s : this.input, this.input)
                        };
                    return new Y(this.input, u)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    const n = Boolean(t(this.input));
                    return new Y(this.input, n ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : Q)
                }
                otherwise(t) {
                    return this.state.matched ? this.state.value : t(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    if (this.state.matched) return this.state.value;
                    let t;
                    try {
                        t = JSON.stringify(this.input)
                    } catch (e) {
                        t = this.input
                    }
                    throw new Error(`Pattern matching error: no pattern matches value ${t}`)
                }
                returnType() {
                    return this
                }
            }
        }
    }
]);