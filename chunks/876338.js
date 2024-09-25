n.d(t, {
    j: function () {
        return a;
    }
});
var r = n(406432),
    i = n(981631);
function a(e, t) {
    let { targetKind: n, embedIndex: a } = t;
    if ('media' === n) {
        var o, s;
        let t = e;
        return (
            (null === (o = e.messageReference) || void 0 === o ? void 0 : o.type) === i.Uvt.FORWARD && (t = null === (s = e.messageSnapshots[0]) || void 0 === s ? void 0 : s.message),
            {
                onlyAttachmentIds:
                    null == t
                        ? void 0
                        : t.attachments
                              .filter((e) => {
                                  let { filename: t } = e;
                                  return (0, r.CO)(t) || (0, r.NU)(t);
                              })
                              .map((e) => e.id)
            }
        );
    }
    if ('embed' === n && null != a) return { onlyEmbedIndices: [a] };
}
