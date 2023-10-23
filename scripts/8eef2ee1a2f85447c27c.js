(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [38339, 27979], {
        479049: (t, e) => {
            var n, r;
            r = function(t) {
                "use strict";
                t = t || {};
                var e, n, r, i, E, o, S, l, a, s, _, c, I, u, A, N, R = {
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
                (I = {}).ff = "undefined" != typeof InstallTrigger;
                I.chrome = !!window.chrome;
                I.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0;
                I.ie = !1;
                I.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0;
                I.supported = I.chrome || I.ff || I.opera;
                var f = [];
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
                                f = [];
                                a = !1;
                                s = !1;
                                o.clearRect(0, 0, i, r);
                                o.drawImage(S, 0, 0, i, r);
                                M.setIcon(E);
                                window.clearTimeout(u);
                                window.clearTimeout(A)
                            }
                        },
                        start: function() {
                            if (l && !s && f.length > 0) {
                                s = !0;
                                var t = function() {
                                    ["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach((function(t) {
                                        t in f[0].options && (e[t] = f[0].options[t])
                                    }));
                                    C.run(f[0].options, (function() {
                                        ! function() {
                                            a = f[0];
                                            s = !1;
                                            if (f.length > 0) {
                                                f.shift();
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
                    o.clearRect(0, 0, i, r);
                    o.drawImage(S, 0, 0, i, r);
                    o.beginPath();
                    o.font = e.fontStyle + " " + Math.floor(t.h * (t.n > 99 ? .85 : 1)) + "px " + e.fontFamily;
                    o.textAlign = "center";
                    if (n) {
                        o.moveTo(t.x + t.w / 2, t.y);
                        o.lineTo(t.x + t.w - t.h / 2, t.y);
                        o.quadraticCurveTo(t.x + t.w, t.y, t.x + t.w, t.y + t.h / 2);
                        o.lineTo(t.x + t.w, t.y + t.h - t.h / 2);
                        o.quadraticCurveTo(t.x + t.w, t.y + t.h, t.x + t.w - t.h / 2, t.y + t.h);
                        o.lineTo(t.x + t.h / 2, t.y + t.h);
                        o.quadraticCurveTo(t.x, t.y + t.h, t.x, t.y + t.h - t.h / 2);
                        o.lineTo(t.x, t.y + t.h / 2);
                        o.quadraticCurveTo(t.x, t.y, t.x + t.h / 2, t.y)
                    } else o.arc(t.x + t.w / 2, t.y + t.h / 2, t.h / 2, 0, 2 * Math.PI);
                    o.fillStyle = "rgba(" + e.bgColor.r + "," + e.bgColor.g + "," + e.bgColor.b + "," + t.o + ")";
                    o.fill();
                    o.closePath();
                    o.beginPath();
                    o.stroke();
                    o.fillStyle = "rgba(" + e.textColor.r + "," + e.textColor.g + "," + e.textColor.b + "," + t.o + ")";
                    "number" == typeof t.n && t.n > 999 ? o.fillText((t.n > 9999 ? 9 : Math.floor(t.n / 1e3)) + "k+", Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .2 * t.h)) : o.fillText(t.n, Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .15 * t.h));
                    o.closePath()
                };
                O.rectangle = function(t) {
                    if (2 === (t = p(t)).len) {
                        t.x = t.x - .4 * t.w;
                        t.w = 1.4 * t.w
                    } else if (t.len >= 3) {
                        t.x = t.x - .65 * t.w;
                        t.w = 1.65 * t.w
                    }
                    o.clearRect(0, 0, i, r);
                    o.drawImage(S, 0, 0, i, r);
                    o.beginPath();
                    o.font = e.fontStyle + " " + Math.floor(t.h * (t.n > 99 ? .9 : 1)) + "px " + e.fontFamily;
                    o.textAlign = "center";
                    o.fillStyle = "rgba(" + e.bgColor.r + "," + e.bgColor.g + "," + e.bgColor.b + "," + t.o + ")";
                    o.fillRect(t.x, t.y, t.w, t.h);
                    o.fillStyle = "rgba(" + e.textColor.r + "," + e.textColor.g + "," + e.textColor.b + "," + t.o + ")";
                    "number" == typeof t.n && t.n > 999 ? o.fillText((t.n > 9999 ? 9 : Math.floor(t.n / 1e3)) + "k+", Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .2 * t.h)) : o.fillText(t.n, Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .15 * t.h));
                    o.closePath()
                };

                function T(t) {
                    if (t.paused || t.ended || c) return !1;
                    try {
                        o.clearRect(0, 0, i, r);
                        o.drawImage(t, 0, 0, i, r)
                    } catch (t) {}
                    A = setTimeout((function() {
                        T(t)
                    }), C.duration);
                    M.setIcon(E)
                }
                var M = {
                    getIcon: function() {
                        var t = !1;
                        if (e.element) t = e.element;
                        else if (e.elementId)(t = N.getElementById(e.elementId)).setAttribute("href", t.getAttribute("src"));
                        else {
                            t = function() {
                                for (var t = N.getElementsByTagName("head")[0].getElementsByTagName("link"), e = t.length - 1; e >= 0; e--)
                                    if (/(^|\s)icon(\s|$)/i.test(t[e].getAttribute("rel"))) return t[e];
                                return !1
                            }();
                            if (!1 === t) {
                                (t = N.createElement("link")).setAttribute("rel", "icon");
                                N.getElementsByTagName("head")[0].appendChild(t)
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
                            var i = N.getElementById(e.elementId);
                            i.setAttribute("href", r);
                            i.setAttribute("src", r)
                        } else if (I.ff || I.opera) {
                            var E = n;
                            n = N.createElement("link");
                            I.opera && n.setAttribute("rel", "icon");
                            n.setAttribute("rel", "icon");
                            n.setAttribute("type", "image/png");
                            N.getElementsByTagName("head")[0].appendChild(n);
                            n.setAttribute("href", r);
                            E.parentNode && E.parentNode.removeChild(E)
                        } else n.setAttribute("href", r)
                    }
                };

                function h(t) {
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

                function d(t, e) {
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
                    var o = C.types[N.hidden || N.msHidden || N.webkitHidden || N.mozHidden ? "none" : e.animation];
                    i = !0 === r ? void 0 !== i ? i : o.length - 1 : void 0 !== i ? i : 0;
                    n = n || function() {};
                    if (i < o.length && i >= 0) {
                        O[e.type](d(t, o[i]));
                        u = setTimeout((function() {
                            r ? i -= 1 : i += 1;
                            C.run(t, n, r, i)
                        }), C.duration);
                        M.setIcon(E)
                    } else n()
                };
                ! function() {
                    (e = d(R, t)).bgColor = h(e.bgColor);
                    e.textColor = h(e.textColor);
                    e.position = e.position.toLowerCase();
                    e.animation = C.types["" + e.animation] ? e.animation : R.animation;
                    N = e.win.document;
                    var l = e.position.indexOf("up") > -1,
                        a = e.position.indexOf("left") > -1;
                    if (l || a)
                        for (var s = 0; s < C.types["" + e.animation].length; s++) {
                            var _ = C.types["" + e.animation][s];
                            l && (_.y < .6 ? _.y = _.y - .4 : _.y = _.y - 2 * _.y + (1 - _.w));
                            a && (_.x < .6 ? _.x = _.x - .4 : _.x = _.x - 2 * _.x + (1 - _.h));
                            C.types["" + e.animation][s] = _
                        }
                    e.type = O["" + e.type] ? e.type : R.type;
                    n = M.getIcon();
                    E = document.createElement("canvas");
                    S = document.createElement("img");
                    if (n.hasAttribute("href")) {
                        S.setAttribute("crossOrigin", "anonymous");
                        S.onload = function() {
                            r = S.height > 0 ? S.height : 32;
                            i = S.width > 0 ? S.width : 32;
                            E.height = r;
                            E.width = i;
                            o = E.getContext("2d");
                            P.ready()
                        };
                        S.setAttribute("src", n.getAttribute("href"))
                    } else {
                        S.onload = function() {
                            r = 32;
                            i = 32;
                            S.height = r;
                            S.width = i;
                            E.height = r;
                            E.width = i;
                            o = E.getContext("2d");
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
                                        t in e && (n.options[t] = h(e[t]))
                                    }));
                                    ["fontStyle", "fontFamily"].forEach((function(t) {
                                        t in e && (n.options[t] = e[t])
                                    }));
                                    f.push(n);
                                    if (f.length > 100) throw new Error("Too many badges requests in queue.");
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
                                    o.clearRect(0, 0, i, r);
                                    o.drawImage(S, 0, 0, i, r);
                                    M.setIcon(E)
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
                        if (I.supported) {
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
                        supported: I.supported
                    }
                }
            }, void 0 !== (n = function() {
                return r
            }.apply(e, [])) && (t.exports = n)
        },
        146944: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => a
            });
            var r = n(667294);

            function i(t, e) {
                return i = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, i(t, e)
            }
            var E = function(t) {
                    var e = document.createElement("script");
                    e.async = !0, e.defer = !0, e.src = t, document.head && document.head.appendChild(e)
                },
                o = function(t) {
                    return Array.from(document.scripts).reduce((function(e, n) {
                        return e || t.test(n.src)
                    }), !1)
                },
                S = /(http|https):\/\/(www)?.+\/recaptcha/,
                l = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"],
                a = function(t) {
                    var e, n;

                    function a() {
                        for (var e, n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(i)) || this).container = void 0, e.timer = void 0, e.state = {
                            instanceKey: Date.now(),
                            ready: !1,
                            rendered: !1,
                            invisible: "invisible" === e.props.size
                        }, e._isAvailable = function() {
                            var t;
                            return Boolean(null == (t = window.grecaptcha) ? void 0 : t.ready)
                        }, e._inject = function() {
                            e.props.inject && !o(S) && E("https://recaptcha.net/recaptcha/api.js?render=explicit" + (e.props.hl ? "&hl=" + e.props.hl : ""))
                        }, e._prepare = function() {
                            var t = e.props,
                                n = t.explicit,
                                r = t.onLoad;
                            window.grecaptcha.ready((function() {
                                e.setState({
                                    ready: !0
                                }, (function() {
                                    n || e.renderExplicitly(), r && r()
                                }))
                            }))
                        }, e._renderRecaptcha = function(t, e) {
                            return window.grecaptcha.render(t, e)
                        }, e._resetRecaptcha = function() {
                            return window.grecaptcha.reset(e.state.instanceId)
                        }, e._executeRecaptcha = function() {
                            return window.grecaptcha.execute(e.state.instanceId)
                        }, e._getResponseRecaptcha = function() {
                            return window.grecaptcha.getResponse(e.state.instanceId)
                        }, e._onVerify = function(t) {
                            return e.props.onVerify(t)
                        }, e._onExpire = function() {
                            return e.props.onExpire && e.props.onExpire()
                        }, e._onError = function() {
                            return e.props.onError && e.props.onError()
                        }, e._stopTimer = function() {
                            e.timer && clearInterval(e.timer)
                        }, e.componentDidMount = function() {
                            e._inject(), e._isAvailable() ? e._prepare() : e.timer = window.setInterval((function() {
                                e._isAvailable() && (e._prepare(), e._stopTimer())
                            }), 500)
                        }, e.componentWillUnmount = function() {
                            e._stopTimer()
                        }, e.renderExplicitly = function() {
                            return new Promise((function(t, n) {
                                if (e.state.rendered) return n(new Error("This recaptcha instance has been already rendered."));
                                if (!e.state.ready || !e.container) return n(new Error("Recaptcha is not ready for rendering yet."));
                                var r = e._renderRecaptcha(e.container, {
                                    sitekey: e.props.sitekey,
                                    theme: e.props.theme,
                                    size: e.props.size,
                                    badge: e.state.invisible ? e.props.badge : void 0,
                                    tabindex: e.props.tabindex,
                                    callback: e._onVerify,
                                    "expired-callback": e._onExpire,
                                    "error-callback": e._onError,
                                    isolated: e.state.invisible ? e.props.isolated : void 0,
                                    hl: e.state.invisible ? void 0 : e.props.hl
                                });
                                e.setState({
                                    instanceId: r,
                                    rendered: !0
                                }, (function() {
                                    e.props.onRender && e.props.onRender(), t()
                                }))
                            }))
                        }, e.reset = function() {
                            return new Promise((function(t, n) {
                                if (e.state.rendered) return e._resetRecaptcha(), t();
                                n(new Error("This recaptcha instance did not render yet."))
                            }))
                        }, e.execute = function() {
                            return new Promise((function(t, n) {
                                return e.state.invisible ? (e.state.rendered && (e._executeRecaptcha(), t()), n(new Error("This recaptcha instance did not render yet."))) : n(new Error("Manual execution is only available for invisible size."))
                            }))
                        }, e.getResponse = function() {
                            return new Promise((function(t, n) {
                                if (e.state.rendered) return t(e._getResponseRecaptcha());
                                n(new Error("This recaptcha instance did not render yet."))
                            }))
                        }, e.render = function() {
                            var t = r.createElement("div", {
                                key: e.state.instanceKey,
                                id: e.props.id,
                                className: e.props.className,
                                ref: function(t) {
                                    return e.container = t
                                }
                            });
                            return e.props.children ? e.props.children({
                                renderExplicitly: e.renderExplicitly,
                                reset: e.reset,
                                execute: e.execute,
                                getResponse: e.getResponse,
                                recaptchaComponent: t
                            }) : t
                        }, e
                    }
                    return n = t, (e = a).prototype = Object.create(n.prototype), e.prototype.constructor = e, i(e, n), a.getDerivedStateFromProps = function(t, e) {
                        var n = "invisible" === t.size;
                        return n !== e.invisible ? {
                            invisible: n
                        } : null
                    }, a.prototype.componentDidUpdate = function(t) {
                        var e = this;
                        l.reduce((function(n, r) {
                            return e.props[r] !== t[r] ? [].concat(n, [r]) : n
                        }), []).length > 0 && this.setState({
                            instanceKey: Date.now(),
                            rendered: !1
                        }, (function() {
                            e.props.explicit || e.renderExplicitly()
                        }))
                    }, a
                }(r.Component);
            a.defaultProps = {
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
            }
        },
        300330: (t, e, n) => {
            "use strict";
            n.d(e, {
                ZP: () => I
            });
            var r = n(853158);

            function i(t, e, n, r, i, E, o) {
                try {
                    var S = t[E](o),
                        l = S.value
                } catch (t) {
                    n(t);
                    return
                }
                S.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function E(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e, n) {
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
                        o(t, e, n[e])
                    }))
                }
                return t
            }
            var l = function(t, e) {
                    var n, r, i, E, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return E = {
                        next: S(0),
                        throw: S(1),
                        return: S(2)
                    }, "function" == typeof Symbol && (E[Symbol.iterator] = function() {
                        return this
                    }), E;

                    function S(E) {
                        return function(S) {
                            return function(E) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (i = 2 & E[0] ? r.return : E[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, E[1])).done) return i;
                                    (r = 0, i) && (E = [2 & E[0], i.value]);
                                    switch (E[0]) {
                                        case 0:
                                        case 1:
                                            i = E;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: E[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = E[1];
                                            E = [0];
                                            continue;
                                        case 7:
                                            E = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === E[0] || 2 === E[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === E[0] && (!i || E[1] > i[0] && E[1] < i[3])) {
                                                o.label = E[1];
                                                break
                                            }
                                            if (6 === E[0] && o.label < i[1]) {
                                                o.label = i[1];
                                                i = E;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2];
                                                o.ops.push(E);
                                                break
                                            }
                                            i[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    E = e.call(t, o)
                                } catch (t) {
                                    E = [6, t];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & E[0]) throw E[1];
                                return {
                                    value: E[0] ? E[1] : void 0,
                                    done: !0
                                }
                            }([E, S])
                        }
                    }
                },
                a = function() {
                    function t(e) {
                        E(this, t);
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
                        E(this, t);
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
                        E(this, t);
                        this.stopped = !1;
                        this.animations = e
                    }
                    var e = t.prototype;
                    e.start = function() {
                        var t, e = this;
                        return (t = function() {
                            var t, n, r, i, E, o, S;
                            return l(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        e.stopped = !1;
                                        t = !0, n = !1,
                                            r = void 0;
                                        l.label = 1;
                                    case 1:
                                        l.trys.push([1, 6, 7, 8]);
                                        i = e.animations[Symbol.iterator]();
                                        l.label = 2;
                                    case 2:
                                        if (t = (E = i.next()).done) return [3, 5];
                                        o = E.value;
                                        return e.stopped ? [2] : [4, o.start()];
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
                            return new Promise((function(r, E) {
                                var o = t.apply(e, n);

                                function S(t) {
                                    i(o, r, E, S, l, "next", t)
                                }

                                function l(t) {
                                    i(o, r, E, S, l, "throw", t)
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
            const I = function(t, e) {
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
                Z: () => y
            });
            var r = n(785893),
                i = n(667294),
                E = n(294184),
                o = n.n(E),
                S = n(516601),
                l = n.n(S),
                a = n(998427),
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

            function I(t) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return I(t)
            }

            function u(t, e) {
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

            function A(t) {
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

            function N(t, e) {
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

            function R(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        E = Object.keys(t);
                    for (r = 0; r < E.length; r++) {
                        n = E[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var E = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < E.length; r++) {
                        n = E[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }

            function f(t, e) {
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
                    var n, r = I(t);
                    if (e) {
                        var i = I(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
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
                h = {
                    NO_WRAP: l().flexNowrap,
                    WRAP: l().flexWrap,
                    WRAP_REVERSE: l().flexWrapReverse
                },
                d = {
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
                    u(n, t);
                    var e = p(n);

                    function n() {
                        _(this, n);
                        return e.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        var t = this.props,
                            e = t.children,
                            n = t.className,
                            E = t.shrink,
                            S = t.grow,
                            l = t.basis,
                            a = t.style,
                            _ = t.wrap,
                            c = R(t, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
                            I = A({
                                style: A({
                                    flexGrow: S,
                                    flexShrink: E,
                                    flexBasis: l
                                }, a),
                                className: n === s().flexChild ? n : o()(s().flexChild, n)
                            }, c);
                        if (!_ && "string" != typeof e && 1 === i.Children.count(e)) {
                            var u = i.Children.only(e);
                            I.style = A({}, I.style, u.props.style);
                            I.className = o()(u.props.className, n);
                            return i.cloneElement(u, I)
                        }
                        return (0, r.jsx)("div", N(A({}, I), {
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
            var D = function(t) {
                u(n, t);
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
                        E = t.justify,
                        S = t.align,
                        l = t.wrap,
                        a = t.shrink,
                        _ = t.grow,
                        c = t.basis,
                        I = t.style,
                        u = t.gutter,
                        f = R(t, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style", "gutter"]),
                        P = A({
                            flexShrink: a,
                            flexGrow: _,
                            flexBasis: c
                        }, I);
                    return (0, r.jsx)("div", N(A({
                        style: P,
                        className: o()(s().flex, i, E, S, l, u, n)
                    }, f), {
                        children: e
                    }))
                };
                return n
            }(i.PureComponent);
            D.Child = g;
            D.Direction = T;
            D.Align = d;
            D.Justify = M;
            D.Wrap = h;
            D.Gutter = C;
            D.defaultProps = {
                direction: T.HORIZONTAL,
                justify: M.START,
                align: d.STRETCH,
                wrap: h.WRAP,
                shrink: 1,
                grow: 1,
                basis: "auto",
                style: {}
            };
            const y = D
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
                        E = new Intl.NumberFormat(e, {
                            maximumFractionDigits: i % 1 == 0 ? 0 : 1
                        }).format(t / 1e6);
                    return r.Z.Messages.NumberAbbreviations.MILLION.format({
                        num: E
                    })
                }
        },
        427979: (t, e, n) => {
            "use strict";
            n.d(e, {
                FX: () => f,
                Ny: () => u,
                WV: () => N,
                WW: () => S,
                _u: () => p,
                aW: () => R,
                kv: () => P,
                s4: () => c,
                uu: () => O,
                vq: () => A,
                zO: () => I
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

            function E(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e || (t.permissions = t.permissions.filter((function(t) {
                    return !t.isExperimental
                })));
                return t
            }

            function o(t, e) {
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
                    }), i(n, r.Pl.MANAGE_WEBHOOKS.toString(), {
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
                    }),
                    i(n, r.Pl.ATTACH_FILES.toString(), {
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
                    }),
                    i(n, r.Pl.MANAGE_EVENTS.toString(), {
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
                return E({
                    title: e.ROLE_PERMISSIONS_SECTION_GENERAL_GUILD,
                    permissions: o(i, t)
                })
            }

            function a(t, e) {
                var n = [r.Pl.CREATE_INSTANT_INVITE, r.Pl.CHANGE_NICKNAME, r.Pl.MANAGE_NICKNAMES, r.Pl.KICK_MEMBERS, r.Pl.BAN_MEMBERS, r.Pl.MODERATE_MEMBERS];
                return E({
                    title: e.ROLE_PERMISSIONS_SECTION_MEMBERSHIP,
                    permissions: o(n, t)
                })
            }

            function s(t, e, n) {
                var i = [r.Pl.SEND_MESSAGES, r.Pl.SEND_MESSAGES_IN_THREADS, r.Pl.CREATE_PUBLIC_THREADS, r.Pl.CREATE_PRIVATE_THREADS, r.Pl.EMBED_LINKS, r.Pl.ATTACH_FILES, r.Pl.ADD_REACTIONS, r.Pl.USE_EXTERNAL_EMOJIS, r.Pl.USE_EXTERNAL_STICKERS, r.Pl.MENTION_EVERYONE, r.Pl.MANAGE_MESSAGES, r.Pl.MANAGE_THREADS, r.Pl.READ_MESSAGE_HISTORY, r.Pl.SEND_TTS_MESSAGES, r.Pl.USE_APPLICATION_COMMANDS, r.Pl.SEND_VOICE_MESSAGES, r.Pl.USE_CLYDE_AI];
                n.showClydeAIPermissions || (i = i.filter((function(t) {
                    return t !== r.Pl.USE_CLYDE_AI
                })));
                return E({
                    title: e.ROLE_PERMISSIONS_SECTION_TEXT,
                    permissions: o(i, t)
                })
            }

            function _(t, e, n) {
                var i = [r.Pl.CONNECT, r.Pl.SPEAK, r.Pl.STREAM, r.Pl.USE_EMBEDDED_ACTIVITIES, r.Pl.USE_SOUNDBOARD, r.Pl.USE_EXTERNAL_SOUNDS, r.Pl.USE_VAD, r.Pl.PRIORITY_SPEAKER, r.Pl.MUTE_MEMBERS, r.Pl.DEAFEN_MEMBERS, r.Pl.MOVE_MEMBERS];
                n.showVoiceChannelStatusPermission && i.push(r.Pl.SET_VOICE_CHANNEL_STATUS);
                return E({
                    title: e.ROLE_PERMISSIONS_SECTION_VOICE,
                    permissions: o(i, t)
                })
            }

            function c(t, e) {
                var n = S(t, e),
                    i = [l(n, t, e), a(n, t), s(n, t, e), _(n, t, e)];
                e.showStageChannelPermissions && i.push(function(t, e, n) {
                    return E({
                        title: e.ROLE_PERMISSIONS_SECTION_STAGE,
                        permissions: o([r.Pl.REQUEST_TO_SPEAK], t)
                    }, n.showExperimental)
                }(n, t, e));
                i.push(function(t, e, n) {
                    return E({
                        title: e.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS,
                        permissions: o([r.Pl.CREATE_EVENTS, r.Pl.MANAGE_EVENTS], t)
                    }, n.showExperimental)
                }(n, t, e));
                i.push(function(t, e) {
                    return E({
                        title: e.ROLE_PERMISSIONS_SECTION_ADVANCED,
                        permissions: o([r.Pl.ADMINISTRATOR], t)
                    })
                }(n, t));
                return i
            }

            function I(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    showManageWebhooks: !0
                };
                return {
                    title: e,
                    permissions: o((null == n ? void 0 : n.showManageWebhooks) ? [r.Pl.VIEW_CHANNEL, r.Pl.MANAGE_CHANNELS, r.Pl.MANAGE_ROLES, r.Pl.MANAGE_WEBHOOKS] : [r.Pl.VIEW_CHANNEL, r.Pl.MANAGE_CHANNELS, r.Pl.MANAGE_ROLES], t)
                }
            }

            function u(t, e) {
                return {
                    title: e,
                    permissions: o([r.Pl.CREATE_INSTANT_INVITE], t)
                }
            }

            function A(t, e, n) {
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
                    permissions: o(i, t)
                }
            }

            function N(t, e, n) {
                var i = [r.Pl.CONNECT, r.Pl.SPEAK, r.Pl.STREAM, r.Pl.USE_EMBEDDED_ACTIVITIES, r.Pl.USE_SOUNDBOARD, r.Pl.USE_EXTERNAL_SOUNDS, r.Pl.USE_VAD, r.Pl.PRIORITY_SPEAKER, r.Pl.MUTE_MEMBERS, r.Pl.DEAFEN_MEMBERS, r.Pl.MOVE_MEMBERS];
                n.showVoiceChannelStatusPermission && i.push(r.Pl.SET_VOICE_CHANNEL_STATUS);
                return {
                    title: e,
                    permissions: o(i, t)
                }
            }

            function R(t, e, n) {
                var i = [r.Pl.SEND_MESSAGES, r.Pl.EMBED_LINKS, r.Pl.ATTACH_FILES, r.Pl.ADD_REACTIONS, r.Pl.USE_EXTERNAL_EMOJIS, r.Pl.USE_EXTERNAL_STICKERS, r.Pl.MENTION_EVERYONE, r.Pl.MANAGE_MESSAGES, r.Pl.READ_MESSAGE_HISTORY, r.Pl.SEND_TTS_MESSAGES, r.Pl.USE_APPLICATION_COMMANDS];
                return {
                    title: e,
                    description: n.sectionDescription,
                    permissions: o(i, t)
                }
            }

            function f(t, e, n) {
                return {
                    title: e,
                    permissions: o(n ? [r.Pl.CONNECT, r.Pl.STREAM, r.Pl.MUTE_MEMBERS, r.Pl.MOVE_MEMBERS] : [r.Pl.CONNECT, r.Pl.MUTE_MEMBERS, r.Pl.MOVE_MEMBERS], t)
                }
            }

            function P(t, e) {
                return {
                    title: e,
                    permissions: o([r.Pl.REQUEST_TO_SPEAK, r.Pl.MENTION_EVERYONE], t)
                }
            }

            function O(t, e) {
                return {
                    title: e,
                    permissions: o([r.Pl.CREATE_EVENTS, r.Pl.MANAGE_EVENTS], t)
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
                Z: () => E
            });
            var r = n(667294);
            var i = [];

            function E(t, e) {
                var n = (0, r.useRef)(),
                    E = (0, r.useRef)(i);
                if (E.current === i) {
                    n.current = t();
                    E.current = e
                } else if (! function(t, e) {
                        if (t.length !== e.length) return !1;
                        for (var n = 0; n < e.length && n < t.length; n++)
                            if (!Object.is(t[n], e[n])) return !1;
                        return !0
                    }(e, E.current)) {
                    n.current = t();
                    E.current = e
                }
                return n.current
            }
        }
    }
]);