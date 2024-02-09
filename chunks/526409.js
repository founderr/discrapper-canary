"use strict";
n.r(t), n.d(t, {
  sendReaction: function() {
    return C
  },
  sendReply: function() {
    return T
  }
}), n("70102");
var l = n("913144"),
  i = n("450911"),
  a = n("819689"),
  s = n("81594");
n("282928");
var r = n("966724"),
  o = n("695412"),
  u = n("884351"),
  d = n("166257"),
  c = n("432173"),
  f = n("271938"),
  p = n("42203"),
  m = n("474643"),
  h = n("462495");
let E = async (e, t) => {
  let n = await e.export(o.DiscordCanvasExporterOutputFormats.File, "png", 1, t);
  return n
}, g = e => {
  let t = h.default.getFiles(e),
    n = t[0],
    i = h.default.getMessageForFile(n.id);
  return null == i ? Promise.reject() : new Promise((e, t) => {
    let i = a => {
      a.file.id === n.id && (l.default.unsubscribe("UPLOAD_COMPLETE", i), l.default.unsubscribe("UPLOAD_FAIL", i), "UPLOAD_COMPLETE" === a.type ? e(a.messageRecord) : t(Error("Upload failed")))
    };
    l.default.subscribe("UPLOAD_COMPLETE", i), l.default.subscribe("UPLOAD_FAIL", i)
  })
}, S = function(e, t) {
  var l;
  let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = p.default.getChannel(t);
  l = f.default.getToken(), u.default.parse(a, "");
  let o = r.UploadPlatform.WEB;
  if (i) s.default.addFile({
    file: {
      platform: o,
      file: e,
      uri: "",
      originalUri: ""
    },
    channelId: t,
    draftType: m.DraftType.ChannelMessage
  });
  else {
    let l = p.default.getChannel(t);
    if (null == l) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
    {
      let l = n("783480").default;
      l.instantBatchUpload({
        channelId: t,
        draftType: m.DraftType.ChannelMessage,
        files: [e]
      })
    }
  }
}, C = async function(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = arguments.length > 4 ? arguments[4] : void 0,
    s = await i.default.openPrivateChannel(n.id, !1, !1),
    r = await E(e, a);
  S(r, s, l);
  let o = await g(s);
  if (null != o) {
    let e = (0, c.toReactionEmoji)(t);
    (0, d.addReaction)(s, o.id, e)
  }
}, T = async function(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    s = arguments.length > 4 ? arguments[4] : void 0,
    r = await i.default.openPrivateChannel(n.id, !1, !1),
    o = await E(e, s);
  S(o, r, l), await g(r);
  let d = p.default.getChannel(r),
    c = u.default.parse(d, t);
  a.default.sendMessage(r, c)
}