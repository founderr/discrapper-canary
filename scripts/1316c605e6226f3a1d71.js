"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [16815], {
        108709: (e, n, t) => {
            t.d(n, {
                Z: () => D
            });
            var r = t(785893),
                a = t(667294),
                o = t(294184),
                i = t.n(o),
                l = t(202351),
                u = t(882723),
                s = t(77413),
                c = t(441394),
                f = t(662478),
                d = t(403168),
                h = t(5544),
                m = t(470643),
                p = t(441143),
                v = t.n(p),
                y = t(245353),
                b = t(135855);
            var g = t(213424),
                O = t(473708),
                w = t(73197),
                S = t.n(w);

            function N(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function A(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        N(e, n, t[n])
                    }))
                }
                return e
            }

            function j(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function D(e) {
                var n = e.className,
                    t = e.guildId,
                    o = e.error,
                    p = e.emojiId,
                    w = e.emojiName,
                    N = e.isRequiredField,
                    D = void 0 === N || N,
                    x = e.shouldUpdateBothEmojiFields,
                    E = void 0 !== x && x,
                    _ = e.setEmojiId,
                    I = e.setEmojiName,
                    P = function(e) {
                        var n = e.emojiId,
                            t = e.emojiName,
                            r = (0, l.e7)([y.Z], (function() {
                                return null != n ? y.Z.getCustomEmojiById(n) : null
                            }));
                        if (null != r || null != t) {
                            if (null == n) {
                                v()(null != t, "emojiName must be defined if emojiId is not defined");
                                return b.ZP.convertSurrogateToName(t, !1)
                            }
                            return null == r ? void 0 : r.name
                        }
                    }({
                        emojiId: p,
                        emojiName: w
                    }),
                    M = (0, l.e7)([h.ZP], (function() {
                        return null != t ? h.ZP.getDefaultChannel(t) : null
                    })),
                    C = a.createRef(),
                    T = (0, f.Z)(C),
                    U = function(e) {
                        return function(n, t) {
                            if (null == (null == n ? void 0 : n.id)) I(null == n ? void 0 : n.optionallyDiverseSequence);
                            else {
                                E && I(null == n ? void 0 : n.name);
                                _(null == n ? void 0 : n.id)
                            }
                            t && e()
                        }
                    },
                    L = function(e) {
                        e.stopPropagation();
                        I(void 0);
                        _(void 0)
                    };
                return (0, r.jsx)(u.FormItem, {
                    required: D,
                    title: O.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
                    className: i()(n, S().section),
                    error: o,
                    children: (0, r.jsx)(u.Popout, {
                        animation: u.Popout.Animation.NONE,
                        position: "top",
                        renderPopout: function(e) {
                            var n = e.closePopout;
                            return (0, r.jsx)(d.Z, {
                                closePopout: n,
                                pickerIntention: g.Hz.SOUNDBOARD,
                                onNavigateAway: n,
                                onSelectEmoji: U(n),
                                guildId: t,
                                channel: M
                            })
                        },
                        children: function(e, n) {
                            var t = n.isShown;
                            return (0, r.jsxs)("div", j(A({}, e), {
                                className: S().emojiInput,
                                ref: C,
                                children: [(0, r.jsx)(m.Z, {
                                    className: S().emojiButton,
                                    active: t,
                                    tabIndex: 0,
                                    renderButtonContents: null != p || null != w ? function() {
                                        return (0, r.jsx)(s.Z, {
                                            emojiName: w,
                                            emojiId: p
                                        })
                                    } : null
                                }), (0, r.jsx)(u.TextInput, {
                                    inputClassName: S().emojiText,
                                    placeholder: O.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
                                    value: null != P ? ":".concat(P, ":") : "",
                                    readOnly: !0
                                }), T && null != P && (0, r.jsx)(c.Z, j(A({}, e), {
                                    onClick: L,
                                    className: S().removeButton
                                }))]
                            }))
                        }
                    })
                })
            }
        },
        707233: (e, n, t) => {
            t.d(n, {
                Z: () => f
            });
            var r = t(785893),
                a = t(667294),
                o = t(294184),
                i = t.n(o),
                l = t(882723),
                u = t(557617),
                s = t(656016),
                c = t.n(s);

            function f(e) {
                var n = e.filename,
                    t = e.className,
                    o = e.filters,
                    s = e.buttonText,
                    f = e.placeholder,
                    d = e.onFileSelect,
                    h = a.useRef(null);
                return (0, r.jsxs)("div", {
                    className: i()(t, c().fileUpload),
                    children: [(0, r.jsx)("input", {
                        className: c().fileUploadInput,
                        tabIndex: -1,
                        readOnly: !0,
                        placeholder: f,
                        type: "text",
                        value: n
                    }), (0, r.jsxs)(l.Button, {
                        size: l.Button.Sizes.MIN,
                        className: c().fileUploadButton,
                        children: [s, (0, r.jsx)(u.Z, {
                            ref: h,
                            tabIndex: -1,
                            onChange: function(e) {
                                var n, t = null === (n = e.currentTarget.files) || void 0 === n ? void 0 : n[0];
                                d(t)
                            },
                            multiple: !1,
                            filters: o
                        })]
                    })]
                })
            }
        },
        216815: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => Zn
            });
            var r = t(785893),
                a = t(667294),
                o = t(294184),
                i = t.n(o),
                l = t(441143),
                u = t.n(l),
                s = t(882723),
                c = t(539381),
                f = t(108709),
                d = t(707233),
                h = t(652591),
                m = t(336177),
                p = t(701190),
                v = t(633878);

            function y(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function b(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function g(e, n) {
                if (null == e) return {};
                var t, r, a = function(e, n) {
                    if (null == e) return {};
                    var t, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (a[t] = e[t])
                    }
                    return a
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
                    }
                }
                return a
            }

            function O(e) {
                var n = e.width,
                    t = void 0 === n ? 16 : n,
                    a = e.height,
                    o = void 0 === a ? 16 : a,
                    i = e.color,
                    l = void 0 === i ? "currentColor" : i,
                    u = e.foreground,
                    s = g(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", b(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            y(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, v.Z)(s)), {
                    width: t,
                    height: o,
                    viewBox: "0 0 16 16",
                    children: (0, r.jsx)("path", {
                        className: u,
                        fill: l,
                        d: "M12.6667 2.00195H3.33333C2.6 2.00195 2 2.60195 2 3.33529V12.6686C2 13.402 2.6 14.002 3.33333 14.002H12.6667C13.4 14.002 14 13.402 14 12.6686V3.33529C14 2.60195 13.4 2.00195 12.6667 2.00195Z"
                    })
                }))
            }
            var w = t(268029),
                S = t(38736),
                N = t(503528),
                A = {
                    waveformBlockWidth: 2,
                    waveformBarWidth: .5,
                    fineTuningDelay: 500,
                    fineTuningScale: 10,
                    loudnessThreshold: .3
                },
                j = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"]),
                D = t(473708);

            function x(e, n, t, r, a, o, i) {
                try {
                    var l = e[o](i),
                        u = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(u) : Promise.resolve(u).then(r, a)
            }

            function E(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(n, t);

                        function i(e) {
                            x(o, r, a, i, l, "next", e)
                        }

                        function l(e) {
                            x(o, r, a, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var _ = function(e, n) {
                    var t, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (t = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    (r = 0,
                                        a) && (o = [2 & o[0], a.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1];
                                                a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2];
                                                i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    o = n.call(e, i)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    t = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                I = function(e, n, t) {
                    return -1 === e ? 0 : e - n * e / t
                };

            function P(e) {
                return e / 1e3
            }
            var M = function(e, n, t) {
                    return -1 === e ? t : e + n * (t - e) / t
                },
                C = function(e, n, t, r) {
                    var a = 0;
                    if (n >= 0 && t > 0) {
                        a = 100 * (e - (n - t * n / r)) / t
                    } else a = 100 * e / r;
                    return a.toFixed(4)
                },
                T = function(e, n, t, r) {
                    var a = 0;
                    if (n >= 0 && t > 0) {
                        a = 100 * (e - (n + t * (r - n) / r)) * -1 / t
                    } else a = 100 * e * -1 / r + 100;
                    return a.toFixed(4)
                };

            function U(e) {
                return new Promise((function(n) {
                    var t = function() {
                        n();
                        e.removeEventListener("canplaythrough", t)
                    };
                    e.addEventListener("canplaythrough", t);
                    e.load()
                }))
            }

            function L(e) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = E((function(e) {
                    var n, t;
                    return _(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (!e.type.startsWith("audio") && !e.type.startsWith("video") || !j.has(e.type)) throw new Error(D.Z.Messages.SOUNDBOARD_ERROR_INVALID_FILE_TYPE.format({
                                    fileType: e.type
                                }));
                                n = URL.createObjectURL(e);
                                return [4, U(t = new Audio(n))];
                            case 1:
                                r.sent();
                                return [2, t]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function k() {
                return (k = E((function(e, n) {
                    var t;
                    return _(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, fetch(e)];
                            case 1:
                                return [4, r.sent().blob()];
                            case 2:
                                t = r.sent();
                                return [2, new File([t], n, {
                                    type: "audio/mp3"
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Z(e, n, t, r, a, o, i) {
                try {
                    var l = e[o](i),
                        u = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(u) : Promise.resolve(u).then(r, a)
            }
            var F = function(e, n) {
                    var t, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (t = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    (r = 0, a) && (o = [2 & o[0], a.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1];
                                                a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2];
                                                i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    o = n.call(e, i)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    t = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                B = (0, S.Z)((function(e) {
                    return {
                        audio: null,
                        file: null,
                        loading: !1,
                        loadAudioFromFile: (t = (n = function(n) {
                            var t;
                            return F(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        e({
                                            file: n,
                                            audio: null,
                                            loading: null != n
                                        });
                                        return null == n ? [2] : [4, L(n)];
                                    case 1:
                                        if (null == (t = r.sent())) return [2];
                                        e({
                                            audio: t,
                                            loading: !1
                                        });
                                        return [2]
                                }
                            }))
                        }, function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, a) {
                                var o = n.apply(e, t);

                                function i(e) {
                                    Z(o, r, a, i, l, "next", e)
                                }

                                function l(e) {
                                    Z(o, r, a, i, l, "throw", e)
                                }
                                i(void 0)
                            }))
                        }), function(e) {
                            return t.apply(this, arguments)
                        }),
                        maxVolume: 1,
                        setMaxVolume: function(n) {
                            e({
                                maxVolume: n
                            })
                        }
                    };
                    var n, t
                }));

            function G() {
                return B((function(e) {
                    return {
                        audio: e.audio,
                        file: e.file,
                        loading: e.loading,
                        loadAudioFromFile: e.loadAudioFromFile,
                        maxVolume: e.maxVolume,
                        setMaxVolume: e.setMaxVolume
                    }
                }), N.Z)
            }
            var H = t(718831),
                V = t(496486),
                Y = t(575945),
                z = t(74535),
                q = t(795470),
                W = t(468811),
                $ = t.n(W);

            function J(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function K(e, n, t, r, a, o, i) {
                try {
                    var l = e[o](i),
                        u = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(u) : Promise.resolve(u).then(r, a)
            }

            function Q(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(n, t);

                        function i(e) {
                            K(o, r, a, i, l, "next", e)
                        }

                        function l(e) {
                            K(o, r, a, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function X(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function ee(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return J(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return J(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ne, te = function(e, n) {
                var t, r, a, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = i.trys,
                                                a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < a[1]) {
                                            i.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && i.label < a[2]) {
                                            i.label = a[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        a[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = n.call(e, i)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };
            t.e(40116).then(t.t.bind(t, 340116, 23)).then((function(e) {
                var n = e.default;
                ne = new n
            }));
            var re = new AudioContext;

            function ae() {
                return (ae = Q((function(e) {
                    var n;
                    return te(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, e.arrayBuffer()];
                            case 1:
                                n = t.sent();
                                return [4, re.decodeAudioData(n)];
                            case 2:
                                return [2, t.sent().getChannelData(0)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function oe(e) {
                var n = ee(a.useState(null), 2),
                    t = n[0],
                    r = n[1],
                    o = ee(a.useState(null), 2),
                    i = o[0],
                    l = o[1];
                a.useEffect((function() {
                    if (null != e) {
                        var n = function(e) {
                            return "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified)
                        }(e);
                        if (n !== i) {
                            l(n);
                            r(null);
                            (function(e) {
                                return ae.apply(this, arguments)
                            })(e).then(r)
                        }
                    }
                }), [i, e]);
                return t
            }
            var ie = function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        X(e, n, t[n])
                    }))
                }
                return e
            }({}, A);

            function le(e, n, t) {
                var r = ee(a.useState(null), 2),
                    o = r[0],
                    i = r[1],
                    l = ee(a.useState(null), 2),
                    u = l[0],
                    s = l[1],
                    c = ee(a.useState(1), 2),
                    f = c[0],
                    d = c[1],
                    h = G().setMaxVolume,
                    m = a.useCallback((function(e, n) {
                        s(null);
                        (function(e, n, t, r, a) {
                            return new Promise((function(o) {
                                var i = $().v4(),
                                    l = function(e) {
                                        var n = e.data,
                                            t = n.waveform,
                                            r = n.id,
                                            u = n.normalizedVolumeMultipler;
                                        if (i === r) {
                                            o(t);
                                            a(u)
                                        }
                                        null == ne || ne.removeEventListener("message", l)
                                    };
                                null == ne || ne.addEventListener("message", l);
                                null == ne || ne.postMessage({
                                    id: i,
                                    options: t,
                                    config: r,
                                    width: n,
                                    rawBufferData: e
                                })
                            }))
                        })(e, n.offsetWidth, t, ie, d).then(s)
                    }), [t]);
                a.useEffect((function() {
                    if (null != e && null != n) {
                        var r = function(e, n) {
                            var t = "".concat(e[0], "-").concat(e[e.length - 1], "-").concat(e.byteLength);
                            return "".concat(t, "-").concat(JSON.stringify(n))
                        }(e, t);
                        if (o !== r) {
                            i(r);
                            m(e, n)
                        }
                    }
                }), [e, m, n, t, o]);
                a.useEffect((function() {
                    h(f)
                }), [f, h]);
                return u
            }
            var ue = t(520453),
                se = t(630374),
                ce = t.n(se);

            function fe(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function de(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function he(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return fe(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return fe(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const me = a.memo((function(e) {
                    var n = e.file,
                        t = e.audio,
                        o = e.className,
                        l = e.waveformSettings,
                        u = he(a.useState({
                            width: 0,
                            height: 0
                        }), 2),
                        c = u[0],
                        f = u[1],
                        d = a.useRef(null),
                        h = a.useMemo((function() {
                            var e, n = null !== (e = null == t ? void 0 : t.duration) && void 0 !== e ? e : 1;
                            return function(e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))));
                                    r.forEach((function(n) {
                                        de(e, n, t[n])
                                    }))
                                }
                                return e
                            }({
                                fineTuning: -1,
                                fineTuningResolution: n / A.fineTuningScale,
                                duration: n
                            }, null != l ? l : {})
                        }), [t, l]),
                        m = oe(n),
                        p = le(m, d.current, h),
                        v = (0, z.ZP)(),
                        y = (0, q.Sl)((0, Y.wj)(v) ? ue.Il.PRIMARY_300 : ue.Il.PRIMARY_700),
                        b = null == m || null == p,
                        g = (0 === c.width || 0 === c.height || b) && null != n,
                        O = a.useCallback((function() {
                            null != d.current && f({
                                width: d.current.offsetWidth,
                                height: d.current.offsetHeight
                            })
                        }), []);
                    a.useEffect((function() {
                        if (null != d.current) {
                            var e = new ResizeObserver((0, V.debounce)(O, 50));
                            e.observe(d.current);
                            return function() {
                                e.disconnect()
                            }
                        }
                    }), [O]);
                    a.useEffect((function() {
                        if (null != d.current) {
                            var e = d.current,
                                n = e.getContext("2d");
                            if (null != n) {
                                var t = e.width,
                                    r = e.height;
                                if (0 !== c.width && 0 !== c.height && null != p && p.length > 0) {
                                    var a = t / p.length,
                                        o = a * -(A.waveformBarWidth - 1);
                                    n.clearRect(0, 0, t, r);
                                    n.fillStyle = y.hex;
                                    for (var i = 0; i < p.length; i++) {
                                        var l = p[i] * r,
                                            u = i * a + o,
                                            s = r / 2 - l / 2;
                                        n.fillRect(u, s, a - o, l)
                                    }
                                }
                            }
                        }
                    }), [y, c, v, p]);
                    return (0, r.jsxs)("div", {
                        className: i()(ce().container, o),
                        children: [(0,
                            r.jsx)("canvas", {
                            className: ce().waveformCanvas,
                            ref: d,
                            width: 4 * c.width,
                            height: 4 * c.height
                        }), g && (0, r.jsx)("div", {
                            className: ce().loading,
                            children: (0, r.jsx)(s.Spinner, {
                                type: s.SpinnerTypes.SPINNING_CIRCLE
                            })
                        })]
                    })
                })),
                pe = a.memo((function(e) {
                    var n = e.fineTuning,
                        t = e.fineTuningResolution,
                        a = e.duration,
                        o = G(),
                        i = o.file,
                        l = o.audio;
                    return (0, r.jsx)(me, {
                        file: i,
                        audio: l,
                        waveformSettings: {
                            fineTuning: n,
                            fineTuningResolution: t,
                            duration: a
                        }
                    })
                }));
            var ve = t(530156),
                ye = t.n(ve);

            function be(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function ge(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Oe(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return be(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return be(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var we;
            ! function(e) {
                e[e.START = 0] = "START";
                e[e.PLAYHEAD = 1] = "PLAYHEAD";
                e[e.END = 2] = "END"
            }(we || (we = {}));
            const Se = a.memo((function(e) {
                var n = e.playing,
                    t = e.onPausePlayback,
                    o = e.onPlaybackChange,
                    l = e.onChangePosition,
                    u = e.disabled,
                    s = void 0 !== u && u,
                    c = function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))));
                            r.forEach((function(n) {
                                ge(e, n, t[n])
                            }))
                        }
                        return e
                    }({}, A),
                    f = G().audio,
                    d = null != f,
                    h = a.useRef(null),
                    m = a.useRef(null),
                    p = a.useRef(null),
                    v = Oe(a.useState(0), 2),
                    y = v[0],
                    b = v[1],
                    g = Oe(a.useState(0), 2),
                    O = g[0],
                    w = g[1],
                    S = Oe(a.useState(0), 2),
                    N = S[0],
                    j = S[1],
                    D = Oe(a.useState(!1), 2),
                    x = D[0],
                    E = D[1],
                    _ = Oe(a.useState(!1), 2),
                    U = _[0],
                    L = _[1],
                    R = Oe(a.useState(!1), 2),
                    k = R[0],
                    Z = R[1],
                    F = Oe(a.useState(0), 2),
                    B = F[0],
                    V = F[1],
                    Y = Oe(a.useState(-1), 2),
                    z = Y[0],
                    q = Y[1],
                    W = a.useMemo((function() {
                        return B / c.fineTuningScale
                    }), [c.fineTuningScale, B]);
                a.useEffect((function() {
                    if (null != f) {
                        var e = 1e3 * f.duration;
                        b(0);
                        w(0);
                        j(e);
                        V(e)
                    }
                }), [f]);
                var $, J = a.useCallback((function(e, n) {
                        t();
                        if (0 === e.button) switch (n) {
                            case we.START:
                                E(!0);
                                break;
                            case we.PLAYHEAD:
                                L(!0);
                                break;
                            case we.END:
                                Z(!0)
                        }
                    }), [t]),
                    K = a.useCallback((function(e) {
                        switch (e) {
                            case we.START:
                                E(!1);
                                break;
                            case we.PLAYHEAD:
                                L(!1);
                                break;
                            case we.END:
                                Z(!1)
                        }
                        q(-1)
                    }), []),
                    Q = a.useCallback((function(e) {
                        if (null != f && x) {
                            var n = parseInt(e.target.value),
                                t = n > N ? N : n;
                            o(P(t));
                            b(t);
                            w(t)
                        }
                    }), [f, o, N, x]),
                    X = a.useCallback((function(e) {
                        if (null != f && U) {
                            var n = parseInt(e.target.value);
                            if (n < y) {
                                o(P(y));
                                w(y)
                            } else if (n > N) {
                                o(P(N));
                                w(N)
                            } else {
                                o(P(n));
                                w(n)
                            }
                        }
                    }), [f, o, N, U, y]),
                    ee = a.useCallback((function(e) {
                        if (null != f && k) {
                            var n = parseInt(e.target.value),
                                t = n > y ? n : y;
                            o(P(y));
                            w(y);
                            j(t)
                        }
                    }), [f, o, k, y]);
                a.useEffect((function() {
                    null != l && d && l({
                        startPositionMs: y,
                        endPositionMs: N,
                        playheadPositionMs: O
                    })
                }), [y, N, l, d, O]);
                a.useEffect((function() {
                    if (null != f) {
                        var e;
                        n && (e = setInterval((function() {
                            if (f.currentTime < P(N)) f.currentTime >= P(O) && w(1e3 * f.currentTime);
                            else {
                                t(P(y));
                                w(y)
                            }
                        }), 16));
                        return function() {
                            clearInterval(e)
                        }
                    }
                }), [f, N, t, O, n, y]);
                a.useEffect((function() {
                    if (!(c.fineTuningDelay <= 0)) {
                        var e = y,
                            n = N,
                            t = O,
                            r = setTimeout((function() {
                                x && e === y && -1 === z ? q(y) : k && n === N && -1 === z ? q(N) : U && t === O && -1 === z && q(O)
                            }), c.fineTuningDelay);
                        return function() {
                            clearTimeout(r)
                        }
                    }
                }), [c.fineTuningDelay, k, N, z, U, O, x, y]);
                return (0, r.jsxs)("div", {
                    className: i()(ye().timeline, ge({}, ye().initialized, d)),
                    children: [(0, r.jsxs)("div", {
                        className: ye().rangeHandleContainer,
                        children: [(0, r.jsxs)("div", {
                            className: ye().rangeHandleFrame,
                            children: [(0, r.jsx)("input", {
                                ref: h,
                                className: i()(ye().rangeHandle, ye().rangeHandleStart),
                                type: "range",
                                min: I(z, W, B),
                                max: M(z, W, B),
                                value: y,
                                onChange: Q,
                                onMouseDown: function(e) {
                                    return J(e, we.START)
                                },
                                onMouseUp: function() {
                                    return K(we.START)
                                },
                                disabled: !d || s
                            }), (0, r.jsx)("input", {
                                ref: p,
                                className: i()(ye().rangeHandle, ye().rangeHandleEnd),
                                type: "range",
                                min: I(z, W, B),
                                max: M(z, W, B),
                                value: N,
                                onChange: ee,
                                onMouseDown: function(e) {
                                    return J(e, we.END)
                                },
                                onMouseUp: function() {
                                    return K(we.END)
                                },
                                disabled: !d || s
                            })]
                        }), (0, r.jsx)("div", {
                            className: ye().handlePlayheadTrack,
                            children: (0, r.jsx)("input", {
                                ref: m,
                                className: i()(ye().rangeHandle, ye().rangeHandlePlayhead),
                                type: "range",
                                min: I(z, W, B),
                                max: M(z, W, B),
                                value: O,
                                onChange: X,
                                onMouseDown: function(e) {
                                    return J(e, we.PLAYHEAD)
                                },
                                onMouseUp: function() {
                                    return K(we.PLAYHEAD)
                                },
                                disabled: !d || s
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: ye().handleContainer,
                        children: [(0, r.jsxs)("div", {
                            className: i()(ye().handleFrame, ($ = {}, ge($, ye().startDragging, x), ge($, ye().endDragging, k), $)),
                            style: {
                                left: "".concat(C(y, z, W, B), "%"),
                                right: "".concat(T(N, z, W, B), "%")
                            },
                            children: [(0, r.jsx)("div", {
                                className: i()(ye().handleIconFrame, ye().handleIconFrameStart),
                                children: (0, r.jsx)("div", {
                                    className: i()(ye().handleIconContainer, ye().start),
                                    children: (0, r.jsx)(H.Z, {
                                        direction: H.Z.Directions.RIGHT,
                                        className: ye().handleIcon,
                                        width: 16,
                                        height: 16
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: i()(ye().handleIconFrame, ye().handleIconFrameEnd),
                                children: (0, r.jsx)("div", {
                                    className: i()(ye().handleIconContainer, ye().end),
                                    children: (0, r.jsx)(H.Z, {
                                        direction: H.Z.Directions.LEFT,
                                        className: ye().handleIcon,
                                        width: 16,
                                        height: 16
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: ye().playheadTrack,
                            children: (0, r.jsx)("div", {
                                className: i()(ye().playhead, ge({}, ye().dragging, U || x || k || n)),
                                style: {
                                    left: "".concat(C(O, z, W, B), "%")
                                }
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: ye().waveformContainer,
                        children: (0, r.jsx)(pe, {
                            fineTuning: z,
                            fineTuningResolution: W,
                            duration: B
                        })
                    })]
                })
            }));
            var Ne = t(460214),
                Ae = t(206954),
                je = t.n(Ae);

            function De(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function xe(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Ee(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return De(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return De(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _e = {
                startPositionMs: 0,
                endPositionMs: 2e4,
                playheadPositionMs: 0
            };
            const Ie = a.memo((function(e) {
                var n = e.className,
                    t = e.volume,
                    o = e.disabled,
                    l = void 0 !== o && o,
                    u = e.onChange,
                    c = G().audio,
                    f = Ee(a.useState(!1), 2),
                    d = f[0],
                    h = f[1],
                    m = Ee(a.useState(_e), 2),
                    v = m[0],
                    y = m[1],
                    b = v.playheadPositionMs,
                    g = v.endPositionMs,
                    S = v.startPositionMs,
                    N = null != c,
                    A = g - S,
                    j = A > 1e3 * Ne.YW;
                a.useEffect((function() {
                    null != c && y({
                        playheadPositionMs: 0,
                        endPositionMs: 1e3 * c.duration,
                        startPositionMs: 0
                    })
                }), [c]);
                var D, x, E = a.useCallback((function(e) {
                        if (null != c) {
                            c.pause();
                            null != e && (c.currentTime = e);
                            h(!1)
                        }
                    }), [c]),
                    _ = a.useCallback((function() {
                        if (null != c)
                            if (d) E();
                            else {
                                c.currentTime = P(b >= g ? S : b);
                                c.volume = (0, w.Z)(t);
                                c.play();
                                h(!0)
                            }
                    }), [c, g, E, b, d, S, t]),
                    I = a.useCallback((function(e) {
                        y(e);
                        null == u || u({
                            startMs: e.startPositionMs,
                            endMs: e.endPositionMs
                        })
                    }), [u]),
                    M = a.useCallback((function(e) {
                        null != c && (c.currentTime = e)
                    }), [c]);
                return (0, r.jsxs)("div", {
                    className: i()(je().container, (D = {}, xe(D, je().initialized, N), xe(D, je().disabled, !N || l), D), n),
                    children: [(0, r.jsxs)("div", {
                        className: je().playButtonContainer,
                        children: [(0, r.jsx)(s.Clickable, {
                            className: je().playButton,
                            onClick: N ? _ : void 0,
                            children: d ? (0, r.jsx)(O, {
                                className: je().playButtonIcon
                            }) : (0, r.jsx)(p.Z, {
                                className: je().playButtonIcon
                            })
                        }), (0, r.jsx)("div", {
                            className: je().durationContainer,
                            children: (0, r.jsx)(s.Text, {
                                className: je().duration,
                                variant: "text-xs/normal",
                                color: j ? "text-warning" : "text-positive",
                                children: (x = A, "".concat(P(x).toFixed(2), "s"))
                            })
                        })]
                    }), (0, r.jsx)(Se, {
                        playing: d,
                        onPlaybackChange: M,
                        onPausePlayback: E,
                        onChangePosition: I,
                        disabled: l
                    })]
                })
            }));
            var Pe = t(897699),
                Me = t(922947),
                Ce = t.n(Me);

            function Te(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Ue(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Te(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Te(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const Le = a.memo((function(e) {
                var n = e.sound,
                    t = e.volume,
                    o = e.disabled,
                    i = Ue(a.useState(!1), 2),
                    l = i[0],
                    u = i[1],
                    c = a.useRef(null),
                    f = G(),
                    d = f.file,
                    h = f.audio,
                    m = f.loadAudioFromFile,
                    v = a.useMemo((function() {
                        return (0, Pe.Z)(n.soundId)
                    }), [n]);
                a.useEffect((function() {
                    null == c.current && (c.current = function(e, n) {
                        return k.apply(this, arguments)
                    }(v, n.name).then(m))
                }), [v, m, n.name]);
                return (0, r.jsxs)("div", {
                    className: Ce().previewContainer,
                    children: [(0, r.jsx)(s.Clickable, {
                        onClick: o ? void 0 : function() {
                            if (null != h)
                                if (h.paused) {
                                    h.volume = (0, w.Z)(t);
                                    h.currentTime = 0;
                                    h.play();
                                    u(!0);
                                    h.addEventListener("ended", (function() {
                                        return u(!1)
                                    }), {
                                        once: !0
                                    })
                                } else {
                                    h.pause();
                                    u(!1)
                                }
                        },
                        className: Ce().playButton,
                        "aria-label": l ? D.Z.Messages.STOP : D.Z.Messages.PLAY,
                        children: l ? (0, r.jsx)(O, {
                            className: Ce().playIcon
                        }) : (0, r.jsx)(p.Z, {
                            className: Ce().playIcon
                        })
                    }), (0, r.jsx)("div", {
                        className: Ce().waveformContainer,
                        children: (0, r.jsx)(me, {
                            className: Ce().waveform,
                            file: d,
                            audio: h
                        })
                    })]
                })
            }));
            var Re = t(570090),
                ke = t.n(Re);
            const Ze = a.memo((function(e) {
                var n = e.sound,
                    t = e.volume,
                    a = e.disabled,
                    o = void 0 !== a && a,
                    i = e.onChange,
                    l = G().file;
                return (0, r.jsx)(s.FormSection, {
                    className: ke().section,
                    title: D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,
                    children: (0, r.jsxs)("div", {
                        className: ke().fakeInput,
                        children: [null != n && (0, r.jsx)(Le, {
                            sound: n,
                            volume: t,
                            disabled: o
                        }), null == n && null != l && (0, r.jsx)(Ie, {
                            className: ke().audioTrimmer,
                            volume: t,
                            disabled: o,
                            onChange: i
                        })]
                    })
                })
            }));

            function Fe(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Be(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Fe(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Fe(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ge;
            ! function(e) {
                e[e.NONE = 0] = "NONE";
                e[e.CONTINUATION = 1] = "CONTINUATION";
                e[e.BEGINNING_OF_STREAM = 2] = "BEGINNING_OF_STREAM";
                e[e.END_OF_STREAM = 4] = "END_OF_STREAM"
            }(Ge || (Ge = {}));
            var He, Ve = function() {
                function e() {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._buffer = new Uint8Array(4096);
                    this._pageSequenceNumber = 0;
                    this._offset = 0
                }
                var n = e.prototype;
                n.appendBytes = function(e) {
                    if (this._offset + e.length > this._buffer.length) {
                        var n = this._offset + e.length,
                            t = Math.pow(2, Math.ceil(Math.log2(Math.max(2 * this._buffer.length, n)))),
                            r = new Uint8Array(t);
                        r.set(this._buffer.subarray(0, this._offset));
                        this._buffer = r
                    }
                    this._buffer.set(e, this._offset);
                    this._offset += e.length
                };
                n.addPage = function(e) {
                    if (e.segments.length > 255) throw new Error("Too many segments: ".concat(e.segments.length, " exceeds limit of ").concat(255));
                    var n = !0,
                        t = !1,
                        r = void 0;
                    try {
                        for (var a, o = e.segments.entries()[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                            var i = Be(a.value, 2),
                                l = i[0],
                                u = i[1];
                            if (u.length > 255) throw new Error("Segment at index ".concat(l, " too large (length ").concat(u.length, " exceeds ").concat(255, ")"))
                        }
                    } catch (e) {
                        t = !0;
                        r = e
                    } finally {
                        try {
                            n || null == o.return || o.return()
                        } finally {
                            if (t) throw r
                        }
                    }
                    var s = e.segments.reduce((function(e, n) {
                            return e + n.length
                        }), 0),
                        c = 27 + e.segments.length + s;
                    if (c > 65307) throw new Error("Page too large (size ".concat(c, " exceeds ").concat(65307, ")"));
                    var f = this._offset,
                        d = 0;
                    switch (e.pageType) {
                        case Ge.CONTINUATION:
                            d = 1;
                            break;
                        case Ge.BEGINNING_OF_STREAM:
                            d = 2;
                            break;
                        case Ge.END_OF_STREAM:
                            d = 4
                    }
                    this.appendBytes([79, 103, 103, 83, 0, d, 255 & e.granulePosition, e.granulePosition >> 8 & 255, e.granulePosition >> 16 & 255, e.granulePosition >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 1, 255 & this._pageSequenceNumber, this._pageSequenceNumber >> 8 & 255, this._pageSequenceNumber >> 16 & 255, this._pageSequenceNumber >> 24 & 255]);
                    var h = this._offset;
                    this.appendBytes([0, 0, 0, 0, e.segments.length]);
                    this.appendBytes(e.segments.map((function(e) {
                        return e.length
                    })));
                    var m = !0,
                        p = !1,
                        v = void 0;
                    try {
                        for (var y, b = e.segments[Symbol.iterator](); !(m = (y = b.next()).done); m = !0) {
                            var g = y.value;
                            this.appendBytes(g)
                        }
                    } catch (e) {
                        p = !0;
                        v = e
                    } finally {
                        try {
                            m || null == b.return || b.return()
                        } finally {
                            if (p) throw v
                        }
                    }
                    var O = this._buffer.subarray(f, this._offset).reduce((function(e, n) {
                        return e << 8 >>> 0 ^ ze[e >>> 24 ^ n]
                    }), 0) >>> 0;
                    this._buffer.set([255 & O, O >> 8 & 255, O >> 16 & 255, O >> 24 & 255], h);
                    this._pageSequenceNumber++
                };
                n.finalize = function(e) {
                    this.addPage({
                        pageType: Ge.END_OF_STREAM,
                        granulePosition: e,
                        segments: []
                    });
                    var n = this._buffer,
                        t = this._offset;
                    this._buffer = new Uint8Array(4096);
                    this._offset = 0;
                    this._pageSequenceNumber = 0;
                    return n.subarray(0, t)
                };
                return e
            }();
            ! function(e) {
                e[e.ZERO = 0] = "ZERO"
            }(He || (He = {}));

            function Ye(e, n) {
                var t = new Uint8Array([79, 112, 117, 115, 72, 101, 97, 100, 1, n.channelCount, 0, 15, 255 & n.inputSampleRate, n.inputSampleRate >> 8 & 255, n.inputSampleRate >> 16 & 255, n.inputSampleRate >> 24 & 255, 255 & n.outputGain, n.outputGain >> 8 & 255, n.channelMappingFamily]),
                    r = new Uint8Array([79, 112, 117, 115, 84, 97, 103, 115, 0, 0, 0, 0, 0, 0, 0, 0]),
                    a = new Ve;
                a.addPage({
                    pageType: Ge.BEGINNING_OF_STREAM,
                    granulePosition: 0,
                    segments: [t]
                });
                var o = 0;
                a.addPage({
                    pageType: Ge.NONE,
                    granulePosition: o,
                    segments: [r]
                });
                var i = !0,
                    l = !1,
                    u = void 0;
                try {
                    for (var s, c = e[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                        var f = s.value,
                            d = qe(f.buffer);
                        o += f.numSamples;
                        a.addPage({
                            pageType: Ge.NONE,
                            granulePosition: o,
                            segments: d
                        })
                    }
                } catch (e) {
                    l = !0;
                    u = e
                } finally {
                    try {
                        i || null == c.return || c.return()
                    } finally {
                        if (l) throw u
                    }
                }
                return a.finalize(o)
            }
            var ze = function() {
                for (var e = new Uint32Array(256), n = 256; n > 0; n--) {
                    for (var t = n << 24, r = 8; r > 0; r--) t = 2147483648 & t ? 79764919 ^ t << 1 : t << 1;
                    e[n] = t
                }
                return e
            }();

            function qe(e) {
                for (var n = Math.floor(e.length / 255), t = [], r = 0; r <= n; r++) {
                    var a = 0 === r ? 0 : 255 * r,
                        o = r === n ? e.length : 255 * (r + 1);
                    t.push(e.slice(a, o))
                }
                return t
            }

            function We(e, n, t, r, a, o, i) {
                try {
                    var l = e[o](i),
                        u = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(u) : Promise.resolve(u).then(r, a)
            }

            function $e(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(n, t);

                        function i(e) {
                            We(o, r, a, i, l, "next", e)
                        }

                        function l(e) {
                            We(o, r, a, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var Je = function(e, n) {
                    var t, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (t = 1,
                                        r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    (r = 0, a) && (o = [2 & o[0], a.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1];
                                                a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2];
                                                i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    o = n.call(e, i)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    t = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                Ke = new AudioContext({
                    sampleRate: Math.min((new AudioContext).sampleRate, 48e3)
                });

            function Qe(e) {
                return new Promise((function(n, t) {
                    var r = new FileReader,
                        a = function() {
                            r.removeEventListener("load", a);
                            r.removeEventListener("error", t);
                            n(r.result)
                        };
                    r.addEventListener("load", a);
                    r.addEventListener("error", t);
                    e(r)
                }))
            }

            function Xe(e) {
                return en.apply(this, arguments)
            }

            function en() {
                return (en = $e((function(e) {
                    var n;
                    return Je(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, e.arrayBuffer()];
                            case 1:
                                n = t.sent();
                                if (!(n instanceof ArrayBuffer)) throw new Error("Unexpected file type");
                                return [2, Ke.decodeAudioData(n)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function nn() {
                return (nn = $e((function(e) {
                    var n;
                    return Je(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Qe((function(n) {
                                    n.readAsDataURL(e)
                                }))];
                            case 1:
                                n = t.sent();
                                if (!("string" == typeof n)) throw new Error("Unexpected file type");
                                return [2, n]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function tn(e, n) {
                var t = n.startMs,
                    r = n.endMs,
                    a = e.sampleRate,
                    o = e.numberOfChannels,
                    i = 1e3 * e.duration,
                    l = Math.min(r, i);
                if (0 === t && l === i) return e;
                for (var u = Math.floor(t / i * e.length), s = Math.floor(l / i * e.length), c = s - u, f = Ke.createBuffer(o, c, a), d = 0; d < o; d++)
                    for (var h = f.getChannelData(d), m = e.getChannelData(d), p = 0, v = u; v <= s; v++) {
                        h[p] = m[v];
                        p++
                    }
                return f
            }

            function rn(e) {
                for (var n = e.numberOfChannels, t = [], r = 0; r < n; r++) t.push(e.getChannelData(r));
                return t
            }

            function an(e) {
                return on.apply(this, arguments)
            }

            function on() {
                return (on = $e((function(e) {
                    var n, t, r, a, o, i, l;
                    return Je(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                n = e.readPromise, t = e.guildId, r = e.name, a = e.volume, o = e.emojiId, i = e.emojiName;
                                l = {
                                    guildId: t,
                                    name: r
                                };
                                return [4, n];
                            case 1:
                                return [2, m.Dx.apply(void 0, [(l.sound = u.sent(), l.volume = a, l.emojiId = o, l.emojiName = i, l)])]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function ln(e) {
                if (1 === e.length) return e[0];
                if (2 === e.length) {
                    for (var n = e[0], t = e[1], r = [], a = 0; a < n.length; a++) {
                        r.push(n[a]);
                        r.push(t[a])
                    }
                    var o = new Float32Array(r.length);
                    o.set(r);
                    return o
                }
                throw new Error("Only handles up to 2 channels")
            }

            function un(e) {
                return sn.apply(this, arguments)
            }

            function sn() {
                return (sn = $e((function(e) {
                    var n, t, r, a, o, i;

                    function l(t) {
                        u()(null != t.duration, "Chunk duration must not be null");
                        var r = t.duration / 1e6 * e.sampleRate,
                            a = new Uint8Array(t.byteLength);
                        t.copyTo(a);
                        n.push({
                            buffer: a,
                            numSamples: r
                        })
                    }
                    return Je(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                n = [];
                                t = rn(e);
                                r = ln(t);
                                a = new AudioData({
                                    format: "f32",
                                    sampleRate: e.sampleRate,
                                    numberOfFrames: e.length,
                                    numberOfChannels: e.numberOfChannels,
                                    timestamp: 1e3 * e.duration * 1e3,
                                    data: r
                                });
                                (o = new AudioEncoder({
                                    output: l,
                                    error: function(e) {
                                        throw new Error("Audio encoding error: ".concat(e.message))
                                    }
                                })).configure({
                                    codec: "opus",
                                    sampleRate: e.sampleRate,
                                    numberOfChannels: e.numberOfChannels
                                });
                                o.encode(a);
                                return [4, o.flush()];
                            case 1:
                                u.sent();
                                i = Ye(n, {
                                    channelCount: e.numberOfChannels,
                                    inputSampleRate: e.sampleRate,
                                    outputGain: 0,
                                    channelMappingFamily: 0
                                });
                                return [2, new Blob([i], {
                                    type: "audio/ogg"
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function cn(e, n) {
                return fn.apply(this, arguments)
            }

            function fn() {
                return (fn = $e((function(e, n) {
                    var t, r;
                    return Je(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Xe(e)];
                            case 1:
                                t = a.sent();
                                return [4, un(tn(t, n))];
                            case 2:
                                r = a.sent();
                                return [2, new File([r], "sound.ogg", {
                                    type: "audio/ogg"
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var dn = t(202351),
                hn = t(787193),
                mn = t(567403),
                pn = t(682776),
                vn = t(107218),
                yn = t(473903),
                bn = t(124251),
                gn = t(796938),
                On = t(930865),
                wn = t(656907),
                Sn = t(13047),
                Nn = t.n(Sn);

            function An(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function jn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Dn(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return An(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return An(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function xn(e) {
                var n = e.availableSlots,
                    t = e.className;
                return (0, r.jsxs)(s.Text, {
                    className: i()(Nn().suffixNode, t),
                    variant: "text-sm/medium",
                    color: "text-primary",
                    children: [(0, r.jsx)(gn.Z, {
                        className: Nn().speakerIcon
                    }), D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
                        slots: n
                    })]
                })
            }

            function En(e) {
                var n = e.value,
                    t = e.className,
                    o = e.onChange,
                    l = (0, dn.cj)([vn.Z, pn.Z, yn.default, mn.Z], (function() {
                        var e = {},
                            n = !0,
                            t = !1,
                            r = void 0;
                        try {
                            for (var a, o = vn.Z.getFlattenedGuildIds()[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                                var i = a.value,
                                    l = mn.Z.getGuild(i);
                                if (null != l) {
                                    (0, hn.Gw)(l, pn.Z, yn.default).canCreateExpressions && (e[l.id] = l)
                                }
                            }
                        } catch (e) {
                            t = !0;
                            r = e
                        } finally {
                            try {
                                n || null == o.return || o.return()
                            } finally {
                                if (t) throw r
                            }
                        }
                        return e
                    })),
                    u = (0, dn.cj)([wn.Z], (function() {
                        var e = {},
                            n = !0,
                            t = !1,
                            r = void 0;
                        try {
                            for (var a, o = Object.entries(l)[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                                var i, u = Dn(a.value, 2),
                                    s = u[0],
                                    c = u[1],
                                    f = (0, On.yw)(null !== (i = wn.Z.getSoundsForGuild(s)) && void 0 !== i ? i : Ne.Hy, c.premiumTier);
                                e[s] = f
                            }
                        } catch (e) {
                            t = !0;
                            r = e
                        } finally {
                            try {
                                n || null == o.return || o.return()
                            } finally {
                                if (t) throw r
                            }
                        }
                        return e
                    }), [l]);
                a.useEffect((function() {
                    (0, m.w)()
                }), []);
                var c, f = a.useMemo((function() {
                        return Object.values(l).map((function(e) {
                            var n = e.name,
                                t = e.id;
                            return {
                                label: n,
                                value: t,
                                disabled: u[t] <= 0
                            }
                        }))
                    }), [l, u]),
                    d = a.useCallback((function(e) {
                        return null == e || "" === e.value ? null : (0, r.jsx)(bn.Z, {
                            className: i()(Nn().guildSelectOptionIcon, jn({}, Nn().disabledOption, e.disabled)),
                            guild: l[e.value],
                            size: bn.Z.Sizes.SMOL,
                            active: !0
                        })
                    }), [l]),
                    h = a.useCallback((function(e) {
                        var n = null == e ? void 0 : e.value;
                        return null == n || "" === n ? null : (0, r.jsx)(xn, {
                            className: i()(jn({}, Nn().disabledOption, null == e ? void 0 : e.disabled)),
                            availableSlots: u[n]
                        })
                    }), [u]),
                    p = a.useCallback((function(e) {
                        return (0, r.jsx)("div", {
                            className: i()(jn({}, Nn().disabledOption, e.disabled)),
                            children: e.label
                        })
                    }), []),
                    v = a.useCallback((function(e) {
                        u[e] <= 0 || o(e)
                    }), [u, o]),
                    y = null == (c = u[null != n ? n : ""]) || c > 0 ? n : void 0;
                return (0, r.jsx)(s.SearchableSelect, {
                    className: t,
                    onChange: v,
                    value: y,
                    multi: !1,
                    options: f,
                    renderOptionPrefix: d,
                    renderOptionSuffix: h,
                    renderOptionLabel: p,
                    placeholder: 0 === f.length ? D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
                })
            }
            var _n = t(2590),
                In = t(239933),
                Pn = t.n(In);

            function Mn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Cn(e, n, t, r, a, o, i) {
                try {
                    var l = e[o](i),
                        u = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(u) : Promise.resolve(u).then(r, a)
            }

            function Tn(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(n, t);

                        function i(e) {
                            Cn(o, r, a, i, l, "next", e)
                        }

                        function l(e) {
                            Cn(o, r, a, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function Un(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Mn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Mn(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ln, Rn = function(e, n) {
                var t, r, a, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < a[1]) {
                                            i.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && i.label < a[2]) {
                                            i.label = a[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        a[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = n.call(e, i)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };
            ! function(e) {
                e.READY = "ready";
                e.ENCODING_FAILED = "encoding-failed";
                e.ENCODING = "encoding";
                e.UPLOADING = "uploading"
            }(Ln || (Ln = {}));
            var kn = [{
                name: "audio",
                extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"]
            }];

            function Zn(e) {
                var n, t, o, l = e.guildId,
                    p = e.sourceFile,
                    v = e.existingSound,
                    y = e.onClose,
                    b = e.transitionState,
                    g = e.showGuildPicker,
                    O = void 0 !== g && g,
                    w = function(e) {
                        if (e instanceof c.Z) z(e);
                        else if (e instanceof Error) {
                            var n = {
                                status: 500,
                                body: {
                                    message: e.message
                                }
                            };
                            z(new c.Z(n))
                        } else z(new c.Z(e))
                    },
                    S = Un(a.useState(null !== (t = null !== (n = null == p ? void 0 : p.name) && void 0 !== n ? n : null == v ? void 0 : v.name) && void 0 !== t ? t : ""), 2),
                    N = S[0],
                    A = S[1],
                    j = Un(a.useState(null !== (o = null == v ? void 0 : v.volume) && void 0 !== o ? o : 1), 2),
                    x = j[0],
                    E = j[1],
                    _ = Un(a.useState(null == v ? void 0 : v.emojiId), 2),
                    I = _[0],
                    P = _[1],
                    M = Un(a.useState(null == v ? void 0 : v.emojiName), 2),
                    C = M[0],
                    T = M[1],
                    U = G(),
                    L = U.file,
                    R = U.loadAudioFromFile,
                    k = U.maxVolume,
                    Z = U.setMaxVolume,
                    F = Un(a.useState(!1), 2),
                    B = F[0],
                    H = F[1],
                    V = Un(a.useState(null), 2),
                    Y = V[0],
                    z = V[1],
                    q = Un(a.useState(null), 2),
                    W = q[0],
                    $ = q[1],
                    J = Un(a.useState(Ln.READY), 2),
                    K = J[0],
                    Q = J[1],
                    X = Un(a.useState(l), 2),
                    ee = X[0],
                    ne = X[1];
                a.useEffect((function() {
                    null != (null == p ? void 0 : p.file) && function(n) {
                        e.apply(this, arguments)
                    }(p.file);

                    function e() {
                        e = Tn((function(e) {
                            var n;
                            return Rn(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        t.trys.push([0, 2, , 3]);
                                        return [4, R(e)];
                                    case 1:
                                        t.sent();
                                        Q(Ln.READY);
                                        z(null);
                                        return [3, 3];
                                    case 2:
                                        n = t.sent();
                                        w(n);
                                        return [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }));
                        return e.apply(this, arguments)
                    }
                }), [null == p ? void 0 : p.file, R]);

                function te() {
                    te = Tn((function(e) {
                        var n;
                        return Rn(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    t.trys.push([0, 2, , 3]);
                                    return [4, R(null != e ? e : null)];
                                case 1:
                                    t.sent();
                                    Q(Ln.READY);
                                    z(null);
                                    return [3, 3];
                                case 2:
                                    n = t.sent();
                                    w(n);
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return te.apply(this, arguments)
                }
                var re, ae = function(e) {
                        switch (e) {
                            case Ln.ENCODING:
                                return D.Z.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
                            case Ln.ENCODING_FAILED:
                                return D.Z.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
                            case Ln.UPLOADING:
                                return D.Z.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING
                        }
                        return null
                    }(K),
                    oe = K === Ln.UPLOADING || K === Ln.ENCODING,
                    ie = null != v,
                    le = N.length >= 2 && (ie || null != L) && null != ee && function(e) {
                        if (null == e) return !0;
                        var n = (e.endMs - e.startMs) / 1e3;
                        return n > 0 && n <= Ne.YW
                    }(W),
                    ue = a.useCallback((re = Tn((function(e, n) {
                        var t, r;
                        return Rn(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    Q(Ln.ENCODING);
                                    a.label = 1;
                                case 1:
                                    a.trys.push([1, 3, , 4]);
                                    return [4, cn(e, n)];
                                case 2:
                                    t = a.sent();
                                    Q(Ln.READY);
                                    return [2, t];
                                case 3:
                                    r = a.sent();
                                    Q(Ln.ENCODING_FAILED);
                                    throw r;
                                case 4:
                                    return [2]
                            }
                        }))
                    })), function(e, n) {
                        return re.apply(this, arguments)
                    }), []),
                    se = a.useCallback(Tn((function() {
                        var e, n, t, r;
                        return Rn(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (null == L) return [2];
                                    u()(null != ee, "Cannot submit soundboard sound with no guildId");
                                    e = L;
                                    return null == W ? [3, 2] : [4, ue(L, W)];
                                case 1:
                                    if (null == (n = a.sent())) return [2];
                                    e = n;
                                    a.label = 2;
                                case 2:
                                    t = function(e) {
                                        return nn.apply(this, arguments)
                                    }(e);
                                    Q(Ln.UPLOADING);
                                    a.label = 3;
                                case 3:
                                    a.trys.push([3, 5, , 6]);
                                    return [4, an({
                                        readPromise: t,
                                        guildId: ee,
                                        name: N,
                                        volume: x,
                                        emojiId: I,
                                        emojiName: C
                                    })];
                                case 4:
                                    a.sent();
                                    Q(Ln.READY);
                                    return [3, 6];
                                case 5:
                                    r = a.sent();
                                    throw new c.Z(r);
                                case 6:
                                    return [2]
                            }
                        }))
                    })), [L, ee, N, ue, W, x, I, C]),
                    ce = a.useCallback(Tn((function() {
                        var e;
                        return Rn(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    u()(null != ee, "Cannot submit soundboard sound with no guildId");
                                    H(!0);
                                    z(null);
                                    n.label = 1;
                                case 1:
                                    n.trys.push([1, 6, 7, 8]);
                                    return ie ? [4, (0, m.$d)({
                                        guildId: ee,
                                        soundId: v.soundId,
                                        name: N,
                                        volume: x,
                                        emojiId: I,
                                        emojiName: C
                                    })] : [3, 3];
                                case 2:
                                    n.sent();
                                    return [3, 5];
                                case 3:
                                    return [4, se()];
                                case 4:
                                    n.sent();
                                    n.label = 5;
                                case 5:
                                    y();
                                    return [3, 8];
                                case 6:
                                    e = n.sent();
                                    w(e);
                                    return [3, 8];
                                case 7:
                                    Q(Ln.READY);
                                    H(!1);
                                    E(1);
                                    Z(1);
                                    return [7];
                                case 8:
                                    return [2]
                            }
                        }))
                    })), [ie, y, ee, v, N, x, I, C, se, Z]);
                a.useEffect((function() {
                    R(null);
                    h.default.track(_n.rMx.OPEN_MODAL, {
                        type: "Soundboard Upload Sound",
                        guild_id: ee
                    })
                }), []);
                a.useEffect((function() {
                    E(Math.min(x, k))
                }), [x, E, k]);
                var fe, de = (0, r.jsx)(f.Z, {
                    guildId: ee,
                    emojiId: I,
                    emojiName: C,
                    setEmojiId: P,
                    setEmojiName: T,
                    error: null == Y ? void 0 : Y.getFirstFieldErrorMessage("emoji"),
                    isRequiredField: !1
                });
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: b,
                    children: [(0, r.jsx)(s.ModalCloseButton, {
                        onClick: y,
                        className: Pn().modalClose
                    }), (0, r.jsx)(s.ModalHeader, {
                        className: Pn().headerContainer,
                        separator: !1,
                        children: (0, r.jsx)(s.Heading, {
                            className: Pn().header,
                            variant: "heading-xl/extrabold",
                            children: ie ? D.Z.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
                        })
                    }), (0, r.jsxs)(s.ModalContent, {
                        className: Pn().content,
                        children: [null != Y && !Y.hasFieldErrors() && (0, r.jsx)(s.FormErrorBlock, {
                            className: Pn().section,
                            children: Y.message
                        }), O ? (0, r.jsx)(s.FormItem, {
                            required: !0,
                            className: Pn().section,
                            title: D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
                            children: (0, r.jsx)(En, {
                                value: ee,
                                onChange: ne
                            })
                        }) : null, (ie || null != L) && (0, r.jsx)(Ze, {
                            sound: v,
                            volume: x,
                            disabled: oe,
                            onChange: $
                        }), ie || null != p ? null : (0, r.jsx)(s.FormItem, {
                            required: !0,
                            error: null == Y ? void 0 : Y.getFirstFieldErrorMessage("sound"),
                            className: Pn().section,
                            title: D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
                            children: (0, r.jsx)(d.Z, {
                                filename: null !== (fe = null == L ? void 0 : L.name) && void 0 !== fe ? fe : "",
                                buttonText: D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
                                placeholder: D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
                                onFileSelect: function(e) {
                                    return te.apply(this, arguments)
                                },
                                filters: kn
                            })
                        }), (0, r.jsxs)("div", {
                            className: Pn().multiInput,
                            children: [(0, r.jsx)(s.FormItem, {
                                required: !0,
                                error: null == Y ? void 0 : Y.getFirstFieldErrorMessage("name"),
                                className: i()(Pn().section, Pn().halfInput),
                                title: D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                                children: (0, r.jsx)(s.TextInput, {
                                    placeholder: D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                                    value: N,
                                    onChange: A,
                                    maxLength: Ne.Ek
                                })
                            }), de]
                        }), (0, r.jsx)(s.FormItem, {
                            error: null == Y ? void 0 : Y.getFirstFieldErrorMessage("volume"),
                            className: Pn().section,
                            title: D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
                            children: (0, r.jsx)(s.Slider, {
                                initialValue: x,
                                onValueChange: function(e) {
                                    return E(e)
                                },
                                minValue: 0,
                                maxValue: k
                            })
                        })]
                    }), (0, r.jsxs)(s.ModalFooter, {
                        children: [(0, r.jsx)(s.Button, {
                            disabled: !le,
                            submitting: B,
                            size: s.Button.Sizes.SMALL,
                            onClick: ce,
                            children: ie ? D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
                        }), (0, r.jsx)(s.Button, {
                            disabled: B,
                            onClick: y,
                            size: s.Button.Sizes.SMALL,
                            look: s.Button.Looks.LINK,
                            color: s.Button.Colors.PRIMARY,
                            children: D.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
                        }), null != ae && (0, r.jsx)("div", {
                            className: Pn().soundStateHint,
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ae
                            })
                        })]
                    })]
                })
            }
        }
    }
]);