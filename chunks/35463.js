t.d(a, {
  Z: function() {
    return i
  }
}), t(47120), t(315314), t(610138), t(216116), t(78328), t(815648);
var n = t(470079),
  l = t(442837),
  s = t(703558),
  r = t(117530),
  o = t(524100);

function i(e) {
  var a, t;
  let {
    channelId: i,
    localCreationAnswerId: c,
    image: u
  } = e, d = null == u ? void 0 : u.emoji, E = (null == u ? void 0 : null === (a = u.mediaAttachmentState) || void 0 === a ? void 0 : a.status) === o._.PREPARING, _ = (0, l.e7)([r.Z], () => r.Z.getUpload(i, c, s.d.Poll)), [m, A] = n.useState(), [L, C] = n.useState("");
  return n.useEffect(() => {
    var e;
    if ((null == _ ? void 0 : null === (e = _.item) || void 0 === e ? void 0 : e.file) == null) return;
    let a = URL.createObjectURL(_.item.file);
    return A(a), C(_.item.file.name), () => {
      URL.revokeObjectURL(a)
    }
  }, [null == _ ? void 0 : null === (t = _.item) || void 0 === t ? void 0 : t.file]), {
    emoji: d,
    isLoadingMedia: E,
    hasUpload: null != _,
    upload: _,
    mediaUrl: m,
    mediaFilename: L
  }
}