n.d(t, {
    j: function () {
        return l;
    }
});
var i = n(406432),
    r = n(981631);
function l(e, t) {
    let { targetKind: n, embedIndex: l } = t;
    if ('media' === n) {
        var a, o;
        let t = e;
        return (
            (null === (a = e.messageReference) || void 0 === a ? void 0 : a.type) === r.Uvt.FORWARD && (t = null === (o = e.messageSnapshots[0]) || void 0 === o ? void 0 : o.message),
            {
                onlyAttachmentIds:
                    null == t
                        ? void 0
                        : t.attachments
                              .filter((e) => {
                                  let { filename: t } = e;
                                  return (0, i.CO)(t) || (0, i.NU)(t);
                              })
                              .map((e) => e.id)
            }
        );
    }
    if ('embed' === n && null != l) return { onlyEmbedIndices: [l] };
}
