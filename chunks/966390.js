t(47120), t(789020);
var a = t(481060),
    r = t(570140),
    s = t(430742),
    i = t(904245),
    o = t(166459),
    l = t(531643),
    c = t(881052),
    d = t(673750),
    u = t(141795),
    _ = t(476326),
    E = t(680287),
    m = t(163268),
    I = t(539573),
    A = t(786761),
    p = t(3148),
    g = t(48854),
    f = t(785359),
    T = t(79390),
    O = t(623292),
    N = t(807092),
    R = t(467798),
    h = t(703558),
    P = t(117530),
    C = t(630388),
    L = t(226351),
    M = t(981631),
    x = t(689938);
async function S(e) {
    var n, t, a;
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
    null != G && (y.content = null == G ? void 0 : G.content), null != N.Z.getPendingReply(_) && ((y.type = M.uaV.REPLY), (y.message_reference = Z.messageReference), (y.allowed_mentions = Z.allowedMentions), (0, O.A6)(_));
    let [w, k] = (0, R.Z)(y.content);
    w && ((y.content = k), (y.flags = (0, C.pj)(null !== (n = y.flags) && void 0 !== n ? n : 0, M.iLy.SUPPRESS_NOTIFICATIONS)));
    let U = null !== (t = Z.nonce) && void 0 !== t ? t : (0, g.r)(),
        F = (0, p.ZP)({
            channelId: _,
            content: y.content,
            tts: null !== (a = null == G ? void 0 : G.tts) && void 0 !== a && a,
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
                ...F,
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
        j.on('error', (e, n, t, a) => {
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
                    errorMessage: null == a ? void 0 : a.msg
                }),
                n === M.evJ.EXPLICIT_CONTENT)
            ) {
                i.Z.sendExplicitMediaClydeError(_, null == t ? void 0 : t.attachments, m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (n === M.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: n,
                        message: null == t ? void 0 : t.message
                    },
                    a =
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
                    help: (0, I.uF)(a, e)
                });
                return;
            }
            if (n !== M.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (b)
                    D.reject(
                        new c.Hx(
                            {
                                status: n,
                                body: null != t ? t : {}
                            },
                            n
                        )
                    );
                else {
                    var E;
                    (0, l.openUploadError)({
                        title: x.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: null !== (E = null == t ? void 0 : t.message) && void 0 !== E ? E : x.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
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
        let { channelId: n, files: t, draftType: a, isThumbnail: r = !1, filesMetadata: s = [] } = e,
            i = Array.from(t).map((e, t) => {
                let a = null != s ? s[t] : {};
                return new u.n(
                    {
                        file: e,
                        platform: _.ow.WEB,
                        isThumbnail: r,
                        ...a
                    },
                    n
                );
            });
        S({
            channelId: n,
            uploads: i,
            draftType: a
        });
    },
    upload: function e(n) {
        let { channelId: t, file: o, draftType: c, message: d, hasSpoiler: u, filename: _ } = n,
            I = {
                content: '',
                tts: !1,
                hasSpoiler: u,
                filename: _
            };
        if (null != d) {
            (I.content = d.content), (I.tts = d.tts), (I.channel_id = d.channel_id);
            let e = N.Z.getPendingReply(t);
            if (null != e) {
                let n = i.Z.getSendMessageOptionsForReply(e);
                (I.type = M.uaV.REPLY), (I.message_reference = n.messageReference), (I.allowed_mentions = n.allowedMentions), (0, O.A6)(t);
            }
        }
        let A = new E.Z(M.ANM.MESSAGES(t));
        A.on('start', (e) => {
            r.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: t,
                file: e,
                uploader: A
            });
        }),
            A.on('progress', (e) => {
                r.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: t,
                    file: e
                });
            }),
            A.on('error', (n, u, _) => {
                if (
                    (r.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: t,
                        file: n
                    }),
                    (0, f.x)({
                        fileItems: n.items,
                        failureCode: u
                    }),
                    u === M.evJ.EXPLICIT_CONTENT)
                ) {
                    i.Z.sendExplicitMediaClydeError(t, null == _ ? void 0 : _.attachments, m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, l.openUploadError)({
                    title: x.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: x.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                        onClick: () => {
                            (0, a.closeModal)(l.UPLOAD_ERROR_MODAL_KEY),
                                e({
                                    channelId: t,
                                    file: o,
                                    draftType: c,
                                    message: d
                                });
                        }
                    })
                }),
                    '' !== I.content && '' === h.Z.getDraft(t, c) && s.Z.saveDraft(t, I.content, c);
            }),
            A.on('complete', (e) => {
                r.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: t,
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
