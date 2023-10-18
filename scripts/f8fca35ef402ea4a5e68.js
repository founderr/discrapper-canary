(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [98010], {
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
                a = n(70418),
                u = n(77413),
                c = n(441394),
                d = n(662478),
                f = n(739770),
                m = n(5544),
                p = n(470643),
                I = n(441143),
                g = n.n(I),
                v = n(245353),
                _ = n(135855);
            var E = n(213424),
                h = n(473708),
                b = n(369163),
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
                            r = (0, s.e7)([v.Z], (function() {
                                return null != t ? v.Z.getCustomEmojiById(t) : null
                            }));
                        if (null != r || null != n) {
                            if (null == t) {
                                g()(null != n, "emojiName must be defined if emojiId is not defined");
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
                    Z = function(e) {
                        return function(t, n) {
                            if (null == (null == t ? void 0 : t.id)) C(null == t ? void 0 : t.optionallyDiverseSequence);
                            else {
                                S && C(null == t ? void 0 : t.name);
                                x(null == t ? void 0 : t.id)
                            }
                            n && e()
                        }
                    },
                    A = function(e) {
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
                                onSelectEmoji: Z(t),
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
                                    onClick: A,
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
                s = n(70418),
                a = n(753419),
                u = n(393369),
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
                default: () => J
            });
            var r = n(785893),
                l = n(667294),
                i = n(294184),
                o = n.n(i),
                s = n(228721),
                a = n(202351),
                u = n(575945),
                c = n(70418),
                d = n(245353),
                f = n(108709),
                m = n(707233),
                p = n(311260),
                I = n(64234),
                g = n(473903),
                v = n(107364),
                _ = n(386991),
                E = n(652591),
                h = n(452723),
                b = n(348592),
                j = n(347117),
                T = n(840598),
                L = (0, n(260561).B)({
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
                y = n(514351),
                D = n(513586),
                O = n(622902),
                S = n(719833),
                x = n(2590),
                C = n(473708),
                P = n(679900),
                R = n.n(P),
                N = n(429547),
                U = n.n(N),
                Z = n(834005),
                A = n.n(Z);

            function M(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function w(e, t, n, r, l, i, o) {
                try {
                    var s = e[i](o),
                        a = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(a) : Promise.resolve(a).then(r, l)
            }

            function k(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, l) {
                        var i = e.apply(t, n);

                        function o(e) {
                            w(i, r, l, o, s, "next", e)
                        }

                        function s(e) {
                            w(i, r, l, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function K(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function B(e, t) {
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
                    if ("string" == typeof e) return M(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var G = function(e, t) {
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
                F = 320,
                z = new Set(["application/json", "image/png", "image/apng", "image/gif"]),
                H = [{
                    name: "Sticker file",
                    extensions: ["json", "png", "apng", "gif"]
                }];

            function V(e, t) {
                E.default.track(x.rMx.STICKER_UPLOAD_COMPLETED, {
                    successful: e,
                    error: null != t ? t : ""
                })
            }
            var q = function(e) {
                var t = e.stickerPreview;
                return (0, r.jsxs)("div", {
                    className: R().preview,
                    children: [(0, r.jsx)("div", {
                        className: R().previewDark,
                        children: null != t ? t : (0, r.jsx)("img", {
                            src: U(),
                            alt: C.Z.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
                        })
                    }), (0, r.jsx)("div", {
                        className: R().previewLight,
                        children: null != t ? t : (0, r.jsx)("img", {
                            src: A(),
                            alt: C.Z.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
                        })
                    })]
                })
            };

            function W(e) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = k((function(e) {
                    var t, n, r;
                    return G(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return [4, (0, j.fD)(e)];
                            case 1:
                                t = l.sent();
                                (n = new Image).src = t;
                                return [4, n.decode()];
                            case 2:
                                l.sent();
                                r = (0, p.Ae)(n, F, F);
                                return [2, (0, j.Bo)(r, e.name, e.type)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function J(e) {
                var t, n, i, p, P, N, U, Z, A, M = e.transitionState,
                    w = e.onClose,
                    F = e.guildId,
                    Y = e.sticker,
                    J = (0, a.e7)([I.Z], (function() {
                        return I.Z.theme
                    })),
                    X = (0, a.e7)([d.Z], (function() {
                        return null != (null == Y ? void 0 : Y.tags) ? d.Z.getCustomEmojiById(Y.tags) : null
                    })),
                    $ = null !== (n = null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n ? S.OC : S.Ht,
                    Q = B(l.useState(null), 2),
                    ee = Q[0],
                    te = Q[1],
                    ne = B(l.useState(null !== (i = null == Y ? void 0 : Y.name) && void 0 !== i ? i : ""), 2),
                    re = ne[0],
                    le = ne[1],
                    ie = B(l.useState({
                        file: null,
                        filename: null !== (p = (0, D._V)(Y)) && void 0 !== p ? p : ""
                    }), 2),
                    oe = ie[0],
                    se = ie[1],
                    ae = B(l.useState(null == X ? void 0 : X.id), 2),
                    ue = ae[0],
                    ce = ae[1],
                    de = B(l.useState(null !== (P = null == X ? void 0 : X.name) && void 0 !== P ? P : null == Y ? void 0 : Y.tags), 2),
                    fe = de[0],
                    me = de[1],
                    pe = B(l.useState(null !== (N = null == Y ? void 0 : Y.description) && void 0 !== N ? N : ""), 2),
                    Ie = pe[0],
                    ge = pe[1],
                    ve = B(l.useState(!1), 2),
                    _e = ve[0],
                    Ee = ve[1],
                    he = B(l.useState(null), 2),
                    be = he[0],
                    je = he[1],
                    Te = null != Y,
                    Le = Te || null != (null == oe ? void 0 : oe.file),
                    ye = 0 === Ie.length || Ie.length >= 2 && Ie.length <= 100,
                    De = !_e && !0 !== (null == be ? void 0 : be.isBlocking) && re.length >= 2 && (null != ue || null != fe || null != (null == Y ? void 0 : Y.tags) && "" !== (null == Y ? void 0 : Y.tags)) && Le && ye,
                    Oe = L.getCurrentConfig({
                        guildId: F,
                        location: "d3a320_1"
                    }).enabled,
                    Se = (U = k((function(e) {
                        var t, n, r, l, i, o, a, u;
                        return G(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    if (null == e) return [2];
                                    n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                                    if (!z.has(n)) {
                                        je({
                                            message: C.Z.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
                                            isBlocking: !0
                                        });
                                        return [2]
                                    }
                                    r = e;
                                    return (l = "image/png" === n && e.size > $) ? [4, (0,
                                        j.c0)(e)] : [3, 2];
                                case 1:
                                    l = !c.sent();
                                    c.label = 2;
                                case 2:
                                    return l ? [4, W(e)] : [3, 4];
                                case 3:
                                    r = c.sent();
                                    i = r.size > $;
                                    E.default.track(x.rMx.STICKER_FILE_RESIZED, {
                                        original_file_size_bytes: e.size,
                                        resized_file_size_bytes: r.size,
                                        resized_file_too_big: i
                                    });
                                    c.label = 4;
                                case 4:
                                    if (r.size > $) {
                                        je({
                                            message: C.Z.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
                                                maxSize: (0, h.IC)($, {
                                                    useKibibytes: !0
                                                })
                                            }),
                                            isBlocking: null == oe.file
                                        });
                                        E.default.track(x.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                            size: r.size,
                                            filetype: n
                                        });
                                        return [2]
                                    }
                                    if ((o = (0, D.Zv)(r.type)) !== y.u3.LOTTIE) return [3, 5];
                                    if (!Oe) {
                                        je({
                                            message: C.Z.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
                                                articleURL: b.Z.getArticleURL(x.BhN.STICKERS_UPLOAD)
                                            }),
                                            isBlocking: !0
                                        });
                                        return [2]
                                    }(a = new FileReader).addEventListener("load", (function() {
                                        te({
                                            id: (0, s.Z)(),
                                            formatType: o,
                                            content: a.result
                                        });
                                        je(null)
                                    }));
                                    a.readAsText(r);
                                    return [3, 7];
                                case 5:
                                    return [4, (0, j.fD)(r)];
                                case 6:
                                    u = c.sent();
                                    te({
                                        id: (0, s.Z)(),
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
                        var e = k((function(e) {
                            var t, n, r, l, i, o, s, a;
                            return G(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        e.preventDefault();
                                        r = null !== (n = null !== (t = null != ue ? ue : fe) && void 0 !== t ? t : null == Y ? void 0 : Y.tags) && void 0 !== n ? n : "";
                                        u.label = 1;
                                    case 1:
                                        u.trys.push([1, 6, 7, 8]);
                                        Ee(!0);
                                        return Te ? [4, (0, T.Jf)(F, null !== (l = null == Y ? void 0 : Y.id) && void 0 !== l ? l : "", {
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
                                        c = null !== (s = null === (i = oe.file) || void 0 === i ? void 0 : i.type) && void 0 !== s ? s : "", E.default.track(x.rMx.STICKER_UPLOAD_STARTED, {
                                            filetype: c
                                        });
                                        return [4, (0, T.lY)(F, o)];
                                    case 4:
                                        u.sent();
                                        V(!0);
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
                                        V(!1, a.body.message);
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
                            message: C.Z.Messages.GUILD_STICKER_INVALID_STICKER,
                            isBlocking: !0
                        })
                    }), []),
                    Pe = function(e) {
                        var t = e.sticker,
                            n = e.previewData,
                            l = e.onStickerError;
                        if (null != t) return (0, r.jsx)(O.ZP, {
                            size: 160,
                            sticker: t
                        });
                        if (null == n) return null;
                        var i = n.id,
                            o = n.formatType,
                            s = n.content;
                        return (0, r.jsx)(O.ZP, {
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
                        sticker: Y,
                        previewData: ee,
                        onStickerError: Ce
                    }),
                    Re = Oe ? C.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : C.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
                return (0, r.jsxs)(c.ModalRoot, {
                    transitionState: M,
                    "aria-labelledby": "STICKER_UPLOAD_MODAL",
                    className: R().modal,
                    children: [(0, r.jsx)(c.ModalCloseButton, {
                        onClick: w,
                        className: R().modalClose
                    }), (0, r.jsxs)("form", {
                        onSubmit: xe,
                        className: R().form,
                        children: [(0, r.jsxs)(c.ModalContent, {
                            className: R().modalContent,
                            children: [(0, r.jsxs)(c.ModalHeader, {
                                direction: v.Z.Direction.VERTICAL,
                                separator: !1,
                                className: R().modalHeader,
                                children: [(0, r.jsx)(c.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: R().modalHeaderTitle,
                                    children: C.Z.Messages.GUILD_STICKER_UPLOAD_TITLE
                                }), (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: Re.format({
                                        fileSize: (0, h.IC)(S.Ht, {
                                            useKibibytes: !0
                                        })
                                    })
                                })]
                            }), (0, r.jsx)(c.FormSection, {
                                title: C.Z.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
                                className: R().formItem,
                                children: (0, r.jsx)(q, {
                                    stickerPreview: Pe
                                })
                            }), (0, r.jsxs)(c.FormSection, {
                                className: o()(R().formItem, R().formItemRow),
                                children: [(0, r.jsx)(c.FormItem, {
                                    title: Te ? C.Z.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : C.Z.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
                                    required: !0,
                                    className: R().formItemRowChild,
                                    children: Te ? (0, r.jsx)(c.TextInput, {
                                        disabled: !0,
                                        value: null !== (Z = null == oe ? void 0 : oe.filename) && void 0 !== Z ? Z : ""
                                    }) : (0, r.jsx)(m.Z, {
                                        buttonText: C.Z.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
                                        filters: H,
                                        filename: null !== (A = null == oe ? void 0 : oe.filename) && void 0 !== A ? A : "",
                                        placeholder: C.Z.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
                                        onFileSelect: Se
                                    })
                                }), (0, r.jsx)(f.Z, {
                                    className: R().formItemRowChild,
                                    guildId: F,
                                    emojiId: ue,
                                    emojiName: fe,
                                    setEmojiId: ce,
                                    setEmojiName: me,
                                    shouldUpdateBothEmojiFields: !0
                                })]
                            }), (0, r.jsx)(c.FormItem, {
                                title: C.Z.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
                                required: !0,
                                className: R().formItem,
                                children: (0, r.jsx)(c.TextInput, {
                                    value: re,
                                    onChange: le,
                                    placeholder: C.Z.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
                                    maxLength: 30
                                })
                            }), (0, r.jsxs)("div", {
                                className: R().formItem,
                                children: [(0, r.jsxs)(c.FormTitle, {
                                    children: [C.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE, (0, r.jsx)(c.Tooltip, {
                                        text: C.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
                                        children: function(e) {
                                            return (0, r.jsx)(_.Z, function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        K(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({
                                                className: R().infoIcon
                                            }, e))
                                        }
                                    })]
                                }), (0, r.jsx)(c.TextArea, {
                                    value: Ie,
                                    onChange: ge,
                                    placeholder: C.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
                                    maxLength: 100
                                })]
                            }), null != be && (0, r.jsx)(c.Text, {
                                className: R().formItem,
                                variant: "text-sm/normal",
                                color: "text-danger",
                                children: be.message
                            })]
                        }), (0, r.jsxs)(c.ModalFooter, {
                            className: R().modalFooter,
                            children: [(0, r.jsx)(c.Button, {
                                type: "submit",
                                disabled: !De,
                                children: Te ? C.Z.Messages.GUILD_STICKERS_UPDATE : C.Z.Messages.UPLOAD
                            }), (0, r.jsx)(c.Button, {
                                look: c.Button.Looks.LINK,
                                color: (0, u.ap)(J) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
                                onClick: w,
                                children: C.Z.Messages.NEVERMIND
                            })]
                        })]
                    })]
                })
            }
        }
    }
]);