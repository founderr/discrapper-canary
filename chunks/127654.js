"use strict";
i.r(t), i.d(t, {
  promptToUpload: function() {
    return O
  },
  showUploadFileSizeExceededError: function() {
    return h
  }
}), i("653041"), i("47120"), i("411104");
var l = i("475179"),
  a = i("166459"),
  s = i("966390"),
  n = i("531643"),
  o = i("476326"),
  r = i("367907"),
  d = i("358221"),
  u = i("117530"),
  c = i("594174"),
  _ = i("626135"),
  f = i("403182"),
  m = i("74538"),
  E = i("979956"),
  p = i("981631"),
  A = i("959517"),
  T = i("474936"),
  g = i("689938");

function h(e, t) {
  let i = c.default.getCurrentUser(),
    l = e.getGuildId(),
    a = f.maxFileSize(l),
    s = [],
    o = 0,
    d = 0,
    u = 0,
    _ = [];
  for (let e of t) u += 1, o += e.size, s.push(e.size), e.size > d && (d = e.size), null != e.type ? _.push(e.type) : _.push("unknown");
  if (d > a) {
    (0, r.trackWithMetadata)(p.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: l,
      user_individual_file_size_limit: a,
      pre_compression_file_sizes: s,
      pre_compression_aggregate_file_size: o,
      num_attachments: u,
      error_type: A.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: _
    }), (0, n.openUploadError)({
      title: g.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
      help: (0, E.getErrorHelp)(i, l),
      showPremiumUpsell: !(0, m.isPremiumExactly)(i, T.PremiumTypes.TIER_2),
      fileSize: d
    });
    return
  }(0, n.openUploadError)({
    title: g.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: g.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
      maxSize: f.sizeString(f.getMaxRequestSize())
    })
  })
}

function O(e, t, i) {
  let {
    filesMetadata: r,
    requireConfirm: c = !0,
    showLargeMessageDialog: f = !1,
    isThumbnail: m = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != r && r.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let A = t.getGuildId();
  if ((0, E.filesExceedUploadLimits)(e, A)) {
    h(t, e);
    return
  }
  if (u.default.getUploadCount(t.id, i) + e.length > p.MAX_UPLOAD_COUNT) {
    (0, n.openUploadError)({
      title: g.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
      help: g.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
        limit: p.MAX_UPLOAD_COUNT
      })
    }), _.default.track(p.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: u.default.getUploadCount(t.id, i),
      new_count: e.length
    });
    return
  }
  if ((t.type === p.ChannelTypes.GUILD_VOICE || t.type === p.ChannelTypes.GUILD_STAGE_VOICE) && !d.default.getChatOpen(t.id) && l.default.updateChatOpen(t.id, !0), c) {
    let l = Array.from(e).map((e, t) => ({
      file: e,
      platform: o.UploadPlatform.WEB,
      isThumbnail: m,
      ...null == r ? void 0 : r[t]
    }));
    a.default.addFiles({
      files: l,
      channelId: t.id,
      showLargeMessageDialog: f,
      draftType: i
    })
  } else s.default.instantBatchUpload({
    channelId: t.id,
    files: e,
    draftType: i,
    isThumbnail: m,
    filesMetadata: r
  })
}