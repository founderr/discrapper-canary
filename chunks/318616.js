t.d(n, {
    c: function () {
        return l;
    }
});
function l(e) {
    var n, t, l;
    let { message: s, forwardOptions: a } = e,
        r = null == a ? void 0 : a.onlyAttachmentIds,
        i = null == a ? void 0 : a.onlyEmbedIndices,
        o = null !== (l = null === (n = s.messageSnapshots[0]) || void 0 === n ? void 0 : n.message) && void 0 !== l ? l : s,
        u = o.attachments;
    null != r ? (u = o.attachments.filter((e) => r.includes(e.id))) : null != i && (u = []);
    let c = o.embeds;
    return (
        null != i ? (c = o.embeds.filter((e, n) => i.includes(n))) : null != r && (c = []),
        (null != i || ('' === o.content && c.length > 0)) && (o = o.set('content', c.map((e) => e.url).join('\n'))),
        '' === o.content && (null === (t = o.embeds[0]) || void 0 === t ? void 0 : t.rawDescription) != null && (o = o.set('content', o.embeds[0].rawDescription)),
        {
            attachments: u,
            embeds: c,
            hasContent: '' !== o.content && null == r,
            contentMessage: o
        }
    );
}
