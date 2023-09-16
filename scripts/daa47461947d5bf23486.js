/*! For license information please see daa47461947d5bf23486.js.LICENSE.txt */
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [6944, 27979], {
        479049: (t, e) => {
            var n, r;
            r = function(t) {
                "use strict";
                t = t || {};
                var e, n, r, i, o, E, S, l, a, s, _, c, u, I, f, A, N = {
                    bgColor: "#d00",
                    textColor: "#fff",
                    fontFamily: "sans-serif",
                    fontStyle: "bold",
                    type: "circle",
                    position: "down",
                    animation: "slide",
                    elementId: !1,
                    dataUrl: !1,
                    win: window
                };
                (u = {}).ff = "undefined" != typeof InstallTrigger;
                u.chrome = !!window.chrome;
                u.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0;
                u.ie = !1;
                u.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0;
                u.supported = u.chrome || u.ff || u.opera;
                var R = [];
                _ = function() {};
                l = c = !1;
                var P = {
                        ready: function() {
                            l = !0;
                            P.reset();
                            _()
                        },
                        reset: function() {
                            if (l) {
                                R = [];
                                a = !1;
                                s = !1;
                                E.clearRect(0, 0, i, r);
                                E.drawImage(S, 0, 0, i, r);
                                M.setIcon(o);
                                window.clearTimeout(I);
                                window.clearTimeout(f)
                            }
                        },
                        start: function() {
                            if (l && !s && R.length > 0) {
                                s = !0;
                                var t = function() {
                                    ["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach((function(t) {
                                        t in R[0].options && (e[t] = R[0].options[t])
                                    }));
                                    C.run(R[0].options, (function() {
                                        ! function() {
                                            a = R[0];
                                            s = !1;
                                            if (R.length > 0) {
                                                R.shift();
                                                P.start()
                                            }
                                        }()
                                    }), !1)
                                };
                                a ? C.run(a.options, (function() {
                                    t()
                                }), !0) : t()
                            }
                        }
                    },
                    O = {},
                    p = function(t) {
                        t.n = "number" == typeof t.n ? Math.abs(0 | t.n) : t.n;
                        t.x = i * t.x;
                        t.y = r * t.y;
                        t.w = i * t.w;
                        t.h = r * t.h;
                        t.len = ("" + t.n).length;
                        return t
                    };
                O.circle = function(t) {
                    var n = !1;
                    if (2 === (t = p(t)).len) {
                        t.x = t.x - .4 * t.w;
                        t.w = 1.4 * t.w;
                        n = !0
                    } else if (t.len >= 3) {
                        t.x = t.x - .65 * t.w;
                        t.w = 1.65 * t.w;
                        n = !0
                    }
                    E.clearRect(0, 0, i, r);
                    E.drawImage(S, 0, 0, i, r);
                    E.beginPath();
                    E.font = e.fontStyle + " " + Math.floor(t.h * (t.n > 99 ? .85 : 1)) + "px " + e.fontFamily;
                    E.textAlign = "center";
                    if (n) {
                        E.moveTo(t.x + t.w / 2, t.y);
                        E.lineTo(t.x + t.w - t.h / 2, t.y);
                        E.quadraticCurveTo(t.x + t.w, t.y, t.x + t.w, t.y + t.h / 2);
                        E.lineTo(t.x + t.w, t.y + t.h - t.h / 2);
                        E.quadraticCurveTo(t.x + t.w, t.y + t.h, t.x + t.w - t.h / 2, t.y + t.h);
                        E.lineTo(t.x + t.h / 2, t.y + t.h);
                        E.quadraticCurveTo(t.x, t.y + t.h, t.x, t.y + t.h - t.h / 2);
                        E.lineTo(t.x, t.y + t.h / 2);
                        E.quadraticCurveTo(t.x, t.y, t.x + t.h / 2, t.y)
                    } else E.arc(t.x + t.w / 2, t.y + t.h / 2, t.h / 2, 0, 2 * Math.PI);
                    E.fillStyle = "rgba(" + e.bgColor.r + "," + e.bgColor.g + "," + e.bgColor.b + "," + t.o + ")";
                    E.fill();
                    E.closePath();
                    E.beginPath();
                    E.stroke();
                    E.fillStyle = "rgba(" + e.textColor.r + "," + e.textColor.g + "," + e.textColor.b + "," + t.o + ")";
                    "number" == typeof t.n && t.n > 999 ? E.fillText((t.n > 9999 ? 9 : Math.floor(t.n / 1e3)) + "k+", Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .2 * t.h)) : E.fillText(t.n, Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .15 * t.h));
                    E.closePath()
                };
                O.rectangle = function(t) {
                    if (2 === (t = p(t)).len) {
                        t.x = t.x - .4 * t.w;
                        t.w = 1.4 * t.w
                    } else if (t.len >= 3) {
                        t.x = t.x - .65 * t.w;
                        t.w = 1.65 * t.w
                    }
                    E.clearRect(0, 0, i, r);
                    E.drawImage(S, 0, 0, i, r);
                    E.beginPath();
                    E.font = e.fontStyle + " " + Math.floor(t.h * (t.n > 99 ? .9 : 1)) + "px " + e.fontFamily;
                    E.textAlign = "center";
                    E.fillStyle = "rgba(" + e.bgColor.r + "," + e.bgColor.g + "," + e.bgColor.b + "," + t.o + ")";
                    E.fillRect(t.x, t.y, t.w, t.h);
                    E.fillStyle = "rgba(" + e.textColor.r + "," + e.textColor.g + "," + e.textColor.b + "," + t.o + ")";
                    "number" == typeof t.n && t.n > 999 ? E.fillText((t.n > 9999 ? 9 : Math.floor(t.n / 1e3)) + "k+", Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .2 * t.h)) : E.fillText(t.n, Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .15 * t.h));
                    E.closePath()
                };

                function T(t) {
                    if (t.paused || t.ended || c) return !1;
                    try {
                        E.clearRect(0, 0, i, r);
                        E.drawImage(t, 0, 0, i, r)
                    } catch (t) {}
                    f = setTimeout((function() {
                        T(t)
                    }), C.duration);
                    M.setIcon(o)
                }
                var M = {
                    getIcon: function() {
                        var t = !1;
                        if (e.element) t = e.element;
                        else if (e.elementId)(t = A.getElementById(e.elementId)).setAttribute("href", t.getAttribute("src"));
                        else {
                            t = function() {
                                for (var t = A.getElementsByTagName("head")[0].getElementsByTagName("link"), e = t.length - 1; e >= 0; e--)
                                    if (/(^|\s)icon(\s|$)/i.test(t[e].getAttribute("rel"))) return t[e];
                                return !1
                            }();
                            if (!1 === t) {
                                (t = A.createElement("link")).setAttribute("rel", "icon");
                                A.getElementsByTagName("head")[0].appendChild(t)
                            }
                        }
                        t.setAttribute("type", "image/png");
                        return t
                    },
                    setIcon: function(t) {
                        var r = t.toDataURL("image/png");
                        e.dataUrl && e.dataUrl(r);
                        if (e.element) {
                            e.element.setAttribute("href", r);
                            e.element.setAttribute("src", r)
                        } else if (e.elementId) {
                            var i = A.getElementById(e.elementId);
                            i.setAttribute("href", r);
                            i.setAttribute("src", r)
                        } else if (u.ff || u.opera) {
                            var o = n;
                            n = A.createElement("link");
                            u.opera && n.setAttribute("rel", "icon");
                            n.setAttribute("rel", "icon");
                            n.setAttribute("type", "image/png");
                            A.getElementsByTagName("head")[0].appendChild(n);
                            n.setAttribute("href", r);
                            o.parentNode && o.parentNode.removeChild(o)
                        } else n.setAttribute("href", r)
                    }
                };

                function d(t) {
                    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, n, r) {
                        return e + e + n + n + r + r
                    }));
                    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                    return !!e && {
                        r: parseInt(e[1], 16),
                        g: parseInt(e[2], 16),
                        b: parseInt(e[3], 16)
                    }
                }

                function h(t, e) {
                    var n, r = {};
                    for (n in t) r[n] = t[n];
                    for (n in e) r[n] = e[n];
                    return r
                }
                var C = {
                    duration: 40,
                    types: {}
                };
                C.types.fade = [{
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: 0
                }, {
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: .1
                }, {
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: .2
                }, {
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: .3
                }, {
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: .4
                }, {
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: .5
                }, {
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: .6
                }, {
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: .7
                }, {
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: .8
                }, {
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: .9
                }, {
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: 1
                }];
                C.types.none = [{
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: 1
                }];
                C.types.pop = [{
                    x: 1,
                    y: 1,
                    w: 0,
                    h: 0,
                    o: 1
                }, {
                    x: .9,
                    y: .9,
                    w: .1,
                    h: .1,
                    o: 1
                }, {
                    x: .8,
                    y: .8,
                    w: .2,
                    h: .2,
                    o: 1
                }, {
                    x: .7,
                    y: .7,
                    w: .3,
                    h: .3,
                    o: 1
                }, {
                    x: .6,
                    y: .6,
                    w: .4,
                    h: .4,
                    o: 1
                }, {
                    x: .5,
                    y: .5,
                    w: .5,
                    h: .5,
                    o: 1
                }, {
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: 1
                }];
                C.types.popFade = [{
                    x: .75,
                    y: .75,
                    w: 0,
                    h: 0,
                    o: 0
                }, {
                    x: .65,
                    y: .65,
                    w: .1,
                    h: .1,
                    o: .2
                }, {
                    x: .6,
                    y: .6,
                    w: .2,
                    h: .2,
                    o: .4
                }, {
                    x: .55,
                    y: .55,
                    w: .3,
                    h: .3,
                    o: .6
                }, {
                    x: .5,
                    y: .5,
                    w: .4,
                    h: .4,
                    o: .8
                }, {
                    x: .45,
                    y: .45,
                    w: .5,
                    h: .5,
                    o: .9
                }, {
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: 1
                }];
                C.types.slide = [{
                    x: .4,
                    y: 1,
                    w: .6,
                    h: .6,
                    o: 1
                }, {
                    x: .4,
                    y: .9,
                    w: .6,
                    h: .6,
                    o: 1
                }, {
                    x: .4,
                    y: .9,
                    w: .6,
                    h: .6,
                    o: 1
                }, {
                    x: .4,
                    y: .8,
                    w: .6,
                    h: .6,
                    o: 1
                }, {
                    x: .4,
                    y: .7,
                    w: .6,
                    h: .6,
                    o: 1
                }, {
                    x: .4,
                    y: .6,
                    w: .6,
                    h: .6,
                    o: 1
                }, {
                    x: .4,
                    y: .5,
                    w: .6,
                    h: .6,
                    o: 1
                }, {
                    x: .4,
                    y: .4,
                    w: .6,
                    h: .6,
                    o: 1
                }];
                C.run = function(t, n, r, i) {
                    var E = C.types[A.hidden || A.msHidden || A.webkitHidden || A.mozHidden ? "none" : e.animation];
                    i = !0 === r ? void 0 !== i ? i : E.length - 1 : void 0 !== i ? i : 0;
                    n = n || function() {};
                    if (i < E.length && i >= 0) {
                        O[e.type](h(t, E[i]));
                        I = setTimeout((function() {
                            r ? i -= 1 : i += 1;
                            C.run(t, n, r, i)
                        }), C.duration);
                        M.setIcon(o)
                    } else n()
                };
                ! function() {
                    (e = h(N, t)).bgColor = d(e.bgColor);
                    e.textColor = d(e.textColor);
                    e.position = e.position.toLowerCase();
                    e.animation = C.types["" + e.animation] ? e.animation : N.animation;
                    A = e.win.document;
                    var l = e.position.indexOf("up") > -1,
                        a = e.position.indexOf("left") > -1;
                    if (l || a)
                        for (var s = 0; s < C.types["" + e.animation].length; s++) {
                            var _ = C.types["" + e.animation][s];
                            l && (_.y < .6 ? _.y = _.y - .4 : _.y = _.y - 2 * _.y + (1 - _.w));
                            a && (_.x < .6 ? _.x = _.x - .4 : _.x = _.x - 2 * _.x + (1 - _.h));
                            C.types["" + e.animation][s] = _
                        }
                    e.type = O["" + e.type] ? e.type : N.type;
                    n = M.getIcon();
                    o = document.createElement("canvas");
                    S = document.createElement("img");
                    if (n.hasAttribute("href")) {
                        S.setAttribute("crossOrigin", "anonymous");
                        S.onload = function() {
                            r = S.height > 0 ? S.height : 32;
                            i = S.width > 0 ? S.width : 32;
                            o.height = r;
                            o.width = i;
                            E = o.getContext("2d");
                            P.ready()
                        };
                        S.setAttribute("src", n.getAttribute("href"))
                    } else {
                        S.onload = function() {
                            r = 32;
                            i = 32;
                            S.height = r;
                            S.width = i;
                            o.height = r;
                            o.width = i;
                            E = o.getContext("2d");
                            P.ready()
                        };
                        S.setAttribute("src", "")
                    }
                }();
                return {
                    badge: function(t, e) {
                        e = ("string" == typeof e ? {
                            animation: e
                        } : e) || {};
                        _ = function() {
                            try {
                                if ("number" == typeof t ? t > 0 : "" !== t) {
                                    var n = {
                                        type: "badge",
                                        options: {
                                            n: t
                                        }
                                    };
                                    "animation" in e && C.types["" + e.animation] && (n.options.animation = "" + e.animation);
                                    "type" in e && O["" + e.type] && (n.options.type = "" + e.type);
                                    ["bgColor", "textColor"].forEach((function(t) {
                                        t in e && (n.options[t] = d(e[t]))
                                    }));
                                    ["fontStyle", "fontFamily"].forEach((function(t) {
                                        t in e && (n.options[t] = e[t])
                                    }));
                                    R.push(n);
                                    if (R.length > 100) throw new Error("Too many badges requests in queue.");
                                    P.start()
                                } else P.reset()
                            } catch (t) {
                                throw new Error("Error setting badge. Message: " + t.message)
                            }
                        };
                        l && _()
                    },
                    video: function(t) {
                        _ = function() {
                            try {
                                if ("stop" === t) {
                                    c = !0;
                                    P.reset();
                                    c = !1;
                                    return
                                }
                                t.addEventListener("play", (function() {
                                    T(this)
                                }), !1)
                            } catch (t) {
                                throw new Error("Error setting video. Message: " + t.message)
                            }
                        };
                        l && _()
                    },
                    image: function(t) {
                        _ = function() {
                            try {
                                var e = t.width,
                                    n = t.height,
                                    S = document.createElement("img"),
                                    l = e / i < n / r ? e / i : n / r;
                                S.setAttribute("crossOrigin", "anonymous");
                                S.onload = function() {
                                    E.clearRect(0, 0, i, r);
                                    E.drawImage(S, 0, 0, i, r);
                                    M.setIcon(o)
                                };
                                S.setAttribute("src", t.getAttribute("src"));
                                S.height = n / l;
                                S.width = e / l
                            } catch (t) {
                                throw new Error("Error setting image. Message: " + t.message)
                            }
                        };
                        l && _()
                    },
                    webcam: function(t) {
                        if (!window.URL || !window.URL.createObjectURL) {
                            window.URL = window.URL || {};
                            window.URL.createObjectURL = function(t) {
                                return t
                            }
                        }
                        if (u.supported) {
                            var e = !1;
                            navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
                            _ = function() {
                                try {
                                    if ("stop" === t) {
                                        c = !0;
                                        P.reset();
                                        c = !1;
                                        return
                                    }(e = document.createElement("video")).width = i;
                                    e.height = r;
                                    navigator.getUserMedia({
                                        video: !0,
                                        audio: !1
                                    }, (function(t) {
                                        e.src = URL.createObjectURL(t);
                                        e.play();
                                        T(e)
                                    }), (function() {}))
                                } catch (t) {
                                    throw new Error("Error setting webcam. Message: " + t.message)
                                }
                            };
                            l && _()
                        }
                    },
                    reset: P.reset,
                    browser: {
                        supported: u.supported
                    }
                }
            }, void 0 !== (n = function() {
                return r
            }.apply(e, [])) && (t.exports = n)
        },
        237745: (t, e, n) => {
            n.g, r = function(t) {
                return function(t) {
                    var e = {};

                    function n(r) {
                        if (e[r]) return e[r].exports;
                        var i = e[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        t[r].call(i.exports, i, i.exports, n);
                        i.l = !0;
                        return i.exports
                    }
                    n.m = t;
                    n.c = e;
                    n.d = function(t, e, r) {
                        n.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: r
                        })
                    };
                    n.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    };
                    n.t = function(t, e) {
                        1 & e && (t = n(t));
                        if (8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var r = Object.create(null);
                        n.r(r);
                        Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: t
                        });
                        if (2 & e && "string" != typeof t)
                            for (var i in t) n.d(r, i, function(e) {
                                return t[e]
                            }.bind(null, i));
                        return r
                    };
                    n.n = function(t) {
                        var e = t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                        n.d(e, "a", e);
                        return e
                    };
                    n.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    };
                    n.p = "";
                    return n(n.s = 2)
                }([function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = function(t) {
                        return function(t) {
                            return Array.from(document.scripts).filter((function(e) {
                                return e.src.indexOf(t) > -1
                            }))
                        }(t).length > 0
                    };
                    e.isAnyScriptPresent = function(t) {
                        return t.reduce((function(t, e) {
                            return t || r(e)
                        }), !1)
                    }, e.injectScript = function(t) {
                        var e = document.createElement("script");
                        e.async = !0;
                        e.defer = !0;
                        e.src = t;
                        document.head && document.head.appendChild(e)
                    }
                }, function(e, n) {
                    e.exports = t
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r, i = n(1),
                        o = (r = i) && r.__esModule ? r : {
                            default: r
                        },
                        E = n(0),
                        S = ["https://google.com/recaptcha", "https://recaptcha.net/recaptcha", "https://www.gstatic.com/recaptcha"],
                        l = function(t) {
                            ! function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                });
                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, t);

                            function e(t) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var n = function(t, e) {
                                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                n.container = null;
                                n._isAvailable = function() {
                                    return Boolean(window && window.grecaptcha && window.grecaptcha.ready)
                                };
                                n._inject = function() {
                                    n.props.inject && !(0, E.isAnyScriptPresent)(S) && (0, E.injectScript)("https://recaptcha.net/recaptcha/api.js?render=explicit")
                                };
                                n._prepare = function() {
                                    var t = n.props,
                                        e = t.explicit,
                                        r = t.onLoad;
                                    window.grecaptcha.ready((function() {
                                        n.setState({
                                            ready: !0
                                        }, (function() {
                                            e || n.renderExplicitly();
                                            r && r()
                                        }))
                                    }))
                                };
                                n._renderRecaptcha = function(t, e) {
                                    return window.grecaptcha.render(t, e)
                                };
                                n._resetRecaptcha = function() {
                                    return window.grecaptcha.reset(n.state.instanceId)
                                };
                                n._executeRecaptcha = function() {
                                    return window.grecaptcha.execute(n.state.instanceId)
                                };
                                n._stopTimer = function() {
                                    n.state.timer && clearInterval(n.state.timer)
                                };
                                n.componentDidMount = function() {
                                    n._inject();
                                    if (n._isAvailable()) n._prepare();
                                    else {
                                        var t = setInterval((function() {
                                            if (n._isAvailable()) {
                                                n._prepare();
                                                n._stopTimer()
                                            }
                                        }), 500);
                                        n.setState({
                                            timer: t
                                        })
                                    }
                                };
                                n.shouldComponentUpdate = function() {
                                    return !n.state.rendered
                                };
                                n.componentWillUnmount = function() {
                                    n._stopTimer();
                                    n.state.rendered && n._resetRecaptcha()
                                };
                                n.renderExplicitly = function() {
                                    return new Promise((function(t, e) {
                                        if (n.state.rendered) return e("This recaptcha instance has been already rendered.");
                                        if (!n.state.ready || !n.container) return e("Recaptcha is not ready for rendering yet.");
                                        var r = n._renderRecaptcha(n.container, {
                                            sitekey: n.props.sitekey,
                                            theme: n.state.invisible ? null : n.props.theme,
                                            size: n.props.size,
                                            badge: n.state.invisible ? n.props.badge : null,
                                            tabindex: n.props.tabindex,
                                            callback: n.props.onVerify,
                                            "expired-callback": n.props.onExpire,
                                            "error-callback": n.props.onError,
                                            isolated: n.state.invisible ? n.props.isolated : null,
                                            hl: n.state.invisible ? null : n.props.hl
                                        });
                                        n.setState({
                                            instanceId: r,
                                            rendered: !0
                                        }, (function() {
                                            n.props.onRender && n.props.onRender();
                                            t()
                                        }))
                                    }))
                                };
                                n.reset = function() {
                                    return new Promise((function(t, e) {
                                        if (n.state.rendered) {
                                            n._resetRecaptcha();
                                            return t()
                                        }
                                        e("This recaptcha instance did not render yet.")
                                    }))
                                };
                                n.execute = function() {
                                    return new Promise((function(t, e) {
                                        if (!n.state.invisible) return e("Manual execution is only available for invisible size.");
                                        if (n.state.rendered) {
                                            n._executeRecaptcha();
                                            t()
                                        }
                                        return e("This recaptcha instance did not render yet.")
                                    }))
                                };
                                n.render = function() {
                                    return o.default.createElement("div", {
                                        id: n.props.id,
                                        className: n.props.className,
                                        ref: function(t) {
                                            return n.container = t
                                        }
                                    })
                                };
                                n.state = {
                                    instanceId: null,
                                    ready: !1,
                                    rendered: !1,
                                    invisible: "invisible" === n.props.size,
                                    timer: null
                                };
                                return n
                            }
                            return e
                        }(i.Component);
                    l.defaultProps = {
                        id: "",
                        className: "g-recaptcha",
                        theme: "light",
                        size: "normal",
                        badge: "bottomright",
                        tabindex: 0,
                        explicit: !1,
                        inject: !0,
                        isolated: !1,
                        hl: ""
                    };
                    e.default = l
                }]).default
            }, t.exports = r(n(667294));
            var r
        },
        300330: (t, e, n) => {
            "use strict";
            n.d(e, {
                ZP: () => u
            });
            var r = n(853158);

            function i(t, e, n, r, i, o, E) {
                try {
                    var S = t[o](E),
                        l = S.value
                } catch (t) {
                    n(t);
                    return
                }
                S.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function E(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function S(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        E(t, e, n[e])
                    }))
                }
                return t
            }
            var l = function(t, e) {
                    var n, r, i, o, E = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: S(0),
                        throw: S(1),
                        return: S(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function S(o) {
                        return function(S) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; E;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            E.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            E.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = E.ops.pop();
                                            E.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = E.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                E = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                E.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && E.label < i[1]) {
                                                E.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && E.label < i[2]) {
                                                E.label = i[2];
                                                E.ops.push(o);
                                                break
                                            }
                                            i[2] && E.ops.pop();
                                            E.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, E)
                                } catch (t) {
                                    o = [6, t];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, S])
                        }
                    }
                },
                a = function() {
                    function t(e) {
                        o(this, t);
                        this.animation = e
                    }
                    var e = t.prototype;
                    e.start = function() {
                        var t = this;
                        return new Promise((function(e) {
                            t.animation.start((function() {
                                e()
                            }))
                        }))
                    };
                    e.stop = function() {
                        this.animation.stop()
                    };
                    return t
                }(),
                s = function() {
                    function t(e) {
                        o(this, t);
                        this.animations = e
                    }
                    var e = t.prototype;
                    e._map = function(t) {
                        return this.animations.map(t)
                    };
                    e.start = function() {
                        var t = this;
                        return new Promise((function(e) {
                            return Promise.all(t._map((function(t) {
                                return t.start()
                            }))).then((function() {
                                return e()
                            }))
                        }))
                    };
                    e.stop = function() {
                        this._map((function(t) {
                            return t.stop()
                        }))
                    };
                    return t
                }(),
                _ = function() {
                    function t(e) {
                        o(this, t);
                        this.stopped = !1;
                        this.animations = e
                    }
                    var e = t.prototype;
                    e.start = function() {
                        var t, e = this;
                        return (t = function() {
                            var t, n, r, i, o, E, S;
                            return l(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        e.stopped = !1;
                                        t = !0, n = !1, r = void 0;
                                        l.label = 1;
                                    case 1:
                                        l.trys.push([1, 6, 7, 8]);
                                        i = e.animations[Symbol.iterator]();
                                        l.label = 2;
                                    case 2:
                                        if (t = (o = i.next()).done) return [3, 5];
                                        E = o.value;
                                        return e.stopped ? [2] : [4, E.start()];
                                    case 3:
                                        l.sent();
                                        l.label = 4;
                                    case 4:
                                        t = !0;
                                        return [3, 2];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        S = l.sent();
                                        n = !0;
                                        r = S;
                                        return [3, 8];
                                    case 7:
                                        try {
                                            t || null == i.return || i.return()
                                        } finally {
                                            if (n) throw r
                                        }
                                        return [7];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }, function() {
                            var e = this,
                                n = arguments;
                            return new Promise((function(r, o) {
                                var E = t.apply(e, n);

                                function S(t) {
                                    i(E, r, o, S, l, "next", t)
                                }

                                function l(t) {
                                    i(E, r, o, S, l, "throw", t)
                                }
                                S(void 0)
                            }))
                        })()
                    };
                    e.stop = function() {
                        this.stopped = !0;
                        this.animations.map((function(t) {
                            return t.stop()
                        }))
                    };
                    return t
                }();

            function c(t, e, n) {
                var r = n(t, S({}, e));
                return new a(r)
            }
            const u = function(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }(S({}, r.Z), {
                timing: function(t, e) {
                    return c(t, e, r.Z.timing)
                },
                spring: function(t, e) {
                    return c(t, e, r.Z.spring)
                },
                parallel: function(t) {
                    return new s(t)
                },
                sequence: function(t) {
                    return new _(t)
                }
            })
        },
        532832: (t, e, n) => {
            "use strict";
            n.d(e, {
                C: () => r
            });
            var r;
            ! function(t) {
                t[t.APPLICATION = 1] = "APPLICATION";
                t[t.LINK = 2] = "LINK"
            }(r || (r = {}));
            new Set([1, 2])
        },
        250539: (t, e, n) => {
            "use strict";
            n.d(e, {
                o: () => r
            });
            var r;
            ! function(t) {
                t[t.LIST = 1] = "LIST";
                t[t.LIST_WITH_IMAGE = 2] = "LIST_WITH_IMAGE";
                t[t.GALLERY = 3] = "GALLERY"
            }(r || (r = {}));
            new Set([1, 2, 3])
        },
        425537: (t, e, n) => {
            "use strict";
            n.d(e, {
                s: () => r
            });
            var r;
            ! function(t) {
                t[t.APPLICATION = 1] = "APPLICATION";
                t[t.ACTIVITY_APPLICATION = 2] = "ACTIVITY_APPLICATION";
                t[t.CONNECTION = 3] = "CONNECTION"
            }(r || (r = {}))
        },
        310790: (t, e, n) => {
            "use strict";
            n.d(e, {
                c: () => r
            });
            var r;
            ! function(t) {
                t[t.SEARCH_RESULTS = 1] = "SEARCH_RESULTS";
                t[t.MUSIC = 2] = "MUSIC"
            }(r || (r = {}))
        },
        698425: (t, e, n) => {
            "use strict";
            n.d(e, {
                T: () => r
            });
            var r;
            ! function(t) {
                t.ADMIN = "admin";
                t.DEVELOPER = "developer";
                t.READ_ONLY = "read_only"
            }(r || (r = {}))
        },
        540110: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => D
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                E = n.n(o),
                S = n(179215),
                l = n.n(S),
                a = n(114837),
                s = n.n(a);

            function _(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return u(t)
            }

            function I(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                });
                e && P(t, e)
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        c(t, e, n[e])
                    }))
                }
                return t
            }

            function A(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function N(t, e) {
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

            function R(t, e) {
                return !e || "object" !== O(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function P(t, e) {
                P = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return P(t, e)
            }
            var O = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function p(t) {
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
                    var n, r = u(t);
                    if (e) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return R(this, n)
                }
            }
            var T = {
                    VERTICAL: l().flexVertical,
                    HORIZONTAL: l().flexHorizontal,
                    HORIZONTAL_REVERSE: l().flexHorizontalReverse
                },
                M = {
                    START: l().flexJustifyStart,
                    END: l().flexJustifyEnd,
                    CENTER: l().flexJustifyCenter,
                    BETWEEN: l().flexJustifyBetween,
                    AROUND: l().flexJustifyAround
                },
                d = {
                    NO_WRAP: l().flexNowrap,
                    WRAP: l().flexWrap,
                    WRAP_REVERSE: l().flexWrapReverse
                },
                h = {
                    START: l().flexAlignStart,
                    END: l().flexAlignEnd,
                    CENTER: l().flexAlignCenter,
                    STRETCH: l().flexAlignStretch
                },
                C = {
                    SMALL: s().flexGutterSmall,
                    LARGE: s().flexGutterLarge
                },
                g = function(t) {
                    I(n, t);
                    var e = p(n);

                    function n() {
                        _(this, n);
                        return e.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        var t = this.props,
                            e = t.children,
                            n = t.className,
                            o = t.shrink,
                            S = t.grow,
                            l = t.basis,
                            a = t.style,
                            _ = t.wrap,
                            c = N(t, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
                            u = f({
                                style: f({
                                    flexGrow: S,
                                    flexShrink: o,
                                    flexBasis: l
                                }, a),
                                className: n === s().flexChild ? n : E()(s().flexChild, n)
                            }, c);
                        if (!_ && "string" != typeof e && 1 === i.Children.count(e)) {
                            var I = i.Children.only(e);
                            u.style = f({}, u.style, I.props.style);
                            u.className = E()(I.props.className, n);
                            return i.cloneElement(I, u)
                        }
                        return (0, r.jsx)("div", A(f({}, u), {
                            children: e
                        }))
                    };
                    return n
                }(i.PureComponent);
            g.defaultProps = {
                className: s().flexChild,
                style: {},
                wrap: !1
            };
            var y = function(t) {
                I(n, t);
                var e = p(n);

                function n() {
                    _(this, n);
                    return e.apply(this, arguments)
                }
                n.prototype.render = function() {
                    var t = this.props,
                        e = t.children,
                        n = t.className,
                        i = t.direction,
                        o = t.justify,
                        S = t.align,
                        l = t.wrap,
                        a = t.shrink,
                        _ = t.grow,
                        c = t.basis,
                        u = t.style,
                        I = t.gutter,
                        R = N(t, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style", "gutter"]),
                        P = f({
                            flexShrink: a,
                            flexGrow: _,
                            flexBasis: c
                        }, u);
                    return (0, r.jsx)("div", A(f({
                        style: P,
                        className: E()(s().flex, i, o, S, l, I, n)
                    }, R), {
                        children: e
                    }))
                };
                return n
            }(i.PureComponent);
            y.Child = g;
            y.Direction = T;
            y.Align = h;
            y.Justify = M;
            y.Wrap = d;
            y.Gutter = C;
            y.defaultProps = {
                direction: T.HORIZONTAL,
                justify: M.START,
                align: h.STRETCH,
                wrap: d.WRAP,
                shrink: 1,
                grow: 1,
                basis: "auto",
                style: {}
            };
            const D = y
        },
        731988: (t, e, n) => {
            "use strict";
            n.d(e, {
                o: () => i
            });
            var r = n(805829),
                i = function(t, e) {
                    var n = Math.round(10 * t) / 10;
                    if (t < 1e6) return new Intl.NumberFormat(e, {
                        maximumFractionDigits: n % 1 == 0 ? 0 : 1
                    }).format(t);
                    var i = Math.round(t / 1e6 * 10) / 10,
                        o = new Intl.NumberFormat(e, {
                            maximumFractionDigits: i % 1 == 0 ? 0 : 1
                        }).format(t / 1e6);
                    return r.Z.Messages.NumberAbbreviations.MILLION.format({
                        num: o
                    })
                }
        },
        427979: (t, e, n) => {
            "use strict";
            n.d(e, {
                WW: () => S,
                s4: () => c,
                zO: () => u,
                Ny: () => I,
                vq: () => f,
                WV: () => A,
                aW: () => N,
                FX: () => R,
                kv: () => P,
                uu: () => O,
                _u: () => p
            });
            var r = n(520453);

            function i(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function o(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e || (t.permissions = t.permissions.filter((function(t) {
                    return !t.isExperimental
                })));
                return t
            }

            function E(t, e) {
                return t.map((function(t) {
                    return e[t.toString()]
                }))
            }

            function S(t, e) {
                var n;
                return i(n = {}, r.Pl.VIEW_CHANNEL.toString(), {
                        title: t.ROLE_PERMISSIONS_VIEW_CHANNEL,
                        description: t.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION,
                        flag: r.Pl.VIEW_CHANNEL
                    }), i(n, r.Pl.MANAGE_CHANNELS.toString(), {
                        title: t.MANAGE_CHANNELS,
                        description: t.ROLE_PERMISSIONS_MANAGE_CHANNELS_DESCRIPTION,
                        flag: r.Pl.MANAGE_CHANNELS
                    }), i(n, r.Pl.MANAGE_ROLES.toString(), {
                        title: t.MANAGE_ROLES,
                        description: t.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION,
                        flag: r.Pl.MANAGE_ROLES
                    }), i(n, r.Pl.MANAGE_GUILD_EXPRESSIONS.toString(), {
                        title: t.MANAGE_EXPRESSIONS,
                        description: t.ROLE_PERMISSIONS_MANAGE_EXPRESSIONS_DESCRIPTION,
                        flag: r.Pl.MANAGE_GUILD_EXPRESSIONS
                    }), i(n, r.Pl.CREATE_GUILD_EXPRESSIONS.toString(), {
                        title: t.CREATE_EXPRESSIONS,
                        description: t.ROLE_PERMISSIONS_CREATE_EXPRESSIONS_DESCRIPTION,
                        flag: r.Pl.CREATE_GUILD_EXPRESSIONS
                    }), i(n, r.Pl.VIEW_AUDIT_LOG.toString(), {
                        title: t.VIEW_AUDIT_LOG,
                        description: t.ROLE_PERMISSIONS_VIEW_AUDIT_LOG_DESCRIPTION,
                        flag: r.Pl.VIEW_AUDIT_LOG
                    }), i(n, r.Pl.VIEW_GUILD_ANALYTICS.toString(), {
                        title: t.VIEW_GUILD_ANALYTICS,
                        description: t.ROLE_PERMISSIONS_VIEW_GUILD_ANALYTICS_DESCRIPTION,
                        flag: r.Pl.VIEW_GUILD_ANALYTICS
                    }), i(n, r.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString(), {
                        title: t.VIEW_CREATOR_MONETIZATION_ANALYTICS,
                        description: t.ROLE_PERMISSIONS_VIEW_CREATOR_MONETIZATION_ANALYTICS_DESCRIPTION,
                        flag: r.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS
                    }),
                    i(n, r.Pl.MANAGE_WEBHOOKS.toString(), {
                        title: t.MANAGE_WEBHOOKS,
                        description: t.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION,
                        flag: r.Pl.MANAGE_WEBHOOKS
                    }), i(n, r.Pl.MANAGE_GUILD.toString(), {
                        title: t.MANAGE_SERVER,
                        description: t.ROLE_PERMISSIONS_MANAGE_SERVER_DESCRIPTION,
                        flag: r.Pl.MANAGE_GUILD
                    }), i(n, r.Pl.CREATE_INSTANT_INVITE.toString(), {
                        title: t.CREATE_INSTANT_INVITE,
                        description: t.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION,
                        flag: r.Pl.CREATE_INSTANT_INVITE
                    }), i(n, r.Pl.CHANGE_NICKNAME.toString(), {
                        title: t.CHANGE_NICKNAME,
                        description: t.ROLE_PERMISSIONS_CHANGE_NICKNAME_DESCRIPTION,
                        flag: r.Pl.CHANGE_NICKNAME
                    }), i(n, r.Pl.MANAGE_NICKNAMES.toString(), {
                        title: t.MANAGE_NICKNAMES,
                        description: t.ROLE_PERMISSIONS_MANAGE_NICKNAMES_DESCRIPTION,
                        flag: r.Pl.MANAGE_NICKNAMES
                    }), i(n, r.Pl.KICK_MEMBERS.toString(), {
                        title: e.showMembershipManualApprovalPermissions ? t.KICK_MEMBERS_AND_REVIEW_APPLICATIONS : t.KICK_MEMBERS,
                        description: e.showMembershipManualApprovalPermissions ? t.ROLE_PERMISSIONS_KICK_MEMBERS_AND_REVIEW_APPLICATION_DESCRIPTION : t.ROLE_PERMISSIONS_KICK_MEMBERS_DESCRIPTION,
                        flag: r.Pl.KICK_MEMBERS
                    }), i(n, r.Pl.BAN_MEMBERS.toString(), {
                        title: t.BAN_MEMBERS,
                        description: t.ROLE_PERMISSIONS_BAN_MEMBERS_DESCRIPTION,
                        flag: r.Pl.BAN_MEMBERS
                    }), i(n, r.Pl.MODERATE_MEMBERS.toString(), {
                        title: t.MODERATE_MEMBER,
                        description: t.ROLE_PERMISSIONS_MODERATE_MEMBER_DESCRIPTION,
                        flag: r.Pl.MODERATE_MEMBERS
                    }), i(n, r.Pl.SEND_MESSAGES.toString(), {
                        title: e.showForumPermissions ? t.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : t.SEND_MESSAGES,
                        description: e.showForumPermissions ? t.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION : t.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION,
                        flag: r.Pl.SEND_MESSAGES
                    }), i(n, r.Pl.EMBED_LINKS.toString(), {
                        title: t.EMBED_LINKS,
                        description: t.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION,
                        flag: r.Pl.EMBED_LINKS
                    }), i(n, r.Pl.ATTACH_FILES.toString(), {
                        title: t.ATTACH_FILES,
                        description: t.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION,
                        flag: r.Pl.ATTACH_FILES
                    }), i(n, r.Pl.ADD_REACTIONS.toString(), {
                        title: t.ADD_REACTIONS,
                        description: t.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION,
                        flag: r.Pl.ADD_REACTIONS
                    }), i(n, r.Pl.USE_EXTERNAL_EMOJIS.toString(), {
                        title: t.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
                        description: t.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION,
                        flag: r.Pl.USE_EXTERNAL_EMOJIS
                    }), i(n, r.Pl.USE_EXTERNAL_STICKERS.toString(), {
                        title: t.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
                        description: t.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION,
                        flag: r.Pl.USE_EXTERNAL_STICKERS
                    }), i(n, r.Pl.MENTION_EVERYONE.toString(), {
                        title: t.MENTION_EVERYONE,
                        description: t.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION,
                        flag: r.Pl.MENTION_EVERYONE
                    }), i(n, r.Pl.MANAGE_MESSAGES.toString(), {
                        title: t.MANAGE_MESSAGES,
                        description: t.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION,
                        flag: r.Pl.MANAGE_MESSAGES
                    }), i(n, r.Pl.READ_MESSAGE_HISTORY.toString(), {
                        title: t.READ_MESSAGE_HISTORY,
                        description: t.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION,
                        flag: r.Pl.READ_MESSAGE_HISTORY
                    }), i(n, r.Pl.SEND_TTS_MESSAGES.toString(), {
                        title: t.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
                        description: t.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION,
                        flag: r.Pl.SEND_TTS_MESSAGES
                    }), i(n, r.Pl.USE_APPLICATION_COMMANDS.toString(), {
                        title: t.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
                        description: t.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_GUILD_DESCRIPTION,
                        flag: r.Pl.USE_APPLICATION_COMMANDS
                    }), i(n, r.Pl.SEND_VOICE_MESSAGES.toString(), {
                        title: t.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
                        description: t.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE_GUILD_DESCRIPTION,
                        flag: r.Pl.SEND_VOICE_MESSAGES
                    }), i(n, r.Pl.USE_CLYDE_AI.toString(), {
                        title: t.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: t.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
                        flag: r.Pl.USE_CLYDE_AI
                    }), i(n, r.Pl.CONNECT.toString(), {
                        title: t.CONNECT,
                        description: t.ROLE_PERMISSIONS_CONNECT_DESCRIPTION,
                        flag: r.Pl.CONNECT
                    }), i(n, r.Pl.SPEAK.toString(), {
                        title: t.SPEAK,
                        description: t.ROLE_PERMISSIONS_SPEAK_DESCRIPTION,
                        flag: r.Pl.SPEAK
                    }), i(n, r.Pl.STREAM.toString(), {
                        title: t.VIDEO,
                        description: t.ROLE_PERMISSIONS_STREAM_DESCRIPTION,
                        flag: r.Pl.STREAM
                    }), i(n, r.Pl.USE_EMBEDDED_ACTIVITIES.toString(), {
                        title: t.USE_EMBEDDED_ACTIVITIES,
                        description: t.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION,
                        flag: r.Pl.USE_EMBEDDED_ACTIVITIES
                    }), i(n, r.Pl.USE_SOUNDBOARD.toString(), {
                        title: t.USE_SOUNDBOARD,
                        description: (null == e ? void 0 : e.SOUNDBOARD_DESCRIPTION) || t.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION,
                        flag: r.Pl.USE_SOUNDBOARD
                    }), i(n, r.Pl.USE_EXTERNAL_SOUNDS.toString(), {
                        title: t.USE_EXTERNAL_SOUNDS,
                        description: t.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
                        flag: r.Pl.USE_EXTERNAL_SOUNDS
                    }), i(n, r.Pl.USE_VAD.toString(), {
                        title: t.USE_VAD,
                        description: t.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION,
                        flag: r.Pl.USE_VAD
                    }), i(n, r.Pl.PRIORITY_SPEAKER.toString(), {
                        title: t.PRIORITY_SPEAKER,
                        description: (null == e ? void 0 : e.PRIORITY_SPEAKER_DESCRIPTION) || t.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION,
                        flag: r.Pl.PRIORITY_SPEAKER
                    }), i(n, r.Pl.MUTE_MEMBERS.toString(), {
                        title: t.MUTE_MEMBERS,
                        description: t.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION,
                        flag: r.Pl.MUTE_MEMBERS
                    }), i(n, r.Pl.DEAFEN_MEMBERS.toString(), {
                        title: t.DEAFEN_MEMBERS,
                        description: t.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION,
                        flag: r.Pl.DEAFEN_MEMBERS
                    }), i(n, r.Pl.MOVE_MEMBERS.toString(), {
                        title: t.MOVE_MEMBERS,
                        description: t.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION,
                        flag: r.Pl.MOVE_MEMBERS
                    }), i(n, r.Pl.REQUEST_TO_SPEAK.toString(), {
                        title: t.REQUEST_TO_SPEAK,
                        description: t.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION,
                        flag: r.Pl.REQUEST_TO_SPEAK,
                        isExperimental: !0
                    }), i(n, r.Pl.ADMINISTRATOR.toString(), {
                        title: t.ADMINISTRATOR,
                        description: "string" == typeof t.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION ? t.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION : t.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION.format(),
                        flag: r.Pl.ADMINISTRATOR
                    }), i(n, r.Pl.MANAGE_EVENTS.toString(), {
                        title: t.MANAGE_EVENTS,
                        description: t.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION,
                        flag: r.Pl.MANAGE_EVENTS
                    }), i(n, r.Pl.CREATE_EVENTS.toString(), {
                        title: t.CREATE_EVENTS,
                        description: t.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION,
                        flag: r.Pl.CREATE_EVENTS
                    }), i(n, r.Pl.MANAGE_THREADS.toString(), {
                        title: e.showForumPermissions ? t.MANAGE_THREADS_AND_FORUM_POSTS : t.MANAGE_THREADS,
                        description: e.showForumPermissions ? t.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION : t.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION,
                        flag: r.Pl.MANAGE_THREADS
                    }), i(n, r.Pl.CREATE_PUBLIC_THREADS.toString(), {
                        title: t.CREATE_PUBLIC_THREADS,
                        description: t.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION,
                        flag: r.Pl.CREATE_PUBLIC_THREADS
                    }), i(n, r.Pl.CREATE_PRIVATE_THREADS.toString(), {
                        title: t.CREATE_PRIVATE_THREADS,
                        description: t.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION,
                        flag: r.Pl.CREATE_PRIVATE_THREADS
                    }), i(n, r.Pl.SEND_MESSAGES_IN_THREADS.toString(), {
                        title: e.showForumPermissions ? t.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : t.SEND_MESSAGES_IN_THREADS,
                        description: e.showForumPermissions ? t.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION : t.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION,
                        flag: r.Pl.SEND_MESSAGES_IN_THREADS
                    }), i(n, r.Pl.USE_CLYDE_AI.toString(), {
                        title: t.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: t.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
                        flag: r.Pl.USE_CLYDE_AI
                    }), i(n, r.Pl.SET_VOICE_CHANNEL_STATUS.toString(), {
                        title: t.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                        description: t.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                        flag: r.Pl.SET_VOICE_CHANNEL_STATUS
                    }), n
            }

            function l(t, e, n) {
                var i = [r.Pl.VIEW_CHANNEL, r.Pl.MANAGE_CHANNELS, r.Pl.MANAGE_ROLES, r.Pl.CREATE_GUILD_EXPRESSIONS, r.Pl.MANAGE_GUILD_EXPRESSIONS, r.Pl.VIEW_AUDIT_LOG, r.Pl.VIEW_GUILD_ANALYTICS];
                n.showCreatorMonetizationAnalyticsPermission && i.push(r.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS);
                i.push(r.Pl.MANAGE_WEBHOOKS);
                i.push(r.Pl.MANAGE_GUILD);
                return o({
                    title: e.ROLE_PERMISSIONS_SECTION_GENERAL_GUILD,
                    permissions: E(i, t)
                })
            }

            function a(t, e) {
                var n = [r.Pl.CREATE_INSTANT_INVITE, r.Pl.CHANGE_NICKNAME, r.Pl.MANAGE_NICKNAMES, r.Pl.KICK_MEMBERS, r.Pl.BAN_MEMBERS, r.Pl.MODERATE_MEMBERS];
                return o({
                    title: e.ROLE_PERMISSIONS_SECTION_MEMBERSHIP,
                    permissions: E(n, t)
                })
            }

            function s(t, e, n) {
                var i = [r.Pl.SEND_MESSAGES, r.Pl.SEND_MESSAGES_IN_THREADS, r.Pl.CREATE_PUBLIC_THREADS, r.Pl.CREATE_PRIVATE_THREADS, r.Pl.EMBED_LINKS, r.Pl.ATTACH_FILES, r.Pl.ADD_REACTIONS, r.Pl.USE_EXTERNAL_EMOJIS, r.Pl.USE_EXTERNAL_STICKERS, r.Pl.MENTION_EVERYONE, r.Pl.MANAGE_MESSAGES, r.Pl.MANAGE_THREADS, r.Pl.READ_MESSAGE_HISTORY, r.Pl.SEND_TTS_MESSAGES, r.Pl.USE_APPLICATION_COMMANDS, r.Pl.SEND_VOICE_MESSAGES, r.Pl.USE_CLYDE_AI];
                n.showClydeAIPermissions || (i = i.filter((function(t) {
                    return t !== r.Pl.USE_CLYDE_AI
                })));
                return o({
                    title: e.ROLE_PERMISSIONS_SECTION_TEXT,
                    permissions: E(i, t)
                })
            }

            function _(t, e, n) {
                var i = [r.Pl.CONNECT, r.Pl.SPEAK, r.Pl.STREAM, r.Pl.USE_EMBEDDED_ACTIVITIES, r.Pl.USE_SOUNDBOARD, r.Pl.USE_EXTERNAL_SOUNDS, r.Pl.USE_VAD, r.Pl.PRIORITY_SPEAKER, r.Pl.MUTE_MEMBERS, r.Pl.DEAFEN_MEMBERS, r.Pl.MOVE_MEMBERS];
                n.showVoiceChannelStatusPermission && i.push(r.Pl.SET_VOICE_CHANNEL_STATUS);
                return o({
                    title: e.ROLE_PERMISSIONS_SECTION_VOICE,
                    permissions: E(i, t)
                })
            }

            function c(t, e) {
                var n = S(t, e),
                    i = [l(n, t, e), a(n, t), s(n, t, e), _(n, t, e)];
                e.showStageChannelPermissions && i.push(function(t, e, n) {
                    return o({
                        title: e.ROLE_PERMISSIONS_SECTION_STAGE,
                        permissions: E([r.Pl.REQUEST_TO_SPEAK], t)
                    }, n.showExperimental)
                }(n, t, e));
                i.push(function(t, e, n) {
                    return o({
                        title: e.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS,
                        permissions: E([r.Pl.CREATE_EVENTS, r.Pl.MANAGE_EVENTS], t)
                    }, n.showExperimental)
                }(n, t, e));
                i.push(function(t, e) {
                    return o({
                        title: e.ROLE_PERMISSIONS_SECTION_ADVANCED,
                        permissions: E([r.Pl.ADMINISTRATOR], t)
                    })
                }(n, t));
                return i
            }

            function u(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    showManageWebhooks: !0
                };
                return {
                    title: e,
                    permissions: E((null == n ? void 0 : n.showManageWebhooks) ? [r.Pl.VIEW_CHANNEL, r.Pl.MANAGE_CHANNELS, r.Pl.MANAGE_ROLES, r.Pl.MANAGE_WEBHOOKS] : [r.Pl.VIEW_CHANNEL, r.Pl.MANAGE_CHANNELS, r.Pl.MANAGE_ROLES], t)
                }
            }

            function I(t, e) {
                return {
                    title: e,
                    permissions: E([r.Pl.CREATE_INSTANT_INVITE], t)
                }
            }

            function f(t, e, n) {
                var i = [r.Pl.SEND_MESSAGES, r.Pl.SEND_MESSAGES_IN_THREADS, r.Pl.CREATE_PUBLIC_THREADS, r.Pl.CREATE_PRIVATE_THREADS, r.Pl.EMBED_LINKS, r.Pl.ATTACH_FILES, r.Pl.ADD_REACTIONS, r.Pl.USE_EXTERNAL_EMOJIS, r.Pl.USE_EXTERNAL_STICKERS, r.Pl.MENTION_EVERYONE, r.Pl.MANAGE_MESSAGES, r.Pl.MANAGE_THREADS, r.Pl.READ_MESSAGE_HISTORY, r.Pl.SEND_TTS_MESSAGES, r.Pl.USE_APPLICATION_COMMANDS, r.Pl.SEND_VOICE_MESSAGES, r.Pl.USE_CLYDE_AI, r.Pl.USE_EMBEDDED_ACTIVITIES];
                n.showPrivateThreads && n.showCreateThreads || (i = i.filter((function(t) {
                    return t !== r.Pl.CREATE_PRIVATE_THREADS
                })));
                n.showCreateThreads || (i = i.filter((function(t) {
                    return t !== r.Pl.CREATE_PUBLIC_THREADS
                })));
                n.showClydeAIPermissions || (i = i.filter((function(t) {
                    return t !== r.Pl.USE_CLYDE_AI
                })));
                return {
                    title: e,
                    description: n.sectionDescription,
                    permissions: E(i, t)
                }
            }

            function A(t, e, n) {
                var i = [r.Pl.CONNECT, r.Pl.SPEAK, r.Pl.STREAM, r.Pl.USE_EMBEDDED_ACTIVITIES, r.Pl.USE_SOUNDBOARD, r.Pl.USE_EXTERNAL_SOUNDS, r.Pl.USE_VAD, r.Pl.PRIORITY_SPEAKER, r.Pl.MUTE_MEMBERS, r.Pl.DEAFEN_MEMBERS, r.Pl.MOVE_MEMBERS];
                n.showVoiceChannelStatusPermission && i.push(r.Pl.SET_VOICE_CHANNEL_STATUS);
                return {
                    title: e,
                    permissions: E(i, t)
                }
            }

            function N(t, e, n) {
                var i = [r.Pl.SEND_MESSAGES, r.Pl.EMBED_LINKS, r.Pl.ATTACH_FILES, r.Pl.ADD_REACTIONS, r.Pl.USE_EXTERNAL_EMOJIS, r.Pl.USE_EXTERNAL_STICKERS, r.Pl.MENTION_EVERYONE, r.Pl.MANAGE_MESSAGES, r.Pl.READ_MESSAGE_HISTORY, r.Pl.SEND_TTS_MESSAGES, r.Pl.USE_APPLICATION_COMMANDS];
                return {
                    title: e,
                    description: n.sectionDescription,
                    permissions: E(i, t)
                }
            }

            function R(t, e, n) {
                return {
                    title: e,
                    permissions: E(n ? [r.Pl.CONNECT, r.Pl.STREAM, r.Pl.MUTE_MEMBERS, r.Pl.MOVE_MEMBERS] : [r.Pl.CONNECT, r.Pl.MUTE_MEMBERS, r.Pl.MOVE_MEMBERS], t)
                }
            }

            function P(t, e) {
                return {
                    title: e,
                    permissions: E([r.Pl.REQUEST_TO_SPEAK, r.Pl.MENTION_EVERYONE], t)
                }
            }

            function O(t, e) {
                return {
                    title: e,
                    permissions: E([r.Pl.CREATE_EVENTS, r.Pl.MANAGE_EVENTS], t)
                }
            }

            function p(t) {
                return null == t ? t : "string" == typeof t ? t.trim() : "function" == typeof t.format ? t.format() : t
            }
        },
        580085: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => r
            });
            var r = function() {
                function t(e, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this._capacity = e;
                    this._tokenCount = e;
                    this._queue = [];
                    this._intervalPeriod = n / e;
                    this._intervalID = null
                }
                var e = t.prototype;
                e._processQueue = function() {
                    var t = this;
                    setTimeout((function() {
                        if (t._queue.length > 0 && t._tokenCount > 0) {
                            t._tokenCount--;
                            null == t._intervalID && (t._intervalID = setInterval((function() {
                                return t._iterate()
                            }), t._intervalPeriod));
                            var e = t._queue.shift();
                            null == e || e();
                            t._processQueue()
                        }
                    }), 0)
                };
                e._iterate = function() {
                    this._tokenCount = Math.min(this._capacity, this._tokenCount + 1);
                    if (this._tokenCount >= this._capacity && null != this._intervalID) {
                        clearInterval(this._intervalID);
                        this._intervalID = null
                    }
                    this._processQueue()
                };
                e.process = function() {
                    var t = this;
                    return new Promise((function(e) {
                        t._queue.push(e);
                        t._processQueue()
                    }))
                };
                return t
            }()
        },
        685269: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => o
            });
            var r = n(667294);
            var i = [];

            function o(t, e) {
                var n = (0, r.useRef)(),
                    o = (0, r.useRef)(i);
                if (o.current === i) {
                    n.current = t();
                    o.current = e
                } else if (! function(t, e) {
                        if (t.length !== e.length) return !1;
                        for (var n = 0; n < e.length && n < t.length; n++)
                            if (!Object.is(t[n], e[n])) return !1;
                        return !0
                    }(e, o.current)) {
                    n.current = t();
                    o.current = e
                }
                return n.current
            }
        }
    }
]);
//# sourceMappingURL=daa47461947d5bf23486.js.map