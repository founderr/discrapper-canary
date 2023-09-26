"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [82761, 41394], {
        441394: (e, t, r) => {
            r.d(t, {
                Z: () => h
            });
            var n = r(785893),
                i = (r(667294), r(294184)),
                o = r.n(i),
                a = r(304548),
                c = r(473708),
                l = r(421683),
                u = r.n(l),
                s = Object.freeze({
                    DEFAULT: u().default,
                    FILLED: u().filled
                });

            function h(e) {
                var t = e.className,
                    r = e.onClick,
                    i = e["aria-label"],
                    l = e.look,
                    h = void 0 === l ? s.DEFAULT : l;
                return (0, n.jsx)(a.Clickable, {
                    "aria-label": null != i ? i : c.Z.Messages.REMOVE,
                    className: o()(u().button, h, t),
                    onClick: r
                })
            }
            h.Looks = s
        },
        775428: (e, t, r) => {
            r.d(t, {
                d: () => u
            });
            var n = r(785893),
                i = (r(667294), r(795308)),
                o = r(633878);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            var u = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    h = e.color,
                    f = void 0 === h ? i.Z.colors.INTERACTIVE_NORMAL : h,
                    p = e.colorClass,
                    d = void 0 === p ? "" : p,
                    O = e.secondaryColor,
                    v = void 0 === O ? "transparent" : O,
                    b = e.secondaryColorClass,
                    g = void 0 === b ? "" : b,
                    y = l(e, ["width", "height", "color", "colorClass", "secondaryColor", "secondaryColorClass"]);
                return (0, n.jsxs)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.772 3.96a1 1 0 1 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: d
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof v ? v : v.css,
                        fillRule: "evenodd",
                        d: "M12.25 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm.478 2.71a1 1 0 0 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: g
                    })]
                }))
            }
        },
        921431: (e, t, r) => {
            r.d(t, {
                pC: () => n,
                vJ: () => a,
                L0: () => c,
                f: () => l,
                X_: () => u,
                _T: () => s,
                d6: () => h,
                xT: () => f,
                N8: () => p,
                Uo: () => d,
                MY: () => O,
                Ij: () => v,
                ut: () => b,
                sX: () => g,
                qj: () => y,
                C5: () => w,
                WV: () => E,
                SW: () => C,
                Ff: () => R,
                PB: () => A,
                u: () => o
            });
            var n, i = r(232806);
            ! function(e) {
                e[e.AVATAR = 0] = "AVATAR";
                e[e.BANNER = 1] = "BANNER";
                e[e.GUILD_BANNER = 2] = "GUILD_BANNER";
                e[e.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND";
                e[e.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE";
                e[e.HOME_HEADER = 5] = "HOME_HEADER";
                e[e.AVATAR_DECORATION = 6] = "AVATAR_DECORATION"
            }(n || (n = {}));
            var o, a = 568,
                c = 2400,
                l = 848,
                u = 2400,
                s = 1350,
                h = 2400,
                f = 960,
                p = 2400,
                d = 600,
                O = 17 / 6,
                v = 16 / 9,
                b = 2.5,
                g = 4,
                y = a / O,
                w = a / v,
                E = a / b,
                C = a / g,
                R = i.HE.width / i.HE.height,
                A = a / R;
            ! function(e) {
                e[e.CROP_GIF_START = 0] = "CROP_GIF_START";
                e[e.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE";
                e[e.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
            }(o || (o = {}))
        },
        311260: (e, t, r) => {
            r.d(t, {
                $p: () => s,
                PT: () => f,
                U$: () => p,
                Es: () => O,
                kH: () => v,
                AK: () => b,
                Ae: () => g
            });
            var n = r(496486),
                i = r(921431);

            function o(e, t, r, n, i, o, a) {
                try {
                    var c = e[o](a),
                        l = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(n, i)
            }

            function a(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var a = e.apply(t, r);

                        function c(e) {
                            o(a, n, i, c, l, "next", e)
                        }

                        function l(e) {
                            o(a, n, i, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var c = function(e, t) {
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
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e];
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

            function l(e) {
                return new Promise((function(t) {
                    var r = new FileReader;
                    r.onload = function(e) {
                        var r, n = null === (r = e.target) || void 0 === r ? void 0 : r.result;
                        t("string" == typeof n ? n : "")
                    };
                    r.readAsDataURL(e)
                }))
            }

            function u(e, t, r, n) {
                var i = e.naturalWidth / e.width,
                    o = t.width / 2,
                    a = t.height / 2,
                    c = (e.width / 2 - o - r.x) * i,
                    l = (e.height / 2 - a - r.y) * i,
                    u = t.width * i,
                    s = t.height * i;
                return {
                    x: c,
                    y: l,
                    scaledCropWidth: u,
                    scaledCropHeight: s,
                    canvasWidth: Math.min(u, n.width),
                    canvasHeight: Math.min(s, n.height)
                }
            }

            function s(e, t, r, n, i) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = a((function(e, t, n, o, a) {
                    var s, h, f, p, d, O, v, b;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                s = u(t, n, o, a), h = s.x, f = s.y, p = s.scaledCropWidth, d = s.scaledCropHeight;
                                return [4, e.arrayBuffer()];
                            case 1:
                                O = c.sent();
                                v = new Worker(new URL(r.p + r.u(92827), r.b));
                                b = new Promise((function(e, t) {
                                    v.onmessage = function(r) {
                                        var n = r.data;
                                        if (n.type === i.u.CROP_GIF_COMPLETE) {
                                            e(l(new Blob([n.result])));
                                            v.terminate()
                                        } else if (n.type === i.u.CROP_GIF_ERROR) {
                                            t(new Error("Error cropping GIF"));
                                            v.terminate()
                                        }
                                    }
                                }));
                                v.postMessage({
                                    type: i.u.CROP_GIF_START,
                                    gif: new Uint8Array(O),
                                    x: 0 | h,
                                    y: 0 | f,
                                    width: 0 | p,
                                    height: 0 | d
                                });
                                return [2, {
                                    result: b,
                                    cancelFn: function() {
                                        return v.terminate()
                                    }
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function f(e, t, r, n) {
                var i = u(e, t, r, n),
                    o = i.x,
                    a = i.y,
                    c = i.scaledCropWidth,
                    l = i.scaledCropHeight,
                    s = i.canvasWidth,
                    h = i.canvasHeight,
                    f = document.createElement("canvas");
                f.width = s;
                f.height = h;
                var p = f.getContext("2d");
                null != p && p.drawImage(e, o, a, c, l, 0, 0, f.width, f.height);
                return f.toDataURL("image/png")
            }

            function p(e, t, r) {
                return {
                    x: (0, n.clamp)(e, r.left, r.right),
                    y: (0, n.clamp)(t, r.bottom, r.top)
                }
            }

            function d(e, t, r, n) {
                var o = r,
                    a = n;
                if (r > i.vJ) {
                    o = i.vJ;
                    a = n * (i.vJ / r)
                }
                return r / n < e ? {
                    width: o,
                    height: a
                } : {
                    width: o * (t / a),
                    height: t
                }
            }

            function O(e, t, r) {
                switch (e) {
                    case i.pC.AVATAR:
                    case i.pC.AVATAR_DECORATION:
                        return {
                            width: t, height: r
                        };
                    case i.pC.BANNER:
                        return d(i.MY, i.qj, t, r);
                    case i.pC.GUILD_BANNER:
                        return d(i.Ij, i.C5, t, r);
                    case i.pC.VIDEO_BACKGROUND:
                        return d(i.Ff, i.PB, t, r);
                    case i.pC.SCHEDULED_EVENT_IMAGE:
                        return d(i.ut, i.WV, t, r);
                    case i.pC.HOME_HEADER:
                        return d(i.sX, i.SW, t, r)
                }
            }

            function v(e, t, r) {
                var n = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    i = e - r.width,
                    o = t - r.height;
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

            function b(e, t, r, n) {
                switch (e) {
                    case i.pC.AVATAR:
                    case i.pC.AVATAR_DECORATION:
                        var o = Math.min(t, r);
                        return {
                            width: o, height: o
                        };
                    case i.pC.BANNER:
                        var a = Math.min(t, i.vJ);
                        return {
                            width: a,
                                height: a * (1 / i.MY)
                        };
                    case i.pC.GUILD_BANNER:
                        var c = Math.min(t, i.vJ);
                        return {
                            width: c, height: Math.min(c * (9 / 16), n)
                        };
                    case i.pC.VIDEO_BACKGROUND:
                        var l = Math.min(t, i.vJ);
                        return {
                            width: l, height: l * (9 / 16)
                        };
                    case i.pC.SCHEDULED_EVENT_IMAGE:
                        var u = Math.min(t, i.vJ);
                        return {
                            width: u, height: .4 * u
                        };
                    case i.pC.HOME_HEADER:
                        var s = Math.min(t, i.vJ);
                        return {
                            width: s, height: s * (1 / i.sX)
                        }
                }
            }

            function g(e, t, r) {
                var n = e.naturalWidth / e.naturalHeight,
                    i = t,
                    o = r;
                e.naturalWidth > e.naturalHeight ? i /= n : o *= n;
                var a = {
                    height: i,
                    width: o
                };
                return f(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, a)
            }
        },
        386991: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                i = (r(667294), r(450520)),
                o = r(775428),
                a = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const s = (0, i.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    i = e.height,
                    o = void 0 === i ? 16 : i,
                    s = e.color,
                    h = void 0 === s ? "currentColor" : s,
                    f = e.foreground,
                    p = u(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(p)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 12 12",
                    children: (0, n.jsx)("path", {
                        fill: h,
                        className: f,
                        d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                    })
                }))
            }), o.d, {}, {
                size: 16
            })
        }
    }
]);