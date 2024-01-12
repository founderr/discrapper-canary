(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["76650"], {
        310013: function(e, t, a) {
            "use strict";
            var l = {
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
            e.exports = function(e, t, a) {
                if ("string" != typeof t) {
                    var s = Object.getOwnPropertyNames(t);
                    n && (s = s.concat(Object.getOwnPropertySymbols(t)));
                    for (var r = 0; r < s.length; ++r)
                        if (!l[s[r]] && !i[s[r]] && (!a || !a[s[r]])) try {
                            e[s[r]] = t[s[r]]
                        } catch (e) {}
                }
                return e
            }
        },
        357450: function(e, t, a) {
            "use strict";
            e.exports = a.p + "222f914ec12acf16874f.svg"
        },
        348919: function(e, t, a) {
            "use strict";
            e.exports = a.p + "ec6798869dcd1915ecd8.svg"
        },
        583367: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                fetchAppliedGuildBoostsForGuild: function() {
                    return d
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
            var l = a("872717"),
                i = a("913144"),
                n = a("448993"),
                s = a("783111"),
                r = a("522308"),
                o = a("521012"),
                u = a("49111");
            async function d(e) {
                let t = await l.default.get({
                        url: u.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                        oldFormErrors: !0
                    }),
                    a = t.body.map(e => s.default.createFromServer(e));
                return i.default.dispatch({
                    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
                    guildId: e,
                    appliedBoosts: a
                }), a
            }
            async function c() {
                let e = await l.default.get({
                        url: u.Endpoints.USER_GUILD_BOOST_SLOTS,
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
                    let a = await l.default.put({
                            url: u.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                            body: {
                                user_premium_guild_subscription_slot_ids: t
                            },
                            oldFormErrors: !0
                        }),
                        n = Array.isArray(a.body) ? a.body.map(s.default.createFromServer) : [s.default.createFromServer(a.body)];
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
                    await l.default.delete({
                        url: u.Endpoints.APPLIED_GUILD_BOOST(e, t),
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
                let t = await l.default.post({
                        url: u.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(e),
                        oldFormErrors: !0
                    }),
                    a = r.default.createFromServer(t.body, o.default.getSubscriptionById(t.body.subscription_id));
                return i.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: a
                }), a
            }
            async function f(e) {
                let t = await l.default.post({
                        url: u.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
                        oldFormErrors: !0
                    }),
                    a = r.default.createFromServer(t.body, o.default.getSubscriptionById(t.body.subscription_id));
                return i.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: a
                }), a
            }
        },
        8731: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
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
                    return d
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
            }), a("511434"), a("313619"), a("654714"), a("287168"), a("956660"), a("222007"), a("70102"), a("311790"), a("477657"), a("811875"), a("90301"), a("652153"), a("28797"), a("817884"), a("597349"), a("667536"), a("690341");
            var l = a("917351"),
                i = a("75015");

            function n(e, t, a, l) {
                let i = e.naturalWidth / e.width,
                    n = t.width / 2,
                    s = t.height / 2,
                    r = (e.width / 2 - n - a.x) * i,
                    o = (e.height / 2 - s - a.y) * i,
                    u = t.width * i,
                    d = t.height * i,
                    c = Math.min(u, l.width),
                    _ = Math.min(d, l.height);
                return {
                    x: r,
                    y: o,
                    scaledCropWidth: u,
                    scaledCropHeight: d,
                    canvasWidth: c,
                    canvasHeight: _
                }
            }
            async function s(e, t, l, s, r) {
                let {
                    x: o,
                    y: u,
                    scaledCropWidth: d,
                    scaledCropHeight: c
                } = n(t, l, s, r), _ = await e.arrayBuffer(), E = new Worker(new URL(a.p + a.u("39703"), a.b)), I = new Promise((e, t) => {
                    E.onmessage = a => {
                        let {
                            data: l
                        } = a;
                        if (l.type === i.MessageTypes.CROP_GIF_COMPLETE) {
                            var n;
                            e((n = new Blob([l.result]), new Promise(e => {
                                let t = new FileReader;
                                t.onload = t => {
                                    var a;
                                    let l = null === (a = t.target) || void 0 === a ? void 0 : a.result;
                                    "string" == typeof l ? e(l) : e("")
                                }, t.readAsDataURL(n)
                            }))), E.terminate()
                        } else l.type === i.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), E.terminate())
                    }
                });
                return E.postMessage({
                    type: i.MessageTypes.CROP_GIF_START,
                    gif: new Uint8Array(_),
                    x: 0 | o,
                    y: 0 | u,
                    width: 0 | d,
                    height: 0 | c
                }), {
                    result: I,
                    cancelFn: () => E.terminate()
                }
            }

            function r(e, t, a, l) {
                let {
                    x: i,
                    y: s,
                    scaledCropWidth: r,
                    scaledCropHeight: o,
                    canvasWidth: u,
                    canvasHeight: d
                } = n(e, t, a, l), c = document.createElement("canvas");
                c.width = u, c.height = d;
                let _ = c.getContext("2d");
                return null != _ && _.drawImage(e, i, s, r, o, 0, 0, c.width, c.height), c.toDataURL("image/png")
            }

            function o(e, t, a) {
                return {
                    x: (0, l.clamp)(e, a.left, a.right),
                    y: (0, l.clamp)(t, a.bottom, a.top)
                }
            }

            function u(e, t, a, l) {
                let n = a,
                    s = l;
                a > i.EDITING_CONTAINER_WIDTH && (n = i.EDITING_CONTAINER_WIDTH, s = l * (i.EDITING_CONTAINER_WIDTH / a));
                if (a / l < e) return {
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

            function d(e, t, a) {
                switch (e) {
                    case i.UploadTypes.AVATAR:
                    case i.UploadTypes.AVATAR_DECORATION:
                        return {
                            width: t, height: a
                        };
                    case i.UploadTypes.BANNER:
                        return u(i.BANNER_ASPECT_RATIO, i.MAX_BANNER_OVERLAY_HEIGHT, t, a);
                    case i.UploadTypes.GUILD_BANNER:
                        return u(i.GUILD_BANNER_ASPECT_RATIO, i.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, a);
                    case i.UploadTypes.VIDEO_BACKGROUND:
                        return u(i.VIDEO_BACKGROUND_ASPECT_RATIO, i.MAX_VIDEO_OVERLAY_HEIGHT, t, a);
                    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        return u(i.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, i.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, a);
                    case i.UploadTypes.HOME_HEADER:
                        return u(i.HOME_HEADER_ASPECT_RATIO, i.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, a)
                }
            }

            function c(e, t, a) {
                let l = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    i = e - a.width,
                    n = t - a.height;
                return 0 !== i && (l.left = -Math.abs(i / 2), l.right = i / 2), 0 !== n && (l.bottom = -Math.abs(n / 2), l.top = n / 2), l
            }

            function _(e, t, a, l) {
                switch (e) {
                    case i.UploadTypes.AVATAR:
                    case i.UploadTypes.AVATAR_DECORATION:
                        let n = Math.min(t, a);
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
                            width: r, height: Math.min(r * (9 / 16), l)
                        };
                    case i.UploadTypes.VIDEO_BACKGROUND:
                        let o = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: o, height: o * (9 / 16)
                        };
                    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        let u = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: u, height: .4 * u
                        };
                    case i.UploadTypes.HOME_HEADER:
                        let d = Math.min(t, i.EDITING_CONTAINER_WIDTH);
                        return {
                            width: d, height: d * (1 / i.HOME_HEADER_ASPECT_RATIO)
                        }
                }
            }

            function E(e, t, a) {
                let l = e.naturalWidth / e.naturalHeight,
                    i = t,
                    n = a;
                e.naturalWidth > e.naturalHeight ? i /= l : n *= l;
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
        520497: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var l = a("49111");

            function i(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: a
                } = window.GLOBAL_ENV;
                return "development" !== a ? "".concat(location.protocol, "//").concat(t).concat(l.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(l.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        54666: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return j
                }
            }), a("222007");
            var l = a("37983"),
                i = a("884691"),
                n = a("414456"),
                s = a.n(n),
                r = a("748820"),
                o = a("446674"),
                u = a("819855"),
                d = a("77078"),
                c = a("385976"),
                _ = a("208548"),
                E = a("104945"),
                I = a("8731"),
                f = a("161778"),
                T = a("305961"),
                p = a("697218"),
                m = a("145131"),
                S = a("68238"),
                h = a("599110"),
                L = a("993105"),
                A = a("701909"),
                D = a("103603"),
                g = a("467094"),
                O = a("161585"),
                R = a("24373"),
                U = a("41170"),
                C = a("560241"),
                N = a("49111"),
                y = a("782340"),
                v = a("735193"),
                G = a("357450"),
                P = a("348919");
            let M = new Set(["application/json", "image/png", "image/apng", "image/gif"]),
                w = [{
                    name: "Sticker file",
                    extensions: ["json", "png", "apng", "gif"]
                }];

            function F(e, t) {
                h.default.track(N.AnalyticEvents.STICKER_UPLOAD_COMPLETED, {
                    successful: e,
                    error: null != t ? t : ""
                })
            }
            let B = e => {
                    let {
                        stickerPreview: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: v.preview,
                        children: [(0, l.jsx)("div", {
                            className: v.previewDark,
                            children: null != t ? t : (0, l.jsx)("img", {
                                src: G,
                                alt: y.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
                            })
                        }), (0, l.jsx)("div", {
                            className: v.previewLight,
                            children: null != t ? t : (0, l.jsx)("img", {
                                src: P,
                                alt: y.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
                            })
                        })]
                    })
                },
                x = e => {
                    let {
                        sticker: t,
                        previewData: a,
                        onStickerError: i
                    } = e;
                    if (null != t) return (0, l.jsx)(U.default, {
                        size: 160,
                        sticker: t
                    });
                    if (null == a) return null;
                    let {
                        id: n,
                        formatType: s,
                        content: r
                    } = a;
                    return (0, l.jsx)(U.default, {
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
                let t = await (0, D.readFileAsBase64)(e),
                    a = new Image;
                a.src = t, await a.decode();
                let l = (0, I.downsizeImage)(a, 320, 320);
                return (0, D.dataUrlToFile)(l, e.name, e.type)
            }

            function j(e) {
                var t, a, n, I, U, G, P, j;
                let {
                    transitionState: H,
                    onClose: K,
                    guildId: k,
                    sticker: V
                } = e, z = (0, o.useStateFromStores)([f.default], () => f.default.theme), W = (0, o.useStateFromStores)([c.default], () => (null == V ? void 0 : V.tags) != null ? c.default.getCustomEmojiById(V.tags) : null), Y = null !== (a = null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== a && a, X = Y ? C.STAFF_MAX_STICKER_FILE_SIZE : C.MAX_STICKER_FILE_SIZE, [Z, q] = i.useState(null), [J, Q] = i.useState(null !== (n = null == V ? void 0 : V.name) && void 0 !== n ? n : ""), [$, ee] = i.useState({
                    file: null,
                    filename: null !== (I = (0, R.getFilenameForSticker)(V)) && void 0 !== I ? I : ""
                }), [et, ea] = i.useState(null == W ? void 0 : W.id), [el, ei] = i.useState(null !== (U = null == W ? void 0 : W.name) && void 0 !== U ? U : null == V ? void 0 : V.tags), [en, es] = i.useState(null !== (G = null == V ? void 0 : V.description) && void 0 !== G ? G : ""), [er, eo] = i.useState(!1), [eu, ed] = i.useState(null), ec = (0, o.useStateFromStores)([T.default], () => T.default.getGuild(k)), e_ = (null == ec ? void 0 : ec.hasFeature(N.GuildFeatures.PARTNERED)) || (null == ec ? void 0 : ec.hasFeature(N.GuildFeatures.VERIFIED)), eE = null != V, eI = eE || (null == $ ? void 0 : $.file) != null, ef = 0 === en.length || en.length >= 2 && en.length <= 100, eT = !er && (null == eu ? void 0 : eu.isBlocking) !== !0 && J.length >= 2 && (null != et || null != el || (null == V ? void 0 : V.tags) != null && (null == V ? void 0 : V.tags) !== "") && eI && ef, ep = async e => {
                    var t;
                    if (null == e) return;
                    let a = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                    if (!M.has(a)) {
                        ed({
                            message: y.default.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
                            isBlocking: !0
                        });
                        return
                    }
                    let l = e;
                    if ("image/png" === a && e.size > X && !await (0, D.isPNGAnimated)(e)) {
                        l = await b(e);
                        let t = l.size > X;
                        h.default.track(N.AnalyticEvents.STICKER_FILE_RESIZED, {
                            original_file_size_bytes: e.size,
                            resized_file_size_bytes: l.size,
                            resized_file_too_big: t
                        })
                    }
                    if (l.size > X) {
                        ed({
                            message: y.default.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
                                maxSize: (0, L.formatKbSize)(X, {
                                    useKibibytes: !0
                                })
                            }),
                            isBlocking: null == $.file
                        }), h.default.track(N.AnalyticEvents.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                            size: l.size,
                            filetype: a
                        });
                        return
                    }
                    let i = (0, R.getStickerFormatTypeFromFileType)(l.type),
                        n = i === O.StickerFormat.LOTTIE;
                    if (n) {
                        if (!e_) {
                            ed({
                                message: y.default.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
                                    articleURL: A.default.getArticleURL(N.HelpdeskArticles.STICKERS_UPLOAD)
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
                            }), ed(null)
                        }), e.readAsText(l)
                    } else {
                        let e = await (0, D.readFileAsBase64)(l);
                        q({
                            id: (0, r.v4)(),
                            formatType: i,
                            content: e
                        }), ed(null)
                    }
                    ee({
                        file: l,
                        filename: l.name
                    })
                }, em = async e => {
                    var t, a, l, i, n, s;
                    e.preventDefault();
                    let r = null !== (a = null !== (t = null != et ? et : el) && void 0 !== t ? t : null == V ? void 0 : V.tags) && void 0 !== a ? a : "";
                    try {
                        if (eo(!0), eE) await (0, g.updateGuildSticker)(k, null !== (l = null == V ? void 0 : V.id) && void 0 !== l ? l : "", {
                            name: J,
                            tags: r,
                            description: en
                        });
                        else {
                            ;
                            let e = new FormData;
                            e.append("name", J), e.append("tags", r), e.append("description", en), (null == $ ? void 0 : $.file) != null && e.append("file", $.file), s = null !== (n = null === (i = $.file) || void 0 === i ? void 0 : i.type) && void 0 !== n ? n : "", h.default.track(N.AnalyticEvents.STICKER_UPLOAD_STARTED, {
                                filetype: s
                            }), await (0, g.createGuildSticker)(k, e), F(!0)
                        }
                        K()
                    } catch (e) {
                        ed({
                            message: e.body.message,
                            isBlocking: !1
                        }), F(!1, e.body.message)
                    } finally {
                        eo(!1)
                    }
                }, eS = i.useCallback(() => {
                    ed({
                        message: y.default.Messages.GUILD_STICKER_INVALID_STICKER,
                        isBlocking: !0
                    })
                }, []), eh = x({
                    sticker: V,
                    previewData: Z,
                    onStickerError: eS
                }), eL = e_ ? y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
                return (0, l.jsxs)(d.ModalRoot, {
                    transitionState: H,
                    "aria-labelledby": "STICKER_UPLOAD_MODAL",
                    className: v.modal,
                    children: [(0, l.jsx)(d.ModalCloseButton, {
                        onClick: K,
                        className: v.modalClose
                    }), (0, l.jsxs)("form", {
                        onSubmit: em,
                        className: v.form,
                        children: [(0, l.jsxs)(d.ModalContent, {
                            className: v.modalContent,
                            children: [(0, l.jsxs)(d.ModalHeader, {
                                direction: m.default.Direction.VERTICAL,
                                separator: !1,
                                className: v.modalHeader,
                                children: [(0, l.jsx)(d.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: v.modalHeaderTitle,
                                    children: y.default.Messages.GUILD_STICKER_UPLOAD_TITLE
                                }), (0, l.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: eL.format({
                                        fileSize: (0, L.formatKbSize)(C.MAX_STICKER_FILE_SIZE, {
                                            useKibibytes: !0
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(d.FormSection, {
                                title: y.default.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
                                className: v.formItem,
                                children: (0, l.jsx)(B, {
                                    stickerPreview: eh
                                })
                            }), (0, l.jsxs)(d.FormSection, {
                                className: s(v.formItem, v.formItemRow),
                                children: [(0, l.jsx)(d.FormItem, {
                                    title: eE ? y.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : y.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
                                    required: !0,
                                    className: v.formItemRowChild,
                                    children: eE ? (0, l.jsx)(d.TextInput, {
                                        disabled: !0,
                                        value: null !== (P = null == $ ? void 0 : $.filename) && void 0 !== P ? P : ""
                                    }) : (0, l.jsx)(E.default, {
                                        buttonText: y.default.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
                                        filters: w,
                                        filename: null !== (j = null == $ ? void 0 : $.filename) && void 0 !== j ? j : "",
                                        placeholder: y.default.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
                                        onFileSelect: ep
                                    })
                                }), (0, l.jsx)(_.default, {
                                    className: v.formItemRowChild,
                                    guildId: k,
                                    emojiId: et,
                                    emojiName: el,
                                    setEmojiId: ea,
                                    setEmojiName: ei,
                                    shouldUpdateBothEmojiFields: !0
                                })]
                            }), (0, l.jsx)(d.FormItem, {
                                title: y.default.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
                                required: !0,
                                className: v.formItem,
                                children: (0, l.jsx)(d.TextInput, {
                                    value: J,
                                    onChange: Q,
                                    placeholder: y.default.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
                                    maxLength: 30
                                })
                            }), (0, l.jsxs)("div", {
                                className: v.formItem,
                                children: [(0, l.jsxs)(d.FormTitle, {
                                    children: [y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE, (0, l.jsx)(d.Tooltip, {
                                        text: y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
                                        children: e => (0, l.jsx)(S.default, {
                                            className: v.infoIcon,
                                            ...e
                                        })
                                    })]
                                }), (0, l.jsx)(d.TextArea, {
                                    value: en,
                                    onChange: es,
                                    placeholder: y.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
                                    maxLength: 100
                                })]
                            }), null != eu && (0, l.jsx)(d.Text, {
                                className: v.formItem,
                                variant: "text-sm/normal",
                                color: "text-danger",
                                children: eu.message
                            })]
                        }), (0, l.jsxs)(d.ModalFooter, {
                            className: v.modalFooter,
                            children: [(0, l.jsx)(d.Button, {
                                type: "submit",
                                disabled: !eT,
                                children: eE ? y.default.Messages.GUILD_STICKERS_UPDATE : y.default.Messages.UPLOAD
                            }), (0, l.jsx)(d.Button, {
                                look: d.Button.Looks.LINK,
                                color: (0, u.isThemeLight)(z) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
                                onClick: K,
                                children: y.default.Messages.NEVERMIND
                            })]
                        })]
                    })]
                })
            }
        },
        783111: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            });
            var l = a("666038");
            class i extends l.default {
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
        476765: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
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
            var l = a("995008"),
                i = a.n(l),
                n = a("775560");
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
        118503: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            });
            var l = a("37983");
            a("884691");
            var i = a("75196");

            function n(e) {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: n = "currentColor",
                    foreground: s,
                    ...r
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(r),
                    width: t,
                    height: a,
                    viewBox: "0 0 8 12",
                    children: [(0, l.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: n,
                        className: s
                    }), (0, l.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: n,
                        className: s
                    })]
                })
            }
        }
    }
]);