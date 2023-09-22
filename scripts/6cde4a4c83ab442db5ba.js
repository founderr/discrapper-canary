"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [72935], {
        43338: (t, e, r) => {
            r.d(e, {
                X: () => l
            });
            var n = r(785893),
                i = (r(667294), r(795308)),
                o = r(633878);

            function a(t, e, r) {
                e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r;
                return t
            }

            function c(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(e)).forEach((function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                }));
                return t
            }

            function u(t, e) {
                if (null == t) return {};
                var r, n, i = function(t, e) {
                    if (null == t) return {};
                    var r, n, i = {},
                        o = Object.keys(t);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        e.indexOf(r) >= 0 || (i[r] = t[r])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
                    }
                }
                return i
            }
            var l = function(t) {
                var e = t.width,
                    r = void 0 === e ? 24 : e,
                    l = t.height,
                    h = void 0 === l ? 24 : l,
                    s = t.color,
                    f = void 0 === s ? i.Z.colors.INTERACTIVE_NORMAL : s,
                    p = t.colorClass,
                    d = void 0 === p ? "" : p,
                    b = u(t, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable
                        }))));
                        n.forEach((function(e) {
                            a(t, e, r[e])
                        }))
                    }
                    return t
                }({}, (0, o.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: h,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm13.35 8.133 3.5 4.667a.75.75 0 0 1-.6 1.2H5.81a.75.75 0 0 1-.585-1.218l1.854-2.318a1.5 1.5 0 0 1 2.342 0l.506.633 2.223-2.964a2 2 0 0 1 3.2 0Zm-5.146-7.156c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }
        },
        311260: (t, e, r) => {
            r.d(e, {
                $p: () => h,
                PT: () => f,
                U$: () => p,
                Es: () => b,
                kH: () => g,
                AK: () => v,
                Ae: () => y
            });
            var n = r(496486),
                i = r(921431);

            function o(t, e, r, n, i, o, a) {
                try {
                    var c = t[o](a),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? e(u) : Promise.resolve(u).then(n, i)
            }

            function a(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var a = t.apply(e, r);

                        function c(t) {
                            o(a, n, i, c, u, "next", t)
                        }

                        function u(t) {
                            o(a, n, i, c, u, "throw", t)
                        }
                        c(void 0)
                    }))
                }
            }
            var c = function(t, e) {
                var r, n, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function c(o) {
                    return function(c) {
                        return function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                (n = 0, i) && (o = [2 & o[0], i.value]);
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
                                        n = o[1];
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
                                o = e.call(t, a)
                            } catch (t) {
                                o = [6, t];
                                n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, c])
                    }
                }
            };

            function u(t) {
                return new Promise((function(e) {
                    var r = new FileReader;
                    r.onload = function(t) {
                        var r, n = null === (r = t.target) || void 0 === r ? void 0 : r.result;
                        e("string" == typeof n ? n : "")
                    };
                    r.readAsDataURL(t)
                }))
            }

            function l(t, e, r, n) {
                var i = t.naturalWidth / t.width,
                    o = e.width / 2,
                    a = e.height / 2,
                    c = (t.width / 2 - o - r.x) * i,
                    u = (t.height / 2 - a - r.y) * i,
                    l = e.width * i,
                    h = e.height * i;
                return {
                    x: c,
                    y: u,
                    scaledCropWidth: l,
                    scaledCropHeight: h,
                    canvasWidth: Math.min(l, n.width),
                    canvasHeight: Math.min(h, n.height)
                }
            }

            function h(t, e, r, n, i) {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = a((function(t, e, n, o, a) {
                    var h, s, f, p, d, b, g, v;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                h = l(e, n, o, a), s = h.x, f = h.y, p = h.scaledCropWidth, d = h.scaledCropHeight;
                                return [4, t.arrayBuffer()];
                            case 1:
                                b = c.sent();
                                g = new Worker(new URL(r.p + r.u(92827), r.b));
                                v = new Promise((function(t, e) {
                                    g.onmessage = function(r) {
                                        var n = r.data;
                                        if (n.type === i.u.CROP_GIF_COMPLETE) {
                                            t(u(new Blob([n.result])));
                                            g.terminate()
                                        } else if (n.type === i.u.CROP_GIF_ERROR) {
                                            e(new Error("Error cropping GIF"));
                                            g.terminate()
                                        }
                                    }
                                }));
                                g.postMessage({
                                    type: i.u.CROP_GIF_START,
                                    gif: new Uint8Array(b),
                                    x: 0 | s,
                                    y: 0 | f,
                                    width: 0 | p,
                                    height: 0 | d
                                });
                                return [2, {
                                    result: v,
                                    cancelFn: function() {
                                        return g.terminate()
                                    }
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function f(t, e, r, n) {
                var i = l(t, e, r, n),
                    o = i.x,
                    a = i.y,
                    c = i.scaledCropWidth,
                    u = i.scaledCropHeight,
                    h = i.canvasWidth,
                    s = i.canvasHeight,
                    f = document.createElement("canvas");
                f.width = h;
                f.height = s;
                var p = f.getContext("2d");
                null != p && p.drawImage(t, o, a, c, u, 0, 0, f.width, f.height);
                return f.toDataURL("image/png")
            }

            function p(t, e, r) {
                return {
                    x: (0, n.clamp)(t, r.left, r.right),
                    y: (0, n.clamp)(e, r.bottom, r.top)
                }
            }

            function d(t, e, r, n) {
                var o = r,
                    a = n;
                if (r > i.vJ) {
                    o = i.vJ;
                    a = n * (i.vJ / r)
                }
                return r / n < t ? {
                    width: o,
                    height: a
                } : {
                    width: o * (e / a),
                    height: e
                }
            }

            function b(t, e, r) {
                switch (t) {
                    case i.pC.AVATAR:
                    case i.pC.AVATAR_DECORATION:
                        return {
                            width: e, height: r
                        };
                    case i.pC.BANNER:
                        return d(i.MY, i.qj, e, r);
                    case i.pC.GUILD_BANNER:
                        return d(i.Ij, i.C5, e, r);
                    case i.pC.VIDEO_BACKGROUND:
                        return d(i.Ff, i.PB, e, r);
                    case i.pC.SCHEDULED_EVENT_IMAGE:
                        return d(i.ut, i.WV, e, r);
                    case i.pC.HOME_HEADER:
                        return d(i.sX, i.SW, e, r)
                }
            }

            function g(t, e, r) {
                var n = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    i = t - r.width,
                    o = e - r.height;
                if (0 !== i) {
                    n.left = -Math.abs(i / 2);
                    n.right = i / 2
                }
                if (0 !== o) {
                    n.bottom = -Math.abs(o / 2);
                    n.top = o / 2
                }
                return n
            }

            function v(t, e, r, n) {
                switch (t) {
                    case i.pC.AVATAR:
                    case i.pC.AVATAR_DECORATION:
                        var o = Math.min(e, r);
                        return {
                            width: o, height: o
                        };
                    case i.pC.BANNER:
                        var a = Math.min(e, i.vJ);
                        return {
                            width: a, height: a * (1 / i.MY)
                        };
                    case i.pC.GUILD_BANNER:
                        var c = Math.min(e, i.vJ);
                        return {
                            width: c, height: Math.min(c * (9 / 16), n)
                        };
                    case i.pC.VIDEO_BACKGROUND:
                        var u = Math.min(e, i.vJ);
                        return {
                            width: u, height: u * (9 / 16)
                        };
                    case i.pC.SCHEDULED_EVENT_IMAGE:
                        var l = Math.min(e, i.vJ);
                        return {
                            width: l, height: .4 * l
                        };
                    case i.pC.HOME_HEADER:
                        var h = Math.min(e, i.vJ);
                        return {
                            width: h, height: h * (1 / i.sX)
                        }
                }
            }

            function y(t, e, r) {
                var n = t.naturalWidth / t.naturalHeight,
                    i = e,
                    o = r;
                t.naturalWidth > t.naturalHeight ? i /= n : o *= n;
                var a = {
                    height: i,
                    width: o
                };
                return f(t, {
                    width: t.width,
                    height: t.height
                }, {
                    x: 0,
                    y: 0
                }, a)
            }
        },
        816240: (t, e, r) => {
            r.d(e, {
                Z: () => h
            });
            var n = r(785893),
                i = (r(667294), r(450520)),
                o = r(43338),
                a = r(633878);

            function c(t, e, r) {
                e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r;
                return t
            }

            function u(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(e)).forEach((function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                }));
                return t
            }

            function l(t, e) {
                if (null == t) return {};
                var r, n, i = function(t, e) {
                    if (null == t) return {};
                    var r, n, i = {},
                        o = Object.keys(t);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        e.indexOf(r) >= 0 || (i[r] = t[r])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
                    }
                }
                return i
            }
            const h = (0, i.hN)((function(t) {
                var e = t.width,
                    r = void 0 === e ? 24 : e,
                    i = t.height,
                    o = void 0 === i ? 24 : i,
                    h = t.color,
                    s = void 0 === h ? "currentColor" : h,
                    f = t.foreground,
                    p = l(t, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", u(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable
                        }))));
                        n.forEach((function(e) {
                            c(t, e, r[e])
                        }))
                    }
                    return t
                }({}, (0, a.Z)(p)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: f,
                        d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                        fill: s
                    })
                }))
            }), o.X)
        }
    }
]);