(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [56729, 41394, 98010], {
        429547: (e, t, n) => {
            e.exports = n.p + "750214196f39660492a313dbe5c84fe4.svg"
        },
        834005: (e, t, n) => {
            e.exports = n.p + "68458539d5672f6045fff5d505dd566a.svg"
        },
        441394: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                a = n.n(i),
                l = n(70418),
                o = n(473708),
                s = n(421683),
                u = n.n(s),
                c = Object.freeze({
                    DEFAULT: u().default,
                    FILLED: u().filled
                });

            function d(e) {
                var t = e.className,
                    n = e.onClick,
                    i = e["aria-label"],
                    s = e.look,
                    d = void 0 === s ? c.DEFAULT : s;
                return (0, r.jsx)(l.Clickable, {
                    "aria-label": null != i ? i : o.Z.Messages.REMOVE,
                    className: a()(u().button, d, t),
                    onClick: n
                })
            }
            d.Looks = c
        },
        108709: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => L
            });
            var r = n(785893),
                i = n(667294),
                a = n(294184),
                l = n.n(a),
                o = n(202351),
                s = n(70418),
                u = n(77413),
                c = n(441394),
                d = n(662478),
                f = n(739770),
                h = n(5544),
                m = n(470643),
                p = n(441143),
                v = n.n(p),
                g = n(245353),
                I = n(135855);
            var E = n(213424),
                _ = n(473708),
                b = n(369163),
                y = n.n(b);

            function C(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        C(e, t, n[t])
                    }))
                }
                return e
            }

            function D(e, t) {
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

            function L(e) {
                var t = e.className,
                    n = e.guildId,
                    a = e.error,
                    p = e.emojiId,
                    b = e.emojiName,
                    C = e.isRequiredField,
                    L = void 0 === C || C,
                    O = e.shouldUpdateBothEmojiFields,
                    j = void 0 !== O && O,
                    w = e.setEmojiId,
                    x = e.setEmojiName,
                    R = function(e) {
                        var t = e.emojiId,
                            n = e.emojiName,
                            r = (0, o.e7)([g.Z], (function() {
                                return null != t ? g.Z.getCustomEmojiById(t) : null
                            }));
                        if (null != r || null != n) {
                            if (null == t) {
                                v()(null != n, "emojiName must be defined if emojiId is not defined");
                                return I.ZP.convertSurrogateToName(n, !1)
                            }
                            return null == r ? void 0 : r.name
                        }
                    }({
                        emojiId: p,
                        emojiName: b
                    }),
                    S = (0, o.e7)([h.ZP], (function() {
                        return null != n ? h.ZP.getDefaultChannel(n) : null
                    })),
                    A = i.createRef(),
                    P = (0, d.Z)(A),
                    N = function(e) {
                        return function(t, n) {
                            if (null == (null == t ? void 0 : t.id)) x(null == t ? void 0 : t.optionallyDiverseSequence);
                            else {
                                j && x(null == t ? void 0 : t.name);
                                w(null == t ? void 0 : t.id)
                            }
                            n && e()
                        }
                    },
                    U = function(e) {
                        e.stopPropagation();
                        x(void 0);
                        w(void 0)
                    };
                return (0, r.jsx)(s.FormItem, {
                    required: L,
                    title: _.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
                    className: l()(t, y().section),
                    error: a,
                    children: (0,
                        r.jsx)(s.Popout, {
                        animation: s.Popout.Animation.NONE,
                        position: "top",
                        renderPopout: function(e) {
                            var t = e.closePopout;
                            return (0, r.jsx)(f.Z, {
                                closePopout: t,
                                pickerIntention: E.Hz.SOUNDBOARD,
                                onNavigateAway: t,
                                onSelectEmoji: N(t),
                                guildId: n,
                                channel: S
                            })
                        },
                        children: function(e, t) {
                            var n = t.isShown;
                            return (0, r.jsxs)("div", D(T({}, e), {
                                className: y().emojiInput,
                                ref: A,
                                children: [(0, r.jsx)(m.Z, {
                                    className: y().emojiButton,
                                    active: n,
                                    tabIndex: 0,
                                    renderButtonContents: null != p || null != b ? function() {
                                        return (0, r.jsx)(u.Z, {
                                            emojiName: b,
                                            emojiId: p
                                        })
                                    } : null
                                }), (0, r.jsx)(s.TextInput, {
                                    inputClassName: y().emojiText,
                                    placeholder: _.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
                                    value: null != R ? ":".concat(R, ":") : "",
                                    readOnly: !0
                                }), P && null != R && (0, r.jsx)(c.Z, D(T({}, e), {
                                    onClick: U,
                                    className: y().removeButton
                                }))]
                            }))
                        }
                    })
                })
            }
        },
        707233: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                i = n(667294),
                a = n(294184),
                l = n.n(a),
                o = n(70418),
                s = n(753419),
                u = n(393369),
                c = n.n(u);

            function d(e) {
                var t = e.filename,
                    n = e.className,
                    a = e.filters,
                    u = e.buttonText,
                    d = e.placeholder,
                    f = e.onFileSelect,
                    h = i.useRef(null);
                return (0, r.jsxs)("div", {
                    className: l()(n, c().fileUpload),
                    children: [(0, r.jsx)("input", {
                        className: c().fileUploadInput,
                        tabIndex: -1,
                        readOnly: !0,
                        placeholder: d,
                        type: "text",
                        value: t
                    }), (0, r.jsxs)(o.Button, {
                        size: o.Button.Sizes.MIN,
                        className: c().fileUploadButton,
                        children: [u, (0, r.jsx)(s.Z, {
                            ref: h,
                            tabIndex: -1,
                            onChange: function(e) {
                                var t, n = null === (t = e.currentTarget.files) || void 0 === t ? void 0 : t[0];
                                f(n)
                            },
                            multiple: !1,
                            filters: a
                        })]
                    })]
                })
            }
        },
        311260: (e, t, n) => {
            "use strict";
            n.d(t, {
                $p: () => c,
                AK: () => g,
                Ae: () => I,
                Es: () => p,
                PT: () => f,
                U$: () => h,
                kH: () => v
            });
            var r = n(496486),
                i = n(921431);

            function a(e, t, n, r, i, a, l) {
                try {
                    var o = e[a](l),
                        s = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(s) : Promise.resolve(s).then(r, i)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var l = e.apply(t, n);

                        function o(e) {
                            a(l, r, i, o, s, "next", e)
                        }

                        function s(e) {
                            a(l, r, i, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var o = function(e, t) {
                var n, r, i, a, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function o(a) {
                    return function(o) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = t.call(e, l)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, o])
                    }
                }
            };

            function s(e) {
                return new Promise((function(t) {
                    var n = new FileReader;
                    n.onload = function(e) {
                        var n, r = null === (n = e.target) || void 0 === n ? void 0 : n.result;
                        t("string" == typeof r ? r : "")
                    };
                    n.readAsDataURL(e)
                }))
            }

            function u(e, t, n, r) {
                var i = e.naturalWidth / e.width,
                    a = t.width / 2,
                    l = t.height / 2,
                    o = (e.width / 2 - a - n.x) * i,
                    s = (e.height / 2 - l - n.y) * i,
                    u = t.width * i,
                    c = t.height * i;
                return {
                    x: o,
                    y: s,
                    scaledCropWidth: u,
                    scaledCropHeight: c,
                    canvasWidth: Math.min(u, r.width),
                    canvasHeight: Math.min(c, r.height)
                }
            }

            function c(e, t, n, r, i) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = l((function(e, t, r, a, l) {
                    var c, d, f, h, m, p, v, g;
                    return o(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                c = u(t, r, a, l), d = c.x, f = c.y, h = c.scaledCropWidth, m = c.scaledCropHeight;
                                return [4, e.arrayBuffer()];
                            case 1:
                                p = o.sent();
                                v = new Worker(new URL(n.p + n.u(92827), n.b));
                                g = new Promise((function(e, t) {
                                    v.onmessage = function(n) {
                                        var r = n.data;
                                        if (r.type === i.u.CROP_GIF_COMPLETE) {
                                            e(s(new Blob([r.result])));
                                            v.terminate()
                                        } else if (r.type === i.u.CROP_GIF_ERROR) {
                                            t(new Error("Error cropping GIF"));
                                            v.terminate()
                                        }
                                    }
                                }));
                                v.postMessage({
                                    type: i.u.CROP_GIF_START,
                                    gif: new Uint8Array(p),
                                    x: 0 | d,
                                    y: 0 | f,
                                    width: 0 | h,
                                    height: 0 | m
                                });
                                return [2, {
                                    result: g,
                                    cancelFn: function() {
                                        return v.terminate()
                                    }
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function f(e, t, n, r) {
                var i = u(e, t, n, r),
                    a = i.x,
                    l = i.y,
                    o = i.scaledCropWidth,
                    s = i.scaledCropHeight,
                    c = i.canvasWidth,
                    d = i.canvasHeight,
                    f = document.createElement("canvas");
                f.width = c;
                f.height = d;
                var h = f.getContext("2d");
                null != h && h.drawImage(e, a, l, o, s, 0, 0, f.width, f.height);
                return f.toDataURL("image/png")
            }

            function h(e, t, n) {
                return {
                    x: (0, r.clamp)(e, n.left, n.right),
                    y: (0, r.clamp)(t, n.bottom, n.top)
                }
            }

            function m(e, t, n, r) {
                var a = n,
                    l = r;
                if (n > i.vJ) {
                    a = i.vJ;
                    l = r * (i.vJ / n)
                }
                return n / r < e ? {
                    width: a,
                    height: l
                } : {
                    width: a * (t / l),
                    height: t
                }
            }

            function p(e, t, n) {
                switch (e) {
                    case i.pC.AVATAR:
                    case i.pC.AVATAR_DECORATION:
                        return {
                            width: t, height: n
                        };
                    case i.pC.BANNER:
                        return m(i.MY, i.qj, t, n);
                    case i.pC.GUILD_BANNER:
                        return m(i.Ij, i.C5, t, n);
                    case i.pC.VIDEO_BACKGROUND:
                        return m(i.Ff, i.PB, t, n);
                    case i.pC.SCHEDULED_EVENT_IMAGE:
                        return m(i.ut, i.WV, t, n);
                    case i.pC.HOME_HEADER:
                        return m(i.sX, i.SW, t, n)
                }
            }

            function v(e, t, n) {
                var r = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    i = e - n.width,
                    a = t - n.height;
                if (0 !== i) {
                    r.left = -Math.abs(i / 2);
                    r.right = i / 2
                }
                if (0 !== a) {
                    r.bottom = -Math.abs(a / 2);
                    r.top = a / 2
                }
                return r
            }

            function g(e, t, n, r) {
                switch (e) {
                    case i.pC.AVATAR:
                    case i.pC.AVATAR_DECORATION:
                        var a = Math.min(t, n);
                        return {
                            width: a, height: a
                        };
                    case i.pC.BANNER:
                        var l = Math.min(t, i.vJ);
                        return {
                            width: l, height: l * (1 / i.MY)
                        };
                    case i.pC.GUILD_BANNER:
                        var o = Math.min(t, i.vJ);
                        return {
                            width: o, height: Math.min(o * (9 / 16), r)
                        };
                    case i.pC.VIDEO_BACKGROUND:
                        var s = Math.min(t, i.vJ);
                        return {
                            width: s, height: s * (9 / 16)
                        };
                    case i.pC.SCHEDULED_EVENT_IMAGE:
                        var u = Math.min(t, i.vJ);
                        return {
                            width: u, height: .4 * u
                        };
                    case i.pC.HOME_HEADER:
                        var c = Math.min(t, i.vJ);
                        return {
                            width: c, height: c * (1 / i.sX)
                        }
                }
            }

            function I(e, t, n) {
                var r = e.naturalWidth / e.naturalHeight,
                    i = t,
                    a = n;
                e.naturalWidth > e.naturalHeight ? i /= r : a *= r;
                var l = {
                    height: i,
                    width: a
                };
                return f(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, l)
            }
        },
        856729: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => Y
            });
            var r = n(785893),
                i = n(667294),
                a = n(294184),
                l = n.n(a),
                o = n(228721),
                s = n(202351),
                u = n(575945),
                c = n(70418),
                d = n(245353),
                f = n(108709),
                h = n(707233),
                m = n(311260),
                p = n(64234),
                v = n(473903),
                g = n(107364),
                I = n(386991),
                E = n(652591),
                _ = n(452723),
                b = n(348592),
                y = n(347117),
                C = n(840598),
                T = (0, n(260561).B)({
                    kind: "guild",
                    id: "2021-07_stickers_lottie_upload",
                    label: "Lottie Sticker Uploads",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Allow Lottie sticker uploads",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                D = n(514351),
                L = n(513586),
                O = n(622902),
                j = n(719833),
                w = n(2590),
                x = n(473708),
                R = n(679900),
                S = n.n(R),
                A = n(429547),
                P = n.n(A),
                N = n(834005),
                U = n.n(N);

            function M(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function k(e, t, n, r, i, a, l) {
                try {
                    var o = e[a](l),
                        s = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(s) : Promise.resolve(s).then(r, i)
            }

            function Z(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function l(e) {
                            k(a, r, i, l, o, "next", e)
                        }

                        function o(e) {
                            k(a, r, i, l, o, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function B(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            l = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return M(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var K = function(e, t) {
                    var n, r, i, a, l = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: o(0),
                        throw: o(1),
                        return: o(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function o(a) {
                        return function(o) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    (r = 0, i) && (a = [2 & a[0], i.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                l.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && l.label < i[1]) {
                                                l.label = i[1];
                                                i = a;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2];
                                                l.ops.push(a);
                                                break
                                            }
                                            i[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, l)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, o])
                        }
                    }
                },
                F = 320,
                H = new Set(["application/json", "image/png", "image/apng", "image/gif"]),
                z = [{
                    name: "Sticker file",
                    extensions: ["json", "png", "apng", "gif"]
                }];

            function V(e, t) {
                E.default.track(w.rMx.STICKER_UPLOAD_COMPLETED, {
                    successful: e,
                    error: null != t ? t : ""
                })
            }
            var W = function(e) {
                var t = e.stickerPreview;
                return (0, r.jsxs)("div", {
                    className: S().preview,
                    children: [(0, r.jsx)("div", {
                        className: S().previewDark,
                        children: null != t ? t : (0, r.jsx)("img", {
                            src: P(),
                            alt: x.Z.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
                        })
                    }), (0, r.jsx)("div", {
                        className: S().previewLight,
                        children: null != t ? t : (0, r.jsx)("img", {
                            src: U(),
                            alt: x.Z.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
                        })
                    })]
                })
            };

            function J(e) {
                return q.apply(this, arguments)
            }

            function q() {
                return (q = Z((function(e) {
                    var t, n, r;
                    return K(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, (0, y.fD)(e)];
                            case 1:
                                t = i.sent();
                                (n = new Image).src = t;
                                return [4, n.decode()];
                            case 2:
                                i.sent();
                                r = (0, m.Ae)(n, F, F);
                                return [2, (0, y.Bo)(r, e.name, e.type)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Y(e) {
                var t, n, a, m, R, A, P, N, U, M = e.transitionState,
                    k = e.onClose,
                    F = e.guildId,
                    q = e.sticker,
                    Y = (0, s.e7)([p.Z], (function() {
                        return p.Z.theme
                    })),
                    X = (0, s.e7)([d.Z], (function() {
                        return null != (null == q ? void 0 : q.tags) ? d.Z.getCustomEmojiById(q.tags) : null
                    })),
                    $ = null !== (n = null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n ? j.OC : j.Ht,
                    Q = G(i.useState(null), 2),
                    ee = Q[0],
                    te = Q[1],
                    ne = G(i.useState(null !== (a = null == q ? void 0 : q.name) && void 0 !== a ? a : ""), 2),
                    re = ne[0],
                    ie = ne[1],
                    ae = G(i.useState({
                        file: null,
                        filename: null !== (m = (0, L._V)(q)) && void 0 !== m ? m : ""
                    }), 2),
                    le = ae[0],
                    oe = ae[1],
                    se = G(i.useState(null == X ? void 0 : X.id), 2),
                    ue = se[0],
                    ce = se[1],
                    de = G(i.useState(null !== (R = null == X ? void 0 : X.name) && void 0 !== R ? R : null == q ? void 0 : q.tags), 2),
                    fe = de[0],
                    he = de[1],
                    me = G(i.useState(null !== (A = null == q ? void 0 : q.description) && void 0 !== A ? A : ""), 2),
                    pe = me[0],
                    ve = me[1],
                    ge = G(i.useState(!1), 2),
                    Ie = ge[0],
                    Ee = ge[1],
                    _e = G(i.useState(null), 2),
                    be = _e[0],
                    ye = _e[1],
                    Ce = null != q,
                    Te = Ce || null != (null == le ? void 0 : le.file),
                    De = 0 === pe.length || pe.length >= 2 && pe.length <= 100,
                    Le = !Ie && !0 !== (null == be ? void 0 : be.isBlocking) && re.length >= 2 && (null != ue || null != fe || null != (null == q ? void 0 : q.tags) && "" !== (null == q ? void 0 : q.tags)) && Te && De,
                    Oe = T.getCurrentConfig({
                        guildId: F,
                        location: "d3a320_1"
                    }).enabled,
                    je = (P = Z((function(e) {
                        var t, n, r, i, a, l, s, u;
                        return K(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    if (null == e) return [2];
                                    n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                                    if (!H.has(n)) {
                                        ye({
                                            message: x.Z.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
                                            isBlocking: !0
                                        });
                                        return [2]
                                    }
                                    r = e;
                                    return (i = "image/png" === n && e.size > $) ? [4, (0,
                                        y.c0)(e)] : [3, 2];
                                case 1:
                                    i = !c.sent();
                                    c.label = 2;
                                case 2:
                                    return i ? [4, J(e)] : [3, 4];
                                case 3:
                                    r = c.sent();
                                    a = r.size > $;
                                    E.default.track(w.rMx.STICKER_FILE_RESIZED, {
                                        original_file_size_bytes: e.size,
                                        resized_file_size_bytes: r.size,
                                        resized_file_too_big: a
                                    });
                                    c.label = 4;
                                case 4:
                                    if (r.size > $) {
                                        ye({
                                            message: x.Z.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
                                                maxSize: (0, _.IC)($, {
                                                    useKibibytes: !0
                                                })
                                            }),
                                            isBlocking: null == le.file
                                        });
                                        E.default.track(w.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                            size: r.size,
                                            filetype: n
                                        });
                                        return [2]
                                    }
                                    if ((l = (0, L.Zv)(r.type)) !== D.u3.LOTTIE) return [3, 5];
                                    if (!Oe) {
                                        ye({
                                            message: x.Z.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
                                                articleURL: b.Z.getArticleURL(w.BhN.STICKERS_UPLOAD)
                                            }),
                                            isBlocking: !0
                                        });
                                        return [2]
                                    }(s = new FileReader).addEventListener("load", (function() {
                                        te({
                                            id: (0, o.Z)(),
                                            formatType: l,
                                            content: s.result
                                        });
                                        ye(null)
                                    }));
                                    s.readAsText(r);
                                    return [3, 7];
                                case 5:
                                    return [4, (0, y.fD)(r)];
                                case 6:
                                    u = c.sent();
                                    te({
                                        id: (0, o.Z)(),
                                        formatType: l,
                                        content: u
                                    });
                                    ye(null);
                                    c.label = 7;
                                case 7:
                                    oe({
                                        file: r,
                                        filename: r.name
                                    });
                                    return [2]
                            }
                        }))
                    })), function(e) {
                        return P.apply(this, arguments)
                    }),
                    we = function() {
                        var e = Z((function(e) {
                            var t, n, r, i, a, l, o, s;
                            return K(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        e.preventDefault();
                                        r = null !== (n = null !== (t = null != ue ? ue : fe) && void 0 !== t ? t : null == q ? void 0 : q.tags) && void 0 !== n ? n : "";
                                        u.label = 1;
                                    case 1:
                                        u.trys.push([1, 6, 7, 8]);
                                        Ee(!0);
                                        return Ce ? [4, (0, C.Jf)(F, null !== (i = null == q ? void 0 : q.id) && void 0 !== i ? i : "", {
                                            name: re,
                                            tags: r,
                                            description: pe
                                        })] : [3, 3];
                                    case 2:
                                        u.sent();
                                        return [3, 5];
                                    case 3:
                                        (l = new FormData).append("name", re);
                                        l.append("tags", r);
                                        l.append("description", pe);
                                        null != (null == le ? void 0 : le.file) && l.append("file", le.file);
                                        c = null !== (o = null === (a = le.file) || void 0 === a ? void 0 : a.type) && void 0 !== o ? o : "", E.default.track(w.rMx.STICKER_UPLOAD_STARTED, {
                                            filetype: c
                                        });
                                        return [4, (0, C.lY)(F, l)];
                                    case 4:
                                        u.sent();
                                        V(!0);
                                        u.label = 5;
                                    case 5:
                                        k();
                                        return [3, 8];
                                    case 6:
                                        s = u.sent();
                                        ye({
                                            message: s.body.message,
                                            isBlocking: !1
                                        });
                                        V(!1, s.body.message);
                                        return [3, 8];
                                    case 7:
                                        Ee(!1);
                                        return [7];
                                    case 8:
                                        return [2]
                                }
                                var c
                            }))
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    xe = i.useCallback((function() {
                        ye({
                            message: x.Z.Messages.GUILD_STICKER_INVALID_STICKER,
                            isBlocking: !0
                        })
                    }), []),
                    Re = function(e) {
                        var t = e.sticker,
                            n = e.previewData,
                            i = e.onStickerError;
                        if (null != t) return (0, r.jsx)(O.ZP, {
                            size: 160,
                            sticker: t
                        });
                        if (null == n) return null;
                        var a = n.id,
                            l = n.formatType,
                            o = n.content;
                        return (0, r.jsx)(O.ZP, {
                            assetData: o,
                            fileUri: o,
                            size: 160,
                            sticker: {
                                name: a,
                                description: "",
                                id: a,
                                pack_id: "",
                                format_type: l
                            },
                            onError: i
                        }, a)
                    }({
                        sticker: q,
                        previewData: ee,
                        onStickerError: xe
                    }),
                    Se = Oe ? x.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : x.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
                return (0, r.jsxs)(c.ModalRoot, {
                    transitionState: M,
                    "aria-labelledby": "STICKER_UPLOAD_MODAL",
                    className: S().modal,
                    children: [(0, r.jsx)(c.ModalCloseButton, {
                        onClick: k,
                        className: S().modalClose
                    }), (0, r.jsxs)("form", {
                        onSubmit: we,
                        className: S().form,
                        children: [(0, r.jsxs)(c.ModalContent, {
                            className: S().modalContent,
                            children: [(0, r.jsxs)(c.ModalHeader, {
                                direction: g.Z.Direction.VERTICAL,
                                separator: !1,
                                className: S().modalHeader,
                                children: [(0, r.jsx)(c.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: S().modalHeaderTitle,
                                    children: x.Z.Messages.GUILD_STICKER_UPLOAD_TITLE
                                }), (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: Se.format({
                                        fileSize: (0, _.IC)(j.Ht, {
                                            useKibibytes: !0
                                        })
                                    })
                                })]
                            }), (0, r.jsx)(c.FormSection, {
                                title: x.Z.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
                                className: S().formItem,
                                children: (0, r.jsx)(W, {
                                    stickerPreview: Re
                                })
                            }), (0, r.jsxs)(c.FormSection, {
                                className: l()(S().formItem, S().formItemRow),
                                children: [(0, r.jsx)(c.FormItem, {
                                    title: Ce ? x.Z.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : x.Z.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
                                    required: !0,
                                    className: S().formItemRowChild,
                                    children: Ce ? (0, r.jsx)(c.TextInput, {
                                        disabled: !0,
                                        value: null !== (N = null == le ? void 0 : le.filename) && void 0 !== N ? N : ""
                                    }) : (0, r.jsx)(h.Z, {
                                        buttonText: x.Z.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
                                        filters: z,
                                        filename: null !== (U = null == le ? void 0 : le.filename) && void 0 !== U ? U : "",
                                        placeholder: x.Z.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
                                        onFileSelect: je
                                    })
                                }), (0, r.jsx)(f.Z, {
                                    className: S().formItemRowChild,
                                    guildId: F,
                                    emojiId: ue,
                                    emojiName: fe,
                                    setEmojiId: ce,
                                    setEmojiName: he,
                                    shouldUpdateBothEmojiFields: !0
                                })]
                            }), (0, r.jsx)(c.FormItem, {
                                title: x.Z.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
                                required: !0,
                                className: S().formItem,
                                children: (0, r.jsx)(c.TextInput, {
                                    value: re,
                                    onChange: ie,
                                    placeholder: x.Z.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
                                    maxLength: 30
                                })
                            }), (0, r.jsxs)("div", {
                                className: S().formItem,
                                children: [(0, r.jsxs)(c.FormTitle, {
                                    children: [x.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE, (0, r.jsx)(c.Tooltip, {
                                        text: x.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
                                        children: function(e) {
                                            return (0, r.jsx)(I.Z, function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        B(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({
                                                className: S().infoIcon
                                            }, e))
                                        }
                                    })]
                                }), (0, r.jsx)(c.TextArea, {
                                    value: pe,
                                    onChange: ve,
                                    placeholder: x.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
                                    maxLength: 100
                                })]
                            }), null != be && (0, r.jsx)(c.Text, {
                                className: S().formItem,
                                variant: "text-sm/normal",
                                color: "text-danger",
                                children: be.message
                            })]
                        }), (0, r.jsxs)(c.ModalFooter, {
                            className: S().modalFooter,
                            children: [(0, r.jsx)(c.Button, {
                                type: "submit",
                                disabled: !Le,
                                children: Ce ? x.Z.Messages.GUILD_STICKERS_UPDATE : x.Z.Messages.UPLOAD
                            }), (0, r.jsx)(c.Button, {
                                look: c.Button.Looks.LINK,
                                color: (0, u.ap)(Y) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
                                onClick: k,
                                children: x.Z.Messages.NEVERMIND
                            })]
                        })]
                    })]
                })
            }
        }
    }
]);