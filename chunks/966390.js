var r = n(47120);
var i = n(789020);
var a = n(481060),
    o = n(570140),
    s = n(430742),
    l = n(904245),
    u = n(166459),
    c = n(531643),
    d = n(881052),
    _ = n(673750),
    E = n(141795),
    f = n(476326),
    h = n(680287),
    p = n(163268),
    m = n(539573),
    I = n(786761),
    T = n(3148),
    g = n(48854),
    S = n(785359),
    A = n(79390),
    v = n(623292),
    N = n(807092),
    O = n(467798),
    R = n(703558),
    C = n(117530),
    y = n(630388),
    L = n(226351),
    b = n(981631),
    D = n(689938);
async function M(e) {
    var t, n, r;
    let i,
        { channelId: a, uploads: E, draftType: f, parsedMessage: M, options: P = {}, raiseEndpointErrors: U = !1 } = e,
        w = new h.Z(b.ANM.MESSAGES(a)),
        x = new L.o(),
        G = {
            content: '',
            nonce: '',
            channel_id: a,
            type: b.uaV.DEFAULT,
            sticker_ids: null == P ? void 0 : P.stickerIds,
            poll: null == P ? void 0 : P.poll
        };
    null != M && (G.content = null == M ? void 0 : M.content), null != N.Z.getPendingReply(a) && ((G.type = b.uaV.REPLY), (G.message_reference = P.messageReference), (G.allowed_mentions = P.allowedMentions), (0, v.A6)(a));
    let [k, B] = (0, O.Z)(G.content);
    k && ((G.content = B), (G.flags = (0, y.pj)(null !== (t = G.flags) && void 0 !== t ? t : 0, b.iLy.SUPPRESS_NOTIFICATIONS)));
    let F = null !== (n = P.nonce) && void 0 !== n ? n : (0, g.r)(),
        Z = (0, T.ZP)({
            channelId: a,
            content: G.content,
            tts: null !== (r = null == M ? void 0 : M.tts) && void 0 !== r && r,
            type: G.type,
            messageReference: G.message_reference,
            flags: G.flags,
            nonce: F,
            poll: (0, A.x9)(P.poll)
        });
    function V() {
        '' !== G.content && '' === R.Z.getDraft(a, f) && s.Z.saveDraft(a, G.content, f),
            0 === C.Z.getUploadCount(a, f) &&
                u.Z.setUploads({
                    channelId: a,
                    uploads: E,
                    draftType: f
                });
    }
    return (
        (G.nonce = F),
        w.on('start', (e) => {
            (i = (0, I.e5)({
                ...Z,
                id: e.id
            })),
                o.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: a,
                    file: e,
                    message: i,
                    uploader: w
                });
        }),
        w.on('progress', (e) => {
            o.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: a,
                file: e
            });
        }),
        w.on('error', (e, t, n, r) => {
            if (
                (o.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: a,
                    file: e,
                    messageRecord: i
                }),
                (0, S.x)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == r ? void 0 : r.msg
                }),
                t === b.evJ.EXPLICIT_CONTENT)
            ) {
                l.Z.sendExplicitMediaClydeError(a, null == n ? void 0 : n.attachments, p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (t === b.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    r =
                        null == i
                            ? null
                            : {
                                  type: _.$V.SEND,
                                  message: {
                                      ...i,
                                      channelId: a
                                  }
                              };
                (0, c.openUploadError)({
                    title: D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: (0, m.uF)(r, e)
                });
                return;
            }
            if (t !== b.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (U)
                    x.reject(
                        new d.Hx(
                            {
                                status: t,
                                body: null != n ? n : {}
                            },
                            t
                        )
                    );
                else {
                    var s;
                    (0, c.openUploadError)({
                        title: D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: null !== (s = null == n ? void 0 : n.message) && void 0 !== s ? s : D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                    });
                }
                V();
            }
        }),
        w.on('complete', (e, t) => {
            o.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: a,
                file: e,
                aborted: w._aborted,
                messageRecord: t
            });
        }),
        await w.uploadFiles(E, G),
        x.resolve(),
        x.promise
    );
}
function P(e) {
    let { channelId: t, file: n, draftType: r, message: i, hasSpoiler: u, filename: d } = e,
        _ = {
            content: '',
            tts: !1,
            hasSpoiler: u,
            filename: d
        };
    if (null != i) {
        (_.content = i.content), (_.tts = i.tts), (_.channel_id = i.channel_id);
        let e = N.Z.getPendingReply(t);
        if (null != e) {
            let n = l.Z.getSendMessageOptionsForReply(e);
            (_.type = b.uaV.REPLY), (_.message_reference = n.messageReference), (_.allowed_mentions = n.allowedMentions), (0, v.A6)(t);
        }
    }
    let E = new h.Z(b.ANM.MESSAGES(t));
    E.on('start', (e) => {
        o.Z.dispatch({
            type: 'UPLOAD_START',
            channelId: t,
            file: e,
            uploader: E
        });
    }),
        E.on('progress', (e) => {
            o.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: t,
                file: e
            });
        }),
        E.on('error', (e, u, d) => {
            if (
                (o.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: t,
                    file: e
                }),
                (0, S.x)({
                    fileItems: e.items,
                    failureCode: u
                }),
                u === b.evJ.EXPLICIT_CONTENT)
            ) {
                l.Z.sendExplicitMediaClydeError(t, null == d ? void 0 : d.attachments, p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            (0, c.openUploadError)({
                title: D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                    onClick: () => {
                        (0, a.closeModal)(c.UPLOAD_ERROR_MODAL_KEY),
                            P({
                                channelId: t,
                                file: n,
                                draftType: r,
                                message: i
                            });
                    }
                })
            }),
                '' !== _.content && '' === R.Z.getDraft(t, r) && s.Z.saveDraft(t, _.content, r);
        }),
        E.on('complete', (e) => {
            o.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: t,
                file: e
            });
        }),
        E.upload(n, _);
}
function U(e) {
    let { channelId: t, files: n, draftType: r, isThumbnail: i = !1, filesMetadata: a = [] } = e,
        o = Array.from(n).map((e, n) => {
            let r = null != a ? a[n] : {};
            return new E.n(
                {
                    file: e,
                    platform: f.ow.WEB,
                    isThumbnail: i,
                    ...r
                },
                t
            );
        });
    M({
        channelId: t,
        uploads: o,
        draftType: r
    });
}
t.Z = {
    instantBatchUpload: U,
    upload: P,
    uploadFiles: M,
    cancel(e) {
        o.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: e
        }),
            null != e.draftContent &&
                null != e.channelId &&
                '' === R.Z.getDraft(e.channelId, R.d.ChannelMessage) &&
                o.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: R.d.ChannelMessage
                });
    }
};
