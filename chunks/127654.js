n.d(t, {
  G: function() {
    return I
  },
  d: function() {
    return x
  }
}), n(653041), n(47120), n(411104);
var l = n(475179),
  i = n(166459),
  s = n(966390),
  a = n(531643),
  r = n(476326),
  o = n(367907),
  c = n(358221),
  u = n(117530),
  d = n(594174),
  h = n(626135),
  m = n(403182),
  p = n(74538),
  E = n(979956),
  g = n(981631),
  f = n(959517),
  C = n(474936),
  _ = n(689938);

function I(e, t) {
  let n = d.default.getCurrentUser(),
    l = e.getGuildId(),
    i = m.dg(l),
    s = [],
    r = 0,
    c = 0,
    u = 0,
    h = [];
  for (let e of t) u += 1, r += e.size, s.push(e.size), e.size > c && (c = e.size), null != e.type ? h.push(e.type) : h.push("unknown");
  if (c > i) {
    (0, o.yw)(g.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: l,
      user_individual_file_size_limit: i,
      pre_compression_file_sizes: s,
      pre_compression_aggregate_file_size: r,
      num_attachments: u,
      error_type: f.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: h
    }), (0, a.openUploadError)({
      title: _.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
      help: (0, E.BK)(n, l),
      showPremiumUpsell: !(0, p.M5)(n, C.p9.TIER_2),
      fileSize: c
    });
    return
  }(0, a.openUploadError)({
    title: _.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: _.Z.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
      maxSize: m.Ng(m.OC())
    })
  })
}

function x(e, t, n) {
  let {
    filesMetadata: o,
    requireConfirm: d = !0,
    showLargeMessageDialog: m = !1,
    isThumbnail: p = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != o && o.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let f = t.getGuildId();
  if ((0, E.Bf)(e, f)) {
    I(t, e);
    return
  }
  if (u.Z.getUploadCount(t.id, n) + e.length > g.dN1) {
    (0, a.openUploadError)({
      title: _.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
      help: _.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
        limit: g.dN1
      })
    }), h.default.track(g.rMx.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: u.Z.getUploadCount(t.id, n),
      new_count: e.length
    });
    return
  }
  if ((t.type === g.d4z.GUILD_VOICE || t.type === g.d4z.GUILD_STAGE_VOICE) && !c.Z.getChatOpen(t.id) && l.Z.updateChatOpen(t.id, !0), d) {
    let l = Array.from(e).map((e, t) => ({
      file: e,
      platform: r.ow.WEB,
      isThumbnail: p,
      ...null == o ? void 0 : o[t]
    }));
    i.Z.addFiles({
      files: l,
      channelId: t.id,
      showLargeMessageDialog: m,
      draftType: n
    })
  } else s.Z.instantBatchUpload({
    channelId: t.id,
    files: e,
    draftType: n,
    isThumbnail: p,
    filesMetadata: o
  })
}