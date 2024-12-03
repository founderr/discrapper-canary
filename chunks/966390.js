n(47120), n(789020);
var r = n(481060),
    l = n(570140),
    i = n(430742),
    a = n(904245),
    o = n(166459),
    u = n(531643),
    c = n(881052),
    s = n(673750),
    d = n(141795),
    f = n(476326),
    _ = n(680287),
    h = n(247206),
    p = n(539573),
    E = n(786761),
    m = n(3148),
    C = n(48854),
    g = n(785359),
    N = n(79390),
    A = n(623292),
    T = n(807092),
    I = n(467798),
    v = n(703558),
    S = n(117530),
    O = n(630388),
    P = n(226351),
    R = n(981631),
    L = n(388032);
async function Z(e) {
    var t, n, r;
    let d,
        { channelId: f, uploads: Z, draftType: y, parsedMessage: b, options: M = {}, raiseEndpointErrors: D = !1 } = e,
        U = new _.Z(R.ANM.MESSAGES(f)),
        G = new P.o(),
        k = {
            content: '',
            nonce: '',
            channel_id: f,
            type: R.uaV.DEFAULT,
            sticker_ids: null == M ? void 0 : M.stickerIds,
            poll: null == M ? void 0 : M.poll
        };
    null != b && (k.content = null == b ? void 0 : b.content), null != T.Z.getPendingReply(f) && ((k.type = R.uaV.REPLY), (k.message_reference = M.messageReference), (k.allowed_mentions = M.allowedMentions), (0, A.A6)(f));
    let [w, x] = (0, I.Z)(k.content);
    w && ((k.content = x), (k.flags = (0, O.pj)(null !== (t = k.flags) && void 0 !== t ? t : 0, R.iLy.SUPPRESS_NOTIFICATIONS)));
    let V = null !== (n = M.nonce) && void 0 !== n ? n : (0, C.r)(),
        B = (0, m.ZP)({
            channelId: f,
            content: k.content,
            tts: null !== (r = null == b ? void 0 : b.tts) && void 0 !== r && r,
            type: k.type,
            messageReference: k.message_reference,
            flags: k.flags,
            nonce: V,
            poll: (0, N.x9)(M.poll)
        });
    return (
        ((k.nonce = V),
        U.on('start', (e) => {
            (d = (0, E.e5)({
                ...B,
                id: e.id
            })),
                l.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: f,
                    file: e,
                    message: d,
                    uploader: U
                });
        }),
        U.on('progress', (e) => {
            l.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: f,
                file: e
            });
        })),
        U.on('error', (e, t, n, r) => {
            if (
                (l.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: f,
                    file: e,
                    messageRecord: d
                }),
                (0, g.x)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == r ? void 0 : r.msg
                }),
                t === R.evJ.EXPLICIT_CONTENT)
            ) {
                a.Z.sendExplicitMediaClydeError(f, null == n ? void 0 : n.attachments, h.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (t === R.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    r =
                        null == d
                            ? null
                            : {
                                  type: s.$V.SEND,
                                  message: {
                                      ...d,
                                      channelId: f
                                  }
                              };
                (0, u.openUploadError)({
                    title: L.intl.string(L.t.B3vFdX),
                    help: (0, p.uF)(r, e)
                });
                return;
            }
            if (t !== R.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (D)
                    G.reject(
                        new c.Hx(
                            {
                                status: t,
                                body: null != n ? n : {}
                            },
                            t
                        )
                    );
                else {
                    var _;
                    (0, u.openUploadError)({
                        title: L.intl.string(L.t.B3vFdX),
                        help: null !== (_ = null == n ? void 0 : n.message) && void 0 !== _ ? _ : L.intl.string(L.t.zMEjJi)
                    });
                }
                '' !== k.content && '' === v.Z.getDraft(f, y) && i.Z.saveDraft(f, k.content, y),
                    0 === S.Z.getUploadCount(f, y) &&
                        o.Z.setUploads({
                            channelId: f,
                            uploads: Z,
                            draftType: y
                        });
            }
        }),
        U.on('complete', (e, t) => {
            l.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: f,
                file: e,
                aborted: U._aborted,
                messageRecord: t
            });
        }),
        await U.uploadFiles(Z, k),
        G.resolve(),
        G.promise
    );
}
t.Z = {
    instantBatchUpload: function (e) {
        let { channelId: t, files: n, draftType: r, isThumbnail: l = !1, filesMetadata: i = [] } = e,
            a = Array.from(n).map((e, n) => {
                let r = null != i ? i[n] : {};
                return new d.n(
                    {
                        file: e,
                        platform: f.ow.WEB,
                        isThumbnail: l,
                        ...r
                    },
                    t
                );
            });
        Z({
            channelId: t,
            uploads: a,
            draftType: r
        });
    },
    upload: function e(t) {
        let { channelId: n, file: o, draftType: c, message: s, hasSpoiler: d, filename: f } = t,
            p = {
                content: '',
                tts: !1,
                hasSpoiler: d,
                filename: f
            };
        if (null != s) {
            (p.content = s.content), (p.tts = s.tts), (p.channel_id = s.channel_id);
            let e = T.Z.getPendingReply(n);
            if (null != e) {
                let t = a.Z.getSendMessageOptionsForReply(e);
                (p.type = R.uaV.REPLY), (p.message_reference = t.messageReference), (p.allowed_mentions = t.allowedMentions), (0, A.A6)(n);
            }
        }
        let E = new _.Z(R.ANM.MESSAGES(n));
        E.on('start', (e) => {
            l.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: n,
                file: e,
                uploader: E
            });
        }),
            E.on('progress', (e) => {
                l.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: n,
                    file: e
                });
            }),
            E.on('error', (t, d, f) => {
                if (
                    (l.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: n,
                        file: t
                    }),
                    (0, g.x)({
                        fileItems: t.items,
                        failureCode: d
                    }),
                    d === R.evJ.EXPLICIT_CONTENT)
                ) {
                    a.Z.sendExplicitMediaClydeError(n, null == f ? void 0 : f.attachments, h.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, u.openUploadError)({
                    title: L.intl.string(L.t.B3vFdX),
                    help: L.intl.format(L.t.gIlRx8, {
                        onClick: () => {
                            (0, r.closeModal)(u.UPLOAD_ERROR_MODAL_KEY),
                                e({
                                    channelId: n,
                                    file: o,
                                    draftType: c,
                                    message: s
                                });
                        }
                    })
                }),
                    '' !== p.content && '' === v.Z.getDraft(n, c) && i.Z.saveDraft(n, p.content, c);
            }),
            E.on('complete', (e) => {
                l.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: n,
                    file: e
                });
            }),
            E.upload(o, p);
    },
    uploadFiles: Z,
    cancel(e) {
        l.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: e
        }),
            null != e.draftContent &&
                null != e.channelId &&
                '' === v.Z.getDraft(e.channelId, v.d.ChannelMessage) &&
                l.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: v.d.ChannelMessage
                });
    }
};
