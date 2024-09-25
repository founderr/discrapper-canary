n.d(t, {
    c: function () {
        return l;
    }
});
function l(e) {
    var t, n, l;
    let { message: s, forwardOptions: a } = e,
        r = null == a ? void 0 : a.onlyAttachmentIds,
        i = null == a ? void 0 : a.onlyEmbedIndices,
        o = null !== (l = null === (t = s.messageSnapshots[0]) || void 0 === t ? void 0 : t.message) && void 0 !== l ? l : s,
        u = o.attachments;
    null != r ? (u = o.attachments.filter((e) => r.includes(e.id))) : null != i && (u = []);
    let c = o.embeds;
    return (
        null != i ? (c = o.embeds.filter((e, t) => i.includes(t))) : null != r && (c = []),
        (null != i || ('' === o.content && c.length > 0)) && (o = o.set('content', c.map((e) => e.url).join('\n'))),
        '' === o.content && (null === (n = o.embeds[0]) || void 0 === n ? void 0 : n.rawDescription) != null && (o = o.set('content', o.embeds[0].rawDescription)),
        {
            attachments: u,
            embeds: c,
            hasContent: '' !== o.content && null == r,
            contentMessage: o
        }
    );
}
