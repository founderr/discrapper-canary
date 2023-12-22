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
        783480: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return L
                }
            }), i("222007"), i("702976");
            var a = i("77078"),
                l = i("913144"),
                n = i("295426"),
                s = i("819689"),
                o = i("81594"),
                r = i("336522"),
                u = i("448993"),
                d = i("979911"),
                c = i("282928"),
                p = i("966724"),
                h = i("681736"),
                f = i("600798"),
                T = i("692038"),
                m = i("815297"),
                E = i("168730"),
                g = i("562228"),
                _ = i("529805"),
                R = i("685841"),
                I = i("804888"),
                C = i("474643"),
                O = i("585722"),
                v = i("568734"),
                A = i("305515"),
                S = i("49111"),
                N = i("782340");
            async function P(e) {
                var t, i, a;
                let c, {
                        channelId: p,
                        uploads: P,
                        draftType: L,
                        parsedMessage: y,
                        options: M = {},
                        raiseEndpointErrors: j = !1
                    } = e,
                    x = new h.default(S.Endpoints.MESSAGES(p)),
                    U = new A.Future,
                    b = {
                        content: "",
                        nonce: "",
                        channel_id: p,
                        type: S.MessageTypes.DEFAULT,
                        sticker_ids: null == M ? void 0 : M.stickerIds,
                        poll: null == M ? void 0 : M.poll
                    };
                null != y && (b.content = null == y ? void 0 : y.content);
                let D = R.default.getPendingReply(p);
                null != D && (b.type = S.MessageTypes.REPLY, b.message_reference = M.messageReference, b.allowed_mentions = M.allowedMentions, (0, _.deletePendingReply)(p));
                let [B, k] = (0, I.default)(b.content);
                B && (b.content = k, b.flags = (0, v.addFlag)(null !== (t = b.flags) && void 0 !== t ? t : 0, S.MessageFlags.SUPPRESS_NOTIFICATIONS));
                let w = null !== (i = M.nonce) && void 0 !== i ? i : (0, m.createNonce)(),
                    V = (0, m.default)({
                        channelId: p,
                        content: b.content,
                        tts: null !== (a = null == y ? void 0 : y.tts) && void 0 !== a && a,
                        type: b.type,
                        messageReference: b.message_reference,
                        flags: b.flags,
                        nonce: w,
                        poll: (0, g.createPollServerDataFromCreateRequest)(M.poll)
                    });
                return (b.nonce = w, x.on("start", e => {
                    c = (0, T.createMessageRecord)({
                        ...V,
                        id: e.id
                    }), l.default.dispatch({
                        type: "UPLOAD_START",
                        channelId: p,
                        file: e,
                        message: c,
                        uploader: x
                    })
                }), x.on("progress", e => {
                    l.default.dispatch({
                        type: "UPLOAD_PROGRESS",
                        channelId: p,
                        file: e
                    })
                })), x.on("error", (e, t, i, a) => {
                    if (l.default.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: p,
                            file: e,
                            messageRecord: c
                        }), (0, E.logMessageSendFailure)({
                            fileItems: e.items,
                            failureCode: t,
                            errorMessage: null == a ? void 0 : a.msg
                        }), t === S.AbortCodes.EXPLICIT_CONTENT) {
                        s.default.sendClydeError(p, t);
                        return
                    }
                    if (t === S.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
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
                            title: N.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: (0, f.getAutomodErrorMessage)(a, e)
                        });
                        return
                    }
                    t !== S.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && (j ? U.reject(new u.APIError({
                        status: t,
                        body: null != i ? i : {}
                    }, t)) : (0, r.openUploadError)({
                        title: N.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: N.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                    }), "" !== b.content && "" === C.default.getDraft(p, L) && n.default.saveDraft(p, b.content, L), 0 === O.default.getUploadCount(p, L) && o.default.setUploads({
                        channelId: p,
                        uploads: P,
                        draftType: L
                    }))
                }), x.on("complete", e => {
                    l.default.dispatch({
                        type: "UPLOAD_COMPLETE",
                        channelId: p,
                        file: e,
                        aborted: x._aborted
                    })
                }), await x.uploadFiles(P, b), U.resolve(), U.promise
            }
            var L = {
                instantBatchUpload: function(e) {
                    let {
                        channelId: t,
                        files: i,
                        draftType: a,
                        isThumbnail: l = !1,
                        filesMetadata: n = []
                    } = e, s = Array.from(i).map((e, i) => {
                        let a = null != n ? n[i] : {};
                        return new c.CloudUpload({
                            file: e,
                            platform: p.UploadPlatform.WEB,
                            isThumbnail: l,
                            ...a
                        }, t)
                    });
                    P({
                        channelId: t,
                        uploads: s,
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
                    } = t, f = {
                        content: "",
                        tts: !1,
                        hasSpoiler: c,
                        filename: p
                    };
                    if (null != d) {
                        f.content = d.content, f.tts = d.tts, f.channel_id = d.channel_id;
                        let e = R.default.getPendingReply(i);
                        if (null != e) {
                            let t = s.default.getSendMessageOptionsForReply(e);
                            f.type = S.MessageTypes.REPLY, f.message_reference = t.messageReference, f.allowed_mentions = t.allowedMentions, (0, _.deletePendingReply)(i)
                        }
                    }
                    let T = new h.default(S.Endpoints.MESSAGES(i));
                    T.on("start", e => {
                        l.default.dispatch({
                            type: "UPLOAD_START",
                            channelId: i,
                            file: e,
                            uploader: T
                        })
                    }), T.on("progress", e => {
                        l.default.dispatch({
                            type: "UPLOAD_PROGRESS",
                            channelId: i,
                            file: e
                        })
                    }), T.on("error", (t, c) => {
                        if (l.default.dispatch({
                                type: "UPLOAD_FAIL",
                                channelId: i,
                                file: t
                            }), (0, E.logMessageSendFailure)({
                                fileItems: t.items,
                                failureCode: c
                            }), c === S.AbortCodes.EXPLICIT_CONTENT) {
                            s.default.sendClydeError(i, c);
                            return
                        }(0, r.openUploadError)({
                            title: N.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: N.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                                onClick: () => {
                                    (0, a.closeModal)(r.UPLOAD_ERROR_MODAL_KEY), e({
                                        channelId: i,
                                        file: o,
                                        draftType: u,
                                        message: d
                                    })
                                }
                            })
                        }), "" !== f.content && "" === C.default.getDraft(i, u) && n.default.saveDraft(i, f.content, u)
                    }), T.on("complete", e => {
                        l.default.dispatch({
                            type: "UPLOAD_COMPLETE",
                            channelId: i,
                            file: e
                        })
                    }), T.upload(o, f)
                },
                uploadFiles: P,
                cancel(e) {
                    if (l.default.dispatch({
                            type: "UPLOAD_CANCEL_REQUEST",
                            file: e
                        }), null != e.draftContent && null != e.channelId) {
                        let t = C.default.getDraft(e.channelId, C.DraftType.ChannelMessage);
                        "" === t && l.default.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: C.DraftType.ChannelMessage
                        })
                    }
                }
            }
        },
        281862: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PinIcon: function() {
                    return s
                }
            });
            var a = i("37983");
            i("884691");
            var l = i("669491"),
                n = i("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
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
                        fill: "string" == typeof s ? s : s.css,
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
            var a, l = i("872717"),
                n = i("448993"),
                s = i("981112"),
                o = i("966724"),
                r = i("980134"),
                u = i("782340");
            a = class extends s.default {
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
                        this.setUploadingTextForUI(), await (0, s.stageAttachmentFiles)(this.files, !0, this._recomputeProgress.bind(this))
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
                    let s = [];
                    this.files.forEach((e, t) => {
                        let i = (0, r.getAttachmentPayload)(e, t);
                        e.item.platform === o.UploadPlatform.WEB && s.push({
                            ...i
                        })
                    }), a = null != i && null != t ? this._addAttachmentsToPayload(t, i, s) : {
                        ...t,
                        attachments: s
                    };
                    let u = {
                            url: this._url,
                            body: a,
                            signal: e
                        },
                        d = "POST" === this._method ? l.default.post : l.default.patch;
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
                l = i("884691"),
                n = i("516555"),
                s = i("907002"),
                o = i("458960"),
                r = i("430568"),
                u = i("526887"),
                d = i("590527"),
                c = i("983782"),
                p = i("315102"),
                h = i("402671"),
                f = i("172858"),
                T = i("612683");
            let m = [];

            function E(e) {
                let {
                    messageId: t,
                    emoji: i,
                    startPosition: E,
                    targetPosition: g
                } = e, [_, R] = l.useState(0), [I, C] = l.useState(0), [O, v] = l.useState(null), {
                    confettiCanvas: A
                } = l.useContext(u.ConfettiCannonContext), S = (0, n.useConfettiCannon)(A, O), N = l.useMemo(() => {
                    let e = null == i.id ? h.default.getURL(i.name) : p.default.getEmojiURL({
                        id: i.id,
                        animated: !1,
                        size: 22
                    });
                    return [{
                        src: e,
                        colorize: !1
                    }]
                }, [i.name, i.id]), P = g.x - g.width / 2 * .5, L = g.y - g.height / 2 * .5, y = (0, s.useSpring)({
                    from: {
                        y: E.y
                    },
                    to: {
                        y: L
                    },
                    config: {
                        duration: 450,
                        easing: o.default.Easing.in(o.default.Easing.exp)
                    },
                    onChange: e => {
                        let {
                            y: t
                        } = e;
                        C(t)
                    }
                }), M = (0, s.useSpring)({
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
                        R(t)
                    }
                });
                return l.useEffect(() => {
                    _ > 0 && I > 0 && S.createConfetti({
                        ...f.COMMON_CONFETTI_BASE_CONFIG,
                        position: {
                            type: "static",
                            value: {
                                x: _,
                                y: I
                            }
                        }
                    })
                }, [S, _, I]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(n.SpriteCanvas, {
                        ref: v,
                        sprites: N,
                        colors: m,
                        spriteWidth: f.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: f.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    }), (0, a.jsx)(c.default, {
                        children: (0, a.jsx)(s.animated.div, {
                            style: {
                                ...y
                            },
                            className: T.emojiContainer,
                            children: (0, a.jsx)(s.animated.div, {
                                style: {
                                    ...M,
                                    opacity: M.opacity
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
                l = i("819855"),
                n = i("206230"),
                s = i("161778"),
                o = i("584375");
            let r = e => {
                let t = (0, a.useStateFromStores)([n.default], () => n.default.saturation),
                    i = (0, a.useStateFromStores)([s.default], () => (0, l.isThemeDark)(s.default.theme));
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
                    return m
                }
            }), i("222007");
            var a, l, n = i("37983"),
                s = i("884691"),
                o = i("446674"),
                r = i("77078"),
                u = i("851387"),
                d = i("476765"),
                c = i("449008"),
                p = i("267567"),
                h = i("49111"),
                f = i("782340"),
                T = i("404637");
            (l = a || (a = {}))[l.CHAT = 0] = "CHAT", l[l.REACTIONS = 1] = "REACTIONS";
            var m = e => {
                let {
                    type: t,
                    guild: a,
                    closePopout: l,
                    ctaRef: m
                } = e, E = (0, d.useUID)(), [g, _] = s.useState(!1), R = (0, o.useStateFromStores)([p.default], () => p.default.isLurking(a.id), [a.id]);
                s.useEffect(() => {
                    g && !R && l()
                }, [g, R, l]);
                let I = null,
                    C = f.default.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
                switch (t) {
                    case 0:
                        I = f.default.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
                        break;
                    case 1:
                        I = f.default.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
                        break;
                    default:
                        return (0, c.assertNever)(t)
                }
                if (null == I) return null;
                let O = async () => {
                    _(!0);
                    try {
                        await u.default.joinGuild(a.id, {
                            source: h.JoinGuildSources.CHAT_INPUT_BLOCKER
                        }), l()
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
                            children: I
                        }), (0, n.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: C
                        }), (0, n.jsxs)("div", {
                            className: T.buttonContainer,
                            children: [(0, n.jsx)(r.Button, {
                                buttonRef: m,
                                onClick: O,
                                submitting: g,
                                children: f.default.Messages.LURKER_MODE_POPOUT_JOIN
                            }), (0, n.jsx)(r.Button, {
                                onClick: l,
                                look: r.Button.Looks.BLANK,
                                className: T.cancel,
                                children: f.default.Messages.LURKER_MODE_POPOUT_CANCEL
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
                    canAddNewReactions: l,
                    isLurking: n,
                    isGuest: s,
                    communicationDisabled: o,
                    isActiveChannelOrUnarchivableThread: r
                } = e, u = t.isPrivate(), d = t.isSystemDM(), c = (i || u) && r;
                return {
                    disableReactionReads: !a,
                    disableReactionCreates: n || s || !c || !((!0 === l || u) && !d && r),
                    disableReactionUpdates: n || s || !c || !0 === o
                }
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
                l = i.n(a),
                n = i("432173"),
                s = i("42203"),
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
                    f = s.default.getChannel(e.getChannelId()),
                    T = null == f || f.isPrivate() ? null : f.getGuildId(),
                    m = e.getReaction(t),
                    E = a === d.ReactionTypes.BURST,
                    g = l(h).reject(e => r.default.isBlocked(e.id)).take(3).map(e => u.default.getName(T, null == f ? void 0 : f.id, e)).value();
                if (0 === g.length) return "";
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
                    R = E ? _.burst : _.standard,
                    I = null !== (i = E ? null == m ? void 0 : m.burst_count : null == m ? void 0 : m.count) && void 0 !== i ? i : 0,
                    C = Math.max(0, I - g.length),
                    O = (0, n.getReactionEmojiName)(t);
                if (1 === g.length) return C > 0 ? null != p ? R.reactionTooltip1NInteractive.format({
                    a: g[0],
                    n: C,
                    emojiName: O,
                    onClick: p
                }) : R.reactionTooltip1N.format({
                    a: g[0],
                    n: C,
                    emojiName: O
                }) : R.reactionTooltip1.format({
                    a: g[0],
                    emojiName: O
                });
                if (2 === g.length) return C > 0 ? null != p ? R.reactionTooltip2NInteractive.format({
                    a: g[0],
                    b: g[1],
                    n: C,
                    emojiName: O,
                    onClick: p
                }) : R.reactionTooltip2N.format({
                    a: g[0],
                    b: g[1],
                    n: C,
                    emojiName: O
                }) : R.reactionTooltip2.format({
                    a: g[0],
                    b: g[1],
                    emojiName: O
                });
                if (3 === g.length) return C > 0 ? null != p ? R.reactionTooltip3NInteractive.format({
                    a: g[0],
                    b: g[1],
                    c: g[2],
                    n: C,
                    emojiName: O,
                    onClick: p
                }) : R.reactionTooltip3N.format({
                    a: g[0],
                    b: g[1],
                    c: g[2],
                    n: C,
                    emojiName: O
                }) : R.reactionTooltip3.format({
                    a: g[0],
                    b: g[1],
                    c: g[2],
                    emojiName: O
                });
                else return null != p ? R.reactionTooltipNInteractive.format({
                    n: C,
                    emojiName: O,
                    onClick: p
                }) : R.reactionTooltipN.format({
                    n: C,
                    emojiName: O
                })
            }
        },
        350134: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                REACTION_MIN_WIDTH_DIGITS: function() {
                    return er
                },
                showReactionsModal: function() {
                    return eu
                },
                isMeReaction: function() {
                    return ed
                },
                Reaction: function() {
                    return ep
                }
            }), i("222007");
            var a = i("37983"),
                l = i("884691"),
                n = i("414456"),
                s = i.n(n),
                o = i("748820"),
                r = i("458960"),
                u = i("509043"),
                d = i("446674"),
                c = i("151426"),
                p = i("862337"),
                h = i("130969"),
                f = i("77078"),
                T = i("430568"),
                m = i("57155"),
                E = i("206230"),
                g = i("716241"),
                _ = i("10641"),
                R = i("58533"),
                I = i("385976"),
                C = i("858619"),
                O = i("102873"),
                v = i("865453"),
                A = i("233322"),
                S = i("252931"),
                N = i("529932"),
                P = i("446066"),
                L = i("13066"),
                y = i("785621"),
                M = i("635956"),
                j = i("85589"),
                x = i("166257"),
                U = i("432173"),
                b = i("845579"),
                D = i("42203"),
                B = i("305961"),
                k = i("486996"),
                w = i("162771"),
                V = i("697218"),
                F = i("471671"),
                G = i("738107"),
                H = i("791106"),
                K = i("256170"),
                W = i("216422"),
                J = i("599110"),
                z = i("719923"),
                Y = i("15935"),
                X = i("875978"),
                Z = i("412745"),
                q = i("459698"),
                Q = i("933629"),
                $ = i("331011"),
                ee = i("81924"),
                et = i("49111"),
                ei = i("646718"),
                ea = i("782340"),
                el = i("154403"),
                en = i("550244"),
                es = i("314934"),
                eo = i("219468");
            let er = 9;

            function eu(e, t, i) {
                (0, f.openModal)(e => (0, a.jsx)(m.default, {
                    ...e,
                    message: t,
                    selectedReaction: i
                }))
            }

            function ed(e, t, i) {
                return i === X.ReactionTypes.BURST && t || i === X.ReactionTypes.NORMAL && e
            }
            class ec extends l.PureComponent {
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
                    F.default.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), r.default.parallel([r.default.timing(this.scale, {
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
                        burst_count: l,
                        colors: n,
                        isBurstReaction: o,
                        hideCount: d,
                        emoji: c,
                        readOnly: p,
                        isLurking: h,
                        isGuest: m,
                        isPendingMember: E,
                        className: g,
                        useChatFontScaling: _,
                        message: I,
                        hideEmoji: C,
                        animationStartPosition: O
                    } = this.props, {
                        shouldShowTooltip: v,
                        tooltipTextAria: A,
                        reactionRef: S,
                        tooltipPositionKey: N
                    } = this.state, P = _ ? es : en, L = {
                        transform: [{
                            scale: this.scale
                        }],
                        opacity: this.opacity
                    }, M = o ? l : i;
                    if (o && null != n) {
                        var j;
                        let {
                            accentColor: i,
                            backgroundColor: a,
                            opacity: l
                        } = n, s = null !== (j = (0, u.hex2rgb)(null != a ? a : "", l)) && void 0 !== j ? j : "";
                        this.isMe() && (L.borderColor = a), L.background = s, e = i, t = i
                    }
                    let x = null == S ? void 0 : S.getBoundingClientRect(),
                        b = null != O && null != x,
                        D = null == O;
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(f.Popout, {
                            shouldShow: v,
                            "aria-label": null != A && A,
                            renderPopout: this.renderTooltip,
                            nudgeAlignIntoViewport: !0,
                            position: "top",
                            align: "center",
                            positionKey: N,
                            children: () => (0, a.jsx)("div", {
                                onMouseEnter: this.handleEnter,
                                onMouseLeave: this.handleLeave,
                                ref: this.handleSetReactionRef,
                                children: (0, a.jsx)(r.default.div, {
                                    className: s(P.reaction, g, {
                                        [P.reactionMe]: this.isMe(),
                                        [P.reactionReadOnly]: p && !h && !E && !m,
                                        [P.shakeReaction]: C && null == O
                                    }),
                                    style: L,
                                    children: (0, a.jsx)(f.Popout, {
                                        renderPopout: this.renderLurkerModeUpsellPopout,
                                        position: "top",
                                        children: i => (0, a.jsxs)(f.Clickable, {
                                            ...i,
                                            className: P.reactionInner,
                                            onClick: this.handleClick,
                                            "aria-disabled": p,
                                            "aria-label": (0, U.getAccessibleEmojiDisplayName)(this.isMe(), M, c, o),
                                            "aria-pressed": this.isMe(),
                                            children: [(0, a.jsx)("div", {
                                                className: s({
                                                    [P.burstGlow]: o
                                                }),
                                                style: {
                                                    boxShadow: "0 0 16px ".concat(t)
                                                }
                                            }), (0, a.jsxs)("div", {
                                                children: [o ? (0, a.jsxs)(a.Fragment, {
                                                    children: [b && (0, a.jsx)(R.default, {
                                                        messageId: I.id,
                                                        emoji: c,
                                                        startPosition: O,
                                                        targetPosition: x
                                                    }), D && (0, a.jsx)(ee.default, {
                                                        count: l,
                                                        emoji: c,
                                                        channelId: I.getChannelId(),
                                                        messageId: I.id,
                                                        useChatFontScaling: _,
                                                        color: t
                                                    })]
                                                }) : null, (0, a.jsx)(T.default, {
                                                    className: s({
                                                        [P.hideEmoji]: C
                                                    }),
                                                    emojiId: c.id,
                                                    emojiName: c.name,
                                                    size: "reaction",
                                                    animated: c.animated
                                                })]
                                            }), d ? null : (0, a.jsx)(G.default, {
                                                className: P.reactionCount,
                                                value: M,
                                                color: e,
                                                digitWidth: er
                                            }), (0, a.jsx)(y.default, {
                                                count: M,
                                                reactionRef: S
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.scale = new r.default.Value(1), this.opacity = new r.default.Value(1), this.timeout = new p.Timeout, this.hideTimeout = new p.Timeout, this.ctaRef = l.createRef(), this.type = X.ReactionTypes.NORMAL, this.colors = {
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
                            isBurstReaction: l,
                            isPendingMember: n,
                            isLurking: s,
                            isGuest: o,
                            isForumToolbar: r,
                            hasDismissedRemoveModal: u
                        } = this.props, d = D.default.getChannel(t.getChannelId());
                        if (s || o) {
                            var c, p;
                            null === (p = this.ctaRef) || void 0 === p || null === (c = p.current) || void 0 === c || c.focus();
                            return
                        }
                        let h = t.getChannelId(),
                            f = r ? x.ReactionLocations.FORUM_TOOLBAR : x.ReactionLocations.MESSAGE;
                        if (l && !a && this.isMe()) u ? (0, x.removeReaction)(h, t.id, i, void 0, f, {
                            burst: l
                        }) : (0, x.removeReactionWithConfirmation)({
                            emoji: i,
                            channelId: h,
                            messageId: t.id,
                            reactionType: l ? X.ReactionTypes.BURST : X.ReactionTypes.NORMAL,
                            location: f,
                            isMe: this.isMe()
                        });
                        else if (l && !this.userCanBurstReact()) {
                            (0, j.openBurstReactionsUpsellModal)({
                                analytics: {
                                    type: ei.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                                    page: (null == d ? void 0 : d.getGuildId()) != null ? et.AnalyticsPages.GUILD_CHANNEL : et.AnalyticsPages.DM_CHANNEL,
                                    section: null != d ? (0, U.getBurstAnalyticsSection)(d) : void 0,
                                    object: et.AnalyticsObjects.EMOJI_REACTION_UPSELL
                                }
                            });
                            return
                        } else n ? this.handleShowVerificationGate() : !a && (this.isMe() ? (0, x.removeReaction)(h, t.id, i, void 0, f) : (0, x.addReaction)(h, t.id, i, f, {
                            burst: l
                        }))
                    }, this.handleEnter = e => {
                        let {
                            emoji: t,
                            message: i,
                            type: a,
                            reduceMotion: l,
                            animateEmoji: n,
                            autoUnfurlReactionTooltip: s
                        } = this.props, o = a === X.ReactionTypes.BURST;
                        o && !this.isReactionEventActive && !l && n && (0, x.playBurstReaction)({
                            channelId: i.getChannelId(),
                            messageId: i.id,
                            emoji: t,
                            key: Y.BurstReactionEffectSource.HOVER
                        }), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(o ? 750 : s ? 200 : 500, this.showTooltip, !1)
                    }, this.handleEnterTooltip = () => {
                        this.isReactionEventActive = !0, this.handleShowTooltip()
                    }, this.handleShowTooltip = () => {
                        this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), k.default.addChangeListener(this.updateTooltipText))
                    }, this.showTooltip = () => {
                        this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0
                    }, this.handleLeave = () => {
                        this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), k.default.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1)
                    }, this.hideTooltip = () => {
                        this.setState({
                            shouldShowTooltip: !1
                        }), this.hasShownTooltip && J.default.track(et.AnalyticEvents.CLOSE_POPOUT, {
                            nonce: this.nonce
                        })
                    }, this.isMe = () => {
                        let {
                            me: e,
                            me_burst: t,
                            type: i
                        } = this.props;
                        return ed(e, t, i)
                    }, this.updateTooltipText = () => {
                        let {
                            message: e,
                            emoji: t,
                            type: i
                        } = this.props, a = (0, $.getReactionTooltipText)(e, t, i), l = this.isKeyboardNavigation ? a : (0, $.getReactionTooltipText)(e, t, i, et.NOOP);
                        this.setState({
                            tooltipText: l,
                            tooltipTextAria: a,
                            shouldShowTooltip: null != l && "" !== l
                        })
                    }, this.renderLurkerModeUpsellPopout = e => {
                        let {
                            closePopout: t
                        } = e, {
                            message: i,
                            isLurking: l
                        } = this.props, n = D.default.getChannel(i.getChannelId()), s = B.default.getGuild(null == n ? void 0 : n.getGuildId());
                        return l && null != s ? (0, a.jsx)(L.default, {
                            ctaRef: this.ctaRef,
                            type: L.LurkerModeUpsellPopoutTypes.REACTIONS,
                            guild: s,
                            closePopout: t
                        }) : (0, a.jsx)(a.Fragment, {})
                    }, this.renderEmojiDetails = () => {
                        let e = this.props.emoji;
                        return null != e.id && (0, a.jsx)(ef, {
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
                            me_burst: l,
                            isBurstReaction: n = !1
                        } = this.props, {
                            tooltipText: o
                        } = this.state, r = i => {
                            let a = D.default.getChannel(t.getChannelId());
                            if (null == a) return;
                            this.handleLeave();
                            let l = n ? X.ReactionTypes.BURST : X.ReactionTypes.NORMAL;
                            eu(a, t, {
                                emoji: e,
                                reactionType: l
                            })
                        }, u = "string" == typeof o, d = u ? "" === o.trim() : null == o, c = () => d || null == o ? null : (0, a.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            className: eo.reactionTooltipText,
                            "aria-label": o,
                            children: o
                        });
                        return i === X.ReactionTypes.BURST ? (0, a.jsxs)(h.Dialog, {
                            className: eo.reactionTooltip,
                            onMouseEnter: this.handleEnterTooltip,
                            onMouseLeave: this.handleLeave,
                            children: [(0, a.jsx)(f.Clickable, {
                                className: eo.burstReactionTooltipInner,
                                onClick: r,
                                children: (0, a.jsxs)("div", {
                                    className: eo.burstReactionTooltipMessage,
                                    children: [(0, a.jsx)(T.default, {
                                        className: eo.reactionTooltipEmoji,
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated,
                                        size: this.props.emojiSize
                                    }), c()]
                                })
                            }), (() => {
                                let e = V.default.getCurrentUser();
                                if (l) return (0, a.jsxs)("div", {
                                    className: s(eo.burstReactionTooltipPrompt, eo.burstReactionTooltipSpacer),
                                    children: [(0, z.isPremium)(e) && (0, a.jsx)(W.default, {
                                        className: eo.burstReactionTooltipNitroIcon,
                                        color: H.GradientCssUrls.PREMIUM_TIER_2
                                    }), (0, a.jsx)(f.Text, {
                                        variant: "text-sm/normal",
                                        className: eo.reactionTooltipText,
                                        "aria-label": "super reaction tooltip cta",
                                        children: ea.default.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED
                                    })]
                                });
                                if (this.userCanBurstReact()) return (0, a.jsxs)("div", {
                                    className: s(eo.burstReactionTooltipPrompt, eo.burstReactionTooltipSpacer, eo.burstReactionTooltipPromptClickable),
                                    children: [(0, a.jsx)(W.default, {
                                        className: eo.burstReactionTooltipNitroIcon,
                                        color: H.GradientCssUrls.PREMIUM_TIER_2
                                    }), (0, a.jsx)(f.Clickable, {
                                        onClick: this.handleClick,
                                        children: (0, a.jsx)(f.Text, {
                                            variant: "text-sm/normal",
                                            className: eo.reactionTooltipText,
                                            "aria-label": "super reaction tooltip cta",
                                            children: ea.default.Messages.SUPER_REACTION_TOOLTIP_CTA
                                        })
                                    })]
                                });
                                if (!this.userCanBurstReact() && !this.isKeyboardNavigation) return (0, a.jsx)("div", {
                                    className: s(eo.burstReactionTooltipPrompt, eo.burstReactionTooltipSpacer),
                                    children: (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)(f.Text, {
                                            variant: "text-sm/normal",
                                            "aria-label": "super reaction tooltip upsell",
                                            children: ea.default.Messages.SUPER_REACTION_TOOLTIP_UPSELL
                                        }), (0, a.jsx)(M.default, {
                                            subscriptionTier: ei.PremiumSubscriptionSKUs.TIER_2,
                                            buttonText: ea.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                            className: eo.burstReactionTooltipUpsellCta,
                                            onClick: e => e.stopPropagation()
                                        })]
                                    })
                                });
                                return null
                            })(), this.renderEmojiDetails()]
                        }) : (0, a.jsxs)(h.Dialog, {
                            className: eo.reactionTooltip,
                            onMouseEnter: this.handleEnterTooltip,
                            onMouseLeave: this.handleLeave,
                            children: [(0, a.jsx)(f.Clickable, {
                                onClick: r,
                                children: (0, a.jsxs)("div", {
                                    className: eo.reactionTooltipInner,
                                    children: [(0, a.jsx)(T.default, {
                                        className: eo.reactionTooltipEmoji,
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
                        let i = D.default.getChannel(e.getChannelId()),
                            a = B.default.getGuild(null == i ? void 0 : i.getGuildId());
                        null != a && (0, A.openMemberVerificationModal)(a.id)
                    }, this.handleSetReactionRef = e => {
                        this.setState({
                            reactionRef: e
                        })
                    }, this.trackReactionTooltipViewed = () => {
                        let {
                            emoji: e,
                            message: t,
                            type: i
                        } = this.props, a = V.default.getCurrentUser(), l = D.default.getChannel(t.getChannelId()), n = i === X.ReactionTypes.BURST, s = (0, z.isPremium)(a), o = n ? ei.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER : ei.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
                        n && !this.userCanBurstReact() && !s && (o = ei.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), g.default.trackWithMetadata(et.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                            type: o,
                            expression_id: e.id,
                            expression_name: e.name,
                            is_animated: e.animated,
                            is_custom: null != e.id,
                            nonce: this.nonce
                        }), n && null != l && !s && !this.userCanBurstReact() && J.default.track(et.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: ei.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == l ? void 0 : l.getGuildId()) != null ? et.AnalyticsPages.GUILD_CHANNEL : et.AnalyticsPages.DM_CHANNEL,
                                section: (0, U.getBurstAnalyticsSection)(l),
                                object: et.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        })
                    }
                }
            }
            ec.defaultProps = {
                emojiSize: "jumbo"
            };
            let ep = l.memo(e => {
                    let {
                        type: t,
                        burst_colors: i,
                        message: l,
                        emoji: n
                    } = e, s = t === X.ReactionTypes.BURST, {
                        autoUnfurlReactionTooltip: o
                    } = (0, S.useInventoryGuildPacksUserExperiment)({
                        autoTrackExposure: !1
                    }), r = (0, O.useEmojiColorPalette)(s && null != i ? i : []), u = (0, d.useStateFromStores)([Y.default], () => void 0 !== Y.default.getEffectForEmojiId(l.getChannelId(), l.id, n)), p = (0, d.useStateFromStores)([E.default], () => E.default.useReducedMotion), h = b.AnimateEmoji.useSetting(), f = (0, _.isDismissibleContentDismissed)(c.DismissibleContent.BURST_REACTIONS_REMOVE_MODAL), T = V.default.getCurrentUser(), m = (0, z.isPremium)(T), g = (0, d.useStateFromStores)([Y.default], () => Y.default.getReactionPickerAnimation(l.id, n.name, n.id)), R = s && (u || null != g);
                    return (0, a.jsx)(ec, {
                        ...e,
                        colors: r,
                        isBurstReaction: s,
                        hideEmoji: R,
                        userHasPremium: m,
                        reduceMotion: p,
                        animateEmoji: h,
                        hasDismissedRemoveModal: f,
                        animationStartPosition: g,
                        autoUnfurlReactionTooltip: o
                    })
                }),
                eh = e => {
                    var t;
                    let {
                        emojiId: i,
                        expressionSourceGuild: l,
                        hasJoinedExpressionSourceGuild: n,
                        onClose: s,
                        packCollectionData: o,
                        popoutData: r,
                        currentGuildId: u,
                        nonce: d
                    } = e;
                    (0, v.useTrackOpenPopout)({
                        emojiId: i,
                        currentGuildId: u,
                        popoutData: r,
                        emojiSourceGuildId: null == l ? void 0 : l.id,
                        nonce: d
                    });
                    let c = null !== (t = null == l ? void 0 : l.isDiscoverable()) && void 0 !== t && t,
                        p = o.collectEnabled,
                        h = null !== l && (c || p);
                    return (0, a.jsx)(a.Fragment, {
                        children: h ? null == l ? null : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: el.reactionEmojiDetailsUnfurlGuildDetails,
                                children: (0, a.jsx)(q.GuildDetails, {
                                    expressionSourceGuild: l,
                                    hasJoinedExpressionSourceGuild: n,
                                    isDisplayingJoinGuildButtonInPopout: r.type === Z.EmojiPopoutType.JOIN_GUILD
                                })
                            }), (0, a.jsx)(q.EmojiPopoutList, {
                                emojiId: i,
                                expressionSourceGuild: l,
                                hasJoinedEmojiSourceGuild: n,
                                onClose: s,
                                popoutData: r,
                                packCollectionData: o,
                                isDisplayingButtonInTopSection: !1,
                                nonce: d
                            })]
                        }) : (0, a.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            "aria-label": r.type,
                            children: r.emojiDescription
                        })
                    })
                },
                ef = e => {
                    var t;
                    let {
                        emojiId: i,
                        refreshPositionKey: n,
                        onClose: o,
                        nonce: r
                    } = e, {
                        joinedEmojiSourceGuild: u
                    } = (0, d.useStateFromStoresObject)([I.default, B.default], () => {
                        let e = I.default.getCustomEmojiById(i);
                        return {
                            joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === C.EmojiTypes.GUILD ? B.default.getGuild(null == e ? void 0 : e.guildId) : void 0
                        }
                    }), [c, p] = l.useState(void 0), [h, T] = l.useState(!1), [m, E] = l.useState(!1), [g, _] = l.useState(!1), R = null != u, O = (0, N.usePackCollectionData)({
                        expressionSourceGuild: c
                    }), v = O.autoUnfurlReactionTooltip, A = null !== (t = null == c ? void 0 : c.isDiscoverable()) && void 0 !== t && t, S = w.default.getGuildId(), L = null != S && (S === (null == c ? void 0 : c.id) || S === (null == u ? void 0 : u.id)), y = (0, Z.getEmojiPopoutData)({
                        isPremium: O.isPremium,
                        hasJoinedEmojiSourceGuild: R,
                        isDiscoverable: A,
                        packCollectionData: O,
                        emojiComesFromCurrentGuild: L,
                        isUnusableRoleSubscriptionEmoji: !1,
                        userIsRoleSubscriber: !1,
                        isRoleSubscriptionEmoji: !1,
                        shouldHideRoleSubscriptionCTA: !1
                    });
                    l.useEffect(() => {
                        let e = !h,
                            t = !v || g;
                        if (e && t) return;
                        let a = async () => {
                            n(), E(!0);
                            let e = await P.default.getGuildFromEmojiId(i);
                            p(e), E(!1), _(!0), n()
                        };
                        a()
                    }, [i, v, h, g, n]);
                    let M = !O.viewAndUseEnabled || R;
                    if (M) return null;
                    let j = () => {
                            T(!h)
                        },
                        x = () => {
                            let e = ea.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
                            return (0, a.jsxs)(f.Clickable, {
                                onClick: j,
                                className: el.reactionEmojiDetailsClickable,
                                children: [(0, a.jsx)(f.Text, {
                                    variant: "text-sm/normal",
                                    color: "none",
                                    "aria-label": e,
                                    children: e
                                }), (0, a.jsx)(K.default, {
                                    width: 16,
                                    height: 16,
                                    className: s(el.reactionEmojiDetailsArrow, {
                                        [el.reactionEmojiDetailsArrowCollapsed]: !h
                                    })
                                })]
                            })
                        },
                        U = h && void 0 !== c,
                        b = () => (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: el.reactionEmojiDetailsDivider
                            }), null != y.emojiDescription && y.type !== Z.EmojiPopoutType.UNAVAILABLE && (0, a.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                "aria-label": y.type,
                                children: y.emojiDescription
                            })]
                        });
                    return v ? (0, a.jsxs)("div", {
                        children: [g ? b() : null, m ? (0, a.jsx)(Q.PopoutLoadingAnimation, {
                            className: el.emojiDetailsLoader
                        }) : g && (0, a.jsx)(eh, {
                            emojiId: i,
                            expressionSourceGuild: c,
                            hasJoinedExpressionSourceGuild: R,
                            onClose: o,
                            popoutData: y,
                            packCollectionData: O,
                            currentGuildId: S,
                            nonce: r
                        })]
                    }) : (0, a.jsxs)("div", {
                        children: [U ? b() : x(), m ? (0, a.jsx)(Q.PopoutLoadingAnimation, {
                            className: el.emojiDetailsLoader
                        }) : U && (0, a.jsx)(eh, {
                            emojiId: i,
                            expressionSourceGuild: c,
                            hasJoinedExpressionSourceGuild: R,
                            onClose: o,
                            popoutData: y,
                            packCollectionData: O,
                            currentGuildId: S,
                            nonce: r
                        })]
                    })
                }
        },
        81924: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return m
                }
            }), i("222007");
            var a = i("37983"),
                l = i("884691"),
                n = i("446674"),
                s = i("913144"),
                o = i("206230"),
                r = i("166257"),
                u = i("845579"),
                d = i("15935"),
                c = i("103475"),
                p = i("512306"),
                h = i("941723"),
                f = i("981937"),
                T = i("205591"),
                m = l.memo(function(e) {
                    let {
                        channelId: t,
                        messageId: i,
                        emoji: m,
                        useChatFontScaling: E,
                        color: g,
                        count: _
                    } = e, R = (0, n.useStateFromStores)([d.default], () => d.default.getEffectForEmojiId(t, i, m)), I = E ? T : f, C = l.useMemo(() => (0, h.buildEffect)(m, g, t, {
                        key: R,
                        messageId: i
                    }), [g, R, m, t, i]), [O, v] = l.useState(!1), A = (0, n.useStateFromStores)([o.default], () => o.default.useReducedMotion), S = u.AnimateEmoji.useSetting(), N = l.useCallback(() => {
                        s.default.dispatch({
                            type: "BURST_REACTION_EFFECT_CLEAR",
                            channelId: t,
                            messageId: i,
                            emoji: m
                        })
                    }, [m, t, i]);
                    return (l.useEffect(() => {
                        let e = () => {
                            if (O) return;
                            let e = (0, c.getBurstAnimationHash)("".concat(Date.now()).concat(t).concat(i).concat(m.name)),
                                a = e % 10;
                            (a += _ > 4 ? 4 : _ - 1) > 7 && (v(!0), (0, r.playBurstReaction)({
                                channelId: t,
                                messageId: i,
                                emoji: m,
                                key: d.BurstReactionEffectSource.RANDOM
                            }))
                        };
                        if (O || A && !S || !S) return;
                        e();
                        let a = setInterval(e, 5e3);
                        return () => {
                            clearInterval(a)
                        }
                    }, [S, t, _, m, m.name, O, i, A]), null == R) ? null : (0, a.jsx)(p.default, {
                        className: I.effect,
                        effect: C,
                        onComplete: N
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
                l = i("884691"),
                n = i("77078"),
                s = i("506885"),
                o = i("981601"),
                r = i("42203"),
                u = i("441823");

            function d(e, t, i) {
                var d, c;
                let p = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    h = arguments.length > 4 ? arguments[4] : void 0;
                let f = (d = e, c = t, l.useCallback(e => {
                    let t = r.default.getChannel(c);
                    null != t && null != d && (0, u.openUserContextMenu)(e, d, t)
                }, [d, c]));
                return l.useCallback(r => (u, d) => {
                    let c = (e, t) => (0, l.createElement)(n.NameWithRoleAnchor, {
                            ...null != e ? e : {},
                            key: t,
                            onContextMenu: f,
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
                        preload: () => (0, s.default)(e.id, e.getAvatarURL(i, 80), {
                            guildId: i,
                            channelId: t
                        }),
                        renderPopout: l => (0, a.jsx)(o.default, {
                            ...l,
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
                }, [e, t, i, f, p, h])
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
                l = i("884691"),
                n = i("917351"),
                s = i("65597"),
                o = i("880731"),
                r = i("232268"),
                u = i("759432"),
                d = i("798592"),
                c = i("39141");

            function p(e) {
                let {
                    reactionRef: t,
                    count: i
                } = e, a = l.useRef(i), r = (0, s.default)([o.default], () => o.default.getState()), c = (0, d.default)(), p = (0, u.default)(t);
                return l.useEffect(() => {
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
        85589: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                },
                openBurstReactionsUpsellModal: function() {
                    return T
                }
            });
            var a = i("37983");
            i("884691");
            var l = i("77078"),
                n = i("79112"),
                s = i("154889"),
                o = i("917247"),
                r = i("789946"),
                u = i("646718"),
                d = i("49111"),
                c = i("782340"),
                p = i("61791"),
                h = i("277064");

            function f(e) {
                var t, i;
                let {
                    onClose: l,
                    analyticsSource: f,
                    ...T
                } = e, m = c.default.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
                    onClick: () => {
                        n.default.open(d.UserSettingsSections.PREMIUM), l()
                    }
                }), E = (0, o.usePremiumTrialOffer)(), g = (0, s.usePremiumDiscountOffer)();
                return (0, a.jsx)(r.default, {
                    artURL: h,
                    artContainerClassName: p.artContainer,
                    modalClassName: p.modalContainer,
                    bodyClassName: p.bodyContainer,
                    type: u.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                    title: c.default.Messages.SUPER_REACTIONS_UPSELL_TITLE,
                    body: m,
                    glowUp: m,
                    analyticsSource: f,
                    analyticsLocation: {
                        page: d.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS,
                        object: d.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: l,
                    subscribeButtonText: null != E || null != g ? void 0 : c.default.Messages.PREMIUM_SETTINGS_GET,
                    subscriptionTier: null !== (i = null == E ? void 0 : null === (t = E.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== i ? i : u.PremiumSubscriptionSKUs.TIER_2,
                    backButtonText: c.default.Messages.NO_THANKS,
                    ...T
                })
            }

            function T(e) {
                let {
                    analytics: t
                } = e;
                (0, l.openModalLazy)(async () => {
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
                    return f
                },
                default: function() {
                    return s
                }
            });
            var a, l, n, s, o = i("37983"),
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

            function f(e, t, i) {
                if (null != t) {
                    let a = Math.ceil(Math.log10(e + 1));
                    return null != i && i > 0 ? Math.min(a, i) * t : a * t
                }
            }(a = n || (n = {}))[a.ABOVE = 0] = "ABOVE", a[a.VISIBLE = 1] = "VISIBLE", a[a.BELOW = 2] = "BELOW", (l = class extends r.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        prevValue: i,
                        currValue: a,
                        nextValue: l
                    } = t;
                    return null == i && a !== e.value ? {
                        prevValue: p.default.isFocused() ? a : null,
                        currValue: e.value
                    } : null != l && l !== e.value ? {
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
                        animationSpeed: l
                    } = this.props;
                    this.prevAnimate.setValue(1), null != a ? 0 === a ? (this.currAnimate.setValue(0), i = 2) : 2 === a && (this.currAnimate.setValue(2), i = 0) : e > t ? (this.currAnimate.setValue(0), i = 2) : (this.currAnimate.setValue(2), i = 0), c.default.parallel([c.default.timing(this.prevAnimate, h(i, l)), c.default.timing(this.currAnimate, h(1, l))]).start(this.animateNext)
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
                    return f(e, t, i)
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
                    } = this.props, l = d.omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
                    if (null == e) return (0, o.jsx)("div", {
                        ...l,
                        style: {
                            color: i,
                            minWidth: this.getMinWidth(t)
                        },
                        children: null != a ? a(this.padValue(t)) : this.padValue(t)
                    });
                    let n = Math.max(e, t);
                    return (0, o.jsxs)("div", {
                        ...l,
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
            }).Positions = n, s = l
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