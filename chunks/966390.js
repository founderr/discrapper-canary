t(47120), t(789020);
var a = t(481060),
    r = t(570140),
    s = t(430742),
    o = t(904245),
    i = t(166459),
    l = t(531643),
    c = t(881052),
    d = t(673750),
    u = t(141795),
    _ = t(476326),
    E = t(680287),
    I = t(163268),
    A = t(539573),
    p = t(786761),
    m = t(3148),
    T = t(48854),
    O = t(785359),
    g = t(79390),
    R = t(623292),
    N = t(807092),
    P = t(467798),
    h = t(703558),
    f = t(117530),
    C = t(630388),
    L = t(226351),
    M = t(981631),
    S = t(689938);
async function v(e) {
    var n, t, a;
    let u,
        { channelId: _, uploads: v, draftType: x, parsedMessage: G, options: Z = {}, raiseEndpointErrors: j = !1 } = e,
        b = new E.Z(M.ANM.MESSAGES(_)),
        D = new L.o(),
        y = {
            content: '',
            nonce: '',
            channel_id: _,
            type: M.uaV.DEFAULT,
            sticker_ids: null == Z ? void 0 : Z.stickerIds,
            poll: null == Z ? void 0 : Z.poll
        };
    null != G && (y.content = null == G ? void 0 : G.content), null != N.Z.getPendingReply(_) && ((y.type = M.uaV.REPLY), (y.message_reference = Z.messageReference), (y.allowed_mentions = Z.allowedMentions), (0, R.A6)(_));
    let [U, w] = (0, P.Z)(y.content);
    U && ((y.content = w), (y.flags = (0, C.pj)(null !== (n = y.flags) && void 0 !== n ? n : 0, M.iLy.SUPPRESS_NOTIFICATIONS)));
    let F = null !== (t = Z.nonce) && void 0 !== t ? t : (0, T.r)(),
        K = (0, m.ZP)({
            channelId: _,
            content: y.content,
            tts: null !== (a = null == G ? void 0 : G.tts) && void 0 !== a && a,
            type: y.type,
            messageReference: y.message_reference,
            flags: y.flags,
            nonce: F,
            poll: (0, g.x9)(Z.poll)
        });
    return (
        ((y.nonce = F),
        b.on('start', (e) => {
            (u = (0, p.e5)({
                ...K,
                id: e.id
            })),
                r.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: _,
                    file: e,
                    message: u,
                    uploader: b
                });
        }),
        b.on('progress', (e) => {
            r.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: _,
                file: e
            });
        })),
        b.on('error', (e, n, t, a) => {
            if (
                (r.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: _,
                    file: e,
                    messageRecord: u
                }),
                (0, O.x)({
                    fileItems: e.items,
                    failureCode: n,
                    errorMessage: null == a ? void 0 : a.msg
                }),
                n === M.evJ.EXPLICIT_CONTENT)
            ) {
                o.Z.sendExplicitMediaClydeError(_, null == t ? void 0 : t.attachments, I.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
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
                    title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: (0, A.uF)(a, e)
                });
                return;
            }
            if (n !== M.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (j)
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
                        title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: null !== (E = null == t ? void 0 : t.message) && void 0 !== E ? E : S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                    });
                }
                '' !== y.content && '' === h.Z.getDraft(_, x) && s.Z.saveDraft(_, y.content, x),
                    0 === f.Z.getUploadCount(_, x) &&
                        i.Z.setUploads({
                            channelId: _,
                            uploads: v,
                            draftType: x
                        });
            }
        }),
        b.on('complete', (e, n) => {
            r.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: _,
                file: e,
                aborted: b._aborted,
                messageRecord: n
            });
        }),
        await b.uploadFiles(v, y),
        D.resolve(),
        D.promise
    );
}
n.Z = {
    instantBatchUpload: function (e) {
        let { channelId: n, files: t, draftType: a, isThumbnail: r = !1, filesMetadata: s = [] } = e,
            o = Array.from(t).map((e, t) => {
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
        v({
            channelId: n,
            uploads: o,
            draftType: a
        });
    },
    upload: function e(n) {
        let { channelId: t, file: i, draftType: c, message: d, hasSpoiler: u, filename: _ } = n,
            A = {
                content: '',
                tts: !1,
                hasSpoiler: u,
                filename: _
            };
        if (null != d) {
            (A.content = d.content), (A.tts = d.tts), (A.channel_id = d.channel_id);
            let e = N.Z.getPendingReply(t);
            if (null != e) {
                let n = o.Z.getSendMessageOptionsForReply(e);
                (A.type = M.uaV.REPLY), (A.message_reference = n.messageReference), (A.allowed_mentions = n.allowedMentions), (0, R.A6)(t);
            }
        }
        let p = new E.Z(M.ANM.MESSAGES(t));
        p.on('start', (e) => {
            r.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: t,
                file: e,
                uploader: p
            });
        }),
            p.on('progress', (e) => {
                r.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: t,
                    file: e
                });
            }),
            p.on('error', (n, u, _) => {
                if (
                    (r.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: t,
                        file: n
                    }),
                    (0, O.x)({
                        fileItems: n.items,
                        failureCode: u
                    }),
                    u === M.evJ.EXPLICIT_CONTENT)
                ) {
                    o.Z.sendExplicitMediaClydeError(t, null == _ ? void 0 : _.attachments, I.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, l.openUploadError)({
                    title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                        onClick: () => {
                            (0, a.closeModal)(l.UPLOAD_ERROR_MODAL_KEY),
                                e({
                                    channelId: t,
                                    file: i,
                                    draftType: c,
                                    message: d
                                });
                        }
                    })
                }),
                    '' !== A.content && '' === h.Z.getDraft(t, c) && s.Z.saveDraft(t, A.content, c);
            }),
            p.on('complete', (e) => {
                r.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: t,
                    file: e
                });
            }),
            p.upload(i, A);
    },
    uploadFiles: v,
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
