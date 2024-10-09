n.d(t, {
    c: function () {
        return i;
    }
});
var l = n(442837),
    a = n(496675),
    s = n(408433);
function i(e) {
    var t, n, i;
    let { message: r, channel: o, forwardOptions: c } = e,
        u = null == c ? void 0 : c.onlyAttachmentIds,
        d = null == c ? void 0 : c.onlyEmbedIndices,
        h = null !== (i = null === (t = r.messageSnapshots[0]) || void 0 === t ? void 0 : t.message) && void 0 !== i ? i : r,
        _ = h.attachments;
    null != u ? (_ = h.attachments.filter((e) => u.includes(e.id))) : null != d && (_ = []);
    let f = [];
    return (
        !(0, l.e7)([a.Z], () => null != o && !(0, s.eC)(o, a.Z) && (0, s.En)(r)) && ((f = h.embeds), null != d ? (f = h.embeds.filter((e, t) => d.includes(t))) : null != u && (f = [])),
        (null != d || ('' === h.content && f.length > 0)) && (h = h.set('content', f.map((e) => e.url).join('\n'))),
        '' === h.content && (null === (n = h.embeds[0]) || void 0 === n ? void 0 : n.rawDescription) != null && (h = h.set('content', h.embeds[0].rawDescription)),
        {
            attachments: _,
            embeds: f,
            hasContent: '' !== h.content && null == u,
            contentMessage: h
        }
    );
}
