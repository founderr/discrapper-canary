(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["76650"], {
        310013: function(e, t, l) {
            "use strict";
            var a = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                n = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, l) {
                if ("string" != typeof t) {
                    var s = Object.getOwnPropertyNames(t);
                    n && (s = s.concat(Object.getOwnPropertySymbols(t)));
                    for (var r = 0; r < s.length; ++r)
                        if (!a[s[r]] && !i[s[r]] && (!l || !l[s[r]])) try {
                            e[s[r]] = t[s[r]]
                        } catch (e) {}
                }
                return e
            }
        },
        357450: function(e, t, l) {
            "use strict";
            e.exports = l.p + "222f914ec12acf16874f.svg"
        },
        348919: function(e, t, l) {
            "use strict";
            e.exports = l.p + "ec6798869dcd1915ecd8.svg"
        },
        583367: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                fetchAppliedGuildBoostsForGuild: function() {
                    return u
                },
                fetchGuildBoostSlots: function() {
                    return c
                },
                applyToGuild: function() {
                    return _
                },
                unapplyFromGuild: function() {
                    return E
                },
                cancelGuildBoostSlot: function() {
                    return I
                },
                uncancelGuildBoostSlot: function() {
                    return f
                }
            });
            var a = l("872717"),
                i = l("913144"),
                n = l("448993"),
                s = l("783111"),
                r = l("522308"),
                o = l("521012"),
                d = l("49111");
            async function u(e) {
                let t = await a.default.get({
                        url: d.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                        oldFormErrors: !0
                    }),
                    l = t.body.map(e => s.default.createFromServer(e));
                return i.default.dispatch({
                    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
                    guildId: e,
                    appliedBoosts: l
                }), l
            }
            async function c() {
                let e = await a.default.get({
                        url: d.Endpoints.USER_GUILD_BOOST_SLOTS,
                        oldFormErrors: !0
                    }),
                    t = e.body.map(e => r.default.createFromServer(e, o.default.getSubscriptionById(e.subscription_id)));
                return i.default.dispatch({
                    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
                    guildBoostSlots: t
                }), t
            }
            async function _(e, t) {
                i.default.dispatch({
                    type: "GUILD_APPLY_BOOST_START"
                });
                try {
                    let l = await a.default.put({
                            url: d.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                            body: {
                                user_premium_guild_subscription_slot_ids: t
                            },
                            oldFormErrors: !0
                        }),
                        n = Array.isArray(l.body) ? l.body.map(s.default.createFromServer) : [s.default.createFromServer(l.body)];
                    return i.default.dispatch({
                        type: "GUILD_APPLY_BOOST_SUCCESS",
                        appliedGuildBoost: n
                    }), c(), n
                } catch (t) {
                    let e = new n.AppliedGuildBoostError(t);
                    throw i.default.dispatch({
                        type: "GUILD_APPLY_BOOST_FAIL",
                        error: e
                    }), e
                }
            }
            async function E(e, t) {
                i.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_START"
                });
                try {
                    await a.default.delete({
                        url: d.Endpoints.APPLIED_GUILD_BOOST(e, t),
                        oldFormErrors: !0
                    }), c()
                } catch (t) {
                    let e = new n.AppliedGuildBoostError(t);
                    throw i.default.dispatch({
                        type: "GUILD_UNAPPLY_BOOST_FAIL",
                        error: e
                    }), e
                }
                i.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
                    boostId: t
                })
            }
            async function I(e) {
                let t = await a.default.post({
                        url: d.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(e),
                        oldFormErrors: !0
                    }),
                    l = r.default.createFromServer(t.body, o.default.getSubscriptionById(t.body.subscription_id));
                return i.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: l
                }), l
            }
            async function f(e) {
                let t = await a.default.post({
                        url: d.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
                        oldFormErrors: !0
                    }),
                    l = r.default.createFromServer(t.body, o.default.getSubscriptionById(t.body.subscription_id));
                return i.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: l
                }), l
            }
        },
        8731: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                cropGIF: function() {
                    return s
                },
                cropStaticImage: function() {
                    return r
                },
                getBoundedCoordinates: function() {
                    return o
                },
                adjustImageDimensionsForAspectRatio: function() {
                    return u
                },
                calculateDragBoundaries: function() {
                    return c
                },
                calculateOverlaySize: function() {
                    return _
                },
                downsizeImage: function() {
                    return E
                }
            }), l("511434"), l("313619"), l("654714"), l("287168"), l("956660"), l("222007"), l("70102"), l("311790"), l("477657"), l("811875"), l("90301"), l("652153"), l("28797"), l("817884"), l("597349"), l("667536"), l("690341");
            var a = l("917351"),
                i = l("75015");

            function n(e, t, l, a) {
                let i = e.naturalWidth / e.width,
                    n = t.width / 2,
                    s = t.height / 2,
                    r = (e.width / 2 - n - l.x) * i,
                    o = (e.height / 2 - s - l.y) * i,
                    d = t.width * i,
                    u = t.height * i,
                    c = Math.min(d, a.width),
                    _ = Math.min(u, a.height);
                return {
                    x: r,
                    y: o,
                    scaledCropWidth: d,
                    scaledCropHeight: u,
                    canvasWidth: c,
                    canvasHeight: _
                }
            }
            async function s(e, t, a, s, r) {
                let {
                    x: o,
                    y: d,
                    scaledCropWidth: u,
                    scaledCropHeight: c
                } = n(t, a, s, r), _ = await e.arrayBuffer(), E = new Worker(new URL(l.p + l.u("39703"), l.b)), I = new Promise((e, t) => {
                    E.onmessage = l => {
                        let {
                            data: a
                        } = l;
                        if (a.type === i.MessageTypes.CROP_GIF_COMPLETE) {
                            var n;
                            e((n = new Blob([a.result]), new Promise(e => {
                                let t = new FileReader;
                                t.onload = t => {
                                    var l;
                                    let a = null === (l = t.target) || void 0 === l ? void 0 : l.result;
                                    "string" == typeof a ? e(a) : e("")
                                }, t.readAsDataURL(n)
                            }))), E.terminate()
                        } else a.type === i.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), E.terminate())
                    }
                });
                return E.postMessage({
                    type: i.MessageTypes.CROP_GIF_START,
                    gif: new Uint8Array(_),
                    x: 0 | o,
                    y: 0 | d,
                    width: 0 | u,
                    height: 0 | c
                }), {
                    result: I,
                    cancelFn: () => E.terminate()
                }
            }

            function r(e, t, l, a) {
                let {
                    x: i,
                    y: s,
                    scaledCropWidth: r,
                    scaledCropHeight: o,
                    canvasWidth: d,
                    canvasHeight: u
                } = n(e, t, l, a), c = document.createElement("canvas");
                c.width = d, c.height = u;
                let _ = c.getContext("2d");
                return null != _ && _.drawImage(e, i, s, r, o, 0, 0, c.width, c.height), c.toDataURL("image/png")
            }

            function o(e, t, l) {
                return {
                    x: (0, a.clamp)(e, l.left, l.right),
                    y: (0, a.clamp)(t, l.bottom, l.top)
                }
            }

            function d(e, t, l, a) {
                let n = l,
                    s = a;
                l > i.EDITING_CONTAINER_WIDTH && (n = i.EDITING_CONTAINER_WIDTH, s = a * (i.EDITING_CONTAINER_WIDTH / l));
                if (l / a < e) return {
                    width: n,
                    height: s
                };
                let r = t / s,
                    o = n * r;
                return {
                    width: o,
                    height: t
                }
            }

            function u(e, t, l) {
                switch (e) {
                    case i.UploadTypes.AVATAR:
                    case i.UploadTypes.AVATAR_DECORATION:
                        return {
                            width: t, height: l
                        };
                    case i.UploadTypes.BANNER:
                        return d(i.BANNER_ASPECT_RATIO, i.MAX_BANNER_OVERLAY_HEIGHT, t, l);
                    case i.UploadTypes.GUILD_BANNER:
                        return d(i.GUILD_BANNER_ASPECT_RATIO, i.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, l);
                    case i.UploadTypes.VIDEO_BACKGROUND:
                        return d(i.VIDEO_BACKGROUND_ASPECT_RATIO, i.MAX_VIDEO_OVERLAY_HEIGHT, t, l);
                    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        return d(i.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, i.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, l);
                    case i.UploadTypes.HOME_HEADER:
                        return d(i.HOME_HEADER_ASPECT_RATIO, i.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, l)
                }
            }

            function c(e, t, l) {
                let a = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    i = e - l.width,
                    n = t - l.height;
                return 0 !== i && (a.left = -Math.abs(i / 2), a.right = i / 2), 0 !== n && (a.bottom = -Math.abs(n / 2), a.top = n / 2), a
            }

            function _(e, t, l, a) {
                switch (e) {
                    case i.UploadTypes.AVATAR:
                    case i.UploadTypes.AVATAR_DECORATION:
                        let n = Math.min(t, l);
                        return {
                            width: n, height: n
                        };
                    case i.UploadTypes.BANNER:
                        let s = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: s, height: s * (1 / i.BANNER_ASPECT_RATIO)
                        };
                    case i.UploadTypes.GUILD_BANNER:
                        let r = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: r, height: Math.min(r * (9 / 16), a)
                        };
                    case i.UploadTypes.VIDEO_BACKGROUND:
                        let o = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: o, height: o * (9 / 16)
                        };
                    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        let d = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: d, height: .4 * d
                        };
                    case i.UploadTypes.HOME_HEADER:
                        let u = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: u, height: u * (1 / i.HOME_HEADER_ASPECT_RATIO)
                        }
                }
            }

            function E(e, t, l) {
                let a = e.naturalWidth / e.naturalHeight,
                    i = t,
                    n = l;
                e.naturalWidth > e.naturalHeight ? i /= a : n *= a;
                let s = {
                    height: i,
                    width: n
                };
                return r(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, s)
            }
        },
        520497: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("49111");

            function i(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: l
                } = window.GLOBAL_ENV;
                return "development" !== l ? "".concat(location.protocol, "//").concat(t).concat(a.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(a.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        577412: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                LottieUploadExperiment: function() {
                    return i
                }
            });
            var a = l("862205");
            let i = (0, a.createExperiment)({
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
            })
        },
        54666: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return j
                }
            }), l("222007");
            var a = l("37983"),
                i = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("748820"),
                o = l("446674"),
                d = l("819855"),
                u = l("77078"),
                c = l("385976"),
                _ = l("208548"),
                E = l("104945"),
                I = l("8731"),
                f = l("161778"),
                T = l("697218"),
                p = l("145131"),
                m = l("68238"),
                S = l("599110"),
                L = l("993105"),
                h = l("701909"),
                A = l("103603"),
                g = l("467094"),
                D = l("577412"),
                O = l("161585"),
                U = l("24373"),
                R = l("41170"),
                C = l("560241"),
                N = l("49111"),
                y = l("782340"),
                v = l("735193"),
                G = l("357450"),
                P = l("348919");
            let M = new Set(["application/json", "image/png", "image/apng", "image/gif"]),
                w = [{
                    name: "Sticker file",
                    extensions: ["json", "png", "apng", "gif"]
                }];

            function B(e, t) {
                S.default.track(N.AnalyticEvents.STICKER_UPLOAD_COMPLETED, {
                    successful: e,
                    error: null != t ? t : ""
                })
            }
            let x = e => {
                    let {
                        stickerPreview: t
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: v.preview,
                        children: [(0, a.jsx)("div", {
                            className: v.previewDark,
                            children: null != t ? t : (0, a.jsx)("img", {
                                src: G,
                                alt: y.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
                            })
                        }), (0, a.jsx)("div", {
                            className: v.previewLight,
                            children: null != t ? t : (0, a.jsx)("img", {
                                src: P,
                                alt: y.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
                            })
                        })]
                    })
                },
                F = e => {
                    let {
                        sticker: t,
                        previewData: l,
                        onStickerError: i
                    } = e;
                    if (null != t) return (0, a.jsx)(R.default, {
                        size: 160,
                        sticker: t
                    });
                    if (null == l) return null;
                    let {
                        id: n,
                        formatType: s,
                        content: r
                    } = l;
                    return (0, a.jsx)(R.default, {
                        assetData: r,
                        fileUri: r,
                        size: 160,
                        sticker: {
                            name: n,
                            description: "",
                            id: n,
                            pack_id: "",
                            format_type: s
                        },
                        onError: i
                    }, n)
                };
            async function b(e) {
                let t = await (0, A.readFileAsBase64)(e),
                    l = new Image;
                l.src = t, await l.decode();
                let a = (0, I.downsizeImage)(l, 320, 320);
                return (0, A.dataUrlToFile)(a, e.name, e.type)
            }

            function j(e) {
                var t, l, n, I, R, G, P, j;
                let {
                    transitionState: H,
                    onClose: K,
                    guildId: k,
                    sticker: V
                } = e, z = (0, o.useStateFromStores)([f.default], () => f.default.theme), W = (0, o.useStateFromStores)([c.default], () => (null == V ? void 0 : V.tags) != null ? c.default.getCustomEmojiById(V.tags) : null), Y = null !== (l = null === (t = T.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== l && l, X = Y ? C.STAFF_MAX_STICKER_FILE_SIZE : C.MAX_STICKER_FILE_SIZE, [Z, q] = i.useState(null), [J, Q] = i.useState(null !== (n = null == V ? void 0 : V.name) && void 0 !== n ? n : ""), [$, ee] = i.useState({
                    file: null,
                    filename: null !== (I = (0, U.getFilenameForSticker)(V)) && void 0 !== I ? I : ""
                }), [et, el] = i.useState(null == W ? void 0 : W.id), [ea, ei] = i.useState(null !== (R = null == W ? void 0 : W.name) && void 0 !== R ? R : null == V ? void 0 : V.tags), [en, es] = i.useState(null !== (G = null == V ? void 0 : V.description) && void 0 !== G ? G : ""), [er, eo] = i.useState(!1), [ed, eu] = i.useState(null), ec = null != V, e_ = ec || (null == $ ? void 0 : $.file) != null, eE = 0 === en.length || en.length >= 2 && en.length <= 100, eI = !er && (null == ed ? void 0 : ed.isBlocking) !== !0 && J.length >= 2 && (null != et || null != ea || (null == V ? void 0 : V.tags) != null && (null == V ? void 0 : V.tags) !== "") && e_ && eE, {
                    enabled: ef
                } = D.LottieUploadExperiment.getCurrentConfig({
                    guildId: k,
                    location: "d3a320_1"
                }), eT = async e => {
                    var t;
                    if (null == e) return;
                    let l = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                    if (!M.has(l)) {
                        eu({
                            message: y.default.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
                            isBlocking: !0
                        });
                        return
                    }
                    let a = e;
                    if ("image/png" === l && e.size > X && !await (0, A.isPNGAnimated)(e)) {
                        a = await b(e);
                        let t = a.size > X;
                        S.default.track(N.AnalyticEvents.STICKER_FILE_RESIZED, {
                            original_file_size_bytes: e.size,
                            resized_file_size_bytes: a.size,
                            resized_file_too_big: t
                        })
                    }
                    if (a.size > X) {
                        eu({
                            message: y.default.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
                                maxSize: (0, L.formatKbSize)(X, {
                                    useKibibytes: !0
                                })
                            }),
                            isBlocking: null == $.file
                        }), S.default.track(N.AnalyticEvents.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                            size: a.size,
                            filetype: l
                        });
                        return
                    }
                    let i = (0, U.getStickerFormatTypeFromFileType)(a.type),
                        n = i === O.StickerFormat.LOTTIE;
                    if (n) {
                        if (!ef) {
                            eu({
                                message: y.default.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
                                    articleURL: h.default.getArticleURL(N.HelpdeskArticles.STICKERS_UPLOAD)
                                }),
                                isBlocking: !0
                            });
                            return
                        }
                        let e = new FileReader;
                        e.addEventListener("load", () => {
                            q({
                                id: (0, r.v4)(),
                                formatType: i,
                                content: e.result
                            }), eu(null)
                        }), e.readAsText(a)
                    } else {
                        let e = await (0, A.readFileAsBase64)(a);
                        q({
                            id: (0, r.v4)(),
                            formatType: i,
                            content: e
                        }), eu(null)
                    }
                    ee({
                        file: a,
                        filename: a.name
                    })
                }, ep = async e => {
                    var t, l, a, i, n, s;
                    e.preventDefault();
                    let r = null !== (l = null !== (t = null != et ? et : ea) && void 0 !== t ? t : null == V ? void 0 : V.tags) && void 0 !== l ? l : "";
                    try {
                        if (eo(!0), ec) await (0, g.updateGuildSticker)(k, null !== (a = null == V ? void 0 : V.id) && void 0 !== a ? a : "", {
                            name: J,
                            tags: r,
                            description: en
                        });
                        else {
                            ;
                            let e = new FormData;
                            e.append("name", J), e.append("tags", r), e.append("description", en), (null == $ ? void 0 : $.file) != null && e.append("file", $.file), s = null !== (n = null === (i = $.file) || void 0 === i ? void 0 : i.type) && void 0 !== n ? n : "", S.default.track(N.AnalyticEvents.STICKER_UPLOAD_STARTED, {
                                filetype: s
                            }), await (0, g.createGuildSticker)(k, e), B(!0)
                        }
                        K()
                    } catch (e) {
                        eu({
                            message: e.body.message,
                            isBlocking: !1
                        }), B(!1, e.body.message)
                    } finally {
                        eo(!1)
                    }
                }, em = i.useCallback(() => {
                    eu({
                        message: y.default.Messages.GUILD_STICKER_INVALID_STICKER,
                        isBlocking: !0
                    })
                }, []), eS = F({
                    sticker: V,
                    previewData: Z,
                    onStickerError: em
                }), eL = ef ? y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
                return (0, a.jsxs)(u.ModalRoot, {
                    transitionState: H,
                    "aria-labelledby": "STICKER_UPLOAD_MODAL",
                    className: v.modal,
                    children: [(0, a.jsx)(u.ModalCloseButton, {
                        onClick: K,
                        className: v.modalClose
                    }), (0, a.jsxs)("form", {
                        onSubmit: ep,
                        className: v.form,
                        children: [(0, a.jsxs)(u.ModalContent, {
                            className: v.modalContent,
                            children: [(0, a.jsxs)(u.ModalHeader, {
                                direction: p.default.Direction.VERTICAL,
                                separator: !1,
                                className: v.modalHeader,
                                children: [(0, a.jsx)(u.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: v.modalHeaderTitle,
                                    children: y.default.Messages.GUILD_STICKER_UPLOAD_TITLE
                                }), (0, a.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    children: eL.format({
                                        fileSize: (0, L.formatKbSize)(C.MAX_STICKER_FILE_SIZE, {
                                            useKibibytes: !0
                                        })
                                    })
                                })]
                            }), (0, a.jsx)(u.FormSection, {
                                title: y.default.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
                                className: v.formItem,
                                children: (0, a.jsx)(x, {
                                    stickerPreview: eS
                                })
                            }), (0, a.jsxs)(u.FormSection, {
                                className: s(v.formItem, v.formItemRow),
                                children: [(0, a.jsx)(u.FormItem, {
                                    title: ec ? y.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : y.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
                                    required: !0,
                                    className: v.formItemRowChild,
                                    children: ec ? (0, a.jsx)(u.TextInput, {
                                        disabled: !0,
                                        value: null !== (P = null == $ ? void 0 : $.filename) && void 0 !== P ? P : ""
                                    }) : (0, a.jsx)(E.default, {
                                        buttonText: y.default.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
                                        filters: w,
                                        filename: null !== (j = null == $ ? void 0 : $.filename) && void 0 !== j ? j : "",
                                        placeholder: y.default.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
                                        onFileSelect: eT
                                    })
                                }), (0, a.jsx)(_.default, {
                                    className: v.formItemRowChild,
                                    guildId: k,
                                    emojiId: et,
                                    emojiName: ea,
                                    setEmojiId: el,
                                    setEmojiName: ei,
                                    shouldUpdateBothEmojiFields: !0
                                })]
                            }), (0, a.jsx)(u.FormItem, {
                                title: y.default.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
                                required: !0,
                                className: v.formItem,
                                children: (0, a.jsx)(u.TextInput, {
                                    value: J,
                                    onChange: Q,
                                    placeholder: y.default.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
                                    maxLength: 30
                                })
                            }), (0, a.jsxs)("div", {
                                className: v.formItem,
                                children: [(0, a.jsxs)(u.FormTitle, {
                                    children: [y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE, (0, a.jsx)(u.Tooltip, {
                                        text: y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
                                        children: e => (0, a.jsx)(m.default, {
                                            className: v.infoIcon,
                                            ...e
                                        })
                                    })]
                                }), (0, a.jsx)(u.TextArea, {
                                    value: en,
                                    onChange: es,
                                    placeholder: y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
                                    maxLength: 100
                                })]
                            }), null != ed && (0, a.jsx)(u.Text, {
                                className: v.formItem,
                                variant: "text-sm/normal",
                                color: "text-danger",
                                children: ed.message
                            })]
                        }), (0, a.jsxs)(u.ModalFooter, {
                            className: v.modalFooter,
                            children: [(0, a.jsx)(u.Button, {
                                type: "submit",
                                disabled: !eI,
                                children: ec ? y.default.Messages.GUILD_STICKERS_UPDATE : y.default.Messages.UPLOAD
                            }), (0, a.jsx)(u.Button, {
                                look: u.Button.Looks.LINK,
                                color: (0, d.isThemeLight)(z) ? u.Button.Colors.PRIMARY : u.Button.Colors.WHITE,
                                onClick: K,
                                children: y.default.Messages.NEVERMIND
                            })]
                        })]
                    })]
                })
            }
        },
        783111: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var a = l("666038");
            class i extends a.default {
                static createFromServer(e) {
                    return new i({
                        id: e.id,
                        guildId: e.guild_id,
                        userId: null != e.user ? e.user.id : e.user_id,
                        user: e.user,
                        ended: e.ended,
                        endsAt: null != e.ends_at && "" !== e.ends_at ? new Date(e.ends_at) : null
                    })
                }
                constructor(e) {
                    super(), this.id = e.id, this.guildId = e.guildId, this.userId = e.userId, this.user = e.user, this.ended = e.ended, this.endsAt = null != e.endsAt ? e.endsAt : null
                }
            }
            var n = i
        },
        476765: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                uid: function() {
                    return s
                },
                useUID: function() {
                    return r
                },
                UID: function() {
                    return o
                }
            });
            var a = l("995008"),
                i = l.n(a),
                n = l("775560");
            let s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i(e)
                },
                r = () => (0, n.useLazyValue)(() => s()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(r())
                }
        },
        118503: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var a = l("37983");
            l("884691");
            var i = l("75196");

            function n(e) {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: n = "currentColor",
                    foreground: s,
                    ...r
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, i.default)(r),
                    width: t,
                    height: l,
                    viewBox: "0 0 8 12",
                    children: [(0, a.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: n,
                        className: s
                    }), (0, a.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: n,
                        className: s
                    })]
                })
            }
        }
    }
]);