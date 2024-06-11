"use strict";
n.r(t), n.d(t, {
  getInlineForwardOptions: function() {
    return l
  }
});
var s = n("118139"),
  a = n("981631");

function l(e, t) {
  let {
    targetKind: n,
    embedIndex: l
  } = t;
  if ("media" === n) {
    var i, r;
    let t = e;
    return (null === (i = e.messageReference) || void 0 === i ? void 0 : i.type) === a.MessageReferenceTypes.FORWARD && (t = null === (r = e.messageSnapshots[0]) || void 0 === r ? void 0 : r.message), {
      onlyAttachmentIds: null == t ? void 0 : t.attachments.filter(e => {
        let {
          filename: t
        } = e;
        return (0, s.isImageFile)(t) || (0, s.isVideoFile)(t)
      }).map(e => e.id)
    }
  }
  if ("embed" === n && null != l) return {
    onlyEmbedIndices: [l]
  }
}