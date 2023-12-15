(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["27660"], {
        277064: function(e, t, i) {
            "use strict";
            e.exports = i.p + "b7cfbc1104ec3593f753.gif"
        },
        748301: function(e, t, i) {
            "use strict";
            e.exports = i.p + "45266c5a3e03cba8884e.svg"
        },
        257809: function(e, t, i) {
            "use strict";
            e.exports = i.p + "d83432a67613c4ff249f.png"
        },
        54338: function(e, t, i) {
            "use strict";
            e.exports = i.p + "98233dd23a0dd0a0c2ec.svg"
        },
        783480: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return M
                }
            }), i("222007"), i("702976");
            var a = i("77078"),
                s = i("913144"),
                n = i("295426"),
                l = i("819689"),
                o = i("81594"),
                r = i("336522"),
                u = i("448993"),
                d = i("979911"),
                c = i("282928"),
                p = i("966724"),
                h = i("681736"),
                m = i("600798"),
                T = i("692038"),
                f = i("815297"),
                E = i("168730"),
                R = i("562228"),
                _ = i("529805"),
                g = i("685841"),
                S = i("804888"),
                I = i("474643"),
                C = i("585722"),
                O = i("568734"),
                A = i("305515"),
                N = i("49111"),
                v = i("782340");
            async function P(e) {
                var t, i, a;
                let c, {
                        channelId: p,
                        uploads: P,
                        draftType: M,
                        parsedMessage: U,
                        options: L = {},
                        raiseEndpointErrors: x = !1
                    } = e,
                    y = new h.default(N.Endpoints.MESSAGES(p)),
                    j = new A.Future,
                    b = {
                        content: "",
                        nonce: "",
                        channel_id: p,
                        type: N.MessageTypes.DEFAULT,
                        sticker_ids: null == L ? void 0 : L.stickerIds,
                        poll: null == L ? void 0 : L.poll
                    };
                null != U && (b.content = null == U ? void 0 : U.content);
                let D = g.default.getPendingReply(p);
                null != D && (b.type = N.MessageTypes.REPLY, b.message_reference = L.messageReference, b.allowed_mentions = L.allowedMentions, (0, _.deletePendingReply)(p));
                let [B, k] = (0, S.default)(b.content);
                B && (b.content = k, b.flags = (0, O.addFlag)(null !== (t = b.flags) && void 0 !== t ? t : 0, N.MessageFlags.SUPPRESS_NOTIFICATIONS));
                let F = null !== (i = L.nonce) && void 0 !== i ? i : (0, f.createNonce)(),
                    w = (0, f.default)({
                        channelId: p,
                        content: b.content,
                        tts: null !== (a = null == U ? void 0 : U.tts) && void 0 !== a && a,
                        type: b.type,
                        messageReference: b.message_reference,
                        flags: b.flags,
                        nonce: F,
                        poll: (0, R.createPollServerDataFromCreateRequest)(L.poll)
                    });
                return (b.nonce = F, y.on("start", e => {
                    c = (0, T.createMessageRecord)({
                        ...w,
                        id: e.id
                    }), s.default.dispatch({
                        type: "UPLOAD_START",
                        channelId: p,
                        file: e,
                        message: c,
                        uploader: y
                    })
                }), y.on("progress", e => {
                    s.default.dispatch({
                        type: "UPLOAD_PROGRESS",
                        channelId: p,
                        file: e
                    })
                })), y.on("error", (e, t, i, a) => {
                    if (s.default.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: p,
                            file: e,
                            messageRecord: c
                        }), (0, E.logMessageSendFailure)({
                            fileItems: e.items,
                            failureCode: t,
                            errorMessage: null == a ? void 0 : a.msg
                        }), t === N.AbortCodes.EXPLICIT_CONTENT) {
                        l.default.sendClydeError(p, t);
                        return
                    }
                    if (t === N.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
                        let e = {
                                code: t,
                                message: null == i ? void 0 : i.message
                            },
                            a = null == c ? null : {
                                type: d.MessageDataType.SEND,
                                message: {
                                    ...c,
                                    channelId: p
                                }
                            };
                        (0, r.openUploadError)({
                            title: v.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: (0, m.getAutomodErrorMessage)(a, e)
                        });
                        return
                    }
                    t !== N.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && (x ? j.reject(new u.APIError({
                        status: t,
                        body: null != i ? i : {}
                    }, t)) : (0, r.openUploadError)({
                        title: v.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: v.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                    }), "" !== b.content && "" === I.default.getDraft(p, M) && n.default.saveDraft(p, b.content, M), 0 === C.default.getUploadCount(p, M) && o.default.setUploads({
                        channelId: p,
                        uploads: P,
                        draftType: M
                    }))
                }), y.on("complete", e => {
                    s.default.dispatch({
                        type: "UPLOAD_COMPLETE",
                        channelId: p,
                        file: e,
                        aborted: y._aborted
                    })
                }), await y.uploadFiles(P, b), j.resolve(), j.promise
            }
            var M = {
                instantBatchUpload: function(e) {
                    let {
                        channelId: t,
                        files: i,
                        draftType: a,
                        isThumbnail: s = !1,
                        filesMetadata: n = []
                    } = e, l = Array.from(i).map((e, i) => {
                        let a = null != n ? n[i] : {};
                        return new c.CloudUpload({
                            file: e,
                            platform: p.UploadPlatform.WEB,
                            isThumbnail: s,
                            ...a
                        }, t)
                    });
                    P({
                        channelId: t,
                        uploads: l,
                        draftType: a
                    })
                },
                upload: function e(t) {
                    let {
                        channelId: i,
                        file: o,
                        draftType: u,
                        message: d,
                        hasSpoiler: c,
                        filename: p
                    } = t, m = {
                        content: "",
                        tts: !1,
                        hasSpoiler: c,
                        filename: p
                    };
                    if (null != d) {
                        m.content = d.content, m.tts = d.tts, m.channel_id = d.channel_id;
                        let e = g.default.getPendingReply(i);
                        if (null != e) {
                            let t = l.default.getSendMessageOptionsForReply(e);
                            m.type = N.MessageTypes.REPLY, m.message_reference = t.messageReference, m.allowed_mentions = t.allowedMentions, (0, _.deletePendingReply)(i)
                        }
                    }
                    let T = new h.default(N.Endpoints.MESSAGES(i));
                    T.on("start", e => {
                        s.default.dispatch({
                            type: "UPLOAD_START",
                            channelId: i,
                            file: e,
                            uploader: T
                        })
                    }), T.on("progress", e => {
                        s.default.dispatch({
                            type: "UPLOAD_PROGRESS",
                            channelId: i,
                            file: e
                        })
                    }), T.on("error", (t, c) => {
                        if (s.default.dispatch({
                                type: "UPLOAD_FAIL",
                                channelId: i,
                                file: t
                            }), (0, E.logMessageSendFailure)({
                                fileItems: t.items,
                                failureCode: c
                            }), c === N.AbortCodes.EXPLICIT_CONTENT) {
                            l.default.sendClydeError(i, c);
                            return
                        }(0, r.openUploadError)({
                            title: v.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: v.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                                onClick: () => {
                                    (0, a.closeModal)(r.UPLOAD_ERROR_MODAL_KEY), e({
                                        channelId: i,
                                        file: o,
                                        draftType: u,
                                        message: d
                                    })
                                }
                            })
                        }), "" !== m.content && "" === I.default.getDraft(i, u) && n.default.saveDraft(i, m.content, u)
                    }), T.on("complete", e => {
                        s.default.dispatch({
                            type: "UPLOAD_COMPLETE",
                            channelId: i,
                            file: e
                        })
                    }), T.upload(o, m)
                },
                uploadFiles: P,
                cancel(e) {
                    if (s.default.dispatch({
                            type: "UPLOAD_CANCEL_REQUEST",
                            file: e
                        }), null != e.draftContent && null != e.channelId) {
                        let t = I.default.getDraft(e.channelId, I.DraftType.ChannelMessage);
                        "" === t && s.default.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: I.DraftType.ChannelMessage
                        })
                    }
                }
            }
        },
        281862: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PinIcon: function() {
                    return l
                }
            });
            var a = i("37983");
            i("884691");
            var s = i("669491"),
                n = i("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...r
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, n.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M19.38 11.38a3 3 0 0 0 4.24 0l.03-.03a.5.5 0 0 0 0-.7L13.35.35a.5.5 0 0 0-.7 0l-.03.03a3 3 0 0 0 0 4.24L13 5l-2.92 2.92-3.65-.34a2 2 0 0 0-1.6.58l-.62.63a1 1 0 0 0 0 1.42l9.58 9.58a1 1 0 0 0 1.42 0l.63-.63a2 2 0 0 0 .58-1.6l-.34-3.64L19 11l.38.38ZM9.07 17.07a.5.5 0 0 1-.08.77l-5.15 3.43a.5.5 0 0 1-.63-.06l-.42-.42a.5.5 0 0 1-.06-.63L6.16 15a.5.5 0 0 1 .77-.08l2.14 2.14Z",
                        className: o
                    })
                })
            }
        },
        681736: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            }), i("424973");
            var a, s = i("872717"),
                n = i("448993"),
                l = i("981112"),
                o = i("966724"),
                r = i("980134"),
                u = i("782340");
            a = class extends l.default {
                async uploadFiles(e, t) {
                    let {
                        addFilesTo: i
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    super.upload({
                        name: u.default.Messages.ATTACHMENT_PROCESSING
                    }, t, e);
                    let a = new AbortController;
                    try {
                        if (this.files = e, this._aborted) return;
                        if (this._handleStart(() => a.abort()), !await this.compressAndCheckFileSize()) return;
                        this.setUploadingTextForUI(), await (0, l.stageAttachmentFiles)(this.files, !0, this._recomputeProgress.bind(this))
                    } catch (e) {
                        this._handleException(e)
                    }
                    try {
                        return await this._createMessage(a.signal, t, i)
                    } catch (e) {
                        if (this._raiseEndpointErrors) throw e;
                        this._handleException(e)
                    }
                }
                async _createMessage(e, t, i) {
                    let a;
                    let l = [];
                    this.files.forEach((e, t) => {
                        let i = (0, r.getAttachmentPayload)(e, t);
                        e.item.platform === o.UploadPlatform.WEB && l.push({
                            ...i
                        })
                    }), a = null != i && null != t ? this._addAttachmentsToPayload(t, i, l) : {
                        ...t,
                        attachments: l
                    };
                    let u = {
                            url: this._url,
                            body: a,
                            signal: e
                        },
                        d = "POST" === this._method ? s.default.post : s.default.patch;
                    try {
                        let e = await d(u);
                        return this._handleComplete(e.body), e.body
                    } catch (e) {
                        var c;
                        if (this._raiseEndpointErrors) throw new n.APIError(e);
                        this._handleError({
                            code: null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.code,
                            body: null == e ? void 0 : e.body
                        })
                    }
                }
                constructor(e, t = "POST", i) {
                    super(e, t, i)
                }
            }
        },
        58533: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            }), i("222007");
            var a = i("37983"),
                s = i("884691"),
                n = i("516555"),
                l = i("907002"),
                o = i("458960"),
                r = i("430568"),
                u = i("526887"),
                d = i("590527"),
                c = i("983782"),
                p = i("315102"),
                h = i("402671"),
                m = i("172858"),
                T = i("612683");
            let f = [];

            function E(e) {
                let {
                    messageId: t,
                    emoji: i,
                    startPosition: E,
                    targetPosition: R
                } = e, [_, g] = s.useState(0), [S, I] = s.useState(0), [C, O] = s.useState(null), {
                    confettiCanvas: A
                } = s.useContext(u.ConfettiCannonContext), N = (0, n.useConfettiCannon)(A, C), v = s.useMemo(() => {
                    let e = null == i.id ? h.default.getURL(i.name) : p.default.getEmojiURL({
                        id: i.id,
                        animated: !1,
                        size: 22
                    });
                    return [{
                        src: e,
                        colorize: !1
                    }]
                }, [i.name, i.id]), P = R.x - R.width / 2 * .5, M = R.y - R.height / 2 * .5, U = (0, l.useSpring)({
                    from: {
                        y: E.y
                    },
                    to: {
                        y: M
                    },
                    config: {
                        duration: 450,
                        easing: o.default.Easing.in(o.default.Easing.exp)
                    },
                    onChange: e => {
                        let {
                            y: t
                        } = e;
                        I(t)
                    }
                }), L = (0, l.useSpring)({
                    from: {
                        x: E.x,
                        scale: 1,
                        opacity: 1
                    },
                    to: {
                        x: P,
                        scale: .5,
                        opacity: .4
                    },
                    config: {
                        duration: 450,
                        easing: o.default.Easing.in(o.default.Easing.ease)
                    },
                    onRest: () => {
                        (0, d.clearReactionPickerAnimation)(t, i.name, i.id)
                    },
                    onChange: e => {
                        let {
                            x: t
                        } = e;
                        g(t)
                    }
                });
                return s.useEffect(() => {
                    _ > 0 && S > 0 && N.createConfetti({
                        ...m.COMMON_CONFETTI_BASE_CONFIG,
                        position: {
                            type: "static",
                            value: {
                                x: _,
                                y: S
                            }
                        }
                    })
                }, [N, _, S]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(n.SpriteCanvas, {
                        ref: O,
                        sprites: v,
                        colors: f,
                        spriteWidth: m.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: m.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    }), (0, a.jsx)(c.default, {
                        children: (0, a.jsx)(l.animated.div, {
                            style: {
                                ...U
                            },
                            className: T.emojiContainer,
                            children: (0, a.jsx)(l.animated.div, {
                                style: {
                                    ...L,
                                    opacity: L.opacity
                                },
                                children: (0, a.jsx)(r.default, {
                                    className: T.emoji,
                                    emojiId: i.id,
                                    emojiName: i.name,
                                    animated: i.animated,
                                    size: "jumbo"
                                })
                            })
                        })
                    })]
                })
            }
        },
        102873: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useEmojiColorPalette: function() {
                    return r
                }
            });
            var a = i("446674"),
                s = i("819855"),
                n = i("206230"),
                l = i("161778"),
                o = i("584375");
            let r = e => {
                let t = (0, a.useStateFromStores)([n.default], () => n.default.saturation),
                    i = (0, a.useStateFromStores)([l.default], () => (0, s.isThemeDark)(l.default.theme));
                return (0, o.buildEmojiColorPalette)(e, t, i)
            }
        },
        13066: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                LurkerModeUpsellPopoutTypes: function() {
                    return a
                },
                default: function() {
                    return f
                }
            }), i("222007");
            var a, s, n = i("37983"),
                l = i("884691"),
                o = i("446674"),
                r = i("77078"),
                u = i("851387"),
                d = i("476765"),
                c = i("449008"),
                p = i("267567"),
                h = i("49111"),
                m = i("782340"),
                T = i("404637");
            (s = a || (a = {}))[s.CHAT = 0] = "CHAT", s[s.REACTIONS = 1] = "REACTIONS";
            var f = e => {
                let {
                    type: t,
                    guild: a,
                    closePopout: s,
                    ctaRef: f
                } = e, E = (0, d.useUID)(), [R, _] = l.useState(!1), g = (0, o.useStateFromStores)([p.default], () => p.default.isLurking(a.id), [a.id]);
                l.useEffect(() => {
                    R && !g && s()
                }, [R, g, s]);
                let S = null,
                    I = m.default.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
                switch (t) {
                    case 0:
                        S = m.default.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
                        break;
                    case 1:
                        S = m.default.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
                        break;
                    default:
                        return (0, c.assertNever)(t)
                }
                if (null == S) return null;
                let C = async () => {
                    _(!0);
                    try {
                        await u.default.joinGuild(a.id, {
                            source: h.JoinGuildSources.CHAT_INPUT_BLOCKER
                        }), s()
                    } catch {
                        _(!1)
                    }
                };
                return (0, n.jsxs)(r.Dialog, {
                    className: T.container,
                    "aria-labelledby": E,
                    children: [(0, n.jsx)("img", {
                        alt: "",
                        className: T.image,
                        src: i("748301")
                    }), (0, n.jsxs)("div", {
                        className: T.content,
                        children: [(0, n.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            id: E,
                            children: S
                        }), (0, n.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: I
                        }), (0, n.jsxs)("div", {
                            className: T.buttonContainer,
                            children: [(0, n.jsx)(r.Button, {
                                buttonRef: f,
                                onClick: C,
                                submitting: R,
                                children: m.default.Messages.LURKER_MODE_POPOUT_JOIN
                            }), (0, n.jsx)(r.Button, {
                                onClick: s,
                                look: r.Button.Looks.BLANK,
                                className: T.cancel,
                                children: m.default.Messages.LURKER_MODE_POPOUT_CANCEL
                            })]
                        })]
                    })]
                })
            }
        },
        583022: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var a = e => {
                let {
                    channel: t,
                    canChat: i,
                    renderReactions: a,
                    canAddNewReactions: s,
                    isLurking: n,
                    isGuest: l,
                    communicationDisabled: o,
                    isActiveChannelOrUnarchivableThread: r
                } = e, u = t.isPrivate(), d = t.isSystemDM(), c = (i || u) && r;
                return {
                    disableReactionReads: !a,
                    disableReactionCreates: n || l || !c || !((!0 === s || u) && !d && r),
                    disableReactionUpdates: n || l || !c || !0 === o
                }
            }
        },
        255135: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return h
                },
                openOutOfBurstsModal: function() {
                    return m
                }
            });
            var a = i("37983"),
                s = i("884691"),
                n = i("77078"),
                l = i("432173"),
                o = i("599110"),
                r = i("103475"),
                u = i("49111"),
                d = i("782340"),
                c = i("936102");
            let p = i("257809");

            function h(e) {
                let {
                    onClose: t,
                    transitionState: i
                } = e;
                s.useEffect(() => {
                    o.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: r.BurstAnalyticTypes.OUT_OF_BURSTS
                    })
                }, []);
                let h = (0, l.useNextReplenishmentMessage)();
                return (0, a.jsxs)(n.ModalRoot, {
                    className: c.root,
                    "aria-label": d.default.Messages.SUPER_REACTION_OUT_OF_BURSTS,
                    transitionState: i,
                    children: [(0, a.jsx)("img", {
                        className: c.art,
                        alt: "",
                        src: p
                    }), (0, a.jsxs)(n.ModalContent, {
                        className: c.content,
                        children: [(0, a.jsx)(n.Heading, {
                            className: c.header,
                            variant: "heading-xl/semibold",
                            children: d.default.Messages.SUPER_REACTION_OUT_OF_BURSTS
                        }), (0, a.jsx)(n.Text, {
                            variant: "text-md/normal",
                            children: h
                        }), (0, a.jsx)(n.Button, {
                            className: c.button,
                            onClick: t,
                            size: n.Button.Sizes.SMALL,
                            color: n.Button.Colors.BRAND,
                            children: d.default.Messages.TUTORIAL_CLOSE
                        })]
                    })]
                })
            }

            function m() {
                (0, n.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("255135").then(i.bind(i, "255135"));
                    return t => (0, a.jsx)(e, {
                        ...t
                    })
                })
            }
        },
        331011: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getReactionTooltipText: function() {
                    return p
                }
            });
            var a = i("917351"),
                s = i.n(a),
                n = i("432173"),
                l = i("42203"),
                o = i("486996"),
                r = i("27618"),
                u = i("387111"),
                d = i("875978"),
                c = i("782340");

            function p(e, t) {
                var i;
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.ReactionTypes.NORMAL,
                    p = arguments.length > 3 ? arguments[3] : void 0,
                    h = o.default.getReactions(e.getChannelId(), e.id, t, 3, a),
                    m = l.default.getChannel(e.getChannelId()),
                    T = null == m || m.isPrivate() ? null : m.getGuildId(),
                    f = e.getReaction(t),
                    E = a === d.ReactionTypes.BURST,
                    R = s(h).reject(e => r.default.isBlocked(e.id)).take(3).map(e => u.default.getName(T, null == m ? void 0 : m.id, e)).value();
                if (0 === R.length) return "";
                let _ = {
                        standard: {
                            reactionTooltip1NInteractive: c.default.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
                            reactionTooltip1N: c.default.Messages.REACTION_TOOLTIP_1_N,
                            reactionTooltip1: c.default.Messages.REACTION_TOOLTIP_1,
                            reactionTooltip2NInteractive: c.default.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
                            reactionTooltip2N: c.default.Messages.REACTION_TOOLTIP_2_N,
                            reactionTooltip2: c.default.Messages.REACTION_TOOLTIP_2,
                            reactionTooltip3NInteractive: c.default.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
                            reactionTooltip3N: c.default.Messages.REACTION_TOOLTIP_3_N,
                            reactionTooltip3: c.default.Messages.REACTION_TOOLTIP_3,
                            reactionTooltipNInteractive: c.default.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
                            reactionTooltipN: c.default.Messages.REACTION_TOOLTIP_N
                        },
                        burst: {
                            reactionTooltip1NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
                            reactionTooltip1N: c.default.Messages.BURST_REACTION_TOOLTIP_1_N,
                            reactionTooltip1: c.default.Messages.BURST_REACTION_TOOLTIP_1,
                            reactionTooltip2NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
                            reactionTooltip2N: c.default.Messages.BURST_REACTION_TOOLTIP_2_N,
                            reactionTooltip2: c.default.Messages.BURST_REACTION_TOOLTIP_2,
                            reactionTooltip3NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
                            reactionTooltip3N: c.default.Messages.BURST_REACTION_TOOLTIP_3_N,
                            reactionTooltip3: c.default.Messages.BURST_REACTION_TOOLTIP_3,
                            reactionTooltipNInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
                            reactionTooltipN: c.default.Messages.BURST_REACTION_TOOLTIP_N
                        }
                    },
                    g = E ? _.burst : _.standard,
                    S = null !== (i = E ? null == f ? void 0 : f.burst_count : null == f ? void 0 : f.count) && void 0 !== i ? i : 0,
                    I = Math.max(0, S - R.length),
                    C = (0, n.getReactionEmojiName)(t);
                if (1 === R.length) return I > 0 ? null != p ? g.reactionTooltip1NInteractive.format({
                    a: R[0],
                    n: I,
                    emojiName: C,
                    onClick: p
                }) : g.reactionTooltip1N.format({
                    a: R[0],
                    n: I,
                    emojiName: C
                }) : g.reactionTooltip1.format({
                    a: R[0],
                    emojiName: C
                });
                if (2 === R.length) return I > 0 ? null != p ? g.reactionTooltip2NInteractive.format({
                    a: R[0],
                    b: R[1],
                    n: I,
                    emojiName: C,
                    onClick: p
                }) : g.reactionTooltip2N.format({
                    a: R[0],
                    b: R[1],
                    n: I,
                    emojiName: C
                }) : g.reactionTooltip2.format({
                    a: R[0],
                    b: R[1],
                    emojiName: C
                });
                if (3 === R.length) return I > 0 ? null != p ? g.reactionTooltip3NInteractive.format({
                    a: R[0],
                    b: R[1],
                    c: R[2],
                    n: I,
                    emojiName: C,
                    onClick: p
                }) : g.reactionTooltip3N.format({
                    a: R[0],
                    b: R[1],
                    c: R[2],
                    n: I,
                    emojiName: C
                }) : g.reactionTooltip3.format({
                    a: R[0],
                    b: R[1],
                    c: R[2],
                    emojiName: C
                });
                else return null != p ? g.reactionTooltipNInteractive.format({
                    n: I,
                    emojiName: C,
                    onClick: p
                }) : g.reactionTooltipN.format({
                    n: I,
                    emojiName: C
                })
            }
        },
        350134: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                REACTION_MIN_WIDTH_DIGITS: function() {
                    return ep
                },
                showReactionsModal: function() {
                    return eh
                },
                isMeReaction: function() {
                    return em
                },
                Reaction: function() {
                    return ef
                }
            }), i("222007");
            var a = i("37983"),
                s = i("884691"),
                n = i("414456"),
                l = i.n(n),
                o = i("748820"),
                r = i("458960"),
                u = i("509043"),
                d = i("446674"),
                c = i("151426"),
                p = i("862337"),
                h = i("130969"),
                m = i("77078"),
                T = i("430568"),
                f = i("57155"),
                E = i("206230"),
                R = i("716241"),
                _ = i("10641"),
                g = i("58533"),
                S = i("385976"),
                I = i("858619"),
                C = i("102873"),
                O = i("865453"),
                A = i("233322"),
                N = i("252931"),
                v = i("529932"),
                P = i("446066"),
                M = i("13066"),
                U = i("785621"),
                L = i("638971"),
                x = i("635956"),
                y = i("85589"),
                j = i("166257"),
                b = i("432173"),
                D = i("845579"),
                B = i("42203"),
                k = i("305961"),
                F = i("486996"),
                w = i("162771"),
                V = i("697218"),
                G = i("471671"),
                H = i("738107"),
                K = i("791106"),
                W = i("256170"),
                z = i("216422"),
                J = i("599110"),
                Y = i("719923"),
                X = i("590527"),
                Z = i("15935"),
                q = i("692171"),
                Q = i("875978"),
                $ = i("412745"),
                ee = i("255135"),
                et = i("459698"),
                ei = i("933629"),
                ea = i("331011"),
                es = i("81924"),
                en = i("49111"),
                el = i("646718"),
                eo = i("782340"),
                er = i("154403"),
                eu = i("550244"),
                ed = i("314934"),
                ec = i("219468");
            let ep = 9;

            function eh(e, t, i) {
                (0, m.openModal)(e => (0, a.jsx)(f.default, {
                    ...e,
                    message: t,
                    selectedReaction: i
                }))
            }

            function em(e, t, i) {
                return i === Q.ReactionTypes.BURST && t || i === Q.ReactionTypes.NORMAL && e
            }
            class eT extends s.PureComponent {
                componentWillAppear(e) {
                    this.animateIn(e)
                }
                componentWillEnter(e) {
                    this.animateIn(e)
                }
                componentWillUnmount() {
                    this.hideTooltip()
                }
                animateIn(e) {
                    let {
                        autoUnfurlReactionTooltip: t
                    } = this.props;
                    G.default.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), r.default.parallel([r.default.timing(this.scale, {
                        toValue: 1,
                        duration: t ? 200 : 300,
                        easing: r.default.Easing.inOut(r.default.Easing.back())
                    }), r.default.timing(this.opacity, {
                        toValue: 1,
                        duration: t ? 200 : 300
                    })]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
                }
                render() {
                    let e, t;
                    let {
                        count: i,
                        burst_count: s,
                        colors: n,
                        isBurstReaction: o,
                        hideCount: d,
                        emoji: c,
                        readOnly: p,
                        isLurking: h,
                        isGuest: f,
                        isPendingMember: E,
                        className: R,
                        useChatFontScaling: _,
                        message: S,
                        hideEmoji: I,
                        shouldShowFreeUserSentCoachmark: C,
                        onRenderFreeUserSentPopout: O,
                        animationStartPosition: A
                    } = this.props, {
                        shouldShowTooltip: N,
                        tooltipTextAria: v,
                        reactionRef: P,
                        tooltipPositionKey: M
                    } = this.state, L = _ ? ed : eu, x = {
                        transform: [{
                            scale: this.scale
                        }],
                        opacity: this.opacity
                    }, y = o ? s : i;
                    if (o && null != n) {
                        var j;
                        let {
                            accentColor: i,
                            backgroundColor: a,
                            opacity: s
                        } = n, l = null !== (j = (0, u.hex2rgb)(null != a ? a : "", s)) && void 0 !== j ? j : "";
                        this.isMe() && (x.borderColor = a), x.background = l, e = i, t = i
                    }
                    let D = null == P ? void 0 : P.getBoundingClientRect(),
                        B = null != A && null != D,
                        k = null == A;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(m.Popout, {
                            shouldShow: N,
                            "aria-label": null != v && v,
                            renderPopout: this.renderTooltip,
                            nudgeAlignIntoViewport: !0,
                            position: "top",
                            align: "center",
                            positionKey: M,
                            children: () => (0, a.jsx)("div", {
                                onMouseEnter: this.handleEnter,
                                onMouseLeave: this.handleLeave,
                                ref: this.handleSetReactionRef,
                                children: (0, a.jsx)(r.default.div, {
                                    className: l(L.reaction, R, {
                                        [L.reactionMe]: this.isMe(),
                                        [L.reactionReadOnly]: p && !h && !E && !f,
                                        [L.shakeReaction]: I && null == A
                                    }),
                                    style: x,
                                    children: (0, a.jsx)(m.Popout, {
                                        renderPopout: this.renderLurkerModeUpsellPopout,
                                        position: "top",
                                        children: i => (0, a.jsxs)(m.Clickable, {
                                            ...i,
                                            className: L.reactionInner,
                                            onClick: this.handleClick,
                                            "aria-disabled": p,
                                            "aria-label": (0, b.getAccessibleEmojiDisplayName)(this.isMe(), y, c, o),
                                            "aria-pressed": this.isMe(),
                                            children: [(0, a.jsx)("div", {
                                                className: l({
                                                    [L.burstGlow]: o
                                                }),
                                                style: {
                                                    boxShadow: "0 0 16px ".concat(t)
                                                }
                                            }), (0, a.jsxs)("div", {
                                                children: [o ? (0, a.jsxs)(a.Fragment, {
                                                    children: [B && (0, a.jsx)(g.default, {
                                                        messageId: S.id,
                                                        emoji: c,
                                                        startPosition: A,
                                                        targetPosition: D
                                                    }), k && (0, a.jsx)(es.default, {
                                                        count: s,
                                                        emoji: c,
                                                        channelId: S.getChannelId(),
                                                        messageId: S.id,
                                                        useChatFontScaling: _,
                                                        color: t
                                                    })]
                                                }) : null, (0, a.jsx)(T.default, {
                                                    className: l({
                                                        [L.hideEmoji]: I
                                                    }),
                                                    emojiId: c.id,
                                                    emojiName: c.name,
                                                    size: "reaction",
                                                    animated: c.animated
                                                })]
                                            }), d ? null : (0, a.jsx)(H.default, {
                                                className: L.reactionCount,
                                                value: y,
                                                color: e,
                                                digitWidth: ep
                                            }), (0, a.jsx)(U.default, {
                                                count: y,
                                                reactionRef: P
                                            })]
                                        })
                                    })
                                })
                            })
                        }), o && C && null != O && (0, a.jsx)(m.Popout, {
                            renderPopout: O,
                            shouldShow: !0,
                            closeOnScroll: !0,
                            onRequestClose: this.handleDismissCoachmark,
                            children: e => (0, a.jsx)("div", {
                                className: L.hidden,
                                ...e
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.scale = new r.default.Value(1), this.opacity = new r.default.Value(1), this.timeout = new p.Timeout, this.hideTimeout = new p.Timeout, this.ctaRef = s.createRef(), this.type = Q.ReactionTypes.NORMAL, this.colors = {
                        backgroundColor: void 0,
                        borderColor: void 0,
                        textColor: void 0
                    }, this.state = {
                        shouldShowTooltip: !1,
                        tooltipText: null,
                        tooltipTextAria: null,
                        reactionRef: null,
                        tooltipPositionKey: void 0
                    }, this.hasShownTooltip = !1, this.nonce = (0, o.v4)(), this.userCanBurstReact = () => this.props.userHasPremium, this.handleClick = e => {
                        e.stopPropagation();
                        let {
                            message: t,
                            emoji: i,
                            readOnly: a,
                            isBurstReaction: s,
                            isPendingMember: n,
                            isLurking: l,
                            isGuest: o,
                            isForumToolbar: r,
                            userHasPremium: u,
                            hasDismissedRemoveModal: d,
                            shouldShowFreeUserSentCoachmark: p
                        } = this.props, h = B.default.getChannel(t.getChannelId());
                        if (l || o) {
                            var m, T;
                            null === (T = this.ctaRef) || void 0 === T || null === (m = T.current) || void 0 === m || m.focus();
                            return
                        }
                        let f = t.getChannelId(),
                            E = r ? j.ReactionLocations.FORUM_TOOLBAR : j.ReactionLocations.MESSAGE;
                        if (s && !a && this.isMe()) d ? (0, j.removeReaction)(f, t.id, i, void 0, E, {
                            burst: s
                        }) : (0, j.removeReactionWithConfirmation)({
                            emoji: i,
                            channelId: f,
                            messageId: t.id,
                            reactionType: s ? Q.ReactionTypes.BURST : Q.ReactionTypes.NORMAL,
                            location: E,
                            isMe: this.isMe()
                        });
                        else if (!s || this.userCanBurstReact() || u) {
                            if (s && !this.userCanBurstReact()) {
                                (0, ee.openOutOfBurstsModal)();
                                return
                            } else n ? this.handleShowVerificationGate() : !a && (this.isMe() ? (0, j.removeReaction)(f, t.id, i, void 0, E) : (0, j.addReaction)(f, t.id, i, E, {
                                burst: s
                            }))
                        } else {
                            (0, y.openBurstReactionsUpsellModal)({
                                analytics: {
                                    type: el.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                                    page: (null == h ? void 0 : h.getGuildId()) != null ? en.AnalyticsPages.GUILD_CHANNEL : en.AnalyticsPages.DM_CHANNEL,
                                    section: null != h ? (0, b.getBurstAnalyticsSection)(h) : void 0,
                                    object: en.AnalyticsObjects.EMOJI_REACTION_UPSELL
                                }
                            });
                            return
                        }
                        s && this.isMe() && p && ((0, X.toggleFreeUserSentPopout)(null), (0, _.markDismissibleContentAsDismissed)(c.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT))
                    }, this.handleEnter = e => {
                        let {
                            emoji: t,
                            message: i,
                            type: a,
                            reduceMotion: s,
                            animateEmoji: n,
                            autoUnfurlReactionTooltip: l
                        } = this.props, o = a === Q.ReactionTypes.BURST;
                        o && !this.isReactionEventActive && !s && n && (0, j.playBurstReaction)({
                            channelId: i.getChannelId(),
                            messageId: i.id,
                            emoji: t,
                            key: Z.BurstReactionEffectSource.HOVER
                        }), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(o ? 750 : l ? 200 : 500, this.showTooltip, !1)
                    }, this.handleEnterTooltip = () => {
                        this.isReactionEventActive = !0, this.handleShowTooltip()
                    }, this.handleShowTooltip = () => {
                        this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), F.default.addChangeListener(this.updateTooltipText))
                    }, this.showTooltip = () => {
                        this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0
                    }, this.handleLeave = () => {
                        this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), F.default.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1)
                    }, this.hideTooltip = () => {
                        this.setState({
                            shouldShowTooltip: !1
                        }), this.hasShownTooltip && J.default.track(en.AnalyticEvents.CLOSE_POPOUT, {
                            nonce: this.nonce
                        })
                    }, this.isMe = () => {
                        let {
                            me: e,
                            me_burst: t,
                            type: i
                        } = this.props;
                        return em(e, t, i)
                    }, this.updateTooltipText = () => {
                        let {
                            message: e,
                            emoji: t,
                            type: i
                        } = this.props, a = (0, ea.getReactionTooltipText)(e, t, i), s = this.isKeyboardNavigation ? a : (0, ea.getReactionTooltipText)(e, t, i, en.NOOP);
                        this.setState({
                            tooltipText: s,
                            tooltipTextAria: a,
                            shouldShowTooltip: null != s && "" !== s
                        })
                    }, this.renderLurkerModeUpsellPopout = e => {
                        let {
                            closePopout: t
                        } = e, {
                            message: i,
                            isLurking: s
                        } = this.props, n = B.default.getChannel(i.getChannelId()), l = k.default.getGuild(null == n ? void 0 : n.getGuildId());
                        return s && null != l ? (0, a.jsx)(M.default, {
                            ctaRef: this.ctaRef,
                            type: M.LurkerModeUpsellPopoutTypes.REACTIONS,
                            guild: l,
                            closePopout: t
                        }) : (0, a.jsx)(a.Fragment, {})
                    }, this.renderEmojiDetails = () => {
                        let e = this.props.emoji;
                        return null != e.id && (0, a.jsx)(eR, {
                            emojiId: e.id,
                            refreshPositionKey: this.refreshTooltipPositionKey,
                            onClose: this.handleLeave,
                            nonce: this.nonce
                        })
                    }, this.renderTooltip = () => {
                        let {
                            emoji: e,
                            message: t,
                            type: i,
                            me_burst: s,
                            isBurstReaction: n = !1
                        } = this.props, {
                            tooltipText: o
                        } = this.state, r = i => {
                            let a = B.default.getChannel(t.getChannelId());
                            if (null == a) return;
                            this.handleLeave();
                            let s = n ? Q.ReactionTypes.BURST : Q.ReactionTypes.NORMAL;
                            eh(a, t, {
                                emoji: e,
                                reactionType: s
                            })
                        }, u = "string" == typeof o, d = u ? "" === o.trim() : null == o, c = () => d || null == o ? null : (0, a.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            className: ec.reactionTooltipText,
                            "aria-label": o,
                            children: o
                        });
                        if (i === Q.ReactionTypes.BURST) {
                            let t = V.default.getCurrentUser(),
                                i = (0, b.useTooltipReplenishmentMessage)();
                            return (0, a.jsxs)(h.Dialog, {
                                className: ec.reactionTooltip,
                                onMouseEnter: this.handleEnterTooltip,
                                onMouseLeave: this.handleLeave,
                                children: [(0, a.jsxs)(m.Clickable, {
                                    className: ec.burstReactionTooltipInner,
                                    onClick: r,
                                    children: [(0, a.jsxs)("div", {
                                        className: l(ec.burstReactionTooltipMessage, ec.burstReactionTooltipSpacer),
                                        children: [(0, a.jsx)(T.default, {
                                            className: ec.reactionTooltipEmoji,
                                            emojiId: e.id,
                                            emojiName: e.name,
                                            animated: e.animated,
                                            size: this.props.emojiSize
                                        }), c()]
                                    }), (0, a.jsxs)("div", {
                                        className: ec.burstReactionTooltipPrompt,
                                        children: [(0, Y.isPremium)(t) && (0, a.jsx)(z.default, {
                                            className: ec.burstReactionTooltipNitroIcon,
                                            color: K.GradientCssUrls.PREMIUM_TIER_2
                                        }), this.userCanBurstReact() ? (0, a.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            className: ec.reactionTooltipText,
                                            "aria-label": "super reaction tooltip cta",
                                            children: s ? eo.default.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED : eo.default.Messages.SUPER_REACTION_TOOLTIP_CTA
                                        }) : (0, a.jsx)(a.Fragment, {
                                            children: (0, Y.isPremium)(t) ? (0, a.jsx)(m.Text, {
                                                variant: "text-sm/normal",
                                                "aria-label": "super reaction tooltip replenishment message",
                                                children: i
                                            }) : (0, a.jsx)(a.Fragment, {
                                                children: !this.isKeyboardNavigation && (0, a.jsxs)("div", {
                                                    children: [(0, a.jsx)(m.Text, {
                                                        variant: "text-sm/normal",
                                                        "aria-label": "super reaction tooltip upsell",
                                                        children: eo.default.Messages.SUPER_REACTION_TOOLTIP_UPSELL
                                                    }), (0, a.jsx)(x.default, {
                                                        subscriptionTier: el.PremiumSubscriptionSKUs.TIER_2,
                                                        buttonText: eo.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                                        className: ec.burstReactionTooltipUpsellCta,
                                                        onClick: e => e.stopPropagation()
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                }), this.renderEmojiDetails()]
                            })
                        }
                        return (0, a.jsxs)(h.Dialog, {
                            className: ec.reactionTooltip,
                            onMouseEnter: this.handleEnterTooltip,
                            onMouseLeave: this.handleLeave,
                            children: [(0, a.jsx)(m.Clickable, {
                                onClick: r,
                                children: (0, a.jsxs)("div", {
                                    className: ec.reactionTooltipInner,
                                    children: [(0, a.jsx)(T.default, {
                                        className: ec.reactionTooltipEmoji,
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated,
                                        size: this.props.emojiSize
                                    }), c()]
                                })
                            }), this.renderEmojiDetails()]
                        })
                    }, this.refreshTooltipPositionKey = () => {
                        this.setState({
                            tooltipPositionKey: String(Date.now())
                        })
                    }, this.handleShowVerificationGate = () => {
                        let {
                            message: e,
                            isPendingMember: t
                        } = this.props;
                        if (!t) return null;
                        let i = B.default.getChannel(e.getChannelId()),
                            a = k.default.getGuild(null == i ? void 0 : i.getGuildId());
                        null != a && (0, A.openMemberVerificationModal)(a.id)
                    }, this.handleSetReactionRef = e => {
                        this.setState({
                            reactionRef: e
                        })
                    }, this.handleDismissCoachmark = () => {
                        (0, X.toggleFreeUserSentPopout)(null), (0, _.markDismissibleContentAsDismissed)(c.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                    }, this.trackReactionTooltipViewed = () => {
                        let {
                            emoji: e,
                            message: t,
                            type: i
                        } = this.props, a = V.default.getCurrentUser(), s = B.default.getChannel(t.getChannelId()), n = i === Q.ReactionTypes.BURST, l = (0, Y.isPremium)(a), o = n ? el.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER : el.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
                        n && !this.userCanBurstReact() && !l && (o = el.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), R.default.trackWithMetadata(en.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                            type: o,
                            expression_id: e.id,
                            expression_name: e.name,
                            is_animated: e.animated,
                            is_custom: null != e.id,
                            nonce: this.nonce
                        }), n && null != s && !l && !this.userCanBurstReact() && J.default.track(en.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: el.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == s ? void 0 : s.getGuildId()) != null ? en.AnalyticsPages.GUILD_CHANNEL : en.AnalyticsPages.DM_CHANNEL,
                                section: (0, b.getBurstAnalyticsSection)(s),
                                object: en.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        })
                    }
                }
            }
            eT.defaultProps = {
                emojiSize: "jumbo"
            };
            let ef = s.memo(e => {
                    let {
                        type: t,
                        burst_colors: i,
                        message: s,
                        emoji: n
                    } = e, l = t === Q.ReactionTypes.BURST, {
                        autoUnfurlReactionTooltip: o
                    } = (0, N.useInventoryGuildPacksUserExperiment)({
                        autoTrackExposure: !1
                    }), r = (0, C.useEmojiColorPalette)(l && null != i ? i : []), u = (0, d.useStateFromStores)([Z.default], () => void 0 !== Z.default.getEffectForEmojiId(s.getChannelId(), s.id, n)), p = (0, d.useStateFromStores)([E.default], () => E.default.useReducedMotion), h = D.AnimateEmoji.useSetting(), m = (0, _.isDismissibleContentDismissed)(c.DismissibleContent.BURST_REACTIONS_REMOVE_MODAL), [T, f] = (0, d.useStateFromStoresArray)([q.default], () => [q.default.remainingBurstCurrency, q.default.emojiReactionToTargetForCoachmark]), R = V.default.getCurrentUser(), g = (0, Y.isPremium)(R), S = (0, _.isDismissibleContentDismissed)(c.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT), I = !(0, Y.isNewUser)(R) && T > 0 && !S && null != f && n.id === f.id && n.name === f.name;
                    I && g && ((0, X.toggleFreeUserSentPopout)(null), (0, _.markDismissibleContentAsDismissed)(c.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT));
                    let O = (0, d.useStateFromStores)([Z.default], () => Z.default.getReactionPickerAnimation(s.id, n.name, n.id)),
                        A = l && (u || null != O);
                    return (0, a.jsx)(eT, {
                        ...e,
                        colors: r,
                        isBurstReaction: l,
                        hideEmoji: A,
                        remainingBurstCurrency: T,
                        userHasPremium: g,
                        reduceMotion: p,
                        animateEmoji: h,
                        hasDismissedRemoveModal: m,
                        shouldShowFreeUserSentCoachmark: I,
                        onRenderFreeUserSentPopout: () => (0, a.jsx)(L.default, {}),
                        animationStartPosition: O,
                        autoUnfurlReactionTooltip: o
                    })
                }),
                eE = e => {
                    var t;
                    let {
                        emojiId: i,
                        expressionSourceGuild: s,
                        hasJoinedExpressionSourceGuild: n,
                        onClose: l,
                        packCollectionData: o,
                        popoutData: r,
                        currentGuildId: u,
                        nonce: d
                    } = e;
                    (0, O.useTrackOpenPopout)({
                        emojiId: i,
                        currentGuildId: u,
                        popoutData: r,
                        emojiSourceGuildId: null == s ? void 0 : s.id,
                        nonce: d
                    });
                    let c = null !== (t = null == s ? void 0 : s.isDiscoverable()) && void 0 !== t && t,
                        p = o.collectEnabled,
                        h = null !== s && (c || p);
                    return (0, a.jsx)(a.Fragment, {
                        children: h ? null == s ? null : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: er.reactionEmojiDetailsUnfurlGuildDetails,
                                children: (0, a.jsx)(et.GuildDetails, {
                                    expressionSourceGuild: s,
                                    hasJoinedExpressionSourceGuild: n,
                                    isDisplayingJoinGuildButtonInPopout: r.type === $.EmojiPopoutType.JOIN_GUILD
                                })
                            }), (0, a.jsx)(et.EmojiPopoutList, {
                                emojiId: i,
                                expressionSourceGuild: s,
                                hasJoinedEmojiSourceGuild: n,
                                onClose: l,
                                popoutData: r,
                                packCollectionData: o,
                                isDisplayingButtonInTopSection: !1,
                                nonce: d
                            })]
                        }) : (0, a.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            "aria-label": r.type,
                            children: r.emojiDescription
                        })
                    })
                },
                eR = e => {
                    var t;
                    let {
                        emojiId: i,
                        refreshPositionKey: n,
                        onClose: o,
                        nonce: r
                    } = e, {
                        joinedEmojiSourceGuild: u
                    } = (0, d.useStateFromStoresObject)([S.default, k.default], () => {
                        let e = S.default.getCustomEmojiById(i);
                        return {
                            joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === I.EmojiTypes.GUILD ? k.default.getGuild(null == e ? void 0 : e.guildId) : void 0
                        }
                    }), [c, p] = s.useState(void 0), [h, T] = s.useState(!1), [f, E] = s.useState(!1), [R, _] = s.useState(!1), g = null != u, C = (0, v.usePackCollectionData)({
                        expressionSourceGuild: c
                    }), O = C.autoUnfurlReactionTooltip, A = null !== (t = null == c ? void 0 : c.isDiscoverable()) && void 0 !== t && t, N = w.default.getGuildId(), M = null != N && (N === (null == c ? void 0 : c.id) || N === (null == u ? void 0 : u.id)), U = (0, $.getEmojiPopoutData)({
                        isPremium: C.isPremium,
                        hasJoinedEmojiSourceGuild: g,
                        isDiscoverable: A,
                        packCollectionData: C,
                        emojiComesFromCurrentGuild: M,
                        isUnusableRoleSubscriptionEmoji: !1,
                        userIsRoleSubscriber: !1,
                        isRoleSubscriptionEmoji: !1,
                        shouldHideRoleSubscriptionCTA: !1
                    });
                    s.useEffect(() => {
                        let e = !h,
                            t = !O || R;
                        if (e && t) return;
                        let a = async () => {
                            n(), E(!0);
                            let e = await P.default.getGuildFromEmojiId(i);
                            p(e), E(!1), _(!0), n()
                        };
                        a()
                    }, [i, O, h, R, n]);
                    let L = !C.viewAndUseEnabled || g;
                    if (L) return null;
                    let x = () => {
                            T(!h)
                        },
                        y = () => {
                            let e = eo.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
                            return (0, a.jsxs)(m.Clickable, {
                                onClick: x,
                                className: er.reactionEmojiDetailsClickable,
                                children: [(0, a.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    color: "none",
                                    "aria-label": e,
                                    children: e
                                }), (0, a.jsx)(W.default, {
                                    width: 16,
                                    height: 16,
                                    className: l(er.reactionEmojiDetailsArrow, {
                                        [er.reactionEmojiDetailsArrowCollapsed]: !h
                                    })
                                })]
                            })
                        },
                        j = h && void 0 !== c,
                        b = () => (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: er.reactionEmojiDetailsDivider
                            }), null != U.emojiDescription && U.type !== $.EmojiPopoutType.UNAVAILABLE && (0, a.jsx)(m.Text, {
                                variant: "text-sm/normal",
                                "aria-label": U.type,
                                children: U.emojiDescription
                            })]
                        });
                    return O ? (0, a.jsxs)("div", {
                        children: [R ? b() : null, f ? (0, a.jsx)(ei.PopoutLoadingAnimation, {
                            className: er.emojiDetailsLoader
                        }) : R && (0, a.jsx)(eE, {
                            emojiId: i,
                            expressionSourceGuild: c,
                            hasJoinedExpressionSourceGuild: g,
                            onClose: o,
                            popoutData: U,
                            packCollectionData: C,
                            currentGuildId: N,
                            nonce: r
                        })]
                    }) : (0, a.jsxs)("div", {
                        children: [j ? b() : y(), f ? (0, a.jsx)(ei.PopoutLoadingAnimation, {
                            className: er.emojiDetailsLoader
                        }) : j && (0, a.jsx)(eE, {
                            emojiId: i,
                            expressionSourceGuild: c,
                            hasJoinedExpressionSourceGuild: g,
                            onClose: o,
                            popoutData: U,
                            packCollectionData: C,
                            currentGuildId: N,
                            nonce: r
                        })]
                    })
                }
        },
        81924: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                }
            }), i("222007");
            var a = i("37983"),
                s = i("884691"),
                n = i("446674"),
                l = i("913144"),
                o = i("206230"),
                r = i("166257"),
                u = i("845579"),
                d = i("15935"),
                c = i("103475"),
                p = i("512306"),
                h = i("941723"),
                m = i("981937"),
                T = i("205591"),
                f = s.memo(function(e) {
                    let {
                        channelId: t,
                        messageId: i,
                        emoji: f,
                        useChatFontScaling: E,
                        color: R,
                        count: _
                    } = e, g = (0, n.useStateFromStores)([d.default], () => d.default.getEffectForEmojiId(t, i, f)), S = E ? T : m, I = s.useMemo(() => (0, h.buildEffect)(f, R, t, {
                        key: g,
                        messageId: i
                    }), [R, g, f, t, i]), [C, O] = s.useState(!1), A = (0, n.useStateFromStores)([o.default], () => o.default.useReducedMotion), N = u.AnimateEmoji.useSetting(), v = s.useCallback(() => {
                        l.default.dispatch({
                            type: "BURST_REACTION_EFFECT_CLEAR",
                            channelId: t,
                            messageId: i,
                            emoji: f
                        })
                    }, [f, t, i]);
                    return (s.useEffect(() => {
                        let e = () => {
                            if (C) return;
                            let e = (0, c.getBurstAnimationHash)("".concat(Date.now()).concat(t).concat(i).concat(f.name)),
                                a = e % 10;
                            (a += _ > 4 ? 4 : _ - 1) > 7 && (O(!0), (0, r.playBurstReaction)({
                                channelId: t,
                                messageId: i,
                                emoji: f,
                                key: d.BurstReactionEffectSource.RANDOM
                            }))
                        };
                        if (C || A && !N || !N) return;
                        e();
                        let a = setInterval(e, 5e3);
                        return () => {
                            clearInterval(a)
                        }
                    }, [N, t, _, f, f.name, C, i, A]), null == g) ? null : (0, a.jsx)(p.default, {
                        className: S.effect,
                        effect: I,
                        onComplete: v
                    })
                })
        },
        232259: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useUsernameHook: function() {
                    return d
                }
            });
            var a = i("37983"),
                s = i("884691"),
                n = i("77078"),
                l = i("506885"),
                o = i("981601"),
                r = i("42203"),
                u = i("441823");

            function d(e, t, i) {
                var d, c;
                let p = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    h = arguments.length > 4 ? arguments[4] : void 0;
                let m = (d = e, c = t, s.useCallback(e => {
                    let t = r.default.getChannel(c);
                    null != t && null != d && (0, u.openUserContextMenu)(e, d, t)
                }, [d, c]));
                return s.useCallback(r => (u, d) => {
                    let c = (e, t) => (0, s.createElement)(n.NameWithRoleAnchor, {
                            ...null != e ? e : {},
                            key: t,
                            onContextMenu: m,
                            name: u,
                            color: null == r ? void 0 : r.colorString,
                            roleName: null == r ? void 0 : r.colorRoleName,
                            "aria-label": h
                        }),
                        T = e => t => {
                            p && t.stopPropagation(), e(t)
                        };
                    return null != e ? (0, a.jsx)(n.Popout, {
                        position: "right",
                        preload: () => (0, l.default)(e.id, e.getAvatarURL(i, 80), {
                            guildId: i,
                            channelId: t
                        }),
                        renderPopout: s => (0, a.jsx)(o.default, {
                            ...s,
                            userId: e.id,
                            guildId: i,
                            channelId: t
                        }),
                        children: e => {
                            let {
                                onClick: t,
                                ...i
                            } = e;
                            return c({
                                onClick: T(t),
                                ...i
                            })
                        }
                    }, d) : c(void 0, d)
                }, [e, t, i, m, p, h])
            }
        },
        785621: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return h
                }
            });
            var a = i("37983"),
                s = i("884691"),
                n = i("917351"),
                l = i("65597"),
                o = i("880731"),
                r = i("232268"),
                u = i("759432"),
                d = i("798592"),
                c = i("39141");

            function p(e) {
                let {
                    reactionRef: t,
                    count: i
                } = e, a = s.useRef(i), r = (0, l.default)([o.default], () => o.default.getState()), c = (0, d.default)(), p = (0, u.default)(t);
                return s.useEffect(() => {
                    if (i > a.current && null != p) {
                        let e = (0, n.clamp)(i, r.confettiCount / 2, 2 * r.confettiCount);
                        c.fire(p.x, p.y, {
                            count: e
                        })
                    }
                    a.current = i
                }, [i, p, c, r.confettiCount]), null
            }

            function h(e) {
                return (0, a.jsx)(r.default, {
                    confettiLocation: c.ConfettiLocation.REACTION,
                    children: (0, a.jsx)(p, {
                        ...e
                    })
                })
            }
        },
        638971: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return R
                }
            });
            var a = i("37983");
            i("884691");
            var s = i("414456"),
                n = i.n(s),
                l = i("151426"),
                o = i("77078"),
                r = i("685665"),
                u = i("10641"),
                d = i("590527"),
                c = i("649844"),
                p = i("626301"),
                h = i("646718"),
                m = i("49111"),
                T = i("782340"),
                f = i("825746"),
                E = i("54338"),
                R = () => {
                    let {
                        analyticsLocations: e
                    } = (0, r.default)();
                    return (0, a.jsx)(o.Dialog, {
                        children: (0, a.jsxs)("div", {
                            className: f.burstReactionTooltipCoachmark,
                            children: [(0, a.jsx)("img", {
                                src: E,
                                alt: ""
                            }), (0, a.jsx)(o.Text, {
                                variant: "text-md/bold",
                                children: T.default.Messages.SUPER_REACTIONS_CONGRATS_HEADER
                            }), (0, a.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: T.default.Messages.SUPER_REACTIONS_CONGRATS_DESCRIPTION.format({
                                    onClick: () => {
                                        (0, p.navigateToPremiumMarketingPage)(), (0, d.toggleFreeUserSentPopout)(null), (0, u.markDismissibleContentAsDismissed)(l.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                    }
                                })
                            }), (0, a.jsxs)("span", {
                                className: f.burstReactionTooltipCoachmarkButtons,
                                children: [(0, a.jsx)(o.Button, {
                                    className: n(f.burstReactionTooltipCoachmarkButton, f.burstReactionTooltipCoachmarkDismiss),
                                    color: o.Button.Colors.CUSTOM,
                                    look: o.Button.Looks.BLANK,
                                    onClick: () => {
                                        (0, d.toggleFreeUserSentPopout)(null), (0, u.markDismissibleContentAsDismissed)(l.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                    },
                                    children: T.default.Messages.DISMISS
                                }), (0, a.jsx)(o.Button, {
                                    autoFocus: !0,
                                    className: n(f.burstReactionTooltipCoachmarkButton, f.burstReactionTooltipCoachmarkCTA),
                                    color: o.Button.Colors.CUSTOM,
                                    look: o.Button.Looks.FILLED,
                                    onClick: () => {
                                        let t = {
                                            page: m.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS
                                        };
                                        (0, c.default)({
                                            initialPlanId: null,
                                            subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
                                            analyticsObject: t,
                                            analyticsLocations: e
                                        }), (0, d.toggleFreeUserSentPopout)(null), (0, u.markDismissibleContentAsDismissed)(l.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                    },
                                    children: T.default.Messages.PREMIUM_UPSELL_GET_NITRO
                                })]
                            })]
                        })
                    })
                }
        },
        85589: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return m
                },
                openBurstReactionsUpsellModal: function() {
                    return T
                }
            });
            var a = i("37983");
            i("884691");
            var s = i("77078"),
                n = i("79112"),
                l = i("154889"),
                o = i("917247"),
                r = i("789946"),
                u = i("646718"),
                d = i("49111"),
                c = i("782340"),
                p = i("61791"),
                h = i("277064");

            function m(e) {
                var t, i;
                let {
                    onClose: s,
                    analyticsSource: m,
                    ...T
                } = e, f = c.default.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
                    onClick: () => {
                        n.default.open(d.UserSettingsSections.PREMIUM), s()
                    }
                }), E = (0, o.usePremiumTrialOffer)(), R = (0, l.usePremiumDiscountOffer)();
                return (0, a.jsx)(r.default, {
                    artURL: h,
                    artContainerClassName: p.artContainer,
                    modalClassName: p.modalContainer,
                    bodyClassName: p.bodyContainer,
                    type: u.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                    title: c.default.Messages.SUPER_REACTIONS_UPSELL_TITLE,
                    body: f,
                    glowUp: f,
                    analyticsSource: m,
                    analyticsLocation: {
                        page: d.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS,
                        object: d.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: s,
                    subscribeButtonText: null != E || null != R ? void 0 : c.default.Messages.PREMIUM_SETTINGS_GET,
                    subscriptionTier: null !== (i = null == E ? void 0 : null === (t = E.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== i ? i : u.PremiumSubscriptionSKUs.TIER_2,
                    backButtonText: c.default.Messages.NO_THANKS,
                    ...T
                })
            }

            function T(e) {
                let {
                    analytics: t
                } = e;
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("85589").then(i.bind(i, "85589"));
                    return i => (0, a.jsx)(e, {
                        analyticsSource: t,
                        ...i
                    })
                })
            }
        },
        738107: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getMinCounterWidth: function() {
                    return m
                },
                default: function() {
                    return l
                }
            });
            var a, s, n, l, o = i("37983"),
                r = i("884691"),
                u = i("917351"),
                d = i.n(u),
                c = i("458960"),
                p = i("471671");

            function h(e, t) {
                return {
                    toValue: e,
                    duration: null != t ? t : 300,
                    easing: c.default.Easing.inOut(c.default.Easing.back())
                }
            }

            function m(e, t, i) {
                if (null != t) {
                    let a = Math.ceil(Math.log10(e + 1));
                    return null != i && i > 0 ? Math.min(a, i) * t : a * t
                }
            }(a = n || (n = {}))[a.ABOVE = 0] = "ABOVE", a[a.VISIBLE = 1] = "VISIBLE", a[a.BELOW = 2] = "BELOW", (s = class extends r.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        prevValue: i,
                        currValue: a,
                        nextValue: s
                    } = t;
                    return null == i && a !== e.value ? {
                        prevValue: p.default.isFocused() ? a : null,
                        currValue: e.value
                    } : null != s && s !== e.value ? {
                        nextValue: e.value
                    } : null
                }
                componentDidUpdate(e, t) {
                    let {
                        prevValue: i,
                        currValue: a
                    } = this.state;
                    i !== t.prevValue && null != i && this.animateBetween(i, a)
                }
                animateBetween(e, t) {
                    let i;
                    let {
                        forcePosition: a,
                        animationSpeed: s
                    } = this.props;
                    this.prevAnimate.setValue(1), null != a ? 0 === a ? (this.currAnimate.setValue(0), i = 2) : 2 === a && (this.currAnimate.setValue(2), i = 0) : e > t ? (this.currAnimate.setValue(0), i = 2) : (this.currAnimate.setValue(2), i = 0), c.default.parallel([c.default.timing(this.prevAnimate, h(i, s)), c.default.timing(this.currAnimate, h(1, s))]).start(this.animateNext)
                }
                getAnimatedStyle(e) {
                    let {
                        animationColor: t
                    } = this.props;
                    return {
                        transform: [{
                            translateY: e.interpolate({
                                inputRange: [0, 1, 2],
                                outputRange: ["-100%", "0%", "100%"]
                            })
                        }],
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        ...null != t && {
                            color: t
                        }
                    }
                }
                getMinWidth(e) {
                    let {
                        digitWidth: t,
                        padStartLength: i
                    } = this.props;
                    return m(e, t, i)
                }
                padValue(e) {
                    let {
                        padStartLength: t
                    } = this.props;
                    return null != t ? String(e).padStart(t, "0") : e
                }
                render() {
                    let {
                        prevValue: e,
                        currValue: t
                    } = this.state, {
                        color: i,
                        formatString: a
                    } = this.props, s = d.omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
                    if (null == e) return (0, o.jsx)("div", {
                        ...s,
                        style: {
                            color: i,
                            minWidth: this.getMinWidth(t)
                        },
                        children: null != a ? a(this.padValue(t)) : this.padValue(t)
                    });
                    let n = Math.max(e, t);
                    return (0, o.jsxs)("div", {
                        ...s,
                        style: {
                            color: i,
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [(0, o.jsx)("div", {
                            style: {
                                visibility: "hidden",
                                minWidth: this.getMinWidth(n)
                            },
                            children: this.padValue(n)
                        }), (0, o.jsx)(c.default.div, {
                            style: {
                                color: i,
                                ...this.getAnimatedStyle(this.prevAnimate)
                            },
                            children: null != a ? a(this.padValue(e)) : this.padValue(e)
                        }), (0, o.jsx)(c.default.div, {
                            style: {
                                color: i,
                                ...this.getAnimatedStyle(this.currAnimate)
                            },
                            children: null != a ? a(this.padValue(t)) : this.padValue(t)
                        })]
                    })
                }
                constructor(e) {
                    super(e), this.animateNext = () => {
                        let {
                            currValue: e,
                            nextValue: t
                        } = this.state;
                        null != t ? this.setState({
                            prevValue: p.default.isFocused() ? e : null,
                            currValue: t,
                            nextValue: null
                        }) : this.setState({
                            prevValue: null
                        })
                    }, this.state = {
                        prevValue: null,
                        currValue: e.value,
                        nextValue: null
                    }, this.prevAnimate = new c.default.Value(0), this.currAnimate = new c.default.Value(1)
                }
            }).Positions = n, l = s
        },
        305515: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                Future: function() {
                    return a
                }
            });
            class a {
                constructor() {
                    this.promise = new Promise((e, t) => {
                        this.resolve = e, this.reject = t
                    })
                }
            }
        }
    }
]);