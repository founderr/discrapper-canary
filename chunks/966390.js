n(47120), n(789020);
var i = n(481060),
    r = n(570140),
    l = n(430742),
    o = n(904245),
    a = n(166459),
    s = n(531643),
    u = n(881052),
    c = n(673750),
    d = n(141795),
    h = n(476326),
    f = n(680287),
    p = n(247206),
    m = n(539573),
    E = n(786761),
    v = n(3148),
    g = n(48854),
    _ = n(785359),
    C = n(79390),
    S = n(623292),
    I = n(807092),
    Z = n(467798),
    N = n(703558),
    x = n(117530),
    O = n(630388),
    T = n(226351),
    A = n(981631),
    y = n(388032);
async function b(e) {
    var t, n, i;
    let d,
        { channelId: h, uploads: b, draftType: R, parsedMessage: L, options: k = {}, raiseEndpointErrors: M = !1 } = e,
        P = new f.Z(A.ANM.MESSAGES(h)),
        w = new T.o(),
        j = {
            content: '',
            nonce: '',
            channel_id: h,
            type: A.uaV.DEFAULT,
            sticker_ids: null == k ? void 0 : k.stickerIds,
            poll: null == k ? void 0 : k.poll
        };
    null != L && (j.content = null == L ? void 0 : L.content), null != I.Z.getPendingReply(h) && ((j.type = A.uaV.REPLY), (j.message_reference = k.messageReference), (j.allowed_mentions = k.allowedMentions), (0, S.A6)(h));
    let [D, z] = (0, Z.Z)(j.content);
    D && ((j.content = z), (j.flags = (0, O.pj)(null !== (t = j.flags) && void 0 !== t ? t : 0, A.iLy.SUPPRESS_NOTIFICATIONS)));
    let U = null !== (n = k.nonce) && void 0 !== n ? n : (0, g.r)(),
        V = (0, v.ZP)({
            channelId: h,
            content: j.content,
            tts: null !== (i = null == L ? void 0 : L.tts) && void 0 !== i && i,
            type: j.type,
            messageReference: j.message_reference,
            flags: j.flags,
            nonce: U,
            poll: (0, C.x9)(k.poll)
        });
    return (
        ((j.nonce = U),
        P.on('start', (e) => {
            (d = (0, E.e5)({
                ...V,
                id: e.id
            })),
                r.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: h,
                    file: e,
                    message: d,
                    uploader: P
                });
        }),
        P.on('progress', (e) => {
            r.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: h,
                file: e
            });
        })),
        P.on('error', (e, t, n, i) => {
            if (
                (r.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: h,
                    file: e,
                    messageRecord: d
                }),
                (0, _.x)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == i ? void 0 : i.msg
                }),
                t === A.evJ.EXPLICIT_CONTENT)
            ) {
                o.Z.sendExplicitMediaClydeError(h, null == n ? void 0 : n.attachments, p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (t === A.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    i =
                        null == d
                            ? null
                            : {
                                  type: c.$V.SEND,
                                  message: {
                                      ...d,
                                      channelId: h
                                  }
                              };
                (0, s.openUploadError)({
                    title: y.intl.string(y.t.B3vFdX),
                    help: (0, m.uF)(i, e)
                });
                return;
            }
            if (t !== A.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (M)
                    w.reject(
                        new u.Hx(
                            {
                                status: t,
                                body: null != n ? n : {}
                            },
                            t
                        )
                    );
                else {
                    var f;
                    (0, s.openUploadError)({
                        title: y.intl.string(y.t.B3vFdX),
                        help: null !== (f = null == n ? void 0 : n.message) && void 0 !== f ? f : y.intl.string(y.t.zMEjJi)
                    });
                }
                '' !== j.content && '' === N.Z.getDraft(h, R) && l.Z.saveDraft(h, j.content, R),
                    0 === x.Z.getUploadCount(h, R) &&
                        a.Z.setUploads({
                            channelId: h,
                            uploads: b,
                            draftType: R
                        });
            }
        }),
        P.on('complete', (e, t) => {
            r.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: h,
                file: e,
                aborted: P._aborted,
                messageRecord: t
            });
        }),
        await P.uploadFiles(b, j),
        w.resolve(),
        w.promise
    );
}
t.Z = {
    instantBatchUpload: function (e) {
        let { channelId: t, files: n, draftType: i, isThumbnail: r = !1, filesMetadata: l = [] } = e,
            o = Array.from(n).map((e, n) => {
                let i = null != l ? l[n] : {};
                return new d.n(
                    {
                        file: e,
                        platform: h.ow.WEB,
                        isThumbnail: r,
                        ...i
                    },
                    t
                );
            });
        b({
            channelId: t,
            uploads: o,
            draftType: i
        });
    },
    upload: function e(t) {
        let { channelId: n, file: a, draftType: u, message: c, hasSpoiler: d, filename: h } = t,
            m = {
                content: '',
                tts: !1,
                hasSpoiler: d,
                filename: h
            };
        if (null != c) {
            (m.content = c.content), (m.tts = c.tts), (m.channel_id = c.channel_id);
            let e = I.Z.getPendingReply(n);
            if (null != e) {
                let t = o.Z.getSendMessageOptionsForReply(e);
                (m.type = A.uaV.REPLY), (m.message_reference = t.messageReference), (m.allowed_mentions = t.allowedMentions), (0, S.A6)(n);
            }
        }
        let E = new f.Z(A.ANM.MESSAGES(n));
        E.on('start', (e) => {
            r.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: n,
                file: e,
                uploader: E
            });
        }),
            E.on('progress', (e) => {
                r.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: n,
                    file: e
                });
            }),
            E.on('error', (t, d, h) => {
                if (
                    (r.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: n,
                        file: t
                    }),
                    (0, _.x)({
                        fileItems: t.items,
                        failureCode: d
                    }),
                    d === A.evJ.EXPLICIT_CONTENT)
                ) {
                    o.Z.sendExplicitMediaClydeError(n, null == h ? void 0 : h.attachments, p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, s.openUploadError)({
                    title: y.intl.string(y.t.B3vFdX),
                    help: y.intl.format(y.t.gIlRx8, {
                        onClick: () => {
                            (0, i.closeModal)(s.UPLOAD_ERROR_MODAL_KEY),
                                e({
                                    channelId: n,
                                    file: a,
                                    draftType: u,
                                    message: c
                                });
                        }
                    })
                }),
                    '' !== m.content && '' === N.Z.getDraft(n, u) && l.Z.saveDraft(n, m.content, u);
            }),
            E.on('complete', (e) => {
                r.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: n,
                    file: e
                });
            }),
            E.upload(a, m);
    },
    uploadFiles: b,
    cancel(e) {
        r.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: e
        }),
            null != e.draftContent &&
                null != e.channelId &&
                '' === N.Z.getDraft(e.channelId, N.d.ChannelMessage) &&
                r.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: N.d.ChannelMessage
                });
    }
};
