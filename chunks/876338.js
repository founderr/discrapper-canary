n.d(t, {
  j: function() {
    return l
  }
});
var s = n(406432),
  i = n(981631);

function l(e, t) {
  let {
    targetKind: n,
    embedIndex: l
  } = t;
  if ("media" === n) {
    var a, r;
    let t = e;
    return (null === (a = e.messageReference) || void 0 === a ? void 0 : a.type) === i.Uvt.FORWARD && (t = null === (r = e.messageSnapshots[0]) || void 0 === r ? void 0 : r.message), {
      onlyAttachmentIds: null == t ? void 0 : t.attachments.filter(e => {
        let {
          filename: t
        } = e;
        return (0, s.CO)(t) || (0, s.NU)(t)
      }).map(e => e.id)
    }
  }
  if ("embed" === n && null != l) return {
    onlyEmbedIndices: [l]
  }
}