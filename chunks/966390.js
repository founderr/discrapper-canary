n(47120), n(789020);
var r = n(481060),
    i = n(570140),
    l = n(430742),
    a = n(904245),
    o = n(166459),
    u = n(531643),
    s = n(881052),
    c = n(673750),
    d = n(141795),
    f = n(476326),
    h = n(680287),
    p = n(247206),
    _ = n(539573),
    E = n(786761),
    g = n(3148),
    m = n(48854),
    C = n(785359),
    A = n(79390),
    N = n(623292),
    I = n(807092),
    T = n(467798),
    v = n(703558),
    O = n(117530),
    R = n(630388),
    S = n(226351),
    P = n(981631),
    L = n(388032);
async function Z(t) {
    var e, n, r;
    let d,
        { channelId: f, uploads: Z, draftType: y, parsedMessage: D, options: b = {}, raiseEndpointErrors: U = !1 } = t,
        M = new h.Z(P.ANM.MESSAGES(f)),
        G = new S.o(),
        w = {
            content: '',
            nonce: '',
            channel_id: f,
            type: P.uaV.DEFAULT,
            sticker_ids: null == b ? void 0 : b.stickerIds,
            poll: null == b ? void 0 : b.poll
        };
    null != D && (w.content = null == D ? void 0 : D.content), null != I.Z.getPendingReply(f) && ((w.type = P.uaV.REPLY), (w.message_reference = b.messageReference), (w.allowed_mentions = b.allowedMentions), (0, N.A6)(f));
    let [k, V] = (0, T.Z)(w.content);
    k && ((w.content = V), (w.flags = (0, R.pj)(null !== (e = w.flags) && void 0 !== e ? e : 0, P.iLy.SUPPRESS_NOTIFICATIONS)));
    let x = null !== (n = b.nonce) && void 0 !== n ? n : (0, m.r)(),
        B = (0, g.ZP)({
            channelId: f,
            content: w.content,
            tts: null !== (r = null == D ? void 0 : D.tts) && void 0 !== r && r,
            type: w.type,
            messageReference: w.message_reference,
            flags: w.flags,
            nonce: x,
            poll: (0, A.x9)(b.poll)
        });
    return (
        ((w.nonce = x),
        M.on('start', (t) => {
            (d = (0, E.e5)({
                ...B,
                id: t.id
            })),
                i.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: f,
                    file: t,
                    message: d,
                    uploader: M
                });
        }),
        M.on('progress', (t) => {
            i.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: f,
                file: t
            });
        })),
        M.on('error', (t, e, n, r) => {
            if (
                (i.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: f,
                    file: t,
                    messageRecord: d
                }),
                (0, C.x)({
                    fileItems: t.items,
                    failureCode: e,
                    errorMessage: null == r ? void 0 : r.msg
                }),
                e === P.evJ.EXPLICIT_CONTENT)
            ) {
                a.Z.sendExplicitMediaClydeError(f, null == n ? void 0 : n.attachments, p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (e === P.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let t = {
                        code: e,
                        message: null == n ? void 0 : n.message
                    },
                    r =
                        null == d
                            ? null
                            : {
                                  type: c.$V.SEND,
                                  message: {
                                      ...d,
                                      channelId: f
                                  }
                              };
                (0, u.openUploadError)({
                    title: L.intl.string(L.t.B3vFdX),
                    help: (0, _.uF)(r, t)
                });
                return;
            }
            if (e !== P.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (U)
                    G.reject(
                        new s.Hx(
                            {
                                status: e,
                                body: null != n ? n : {}
                            },
                            e
                        )
                    );
                else {
                    var h;
                    (0, u.openUploadError)({
                        title: L.intl.string(L.t.B3vFdX),
                        help: null !== (h = null == n ? void 0 : n.message) && void 0 !== h ? h : L.intl.string(L.t.zMEjJi)
                    });
                }
                '' !== w.content && '' === v.Z.getDraft(f, y) && l.Z.saveDraft(f, w.content, y),
                    0 === O.Z.getUploadCount(f, y) &&
                        o.Z.setUploads({
                            channelId: f,
                            uploads: Z,
                            draftType: y
                        });
            }
        }),
        M.on('complete', (t, e) => {
            i.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: f,
                file: t,
                aborted: M._aborted,
                messageRecord: e
            });
        }),
        await M.uploadFiles(Z, w),
        G.resolve(),
        G.promise
    );
}
e.Z = {
    instantBatchUpload: function (t) {
        let { channelId: e, files: n, draftType: r, isThumbnail: i = !1, filesMetadata: l = [] } = t,
            a = Array.from(n).map((t, n) => {
                let r = null != l ? l[n] : {};
                return new d.n(
                    {
                        file: t,
                        platform: f.ow.WEB,
                        isThumbnail: i,
                        ...r
                    },
                    e
                );
            });
        Z({
            channelId: e,
            uploads: a,
            draftType: r
        });
    },
    upload: function t(e) {
        let { channelId: n, file: o, draftType: s, message: c, hasSpoiler: d, filename: f } = e,
            _ = {
                content: '',
                tts: !1,
                hasSpoiler: d,
                filename: f
            };
        if (null != c) {
            (_.content = c.content), (_.tts = c.tts), (_.channel_id = c.channel_id);
            let t = I.Z.getPendingReply(n);
            if (null != t) {
                let e = a.Z.getSendMessageOptionsForReply(t);
                (_.type = P.uaV.REPLY), (_.message_reference = e.messageReference), (_.allowed_mentions = e.allowedMentions), (0, N.A6)(n);
            }
        }
        let E = new h.Z(P.ANM.MESSAGES(n));
        E.on('start', (t) => {
            i.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: n,
                file: t,
                uploader: E
            });
        }),
            E.on('progress', (t) => {
                i.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: n,
                    file: t
                });
            }),
            E.on('error', (e, d, f) => {
                if (
                    (i.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: n,
                        file: e
                    }),
                    (0, C.x)({
                        fileItems: e.items,
                        failureCode: d
                    }),
                    d === P.evJ.EXPLICIT_CONTENT)
                ) {
                    a.Z.sendExplicitMediaClydeError(n, null == f ? void 0 : f.attachments, p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, u.openUploadError)({
                    title: L.intl.string(L.t.B3vFdX),
                    help: L.intl.format(L.t.gIlRx8, {
                        onClick: () => {
                            (0, r.closeModal)(u.UPLOAD_ERROR_MODAL_KEY),
                                t({
                                    channelId: n,
                                    file: o,
                                    draftType: s,
                                    message: c
                                });
                        }
                    })
                }),
                    '' !== _.content && '' === v.Z.getDraft(n, s) && l.Z.saveDraft(n, _.content, s);
            }),
            E.on('complete', (t) => {
                i.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: n,
                    file: t
                });
            }),
            E.upload(o, _);
    },
    uploadFiles: Z,
    cancel(t) {
        i.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: t
        }),
            null != t.draftContent &&
                null != t.channelId &&
                '' === v.Z.getDraft(t.channelId, v.d.ChannelMessage) &&
                i.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: t.channelId,
                    draft: t.draftContent,
                    draftType: v.d.ChannelMessage
                });
    }
};
