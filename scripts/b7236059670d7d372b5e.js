(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [56729], {
        429547: (e, t, n) => {
            e.exports = n.p + "750214196f39660492a313dbe5c84fe4.svg"
        },
        834005: (e, t, n) => {
            e.exports = n.p + "68458539d5672f6045fff5d505dd566a.svg"
        },
        108709: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => D
            });
            var r = n(785893),
                l = n(667294),
                i = n(294184),
                o = n.n(i),
                s = n(202351),
                a = n(882723),
                u = n(77413),
                c = n(441394),
                d = n(662478),
                f = n(403168),
                m = n(5544),
                p = n(470643),
                I = n(441143),
                v = n.n(I),
                g = n(245353),
                _ = n(135855);
            var E = n(213424),
                h = n(473708),
                b = n(73197),
                j = n.n(b);

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        T(e, t, n[t])
                    }))
                }
                return e
            }

            function y(e, t) {
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

            function D(e) {
                var t = e.className,
                    n = e.guildId,
                    i = e.error,
                    I = e.emojiId,
                    b = e.emojiName,
                    T = e.isRequiredField,
                    D = void 0 === T || T,
                    O = e.shouldUpdateBothEmojiFields,
                    S = void 0 !== O && O,
                    x = e.setEmojiId,
                    C = e.setEmojiName,
                    P = function(e) {
                        var t = e.emojiId,
                            n = e.emojiName,
                            r = (0, s.e7)([g.Z], (function() {
                                return null != t ? g.Z.getCustomEmojiById(t) : null
                            }));
                        if (null != r || null != n) {
                            if (null == t) {
                                v()(null != n, "emojiName must be defined if emojiId is not defined");
                                return _.ZP.convertSurrogateToName(n, !1)
                            }
                            return null == r ? void 0 : r.name
                        }
                    }({
                        emojiId: I,
                        emojiName: b
                    }),
                    R = (0, s.e7)([m.ZP], (function() {
                        return null != n ? m.ZP.getDefaultChannel(n) : null
                    })),
                    N = l.createRef(),
                    U = (0, d.Z)(N),
                    A = function(e) {
                        return function(t, n) {
                            if (null == (null == t ? void 0 : t.id)) C(null == t ? void 0 : t.optionallyDiverseSequence);
                            else {
                                S && C(null == t ? void 0 : t.name);
                                x(null == t ? void 0 : t.id)
                            }
                            n && e()
                        }
                    },
                    Z = function(e) {
                        e.stopPropagation();
                        C(void 0);
                        x(void 0)
                    };
                return (0, r.jsx)(a.FormItem, {
                    required: D,
                    title: h.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
                    className: o()(t, j().section),
                    error: i,
                    children: (0, r.jsx)(a.Popout, {
                        animation: a.Popout.Animation.NONE,
                        position: "top",
                        renderPopout: function(e) {
                            var t = e.closePopout;
                            return (0, r.jsx)(f.Z, {
                                closePopout: t,
                                pickerIntention: E.Hz.SOUNDBOARD,
                                onNavigateAway: t,
                                onSelectEmoji: A(t),
                                guildId: n,
                                channel: R
                            })
                        },
                        children: function(e, t) {
                            var n = t.isShown;
                            return (0, r.jsxs)("div", y(L({}, e), {
                                className: j().emojiInput,
                                ref: N,
                                children: [(0, r.jsx)(p.Z, {
                                    className: j().emojiButton,
                                    active: n,
                                    tabIndex: 0,
                                    renderButtonContents: null != I || null != b ? function() {
                                        return (0, r.jsx)(u.Z, {
                                            emojiName: b,
                                            emojiId: I
                                        })
                                    } : null
                                }), (0, r.jsx)(a.TextInput, {
                                    inputClassName: j().emojiText,
                                    placeholder: h.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
                                    value: null != P ? ":".concat(P, ":") : "",
                                    readOnly: !0
                                }), U && null != P && (0, r.jsx)(c.Z, y(L({}, e), {
                                    onClick: Z,
                                    className: j().removeButton
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
                l = n(667294),
                i = n(294184),
                o = n.n(i),
                s = n(882723),
                a = n(557617),
                u = n(656016),
                c = n.n(u);

            function d(e) {
                var t = e.filename,
                    n = e.className,
                    i = e.filters,
                    u = e.buttonText,
                    d = e.placeholder,
                    f = e.onFileSelect,
                    m = l.useRef(null);
                return (0, r.jsxs)("div", {
                    className: o()(n, c().fileUpload),
                    children: [(0, r.jsx)("input", {
                        className: c().fileUploadInput,
                        tabIndex: -1,
                        readOnly: !0,
                        placeholder: d,
                        type: "text",
                        value: t
                    }), (0, r.jsxs)(s.Button, {
                        size: s.Button.Sizes.MIN,
                        className: c().fileUploadButton,
                        children: [u, (0, r.jsx)(a.Z, {
                            ref: m,
                            tabIndex: -1,
                            onChange: function(e) {
                                var t, n = null === (t = e.currentTarget.files) || void 0 === t ? void 0 : t[0];
                                f(n)
                            },
                            multiple: !1,
                            filters: i
                        })]
                    })]
                })
            }
        },
        856729: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => X
            });
            var r = n(785893),
                l = n(667294),
                i = n(294184),
                o = n.n(i),
                s = n(468811),
                a = n.n(s),
                u = n(202351),
                c = n(575945),
                d = n(882723),
                f = n(245353),
                m = n(108709),
                p = n(707233),
                I = n(311260),
                v = n(64234),
                g = n(473903),
                _ = n(107364),
                E = n(386991),
                h = n(652591),
                b = n(452723),
                j = n(348592),
                T = n(347117),
                L = n(840598),
                y = (0, n(260561).B)({
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
                O = n(513586),
                S = n(600277),
                x = n(719833),
                C = n(2590),
                P = n(473708),
                R = n(958497),
                N = n.n(R),
                U = n(429547),
                A = n.n(U),
                Z = n(834005),
                M = n.n(Z);

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function k(e, t, n, r, l, i, o) {
                try {
                    var s = e[i](o),
                        a = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(a) : Promise.resolve(a).then(r, l)
            }

            function K(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, l) {
                        var i = e.apply(t, n);

                        function o(e) {
                            k(i, r, l, o, s, "next", e)
                        }

                        function s(e) {
                            k(i, r, l, o, s, "throw", e)
                        }
                        o(void 0)
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
                        var r, l, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            l = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw l
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return w(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var F = function(e, t) {
                    var n, r, l, i, o = {
                        label: 0,
                        sent: function() {
                            if (1 & l[0]) throw l[1];
                            return l[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (l = 2 & i[0] ? r.return : i[0] ? r.throw || ((l = r.return) && l.call(r), 0) : r.next) && !(l = l.call(r, i[1])).done) return l;
                                    (r = 0, l) && (i = [2 & i[0], l.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            l = i;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(l = o.trys, l = l.length > 0 && l[l.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!l || i[1] > l[0] && i[1] < l[3])) {
                                                o.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && o.label < l[1]) {
                                                o.label = l[1];
                                                l = i;
                                                break
                                            }
                                            if (l && o.label < l[2]) {
                                                o.label = l[2];
                                                o.ops.push(i);
                                                break
                                            }
                                            l[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, o)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = l = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                z = 320,
                H = new Set(["application/json", "image/png", "image/apng", "image/gif"]),
                V = [{
                    name: "Sticker file",
                    extensions: ["json", "png", "apng", "gif"]
                }];

            function q(e, t) {
                h.default.track(C.rMx.STICKER_UPLOAD_COMPLETED, {
                    successful: e,
                    error: null != t ? t : ""
                })
            }
            var W = function(e) {
                var t = e.stickerPreview;
                return (0, r.jsxs)("div", {
                    className: N().preview,
                    children: [(0, r.jsx)("div", {
                        className: N().previewDark,
                        children: null != t ? t : (0, r.jsx)("img", {
                            src: A(),
                            alt: P.Z.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
                        })
                    }), (0, r.jsx)("div", {
                        className: N().previewLight,
                        children: null != t ? t : (0, r.jsx)("img", {
                            src: M(),
                            alt: P.Z.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
                        })
                    })]
                })
            };

            function Y(e) {
                return J.apply(this, arguments)
            }

            function J() {
                return (J = K((function(e) {
                    var t, n, r;
                    return F(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return [4, (0, T.fD)(e)];
                            case 1:
                                t = l.sent();
                                (n = new Image).src = t;
                                return [4, n.decode()];
                            case 2:
                                l.sent();
                                r = (0, I.Ae)(n, z, z);
                                return [2, (0, T.Bo)(r, e.name, e.type)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function X(e) {
                var t, n, i, s, I, R, U, A, Z, M = e.transitionState,
                    w = e.onClose,
                    k = e.guildId,
                    z = e.sticker,
                    J = (0, u.e7)([v.Z], (function() {
                        return v.Z.theme
                    })),
                    X = (0, u.e7)([f.Z], (function() {
                        return null != (null == z ? void 0 : z.tags) ? f.Z.getCustomEmojiById(z.tags) : null
                    })),
                    $ = null !== (n = null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n ? x.OC : x.Ht,
                    Q = G(l.useState(null), 2),
                    ee = Q[0],
                    te = Q[1],
                    ne = G(l.useState(null !== (i = null == z ? void 0 : z.name) && void 0 !== i ? i : ""), 2),
                    re = ne[0],
                    le = ne[1],
                    ie = G(l.useState({
                        file: null,
                        filename: null !== (s = (0, O._V)(z)) && void 0 !== s ? s : ""
                    }), 2),
                    oe = ie[0],
                    se = ie[1],
                    ae = G(l.useState(null == X ? void 0 : X.id), 2),
                    ue = ae[0],
                    ce = ae[1],
                    de = G(l.useState(null !== (I = null == X ? void 0 : X.name) && void 0 !== I ? I : null == z ? void 0 : z.tags), 2),
                    fe = de[0],
                    me = de[1],
                    pe = G(l.useState(null !== (R = null == z ? void 0 : z.description) && void 0 !== R ? R : ""), 2),
                    Ie = pe[0],
                    ve = pe[1],
                    ge = G(l.useState(!1), 2),
                    _e = ge[0],
                    Ee = ge[1],
                    he = G(l.useState(null), 2),
                    be = he[0],
                    je = he[1],
                    Te = null != z,
                    Le = Te || null != (null == oe ? void 0 : oe.file),
                    ye = 0 === Ie.length || Ie.length >= 2 && Ie.length <= 100,
                    De = !_e && !0 !== (null == be ? void 0 : be.isBlocking) && re.length >= 2 && (null != ue || null != fe || null != (null == z ? void 0 : z.tags) && "" !== (null == z ? void 0 : z.tags)) && Le && ye,
                    Oe = y.getCurrentConfig({
                        guildId: k,
                        location: "d3a320_1"
                    }).enabled,
                    Se = (U = K((function(e) {
                        var t, n, r, l, i, o, s, u;
                        return F(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    if (null == e) return [2];
                                    n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                                    if (!H.has(n)) {
                                        je({
                                            message: P.Z.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
                                            isBlocking: !0
                                        });
                                        return [2]
                                    }
                                    r = e;
                                    return (l = "image/png" === n && e.size > $) ? [4, (0,
                                        T.c0)(e)] : [3, 2];
                                case 1:
                                    l = !c.sent();
                                    c.label = 2;
                                case 2:
                                    return l ? [4, Y(e)] : [3, 4];
                                case 3:
                                    r = c.sent();
                                    i = r.size > $;
                                    h.default.track(C.rMx.STICKER_FILE_RESIZED, {
                                        original_file_size_bytes: e.size,
                                        resized_file_size_bytes: r.size,
                                        resized_file_too_big: i
                                    });
                                    c.label = 4;
                                case 4:
                                    if (r.size > $) {
                                        je({
                                            message: P.Z.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
                                                maxSize: (0, b.IC)($, {
                                                    useKibibytes: !0
                                                })
                                            }),
                                            isBlocking: null == oe.file
                                        });
                                        h.default.track(C.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                            size: r.size,
                                            filetype: n
                                        });
                                        return [2]
                                    }
                                    if ((o = (0, O.Zv)(r.type)) !== D.u3.LOTTIE) return [3, 5];
                                    if (!Oe) {
                                        je({
                                            message: P.Z.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
                                                articleURL: j.Z.getArticleURL(C.BhN.STICKERS_UPLOAD)
                                            }),
                                            isBlocking: !0
                                        });
                                        return [2]
                                    }(s = new FileReader).addEventListener("load", (function() {
                                        te({
                                            id: a().v4(),
                                            formatType: o,
                                            content: s.result
                                        });
                                        je(null)
                                    }));
                                    s.readAsText(r);
                                    return [3, 7];
                                case 5:
                                    return [4, (0, T.fD)(r)];
                                case 6:
                                    u = c.sent();
                                    te({
                                        id: a().v4(),
                                        formatType: o,
                                        content: u
                                    });
                                    je(null);
                                    c.label = 7;
                                case 7:
                                    se({
                                        file: r,
                                        filename: r.name
                                    });
                                    return [2]
                            }
                        }))
                    })), function(e) {
                        return U.apply(this, arguments)
                    }),
                    xe = function() {
                        var e = K((function(e) {
                            var t, n, r, l, i, o, s, a;
                            return F(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        e.preventDefault();
                                        r = null !== (n = null !== (t = null != ue ? ue : fe) && void 0 !== t ? t : null == z ? void 0 : z.tags) && void 0 !== n ? n : "";
                                        u.label = 1;
                                    case 1:
                                        u.trys.push([1, 6, 7, 8]);
                                        Ee(!0);
                                        return Te ? [4, (0, L.Jf)(k, null !== (l = null == z ? void 0 : z.id) && void 0 !== l ? l : "", {
                                            name: re,
                                            tags: r,
                                            description: Ie
                                        })] : [3, 3];
                                    case 2:
                                        u.sent();
                                        return [3, 5];
                                    case 3:
                                        (o = new FormData).append("name", re);
                                        o.append("tags", r);
                                        o.append("description", Ie);
                                        null != (null == oe ? void 0 : oe.file) && o.append("file", oe.file);
                                        c = null !== (s = null === (i = oe.file) || void 0 === i ? void 0 : i.type) && void 0 !== s ? s : "", h.default.track(C.rMx.STICKER_UPLOAD_STARTED, {
                                            filetype: c
                                        });
                                        return [4, (0, L.lY)(k, o)];
                                    case 4:
                                        u.sent();
                                        q(!0);
                                        u.label = 5;
                                    case 5:
                                        w();
                                        return [3, 8];
                                    case 6:
                                        a = u.sent();
                                        je({
                                            message: a.body.message,
                                            isBlocking: !1
                                        });
                                        q(!1, a.body.message);
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
                    Ce = l.useCallback((function() {
                        je({
                            message: P.Z.Messages.GUILD_STICKER_INVALID_STICKER,
                            isBlocking: !0
                        })
                    }), []),
                    Pe = function(e) {
                        var t = e.sticker,
                            n = e.previewData,
                            l = e.onStickerError;
                        if (null != t) return (0, r.jsx)(S.ZP, {
                            size: 160,
                            sticker: t
                        });
                        if (null == n) return null;
                        var i = n.id,
                            o = n.formatType,
                            s = n.content;
                        return (0, r.jsx)(S.ZP, {
                            assetData: s,
                            fileUri: s,
                            size: 160,
                            sticker: {
                                name: i,
                                description: "",
                                id: i,
                                pack_id: "",
                                format_type: o
                            },
                            onError: l
                        }, i)
                    }({
                        sticker: z,
                        previewData: ee,
                        onStickerError: Ce
                    }),
                    Re = Oe ? P.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : P.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
                return (0, r.jsxs)(d.ModalRoot, {
                    transitionState: M,
                    "aria-labelledby": "STICKER_UPLOAD_MODAL",
                    className: N().modal,
                    children: [(0, r.jsx)(d.ModalCloseButton, {
                        onClick: w,
                        className: N().modalClose
                    }), (0, r.jsxs)("form", {
                        onSubmit: xe,
                        className: N().form,
                        children: [(0, r.jsxs)(d.ModalContent, {
                            className: N().modalContent,
                            children: [(0, r.jsxs)(d.ModalHeader, {
                                direction: _.Z.Direction.VERTICAL,
                                separator: !1,
                                className: N().modalHeader,
                                children: [(0, r.jsx)(d.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: N().modalHeaderTitle,
                                    children: P.Z.Messages.GUILD_STICKER_UPLOAD_TITLE
                                }), (0, r.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: Re.format({
                                        fileSize: (0, b.IC)(x.Ht, {
                                            useKibibytes: !0
                                        })
                                    })
                                })]
                            }), (0, r.jsx)(d.FormSection, {
                                title: P.Z.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
                                className: N().formItem,
                                children: (0, r.jsx)(W, {
                                    stickerPreview: Pe
                                })
                            }), (0, r.jsxs)(d.FormSection, {
                                className: o()(N().formItem, N().formItemRow),
                                children: [(0, r.jsx)(d.FormItem, {
                                    title: Te ? P.Z.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : P.Z.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
                                    required: !0,
                                    className: N().formItemRowChild,
                                    children: Te ? (0, r.jsx)(d.TextInput, {
                                        disabled: !0,
                                        value: null !== (A = null == oe ? void 0 : oe.filename) && void 0 !== A ? A : ""
                                    }) : (0, r.jsx)(p.Z, {
                                        buttonText: P.Z.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
                                        filters: V,
                                        filename: null !== (Z = null == oe ? void 0 : oe.filename) && void 0 !== Z ? Z : "",
                                        placeholder: P.Z.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
                                        onFileSelect: Se
                                    })
                                }), (0, r.jsx)(m.Z, {
                                    className: N().formItemRowChild,
                                    guildId: k,
                                    emojiId: ue,
                                    emojiName: fe,
                                    setEmojiId: ce,
                                    setEmojiName: me,
                                    shouldUpdateBothEmojiFields: !0
                                })]
                            }), (0, r.jsx)(d.FormItem, {
                                title: P.Z.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
                                required: !0,
                                className: N().formItem,
                                children: (0, r.jsx)(d.TextInput, {
                                    value: re,
                                    onChange: le,
                                    placeholder: P.Z.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
                                    maxLength: 30
                                })
                            }), (0, r.jsxs)("div", {
                                className: N().formItem,
                                children: [(0, r.jsxs)(d.FormTitle, {
                                    children: [P.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE, (0, r.jsx)(d.Tooltip, {
                                        text: P.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
                                        children: function(e) {
                                            return (0, r.jsx)(E.Z, function(e) {
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
                                                className: N().infoIcon
                                            }, e))
                                        }
                                    })]
                                }), (0, r.jsx)(d.TextArea, {
                                    value: Ie,
                                    onChange: ve,
                                    placeholder: P.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
                                    maxLength: 100
                                })]
                            }), null != be && (0, r.jsx)(d.Text, {
                                className: N().formItem,
                                variant: "text-sm/normal",
                                color: "text-danger",
                                children: be.message
                            })]
                        }), (0, r.jsxs)(d.ModalFooter, {
                            className: N().modalFooter,
                            children: [(0, r.jsx)(d.Button, {
                                type: "submit",
                                disabled: !De,
                                children: Te ? P.Z.Messages.GUILD_STICKERS_UPDATE : P.Z.Messages.UPLOAD
                            }), (0, r.jsx)(d.Button, {
                                look: d.Button.Looks.LINK,
                                color: (0, c.ap)(J) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
                                onClick: w,
                                children: P.Z.Messages.NEVERMIND
                            })]
                        })]
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=b7236059670d7d372b5e.js.map