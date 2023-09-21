"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [91033], {
        391033: (t, e, n) => {
            n.d(e, {
                Z: () => M
            });
            var i = function() {
                    if ("undefined" != typeof Map) return Map;

                    function t(t, e) {
                        var n = -1;
                        t.some((function(t, i) {
                            if (t[0] === e) {
                                n = i;
                                return !0
                            }
                            return !1
                        }));
                        return n
                    }
                    return function() {
                        function e() {
                            this.__entries__ = []
                        }
                        Object.defineProperty(e.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        });
                        e.prototype.get = function(e) {
                            var n = t(this.__entries__, e),
                                i = this.__entries__[n];
                            return i && i[1]
                        };
                        e.prototype.set = function(e, n) {
                            var i = t(this.__entries__, e);
                            ~i ? this.__entries__[i][1] = n : this.__entries__.push([e, n])
                        };
                        e.prototype.delete = function(e) {
                            var n = this.__entries__,
                                i = t(n, e);
                            ~i && n.splice(i, 1)
                        };
                        e.prototype.has = function(e) {
                            return !!~t(this.__entries__, e)
                        };
                        e.prototype.clear = function() {
                            this.__entries__.splice(0)
                        };
                        e.prototype.forEach = function(t, e) {
                            void 0 === e && (e = null);
                            for (var n = 0, i = this.__entries__; n < i.length; n++) {
                                var r = i[n];
                                t.call(e, r[1], r[0])
                            }
                        };
                        return e
                    }()
                }(),
                r = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                o = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                s = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function(t) {
                    return setTimeout((function() {
                        return t(Date.now())
                    }), 1e3 / 60)
                };
            var c = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                a = "undefined" != typeof MutationObserver,
                h = function() {
                    function t() {
                        this.connected_ = !1;
                        this.mutationEventsAdded_ = !1;
                        this.mutationsObserver_ = null;
                        this.observers_ = [];
                        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
                        this.refresh = function(t, e) {
                            var n = !1,
                                i = !1,
                                r = 0;

                            function o() {
                                if (n) {
                                    n = !1;
                                    t()
                                }
                                i && a()
                            }

                            function c() {
                                s(o)
                            }

                            function a() {
                                var t = Date.now();
                                if (n) {
                                    if (t - r < 2) return;
                                    i = !0
                                } else {
                                    n = !0;
                                    i = !1;
                                    setTimeout(c, e)
                                }
                                r = t
                            }
                            return a
                        }(this.refresh.bind(this), 20)
                    }
                    t.prototype.addObserver = function(t) {
                        ~this.observers_.indexOf(t) || this.observers_.push(t);
                        this.connected_ || this.connect_()
                    };
                    t.prototype.removeObserver = function(t) {
                        var e = this.observers_,
                            n = e.indexOf(t);
                        ~n && e.splice(n, 1);
                        !e.length && this.connected_ && this.disconnect_()
                    };
                    t.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    };
                    t.prototype.updateObservers_ = function() {
                        var t = this.observers_.filter((function(t) {
                            return t.gatherActive(), t.hasActive()
                        }));
                        t.forEach((function(t) {
                            return t.broadcastActive()
                        }));
                        return t.length > 0
                    };
                    t.prototype.connect_ = function() {
                        if (r && !this.connected_) {
                            document.addEventListener("transitionend", this.onTransitionEnd_);
                            window.addEventListener("resize", this.refresh);
                            if (a) {
                                this.mutationsObserver_ = new MutationObserver(this.refresh);
                                this.mutationsObserver_.observe(document, {
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0,
                                    subtree: !0
                                })
                            } else {
                                document.addEventListener("DOMSubtreeModified", this.refresh);
                                this.mutationEventsAdded_ = !0
                            }
                            this.connected_ = !0
                        }
                    };
                    t.prototype.disconnect_ = function() {
                        if (r && this.connected_) {
                            document.removeEventListener("transitionend", this.onTransitionEnd_);
                            window.removeEventListener("resize", this.refresh);
                            this.mutationsObserver_ && this.mutationsObserver_.disconnect();
                            this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh);
                            this.mutationsObserver_ = null;
                            this.mutationEventsAdded_ = !1;
                            this.connected_ = !1
                        }
                    };
                    t.prototype.onTransitionEnd_ = function(t) {
                        var e = t.propertyName,
                            n = void 0 === e ? "" : e;
                        c.some((function(t) {
                            return !!~n.indexOf(t)
                        })) && this.refresh()
                    };
                    t.getInstance = function() {
                        this.instance_ || (this.instance_ = new t);
                        return this.instance_
                    };
                    t.instance_ = null;
                    return t
                }(),
                u = function(t, e) {
                    for (var n = 0, i = Object.keys(e); n < i.length; n++) {
                        var r = i[n];
                        Object.defineProperty(t, r, {
                            value: e[r],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return t
                },
                f = function(t) {
                    return t && t.ownerDocument && t.ownerDocument.defaultView || o
                },
                d = m(0, 0, 0, 0);

            function p(t) {
                return parseFloat(t) || 0
            }

            function v(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return e.reduce((function(e, n) {
                    return e + p(t["border-" + n + "-width"])
                }), 0)
            }

            function _(t) {
                var e = t.clientWidth,
                    n = t.clientHeight;
                if (!e && !n) return d;
                var i = f(t).getComputedStyle(t),
                    r = function(t) {
                        for (var e = {}, n = 0, i = ["top", "right", "bottom", "left"]; n < i.length; n++) {
                            var r = i[n],
                                o = t["padding-" + r];
                            e[r] = p(o)
                        }
                        return e
                    }(i),
                    o = r.left + r.right,
                    s = r.top + r.bottom,
                    c = p(i.width),
                    a = p(i.height);
                if ("border-box" === i.boxSizing) {
                    Math.round(c + o) !== e && (c -= v(i, "left", "right") + o);
                    Math.round(a + s) !== n && (a -= v(i, "top", "bottom") + s)
                }
                if (! function(t) {
                        return t === f(t).document.documentElement
                    }(t)) {
                    var h = Math.round(c + o) - e,
                        u = Math.round(a + s) - n;
                    1 !== Math.abs(h) && (c -= h);
                    1 !== Math.abs(u) && (a -= u)
                }
                return m(r.left, r.top, c, a)
            }
            var l = "undefined" != typeof SVGGraphicsElement ? function(t) {
                return t instanceof f(t).SVGGraphicsElement
            } : function(t) {
                return t instanceof f(t).SVGElement && "function" == typeof t.getBBox
            };

            function b(t) {
                return r ? l(t) ? function(t) {
                    var e = t.getBBox();
                    return m(0, 0, e.width, e.height)
                }(t) : _(t) : d
            }

            function m(t, e, n, i) {
                return {
                    x: t,
                    y: e,
                    width: n,
                    height: i
                }
            }
            var y = function() {
                    function t(t) {
                        this.broadcastWidth = 0;
                        this.broadcastHeight = 0;
                        this.contentRect_ = m(0, 0, 0, 0);
                        this.target = t
                    }
                    t.prototype.isActive = function() {
                        var t = b(this.target);
                        this.contentRect_ = t;
                        return t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                    };
                    t.prototype.broadcastRect = function() {
                        var t = this.contentRect_;
                        this.broadcastWidth = t.width;
                        this.broadcastHeight = t.height;
                        return t
                    };
                    return t
                }(),
                w = function(t, e) {
                    var n = function(t) {
                        var e = t.x,
                            n = t.y,
                            i = t.width,
                            r = t.height,
                            o = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                            s = Object.create(o.prototype);
                        u(s, {
                            x: e,
                            y: n,
                            width: i,
                            height: r,
                            top: n,
                            right: e + i,
                            bottom: r + n,
                            left: e
                        });
                        return s
                    }(e);
                    u(this, {
                        target: t,
                        contentRect: n
                    })
                },
                g = function() {
                    function t(t, e, n) {
                        this.activeObservations_ = [];
                        this.observations_ = new i;
                        if ("function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = t;
                        this.controller_ = e;
                        this.callbackCtx_ = n
                    }
                    t.prototype.observe = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof f(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            if (!e.has(t)) {
                                e.set(t, new y(t));
                                this.controller_.addObserver(this);
                                this.controller_.refresh()
                            }
                        }
                    };
                    t.prototype.unobserve = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof f(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            if (e.has(t)) {
                                e.delete(t);
                                e.size || this.controller_.removeObserver(this)
                            }
                        }
                    };
                    t.prototype.disconnect = function() {
                        this.clearActive();
                        this.observations_.clear();
                        this.controller_.removeObserver(this)
                    };
                    t.prototype.gatherActive = function() {
                        var t = this;
                        this.clearActive();
                        this.observations_.forEach((function(e) {
                            e.isActive() && t.activeObservations_.push(e)
                        }))
                    };
                    t.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var t = this.callbackCtx_,
                                e = this.activeObservations_.map((function(t) {
                                    return new w(t.target, t.broadcastRect())
                                }));
                            this.callback_.call(t, e, t);
                            this.clearActive()
                        }
                    };
                    t.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    };
                    t.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    };
                    return t
                }(),
                E = "undefined" != typeof WeakMap ? new WeakMap : new i,
                O = function t(e) {
                    if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var n = h.getInstance(),
                        i = new g(e, n, this);
                    E.set(this, i)
                };
            ["observe", "unobserve", "disconnect"].forEach((function(t) {
                O.prototype[t] = function() {
                    var e;
                    return (e = E.get(this))[t].apply(e, arguments)
                }
            }));
            const M = void 0 !== o.ResizeObserver ? o.ResizeObserver : O
        }
    }
]);