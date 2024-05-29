"use strict";
l.r(t), l.d(t, {
  promptToUpload: function() {
    return x
  },
  showUploadFileSizeExceededError: function() {
    return A
  }
}), l("653041"), l("47120"), l("411104");
var a = l("475179"),
  n = l("166459"),
  i = l("966390"),
  s = l("531643"),
  r = l("476326"),
  o = l("367907"),
  u = l("358221"),
  d = l("117530"),
  c = l("594174"),
  f = l("626135"),
  m = l("403182"),
  _ = l("74538"),
  p = l("979956"),
  E = l("981631"),
  g = l("959517"),
  M = l("474936"),
  h = l("689938");

function A(e, t) {
  let l = c.default.getCurrentUser(),
    a = e.getGuildId(),
    n = m.maxFileSize(a),
    i = [],
    r = 0,
    u = 0,
    d = 0,
    f = [];
  for (let e of t) d += 1, r += e.size, i.push(e.size), e.size > u && (u = e.size), null != e.type ? f.push(e.type) : f.push("unknown");
  if (u > n) {
    (0, o.trackWithMetadata)(E.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: a,
      user_individual_file_size_limit: n,
      pre_compression_file_sizes: i,
      pre_compression_aggregate_file_size: r,
      num_attachments: d,
      error_type: g.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: f
    }), (0, s.openUploadError)({
      title: h.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
      help: (0, p.getErrorHelp)(l, a),
      showPremiumUpsell: !(0, _.isPremiumExactly)(l, M.PremiumTypes.TIER_2),
      fileSize: u
    });
    return
  }(0, s.openUploadError)({
    title: h.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: h.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
      maxSize: m.sizeString(m.getMaxRequestSize())
    })
  })
}

function x(e, t, l) {
  let {
    filesMetadata: o,
    requireConfirm: c = !0,
    showLargeMessageDialog: m = !1,
    isThumbnail: _ = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != o && o.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let g = t.getGuildId();
  if ((0, p.filesExceedUploadLimits)(e, g)) {
    A(t, e);
    return
  }
  if (d.default.getUploadCount(t.id, l) + e.length > E.MAX_UPLOAD_COUNT) {
    (0, s.openUploadError)({
      title: h.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
      help: h.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
        limit: E.MAX_UPLOAD_COUNT
      })
    }), f.default.track(E.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: d.default.getUploadCount(t.id, l),
      new_count: e.length
    });
    return
  }
  if ((t.type === E.ChannelTypes.GUILD_VOICE || t.type === E.ChannelTypes.GUILD_STAGE_VOICE) && !u.default.getChatOpen(t.id) && a.default.updateChatOpen(t.id, !0), c) {
    let a = Array.from(e).map((e, t) => ({
      file: e,
      platform: r.UploadPlatform.WEB,
      isThumbnail: _,
      ...null == o ? void 0 : o[t]
    }));
    n.default.addFiles({
      files: a,
      channelId: t.id,
      showLargeMessageDialog: m,
      draftType: l
    })
  } else i.default.instantBatchUpload({
    channelId: t.id,
    files: e,
    draftType: l,
    isThumbnail: _,
    filesMetadata: o
  })
}