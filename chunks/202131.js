n.d(t, {
    N: function () {
        return E;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(626135),
    o = n(960048),
    s = n(592204),
    l = n(803141),
    u = n(603158),
    c = n(981631);
function d(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = Math.max(t, 0),
        a = Math.min(n, e.length - 1),
        o = r ? '\\*' : '*',
        s = [...e.substring(i, a + 1)].map((e) => (' ' === e ? ' ' : o)).join('');
    return ''
        .concat(e.substring(0, i))
        .concat(s)
        .concat(e.substring(a + 1));
}
function _(e) {
    var t;
    let n = l.Z.getKeywordTrie();
    if ('' === e) return [];
    let r = (0, u.F)(e).toLowerCase();
    return Object.values(null !== (t = null == n ? void 0 : n.search(r)) && void 0 !== t ? t : {});
}
function E(e, t) {
    (0, s.pB)({ location: 'keyword_substituted_content' });
    try {
        let n = _(e);
        if (0 === n.length) return e;
        return (
            n.forEach((e) => {
                a.default.track(c.rMx.KEYWORD_FILTER_MATCH, {
                    message_id: null == t ? void 0 : t.messageId,
                    channel_id: null == t ? void 0 : t.channelId,
                    author_id: null == t ? void 0 : t.authorId,
                    keyword: e.keyword
                });
            }),
            n.sort((e, t) => t.start - e.start).reduce((e, n) => d(e, n.start, n.end, null == t ? void 0 : t.escapeReplacement), e)
        );
    } catch (t) {
        return o.Z.captureException(t, { tags: { app_context: 'keyword_filtering' } }), e;
    }
}
