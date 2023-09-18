"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [82761, 41394], {
        441394: (t, e, r) => {
            r.d(e, {
                Z: () => s
            });
            var n = r(785893),
                i = (r(667294), r(294184)),
                a = r.n(i),
                o = r(882723),
                c = r(473708),
                u = r(165580),
                h = r.n(u),
                l = Object.freeze({
                    DEFAULT: h().default,
                    FILLED: h().filled
                });

            function s(t) {
                var e = t.className,
                    r = t.onClick,
                    i = t["aria-label"],
                    u = t.look,
                    s = void 0 === u ? l.DEFAULT : u;
                return (0, n.jsx)(o.Clickable, {
                    "aria-label": null != i ? i : c.Z.Messages.REMOVE,
                    className: a()(h().button, s, e),
                    onClick: r
                })
            }
            s.Looks = l
        },
        921431: (t, e, r) => {
            r.d(e, {
                pC: () => n,
                vJ: () => o,
                L0: () => c,
                f: () => u,
                X_: () => h,
                _T: () => l,
                d6: () => s,
                xT: () => f,
                N8: () => p,
                Uo: () => d,
                MY: () => E,
                Ij: () => v,
                ut: () => O,
                sX: () => g,
                qj: () => w,
                C5: () => b,
                WV: () => A,
                SW: () => C,
                Ff: () => y,
                PB: () => R,
                u: () => a
            });
            var n, i = r(232806);
            ! function(t) {
                t[t.AVATAR = 0] = "AVATAR";
                t[t.BANNER = 1] = "BANNER";
                t[t.GUILD_BANNER = 2] = "GUILD_BANNER";
                t[t.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND";
                t[t.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE";
                t[t.HOME_HEADER = 5] = "HOME_HEADER";
                t[t.AVATAR_DECORATION = 6] = "AVATAR_DECORATION"
            }(n || (n = {}));
            var a, o = 568,
                c = 2400,
                u = 848,
                h = 2400,
                l = 1350,
                s = 2400,
                f = 960,
                p = 2400,
                d = 600,
                E = 17 / 6,
                v = 16 / 9,
                O = 2.5,
                g = 4,
                w = o / E,
                b = o / v,
                A = o / O,
                C = o / g,
                y = i.HE.width / i.HE.height,
                R = o / y;
            ! function(t) {
                t[t.CROP_GIF_START = 0] = "CROP_GIF_START";
                t[t.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE";
                t[t.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
            }(a || (a = {}))
        },
        311260: (t, e, r) => {
            r.d(e, {
                $p: () => l,
                PT: () => f,
                U$: () => p,
                Es: () => E,
                kH: () => v,
                AK: () => O,
                Ae: () => g
            });
            var n = r(496486),
                i = r(921431);

            function a(t, e, r, n, i, a, o) {
                try {
                    var c = t[a](o),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? e(u) : Promise.resolve(u).then(n, i)
            }

            function o(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = t.apply(e, r);

                        function c(t) {
                            a(o, n, i, c, u, "next", t)
                        }

                        function u(t) {
                            a(o, n, i, c, u, "throw", t)
                        }
                        c(void 0)
                    }))
                }
            }
            var c = function(t, e) {
                var r, n, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function c(a) {
                    return function(c) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                (n = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        n = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = e.call(t, o)
                            } catch (t) {
                                a = [6, t];
                                n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, c])
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

            function h(t, e, r, n) {
                var i = t.naturalWidth / t.width,
                    a = e.width / 2,
                    o = e.height / 2,
                    c = (t.width / 2 - a - r.x) * i,
                    u = (t.height / 2 - o - r.y) * i,
                    h = e.width * i,
                    l = e.height * i;
                return {
                    x: c,
                    y: u,
                    scaledCropWidth: h,
                    scaledCropHeight: l,
                    canvasWidth: Math.min(h, n.width),
                    canvasHeight: Math.min(l, n.height)
                }
            }

            function l(t, e, r, n, i) {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = o((function(t, e, n, a, o) {
                    var l, s, f, p, d, E, v, O;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                l = h(e, n, a, o), s = l.x, f = l.y, p = l.scaledCropWidth, d = l.scaledCropHeight;
                                return [4, t.arrayBuffer()];
                            case 1:
                                E = c.sent();
                                v = new Worker(new URL(r.p + r.u(92827), r.b));
                                O = new Promise((function(t, e) {
                                    v.onmessage = function(r) {
                                        var n = r.data;
                                        if (n.type === i.u.CROP_GIF_COMPLETE) {
                                            t(u(new Blob([n.result])));
                                            v.terminate()
                                        } else if (n.type === i.u.CROP_GIF_ERROR) {
                                            e(new Error("Error cropping GIF"));
                                            v.terminate()
                                        }
                                    }
                                }));
                                v.postMessage({
                                    type: i.u.CROP_GIF_START,
                                    gif: new Uint8Array(E),
                                    x: 0 | s,
                                    y: 0 | f,
                                    width: 0 | p,
                                    height: 0 | d
                                });
                                return [2, {
                                    result: O,
                                    cancelFn: function() {
                                        return v.terminate()
                                    }
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function f(t, e, r, n) {
                var i = h(t, e, r, n),
                    a = i.x,
                    o = i.y,
                    c = i.scaledCropWidth,
                    u = i.scaledCropHeight,
                    l = i.canvasWidth,
                    s = i.canvasHeight,
                    f = document.createElement("canvas");
                f.width = l;
                f.height = s;
                var p = f.getContext("2d");
                null != p && p.drawImage(t, a, o, c, u, 0, 0, f.width, f.height);
                return f.toDataURL("image/png")
            }

            function p(t, e, r) {
                return {
                    x: (0, n.clamp)(t, r.left, r.right),
                    y: (0, n.clamp)(e, r.bottom, r.top)
                }
            }

            function d(t, e, r, n) {
                var a = r,
                    o = n;
                if (r > i.vJ) {
                    a = i.vJ;
                    o = n * (i.vJ / r)
                }
                return r / n < t ? {
                    width: a,
                    height: o
                } : {
                    width: a * (e / o),
                    height: e
                }
            }

            function E(t, e, r) {
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

            function v(t, e, r) {
                var n = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    i = t - r.width,
                    a = e - r.height;
                if (0 !== i) {
                    n.left = -Math.abs(i / 2);
                    n.right = i / 2
                }
                if (0 !== a) {
                    n.bottom = -Math.abs(a / 2);
                    n.top = a / 2
                }
                return n
            }

            function O(t, e, r, n) {
                switch (t) {
                    case i.pC.AVATAR:
                    case i.pC.AVATAR_DECORATION:
                        var a = Math.min(e, r);
                        return {
                            width: a, height: a
                        };
                    case i.pC.BANNER:
                        var o = Math.min(e, i.vJ);
                        return {
                            width: o, height: o * (1 / i.MY)
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
                        var h = Math.min(e, i.vJ);
                        return {
                            width: h, height: .4 * h
                        };
                    case i.pC.HOME_HEADER:
                        var l = Math.min(e, i.vJ);
                        return {
                            width: l, height: l * (1 / i.sX)
                        }
                }
            }

            function g(t, e, r) {
                var n = t.naturalWidth / t.naturalHeight,
                    i = e,
                    a = r;
                t.naturalWidth > t.naturalHeight ? i /= n : a *= n;
                var o = {
                    height: i,
                    width: a
                };
                return f(t, {
                    width: t.width,
                    height: t.height
                }, {
                    x: 0,
                    y: 0
                }, o)
            }
        },
        386991: (t, e, r) => {
            r.d(e, {
                Z: () => u
            });
            var n = r(785893),
                i = (r(667294), r(633878));

            function a(t, e, r) {
                e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r;
                return t
            }

            function o(t, e) {
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

            function c(t, e) {
                if (null == t) return {};
                var r, n, i = function(t, e) {
                    if (null == t) return {};
                    var r, n, i = {},
                        a = Object.keys(t);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        e.indexOf(r) >= 0 || (i[r] = t[r])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
                    }
                }
                return i
            }

            function u(t) {
                var e = t.width,
                    r = void 0 === e ? 16 : e,
                    u = t.height,
                    h = void 0 === u ? 16 : u,
                    l = t.color,
                    s = void 0 === l ? "currentColor" : l,
                    f = t.foreground,
                    p = c(t, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", o(function(t) {
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
                }({}, (0, i.Z)(p)), {
                    width: r,
                    height: h,
                    viewBox: "0 0 12 12",
                    children: (0, n.jsx)("path", {
                        fill: s,
                        className: f,
                        d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                    })
                }))
            }
        }
    }
]);