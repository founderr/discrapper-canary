n(47120), n(789020);
var a = n(481060),
    r = n(570140),
    s = n(430742),
    i = n(904245),
    o = n(166459),
    l = n(531643),
    c = n(881052),
    d = n(673750),
    u = n(141795),
    _ = n(476326),
    E = n(680287),
    m = n(163268),
    I = n(539573),
    A = n(786761),
    p = n(3148),
    g = n(48854),
    f = n(785359),
    T = n(79390),
    O = n(623292),
    N = n(807092),
    R = n(467798),
    P = n(703558),
    h = n(117530),
    C = n(630388),
    L = n(226351),
    M = n(981631),
    S = n(689938);
async function x(e) {
    var t, n, a;
    let u,
        { channelId: _, uploads: x, draftType: v, parsedMessage: G, options: Z = {}, raiseEndpointErrors: b = !1 } = e,
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
    w && ((y.content = k), (y.flags = (0, C.pj)(null !== (t = y.flags) && void 0 !== t ? t : 0, M.iLy.SUPPRESS_NOTIFICATIONS)));
    let U = null !== (n = Z.nonce) && void 0 !== n ? n : (0, g.r)(),
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
        j.on('error', (e, t, n, a) => {
            if (
                (r.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: _,
                    file: e,
                    messageRecord: u
                }),
                (0, f.x)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == a ? void 0 : a.msg
                }),
                t === M.evJ.EXPLICIT_CONTENT)
            ) {
                i.Z.sendExplicitMediaClydeError(_, null == n ? void 0 : n.attachments, m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (t === M.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
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
                    title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: (0, I.uF)(a, e)
                });
                return;
            }
            if (t !== M.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (b)
                    D.reject(
                        new c.Hx(
                            {
                                status: t,
                                body: null != n ? n : {}
                            },
                            t
                        )
                    );
                else {
                    var E;
                    (0, l.openUploadError)({
                        title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: null !== (E = null == n ? void 0 : n.message) && void 0 !== E ? E : S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                    });
                }
                '' !== y.content && '' === P.Z.getDraft(_, v) && s.Z.saveDraft(_, y.content, v),
                    0 === h.Z.getUploadCount(_, v) &&
                        o.Z.setUploads({
                            channelId: _,
                            uploads: x,
                            draftType: v
                        });
            }
        }),
        j.on('complete', (e, t) => {
            r.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: _,
                file: e,
                aborted: j._aborted,
                messageRecord: t
            });
        }),
        await j.uploadFiles(x, y),
        D.resolve(),
        D.promise
    );
}
t.Z = {
    instantBatchUpload: function (e) {
        let { channelId: t, files: n, draftType: a, isThumbnail: r = !1, filesMetadata: s = [] } = e,
            i = Array.from(n).map((e, n) => {
                let a = null != s ? s[n] : {};
                return new u.n(
                    {
                        file: e,
                        platform: _.ow.WEB,
                        isThumbnail: r,
                        ...a
                    },
                    t
                );
            });
        x({
            channelId: t,
            uploads: i,
            draftType: a
        });
    },
    upload: function e(t) {
        let { channelId: n, file: o, draftType: c, message: d, hasSpoiler: u, filename: _ } = t,
            I = {
                content: '',
                tts: !1,
                hasSpoiler: u,
                filename: _
            };
        if (null != d) {
            (I.content = d.content), (I.tts = d.tts), (I.channel_id = d.channel_id);
            let e = N.Z.getPendingReply(n);
            if (null != e) {
                let t = i.Z.getSendMessageOptionsForReply(e);
                (I.type = M.uaV.REPLY), (I.message_reference = t.messageReference), (I.allowed_mentions = t.allowedMentions), (0, O.A6)(n);
            }
        }
        let A = new E.Z(M.ANM.MESSAGES(n));
        A.on('start', (e) => {
            r.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: n,
                file: e,
                uploader: A
            });
        }),
            A.on('progress', (e) => {
                r.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: n,
                    file: e
                });
            }),
            A.on('error', (t, u, _) => {
                if (
                    (r.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: n,
                        file: t
                    }),
                    (0, f.x)({
                        fileItems: t.items,
                        failureCode: u
                    }),
                    u === M.evJ.EXPLICIT_CONTENT)
                ) {
                    i.Z.sendExplicitMediaClydeError(n, null == _ ? void 0 : _.attachments, m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, l.openUploadError)({
                    title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                        onClick: () => {
                            (0, a.closeModal)(l.UPLOAD_ERROR_MODAL_KEY),
                                e({
                                    channelId: n,
                                    file: o,
                                    draftType: c,
                                    message: d
                                });
                        }
                    })
                }),
                    '' !== I.content && '' === P.Z.getDraft(n, c) && s.Z.saveDraft(n, I.content, c);
            }),
            A.on('complete', (e) => {
                r.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: n,
                    file: e
                });
            }),
            A.upload(o, I);
    },
    uploadFiles: x,
    cancel(e) {
        r.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: e
        }),
            null != e.draftContent &&
                null != e.channelId &&
                '' === P.Z.getDraft(e.channelId, P.d.ChannelMessage) &&
                r.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: P.d.ChannelMessage
                });
    }
};
