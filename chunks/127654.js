i.d(t, {
  G: function() {
    return h
  },
  d: function() {
    return A
  }
}), i(653041), i(47120), i(411104);
var n = i(475179),
  c = i(166459),
  o = i(966390),
  a = i(531643),
  l = i(476326),
  _ = i(367907),
  r = i(358221),
  s = i(117530),
  f = i(594174),
  p = i(626135),
  u = i(403182),
  d = i(74538),
  E = i(979956),
  T = i(981631),
  g = i(959517),
  I = i(474936),
  m = i(689938);

function h(e, t) {
  let i = f.default.getCurrentUser(),
    n = e.getGuildId(),
    c = u.dg(n),
    o = [],
    l = 0,
    r = 0,
    s = 0,
    p = [];
  for (let e of t) s += 1, l += e.size, o.push(e.size), e.size > r && (r = e.size), null != e.type ? p.push(e.type) : p.push("unknown");
  if (r > c) {
    (0, _.yw)(T.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: n,
      user_individual_file_size_limit: c,
      pre_compression_file_sizes: o,
      pre_compression_aggregate_file_size: l,
      num_attachments: s,
      error_type: g.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: p
    }), (0, a.openUploadError)({
      title: m.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
      help: (0, E.BK)(i, n),
      showPremiumUpsell: !(0, d.M5)(i, I.p9.TIER_2),
      fileSize: r
    });
    return
  }(0, a.openUploadError)({
    title: m.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: m.Z.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
      maxSize: u.Ng(u.OC())
    })
  })
}

function A(e, t, i) {
  let {
    filesMetadata: _,
    requireConfirm: f = !0,
    showLargeMessageDialog: u = !1,
    isThumbnail: d = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != _ && _.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let g = t.getGuildId();
  if ((0, E.Bf)(e, g)) {
    h(t, e);
    return
  }
  if (s.Z.getUploadCount(t.id, i) + e.length > T.dN1) {
    (0, a.openUploadError)({
      title: m.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
      help: m.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
        limit: T.dN1
      })
    }), p.default.track(T.rMx.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: s.Z.getUploadCount(t.id, i),
      new_count: e.length
    });
    return
  }
  if ((t.type === T.d4z.GUILD_VOICE || t.type === T.d4z.GUILD_STAGE_VOICE) && !r.Z.getChatOpen(t.id) && n.Z.updateChatOpen(t.id, !0), f) {
    let n = Array.from(e).map((e, t) => ({
      file: e,
      platform: l.ow.WEB,
      isThumbnail: d,
      ...null == _ ? void 0 : _[t]
    }));
    c.Z.addFiles({
      files: n,
      channelId: t.id,
      showLargeMessageDialog: u,
      draftType: i
    })
  } else o.Z.instantBatchUpload({
    channelId: t.id,
    files: e,
    draftType: i,
    isThumbnail: d,
    filesMetadata: _
  })
}