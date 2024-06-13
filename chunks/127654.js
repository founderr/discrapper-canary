"use strict";
n.r(t), n.d(t, {
  promptToUpload: function() {
    return T
  },
  showUploadFileSizeExceededError: function() {
    return _
  }
}), n("653041"), n("47120"), n("411104");
var a = n("475179"),
  l = n("166459"),
  s = n("966390"),
  i = n("531643"),
  r = n("476326"),
  o = n("367907"),
  u = n("358221"),
  d = n("117530"),
  c = n("594174"),
  f = n("626135"),
  h = n("403182"),
  m = n("74538"),
  p = n("979956"),
  E = n("981631"),
  C = n("959517"),
  g = n("474936"),
  S = n("689938");

function _(e, t) {
  let n = c.default.getCurrentUser(),
    a = e.getGuildId(),
    l = h.maxFileSize(a),
    s = [],
    r = 0,
    u = 0,
    d = 0,
    f = [];
  for (let e of t) d += 1, r += e.size, s.push(e.size), e.size > u && (u = e.size), null != e.type ? f.push(e.type) : f.push("unknown");
  if (u > l) {
    (0, o.trackWithMetadata)(E.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: a,
      user_individual_file_size_limit: l,
      pre_compression_file_sizes: s,
      pre_compression_aggregate_file_size: r,
      num_attachments: d,
      error_type: C.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: f
    }), (0, i.openUploadError)({
      title: S.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
      help: (0, p.getErrorHelp)(n, a),
      showPremiumUpsell: !(0, m.isPremiumExactly)(n, g.PremiumTypes.TIER_2),
      fileSize: u
    });
    return
  }(0, i.openUploadError)({
    title: S.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: S.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
      maxSize: h.sizeString(h.getMaxRequestSize())
    })
  })
}

function T(e, t, n) {
  let {
    filesMetadata: o,
    requireConfirm: c = !0,
    showLargeMessageDialog: h = !1,
    isThumbnail: m = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != o && o.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let C = t.getGuildId();
  if ((0, p.filesExceedUploadLimits)(e, C)) {
    _(t, e);
    return
  }
  if (d.default.getUploadCount(t.id, n) + e.length > E.MAX_UPLOAD_COUNT) {
    (0, i.openUploadError)({
      title: S.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
      help: S.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
        limit: E.MAX_UPLOAD_COUNT
      })
    }), f.default.track(E.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: d.default.getUploadCount(t.id, n),
      new_count: e.length
    });
    return
  }
  if ((t.type === E.ChannelTypes.GUILD_VOICE || t.type === E.ChannelTypes.GUILD_STAGE_VOICE) && !u.default.getChatOpen(t.id) && a.default.updateChatOpen(t.id, !0), c) {
    let a = Array.from(e).map((e, t) => ({
      file: e,
      platform: r.UploadPlatform.WEB,
      isThumbnail: m,
      ...null == o ? void 0 : o[t]
    }));
    l.default.addFiles({
      files: a,
      channelId: t.id,
      showLargeMessageDialog: h,
      draftType: n
    })
  } else s.default.instantBatchUpload({
    channelId: t.id,
    files: e,
    draftType: n,
    isThumbnail: m,
    filesMetadata: o
  })
}