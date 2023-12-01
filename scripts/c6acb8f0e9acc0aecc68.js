(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82329"], {
        7115: function(e, t, a) {
            "use strict";
            e.exports = a.p + "939a6d418697a2811ab8.png"
        },
        783480: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return D
                }
            }), a("222007"), a("702976");
            var l = a("77078"),
                n = a("913144"),
                s = a("295426"),
                r = a("819689"),
                o = a("81594"),
                i = a("336522"),
                d = a("979911"),
                u = a("282928"),
                _ = a("966724"),
                f = a("681736"),
                E = a("600798"),
                p = a("692038"),
                c = a("815297"),
                A = a("168730"),
                g = a("562228"),
                L = a("529805"),
                T = a("685841"),
                h = a("804888"),
                m = a("474643"),
                M = a("585722"),
                O = a("568734"),
                P = a("49111"),
                U = a("782340");

            function y(e) {
                var t, a, l;
                let u, {
                        channelId: _,
                        uploads: y,
                        draftType: D,
                        parsedMessage: R,
                        options: S = {}
                    } = e,
                    I = new f.default(P.Endpoints.MESSAGES(_)),
                    C = {
                        content: "",
                        nonce: "",
                        channel_id: _,
                        type: P.MessageTypes.DEFAULT,
                        sticker_ids: null == S ? void 0 : S.stickerIds,
                        poll: null == S ? void 0 : S.poll
                    };
                null != R && (C.content = null == R ? void 0 : R.content);
                let G = T.default.getPendingReply(_);
                null != G && (C.type = P.MessageTypes.REPLY, C.message_reference = S.messageReference, C.allowed_mentions = S.allowedMentions, (0, L.deletePendingReply)(_));
                let [v, N] = (0, h.default)(C.content);
                v && (C.content = N, C.flags = (0, O.addFlag)(null !== (t = C.flags) && void 0 !== t ? t : 0, P.MessageFlags.SUPPRESS_NOTIFICATIONS));
                let F = null !== (a = S.nonce) && void 0 !== a ? a : (0, c.createNonce)(),
                    w = (0, c.default)({
                        channelId: _,
                        content: C.content,
                        tts: null !== (l = null == R ? void 0 : R.tts) && void 0 !== l && l,
                        type: C.type,
                        messageReference: C.message_reference,
                        flags: C.flags,
                        nonce: F,
                        poll: (0, g.createPollServerDataFromCreateRequest)(S.poll)
                    });
                C.nonce = F, I.on("start", e => {
                    u = (0, p.createMessageRecord)({
                        ...w,
                        id: e.id
                    }), n.default.dispatch({
                        type: "UPLOAD_START",
                        channelId: _,
                        file: e,
                        message: u,
                        uploader: I
                    })
                }), I.on("progress", e => {
                    n.default.dispatch({
                        type: "UPLOAD_PROGRESS",
                        channelId: _,
                        file: e
                    })
                });
                I.on("error", (e, t, a, l) => {
                    if (n.default.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: _,
                            file: e,
                            messageRecord: u
                        }), (0, A.logMessageSendFailure)({
                            fileItems: e.items,
                            failureCode: t,
                            errorMessage: null == l ? void 0 : l.msg
                        }), t === P.AbortCodes.EXPLICIT_CONTENT) {
                        r.default.sendClydeError(_, t);
                        return
                    }
                    if (t === P.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
                        let e = {
                                code: t,
                                message: null == a ? void 0 : a.message
                            },
                            l = null == u ? null : {
                                type: d.MessageDataType.SEND,
                                message: {
                                    ...u,
                                    channelId: _
                                }
                            };
                        (0, i.openUploadError)({
                            title: U.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: (0, E.getAutomodErrorMessage)(l, e)
                        });
                        return
                    }
                    t !== P.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && ((0, i.openUploadError)({
                        title: U.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: U.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                    }), "" !== C.content && "" === m.default.getDraft(_, D) && s.default.saveDraft(_, C.content, D), 0 === M.default.getUploadCount(_, D) && o.default.setUploads({
                        channelId: _,
                        uploads: y,
                        draftType: D
                    }))
                }), I.on("complete", e => {
                    n.default.dispatch({
                        type: "UPLOAD_COMPLETE",
                        channelId: _,
                        file: e,
                        aborted: I._aborted
                    })
                }), I.uploadFiles(y, C)
            }
            var D = {
                instantBatchUpload: function(e) {
                    let {
                        channelId: t,
                        files: a,
                        draftType: l,
                        isThumbnail: n = !1,
                        filesMetadata: s = []
                    } = e, r = Array.from(a).map((e, a) => {
                        let l = null != s ? s[a] : {};
                        return new u.CloudUpload({
                            file: e,
                            platform: _.UploadPlatform.WEB,
                            isThumbnail: n,
                            ...l
                        }, t)
                    });
                    y({
                        channelId: t,
                        uploads: r,
                        draftType: l
                    })
                },
                upload: function e(t) {
                    let {
                        channelId: a,
                        file: o,
                        draftType: d,
                        message: u,
                        hasSpoiler: _,
                        filename: E
                    } = t, p = {
                        content: "",
                        tts: !1,
                        hasSpoiler: _,
                        filename: E
                    };
                    if (null != u) {
                        p.content = u.content, p.tts = u.tts, p.channel_id = u.channel_id;
                        let e = T.default.getPendingReply(a);
                        if (null != e) {
                            let t = r.default.getSendMessageOptionsForReply(e);
                            p.type = P.MessageTypes.REPLY, p.message_reference = t.messageReference, p.allowed_mentions = t.allowedMentions, (0, L.deletePendingReply)(a)
                        }
                    }
                    let c = new f.default(P.Endpoints.MESSAGES(a));
                    c.on("start", e => {
                        n.default.dispatch({
                            type: "UPLOAD_START",
                            channelId: a,
                            file: e,
                            uploader: c
                        })
                    }), c.on("progress", e => {
                        n.default.dispatch({
                            type: "UPLOAD_PROGRESS",
                            channelId: a,
                            file: e
                        })
                    }), c.on("error", (t, _) => {
                        if (n.default.dispatch({
                                type: "UPLOAD_FAIL",
                                channelId: a,
                                file: t
                            }), (0, A.logMessageSendFailure)({
                                fileItems: t.items,
                                failureCode: _
                            }), _ === P.AbortCodes.EXPLICIT_CONTENT) {
                            r.default.sendClydeError(a, _);
                            return
                        }(0, i.openUploadError)({
                            title: U.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: U.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                                onClick: () => {
                                    (0, l.closeModal)(i.UPLOAD_ERROR_MODAL_KEY), e({
                                        channelId: a,
                                        file: o,
                                        draftType: d,
                                        message: u
                                    })
                                }
                            })
                        }), "" !== p.content && "" === m.default.getDraft(a, d) && s.default.saveDraft(a, p.content, d)
                    }), c.on("complete", e => {
                        n.default.dispatch({
                            type: "UPLOAD_COMPLETE",
                            channelId: a,
                            file: e
                        })
                    }), c.upload(o, p)
                },
                uploadFiles: y,
                cancel(e) {
                    if (n.default.dispatch({
                            type: "UPLOAD_CANCEL_REQUEST",
                            file: e
                        }), null != e.draftContent && null != e.channelId) {
                        let t = m.default.getDraft(e.channelId, m.DraftType.ChannelMessage);
                        "" === t && n.default.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: m.DraftType.ChannelMessage
                        })
                    }
                }
            }
        },
        681736: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            }), a("424973");
            var l, n = a("872717"),
                s = a("448993"),
                r = a("981112"),
                o = a("966724"),
                i = a("980134"),
                d = a("782340");
            l = class extends r.default {
                async uploadFiles(e, t) {
                    let {
                        addFilesTo: a
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    super.upload({
                        name: d.default.Messages.ATTACHMENT_PROCESSING
                    }, t, e);
                    let l = new AbortController;
                    try {
                        if (this.files = e, this._aborted) return;
                        if (this._handleStart(() => l.abort()), !await this.compressAndCheckFileSize()) return;
                        this.setUploadingTextForUI(), await (0, r.stageAttachmentFiles)(this.files, !0, this._recomputeProgress.bind(this))
                    } catch (e) {
                        this._handleException(e)
                    }
                    try {
                        return await this._createMessage(l.signal, t, a)
                    } catch (e) {
                        if (this._raiseEndpointErrors) throw e;
                        this._handleException(e)
                    }
                }
                async _createMessage(e, t, a) {
                    let l;
                    let r = [];
                    this.files.forEach((e, t) => {
                        let a = (0, i.getAttachmentPayload)(e, t);
                        e.item.platform === o.UploadPlatform.WEB && r.push({
                            ...a
                        })
                    }), l = null != a && null != t ? this._addAttachmentsToPayload(t, a, r) : {
                        ...t,
                        attachments: r
                    };
                    let d = {
                            url: this._url,
                            body: l,
                            signal: e
                        },
                        u = "POST" === this._method ? n.default.post : n.default.patch;
                    try {
                        let e = await u(d);
                        return this._handleComplete(e.body), e.body
                    } catch (e) {
                        var _;
                        if (this._raiseEndpointErrors) throw new s.APIError(e);
                        this._handleError({
                            code: null == e ? void 0 : null === (_ = e.body) || void 0 === _ ? void 0 : _.code,
                            body: null == e ? void 0 : e.body
                        })
                    }
                }
                constructor(e, t = "POST", a) {
                    super(e, t, a)
                }
            }
        },
        571034: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("474643"),
                s = a("254490"),
                r = a("412861"),
                o = a("626301"),
                i = a("789946"),
                d = a("646718"),
                u = a("49111"),
                _ = a("782340");

            function f(e) {
                var t;
                let {
                    channel: f,
                    onClose: E,
                    content: p,
                    ...c
                } = e;

                function A() {
                    E(), (0, o.navigateToPremiumMarketingPage)(!0)
                }
                return (0, l.jsx)(i.default, {
                    artURL: a("7115"),
                    type: d.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL,
                    title: _.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
                    body: _.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format({
                        maxLength: u.MAX_MESSAGE_LENGTH,
                        onLearnMore: A
                    }),
                    context: _.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({
                        maxLength: u.MAX_MESSAGE_LENGTH
                    }),
                    glowUp: _.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({
                        onLearnMore: A
                    }),
                    analyticsSource: {
                        page: (null == (t = f) ? void 0 : t.getGuildId()) != null ? u.AnalyticsPages.GUILD_CHANNEL : (null == t ? void 0 : t.isGroupDM()) || (null == t ? void 0 : t.isPrivate()) ? u.AnalyticsPages.DM_CHANNEL : null
                    },
                    analyticsLocation: {
                        section: u.AnalyticsSections.MESSAGE_LENGTH_UPSELL_MODAL,
                        object: u.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: E,
                    secondaryCTA: _.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
                    onSecondaryClick: function() {
                        E();
                        let e = new Blob([p], {
                            type: "text/plain"
                        });
                        (0, r.promptToUpload)([(0, s.makeFile)(e, "message.txt")], f, n.DraftType.ChannelMessage, {
                            requireConfirm: !0,
                            showLargeMessageDialog: !0
                        })
                    },
                    ...c
                })
            }
        },
        412861: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                showUploadFileSizeExceededError: function() {
                    return h
                },
                promptToUpload: function() {
                    return m
                }
            }), a("424973"), a("222007"), a("70102");
            var l = a("255397"),
                n = a("81594"),
                s = a("783480"),
                r = a("336522"),
                o = a("966724"),
                i = a("716241"),
                d = a("191145"),
                u = a("585722"),
                _ = a("697218"),
                f = a("599110"),
                E = a("254490"),
                p = a("719923"),
                c = a("834021"),
                A = a("49111"),
                g = a("894488"),
                L = a("646718"),
                T = a("782340");

            function h(e, t) {
                let a = _.default.getCurrentUser(),
                    l = e.getGuildId(),
                    n = E.maxFileSize(l),
                    s = [],
                    o = 0,
                    d = 0,
                    u = 0,
                    f = [];
                for (let e of t) u += 1, o += e.size, s.push(e.size), e.size > d && (d = e.size), null != e.type ? f.push(e.type) : f.push("unknown");
                if (d > n) {
                    (0, i.trackWithMetadata)(A.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
                        channel_id: e.id,
                        guild_id: l,
                        user_individual_file_size_limit: n,
                        pre_compression_file_sizes: s,
                        pre_compression_aggregate_file_size: o,
                        num_attachments: u,
                        error_type: g.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                        attachment_mimetypes: f
                    }), (0, r.openUploadError)({
                        title: T.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                        help: (0, c.getErrorHelp)(a, l),
                        showPremiumUpsell: !(0, p.isPremiumExactly)(a, L.PremiumTypes.TIER_2),
                        fileSize: d
                    });
                    return
                }(0, r.openUploadError)({
                    title: T.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: T.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
                        maxSize: E.sizeString(E.getMaxRequestSize())
                    })
                })
            }

            function m(e, t, a) {
                let {
                    filesMetadata: i,
                    requireConfirm: _ = !0,
                    showLargeMessageDialog: E = !1,
                    isThumbnail: p = !1
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (e.length < 1) return;
                if (null != i && i.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
                let g = t.getGuildId();
                if ((0, c.filesExceedUploadLimits)(e, g)) {
                    h(t, e);
                    return
                }
                if (u.default.getUploadCount(t.id, a) + e.length > A.MAX_UPLOAD_COUNT) {
                    (0, r.openUploadError)({
                        title: T.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                        help: T.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                            limit: A.MAX_UPLOAD_COUNT
                        })
                    }), f.default.track(A.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
                        existing_count: u.default.getUploadCount(t.id, a),
                        new_count: e.length
                    });
                    return
                }
                if ((t.type === A.ChannelTypes.GUILD_VOICE || t.type === A.ChannelTypes.GUILD_STAGE_VOICE) && !d.default.getChatOpen(t.id) && l.default.updateChatOpen(t.id, !0), _) {
                    let l = Array.from(e).map((e, t) => ({
                        file: e,
                        platform: o.UploadPlatform.WEB,
                        isThumbnail: p,
                        ...null == i ? void 0 : i[t]
                    }));
                    n.default.addFiles({
                        files: l,
                        channelId: t.id,
                        showLargeMessageDialog: E,
                        draftType: a
                    })
                } else s.default.instantBatchUpload({
                    channelId: t.id,
                    files: e,
                    draftType: a,
                    isThumbnail: p,
                    filesMetadata: i
                })
            }
        },
        834021: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getErrorHelp: function() {
                    return i
                },
                filesExceedUploadLimits: function() {
                    return d
                },
                getWebUploadFiles: function() {
                    return u
                }
            }), a("808653"), a("424973");
            var l = a("966724"),
                n = a("254490"),
                s = a("719923"),
                r = a("646718"),
                o = a("782340");

            function i(e, t) {
                let a = n.sizeString(n.maxFileSize(t));
                return s.default.isPremium(e, r.PremiumTypes.TIER_2) ? o.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: a
                }) : s.default.isPremium(e, r.PremiumTypes.TIER_1) ? o.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
                    maxSize: a
                }) : o.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: a
                })
            }

            function d(e, t) {
                return n.anyFileTooLarge(e, t) || n.uploadSumTooLarge(e)
            }

            function u(e) {
                return e.reduce((e, t) => (t.item.platform === l.UploadPlatform.WEB && e.push(t.item.file), e), [])
            }
        }
    }
]);