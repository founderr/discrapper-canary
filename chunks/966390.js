n(47120), n(789020);
var i = n(481060),
    o = n(570140),
    r = n(430742),
    l = n(904245),
    s = n(166459),
    a = n(531643),
    u = n(881052),
    c = n(673750),
    d = n(141795),
    h = n(476326),
    f = n(680287),
    p = n(163268),
    m = n(539573),
    v = n(786761),
    g = n(3148),
    E = n(48854),
    _ = n(785359),
    C = n(79390),
    S = n(623292),
    x = n(807092),
    Z = n(467798),
    I = n(703558),
    b = n(117530),
    y = n(630388),
    N = n(226351),
    O = n(981631),
    T = n(388032);
async function L(e) {
    var t, n, i;
    let d,
        { channelId: h, uploads: L, draftType: A, parsedMessage: k, options: w = {}, raiseEndpointErrors: R = !1 } = e,
        j = new f.Z(O.ANM.MESSAGES(h)),
        M = new N.o(),
        z = {
            content: '',
            nonce: '',
            channel_id: h,
            type: O.uaV.DEFAULT,
            sticker_ids: null == w ? void 0 : w.stickerIds,
            poll: null == w ? void 0 : w.poll
        };
    null != k && (z.content = null == k ? void 0 : k.content), null != x.Z.getPendingReply(h) && ((z.type = O.uaV.REPLY), (z.message_reference = w.messageReference), (z.allowed_mentions = w.allowedMentions), (0, S.A6)(h));
    let [D, P] = (0, Z.Z)(z.content);
    D && ((z.content = P), (z.flags = (0, y.pj)(null !== (t = z.flags) && void 0 !== t ? t : 0, O.iLy.SUPPRESS_NOTIFICATIONS)));
    let U = null !== (n = w.nonce) && void 0 !== n ? n : (0, E.r)(),
        V = (0, g.ZP)({
            channelId: h,
            content: z.content,
            tts: null !== (i = null == k ? void 0 : k.tts) && void 0 !== i && i,
            type: z.type,
            messageReference: z.message_reference,
            flags: z.flags,
            nonce: U,
            poll: (0, C.x9)(w.poll)
        });
    return (
        ((z.nonce = U),
        j.on('start', (e) => {
            (d = (0, v.e5)({
                ...V,
                id: e.id
            })),
                o.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: h,
                    file: e,
                    message: d,
                    uploader: j
                });
        }),
        j.on('progress', (e) => {
            o.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: h,
                file: e
            });
        })),
        j.on('error', (e, t, n, i) => {
            if (
                (o.Z.dispatch({
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
                t === O.evJ.EXPLICIT_CONTENT)
            ) {
                l.Z.sendExplicitMediaClydeError(h, null == n ? void 0 : n.attachments, p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (t === O.evJ.AUTOMOD_MESSAGE_BLOCKED) {
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
                (0, a.openUploadError)({
                    title: T.intl.string(T.t.B3vFdX),
                    help: (0, m.uF)(i, e)
                });
                return;
            }
            if (t !== O.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (R)
                    M.reject(
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
                    (0, a.openUploadError)({
                        title: T.intl.string(T.t.B3vFdX),
                        help: null !== (f = null == n ? void 0 : n.message) && void 0 !== f ? f : T.intl.string(T.t.zMEjJi)
                    });
                }
                '' !== z.content && '' === I.Z.getDraft(h, A) && r.Z.saveDraft(h, z.content, A),
                    0 === b.Z.getUploadCount(h, A) &&
                        s.Z.setUploads({
                            channelId: h,
                            uploads: L,
                            draftType: A
                        });
            }
        }),
        j.on('complete', (e, t) => {
            o.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: h,
                file: e,
                aborted: j._aborted,
                messageRecord: t
            });
        }),
        await j.uploadFiles(L, z),
        M.resolve(),
        M.promise
    );
}
t.Z = {
    instantBatchUpload: function (e) {
        let { channelId: t, files: n, draftType: i, isThumbnail: o = !1, filesMetadata: r = [] } = e,
            l = Array.from(n).map((e, n) => {
                let i = null != r ? r[n] : {};
                return new d.n(
                    {
                        file: e,
                        platform: h.ow.WEB,
                        isThumbnail: o,
                        ...i
                    },
                    t
                );
            });
        L({
            channelId: t,
            uploads: l,
            draftType: i
        });
    },
    upload: function e(t) {
        let { channelId: n, file: s, draftType: u, message: c, hasSpoiler: d, filename: h } = t,
            m = {
                content: '',
                tts: !1,
                hasSpoiler: d,
                filename: h
            };
        if (null != c) {
            (m.content = c.content), (m.tts = c.tts), (m.channel_id = c.channel_id);
            let e = x.Z.getPendingReply(n);
            if (null != e) {
                let t = l.Z.getSendMessageOptionsForReply(e);
                (m.type = O.uaV.REPLY), (m.message_reference = t.messageReference), (m.allowed_mentions = t.allowedMentions), (0, S.A6)(n);
            }
        }
        let v = new f.Z(O.ANM.MESSAGES(n));
        v.on('start', (e) => {
            o.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: n,
                file: e,
                uploader: v
            });
        }),
            v.on('progress', (e) => {
                o.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: n,
                    file: e
                });
            }),
            v.on('error', (t, d, h) => {
                if (
                    (o.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: n,
                        file: t
                    }),
                    (0, _.x)({
                        fileItems: t.items,
                        failureCode: d
                    }),
                    d === O.evJ.EXPLICIT_CONTENT)
                ) {
                    l.Z.sendExplicitMediaClydeError(n, null == h ? void 0 : h.attachments, p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, a.openUploadError)({
                    title: T.intl.string(T.t.B3vFdX),
                    help: T.intl.format(T.t.gIlRx8, {
                        onClick: () => {
                            (0, i.closeModal)(a.UPLOAD_ERROR_MODAL_KEY),
                                e({
                                    channelId: n,
                                    file: s,
                                    draftType: u,
                                    message: c
                                });
                        }
                    })
                }),
                    '' !== m.content && '' === I.Z.getDraft(n, u) && r.Z.saveDraft(n, m.content, u);
            }),
            v.on('complete', (e) => {
                o.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: n,
                    file: e
                });
            }),
            v.upload(s, m);
    },
    uploadFiles: L,
    cancel(e) {
        o.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: e
        }),
            null != e.draftContent &&
                null != e.channelId &&
                '' === I.Z.getDraft(e.channelId, I.d.ChannelMessage) &&
                o.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: I.d.ChannelMessage
                });
    }
};
