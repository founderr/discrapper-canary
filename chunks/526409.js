"use strict";
n.r(t), n.d(t, {
  sendReaction: function() {
    return T
  },
  sendReply: function() {
    return v
  }
}), n("70102");
var l = n("913144"),
  i = n("450911"),
  a = n("819689"),
  s = n("81594"),
  r = n("282928"),
  o = n("966724"),
  u = n("695412"),
  d = n("884351"),
  c = n("166257"),
  f = n("432173"),
  m = n("271938"),
  p = n("42203"),
  h = n("474643"),
  E = n("462495");
let g = async (e, t) => {
  let n = await e.export(u.DiscordCanvasExporterOutputFormats.File, "png", 1, t);
  return n
}, S = e => {
  let t = E.default.getFiles(e),
    n = t[0],
    i = E.default.getMessageForFile(n.id);
  return null == i ? Promise.reject() : new Promise((e, t) => {
    let i = a => {
      a.file.id === n.id && (l.default.unsubscribe("UPLOAD_COMPLETE", i), l.default.unsubscribe("UPLOAD_FAIL", i), "UPLOAD_COMPLETE" === a.type ? e(a.messageRecord) : t(Error("Upload failed")))
    };
    l.default.subscribe("UPLOAD_COMPLETE", i), l.default.subscribe("UPLOAD_FAIL", i)
  })
}, C = function(e, t) {
  var l;
  let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = arguments.length > 3 ? arguments[3] : void 0,
    u = p.default.getChannel(t);
  l = m.default.getToken(), d.default.parse(u, "");
  let c = o.UploadPlatform.WEB;
  if (i) s.default.addFile({
    file: {
      platform: c,
      file: e,
      uri: "",
      originalUri: ""
    },
    channelId: t,
    draftType: h.DraftType.ChannelMessage
  });
  else {
    let l = p.default.getChannel(t);
    if (null == l) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
    {
      let l = n("783480").default,
        i = new r.CloudUpload({
          file: e,
          platform: o.UploadPlatform.WEB,
          isThumbnail: !1
        }, t);
      i.description = a, l.uploadFiles({
        channelId: t,
        uploads: [i],
        draftType: h.DraftType.ChannelMessage
      })
    }
  }
}, T = async e => {
  let {
    discordCanvas: t,
    reaction: n,
    user: l,
    filename: a,
    altText: s,
    requireConfirmation: r = !1
  } = e, o = await i.default.openPrivateChannel(l.id, !1, !1), u = await g(t, a);
  C(u, o, r, s);
  let d = await S(o);
  if (null != d) {
    let e = (0, f.toReactionEmoji)(n);
    (0, c.addReaction)(o, d.id, e)
  }
}, v = async e => {
  let {
    discordCanvas: t,
    reply: n,
    user: l,
    filename: s,
    altText: r,
    requireConfirmation: o = !1
  } = e, u = await i.default.openPrivateChannel(l.id, !1, !1), c = await g(t, s);
  C(c, u, o, r), await S(u);
  let f = p.default.getChannel(u),
    m = d.default.parse(f, n);
  a.default.sendMessage(u, m)
}