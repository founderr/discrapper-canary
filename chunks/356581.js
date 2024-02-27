"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
}), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
var l = a("884691"),
  s = a("446674"),
  n = a("474643"),
  r = a("585722"),
  i = a("172402");

function o(e) {
  var t, a;
  let {
    channelId: o,
    localCreationAnswerId: u,
    image: d
  } = e, c = null == d ? void 0 : d.emoji, A = (null == d ? void 0 : null === (t = d.mediaAttachmentState) || void 0 === t ? void 0 : t.status) === i.PollMediaUploadAttachmentStatus.PREPARING, E = (0, s.useStateFromStores)([r.default], () => r.default.getUpload(o, u, n.DraftType.Poll)), [_, m] = l.useState(), [L, f] = l.useState("");
  return l.useEffect(() => {
    var e;
    if ((null == E ? void 0 : null === (e = E.item) || void 0 === e ? void 0 : e.file) == null) return;
    let t = URL.createObjectURL(E.item.file);
    return m(t), f(E.item.file.name), () => {
      URL.revokeObjectURL(t)
    }
  }, [null == E ? void 0 : null === (a = E.item) || void 0 === a ? void 0 : a.file]), {
    emoji: c,
    isLoadingMedia: A,
    hasUpload: null != E,
    upload: E,
    mediaUrl: _,
    mediaFilename: L
  }
}