a(47120), a(789020);
var t = a(481060),
    r = a(570140),
    s = a(430742),
    i = a(904245),
    o = a(166459),
    l = a(531643),
    c = a(881052),
    d = a(673750),
    u = a(141795),
    _ = a(476326),
    E = a(680287),
    m = a(163268),
    I = a(539573),
    A = a(786761),
    p = a(3148),
    g = a(48854),
    f = a(785359),
    T = a(79390),
    O = a(623292),
    R = a(807092),
    N = a(467798),
    h = a(703558),
    P = a(117530),
    C = a(630388),
    L = a(226351),
    M = a(981631),
    x = a(689938);
async function S(e) {
    var n, a, t;
    let u,
        { channelId: _, uploads: S, draftType: v, parsedMessage: G, options: Z = {}, raiseEndpointErrors: b = !1 } = e,
        j = new E.Z(M.ANM.MESSAGES(_)),
        D = new L.o(),
        y = {
            content: '',
            nonce: '',
            channel_id: _,
            type: M.uaV.DEFAULT,
            sticker_ids: null == Z ? void 0 : Z.stickerIds,
            poll: null == Z ? void 0 : Z.poll
        };
    null != G && (y.content = null == G ? void 0 : G.content), null != R.Z.getPendingReply(_) && ((y.type = M.uaV.REPLY), (y.message_reference = Z.messageReference), (y.allowed_mentions = Z.allowedMentions), (0, O.A6)(_));
    let [w, k] = (0, N.Z)(y.content);
    w && ((y.content = k), (y.flags = (0, C.pj)(null !== (n = y.flags) && void 0 !== n ? n : 0, M.iLy.SUPPRESS_NOTIFICATIONS)));
    let U = null !== (a = Z.nonce) && void 0 !== a ? a : (0, g.r)(),
        K = (0, p.ZP)({
            channelId: _,
            content: y.content,
            tts: null !== (t = null == G ? void 0 : G.tts) && void 0 !== t && t,
            type: y.type,
            messageReference: y.message_reference,
            flags: y.flags,
            nonce: U,
            poll: (0, T.x9)(Z.poll)
        });
    return (
        ((y.nonce = U),
        j.on('start', (e) => {
            (u = (0, A.e5)({
                ...K,
                id: e.id
            })),
                r.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: _,
                    file: e,
                    message: u,
                    uploader: j
                });
        }),
        j.on('progress', (e) => {
            r.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: _,
                file: e
            });
        })),
        j.on('error', (e, n, a, t) => {
            if (
                (r.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: _,
                    file: e,
                    messageRecord: u
                }),
                (0, f.x)({
                    fileItems: e.items,
                    failureCode: n,
                    errorMessage: null == t ? void 0 : t.msg
                }),
                n === M.evJ.EXPLICIT_CONTENT)
            ) {
                i.Z.sendExplicitMediaClydeError(_, null == a ? void 0 : a.attachments, m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (n === M.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: n,
                        message: null == a ? void 0 : a.message
                    },
                    t =
                        null == u
                            ? null
                            : {
                                  type: d.$V.SEND,
                                  message: {
                                      ...u,
                                      channelId: _
                                  }
                              };
                (0, l.openUploadError)({
                    title: x.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: (0, I.uF)(t, e)
                });
                return;
            }
            if (n !== M.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (b)
                    D.reject(
                        new c.Hx(
                            {
                                status: n,
                                body: null != a ? a : {}
                            },
                            n
                        )
                    );
                else {
                    var E;
                    (0, l.openUploadError)({
                        title: x.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: null !== (E = null == a ? void 0 : a.message) && void 0 !== E ? E : x.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                    });
                }
                '' !== y.content && '' === h.Z.getDraft(_, v) && s.Z.saveDraft(_, y.content, v),
                    0 === P.Z.getUploadCount(_, v) &&
                        o.Z.setUploads({
                            channelId: _,
                            uploads: S,
                            draftType: v
                        });
            }
        }),
        j.on('complete', (e, n) => {
            r.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: _,
                file: e,
                aborted: j._aborted,
                messageRecord: n
            });
        }),
        await j.uploadFiles(S, y),
        D.resolve(),
        D.promise
    );
}
n.Z = {
    instantBatchUpload: function (e) {
        let { channelId: n, files: a, draftType: t, isThumbnail: r = !1, filesMetadata: s = [] } = e,
            i = Array.from(a).map((e, a) => {
                let t = null != s ? s[a] : {};
                return new u.n(
                    {
                        file: e,
                        platform: _.ow.WEB,
                        isThumbnail: r,
                        ...t
                    },
                    n
                );
            });
        S({
            channelId: n,
            uploads: i,
            draftType: t
        });
    },
    upload: function e(n) {
        let { channelId: a, file: o, draftType: c, message: d, hasSpoiler: u, filename: _ } = n,
            I = {
                content: '',
                tts: !1,
                hasSpoiler: u,
                filename: _
            };
        if (null != d) {
            (I.content = d.content), (I.tts = d.tts), (I.channel_id = d.channel_id);
            let e = R.Z.getPendingReply(a);
            if (null != e) {
                let n = i.Z.getSendMessageOptionsForReply(e);
                (I.type = M.uaV.REPLY), (I.message_reference = n.messageReference), (I.allowed_mentions = n.allowedMentions), (0, O.A6)(a);
            }
        }
        let A = new E.Z(M.ANM.MESSAGES(a));
        A.on('start', (e) => {
            r.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: a,
                file: e,
                uploader: A
            });
        }),
            A.on('progress', (e) => {
                r.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: a,
                    file: e
                });
            }),
            A.on('error', (n, u, _) => {
                if (
                    (r.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: a,
                        file: n
                    }),
                    (0, f.x)({
                        fileItems: n.items,
                        failureCode: u
                    }),
                    u === M.evJ.EXPLICIT_CONTENT)
                ) {
                    i.Z.sendExplicitMediaClydeError(a, null == _ ? void 0 : _.attachments, m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, l.openUploadError)({
                    title: x.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: x.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                        onClick: () => {
                            (0, t.closeModal)(l.UPLOAD_ERROR_MODAL_KEY),
                                e({
                                    channelId: a,
                                    file: o,
                                    draftType: c,
                                    message: d
                                });
                        }
                    })
                }),
                    '' !== I.content && '' === h.Z.getDraft(a, c) && s.Z.saveDraft(a, I.content, c);
            }),
            A.on('complete', (e) => {
                r.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: a,
                    file: e
                });
            }),
            A.upload(o, I);
    },
    uploadFiles: S,
    cancel(e) {
        r.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: e
        }),
            null != e.draftContent &&
                null != e.channelId &&
                '' === h.Z.getDraft(e.channelId, h.d.ChannelMessage) &&
                r.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: h.d.ChannelMessage
                });
    }
};
