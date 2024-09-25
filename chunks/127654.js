n.d(t, {
    G: function () {
        return p;
    },
    d: function () {
        return M;
    }
}),
    n(653041),
    n(47120),
    n(411104);
var l = n(475179),
    a = n(166459),
    s = n(966390),
    o = n(531643),
    i = n(476326),
    d = n(367907),
    r = n(358221),
    _ = n(117530),
    u = n(594174),
    c = n(626135),
    A = n(403182),
    E = n(74538),
    f = n(979956),
    m = n(981631),
    h = n(959517),
    I = n(474936),
    T = n(689938);
function p(e, t) {
    let n = u.default.getCurrentUser(),
        l = e.getGuildId(),
        a = A.dg(l),
        s = [],
        i = 0,
        r = 0,
        _ = 0,
        c = [];
    for (let e of t) (_ += 1), (i += e.size), s.push(e.size), e.size > r && (r = e.size), null != e.type ? c.push(e.type) : c.push('unknown');
    if (r > a) {
        (0, d.yw)(m.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: l,
            user_individual_file_size_limit: a,
            pre_compression_file_sizes: s,
            pre_compression_aggregate_file_size: i,
            num_attachments: _,
            error_type: h.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: c
        }),
            (0, o.openUploadError)({
                title: T.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                help: (0, f.BK)(n, l),
                showPremiumUpsell: !(0, E.M5)(n, I.p9.TIER_2),
                fileSize: r
            });
        return;
    }
    (0, o.openUploadError)({
        title: T.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
        help: T.Z.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({ maxSize: A.Ng(A.OC()) })
    });
}
function M(e, t, n) {
    let { filesMetadata: d, requireConfirm: u = !0, showLargeMessageDialog: A = !1, isThumbnail: E = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != d && d.length !== e.length) throw Error('Unexpected mismatch between files and file metadata');
    let h = t.getGuildId();
    if ((0, f.Bf)(e, h)) {
        p(t, e);
        return;
    }
    if (_.Z.getUploadCount(t.id, n) + e.length > m.dN1) {
        (0, o.openUploadError)({
            title: T.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
            help: T.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({ limit: m.dN1 })
        }),
            c.default.track(m.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: _.Z.getUploadCount(t.id, n),
                new_count: e.length
            });
        return;
    }
    if (((t.type === m.d4z.GUILD_VOICE || t.type === m.d4z.GUILD_STAGE_VOICE) && !r.Z.getChatOpen(t.id) && l.Z.updateChatOpen(t.id, !0), u)) {
        let l = Array.from(e).map((e, t) => ({
            file: e,
            platform: i.ow.WEB,
            isThumbnail: E,
            ...(null == d ? void 0 : d[t])
        }));
        a.Z.addFiles({
            files: l,
            channelId: t.id,
            showLargeMessageDialog: A,
            draftType: n
        });
    } else
        s.Z.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: n,
            isThumbnail: E,
            filesMetadata: d
        });
}
