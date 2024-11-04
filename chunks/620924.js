n.d(t, {
    c: function () {
        return o;
    }
}),
    n(913527);
var i = n(442837),
    r = n(91159),
    a = n(306680),
    l = n(709054),
    s = n(868807);
function o(e) {
    let t = (0, s.a)(e),
        n = (function (e) {
            let { lastMessageId: t, message: n, loaded: i } = e;
            return i && null != n ? l.default.extractTimestamp(n.id) : null != t ? l.default.extractTimestamp(t) : null;
        })({
            lastMessageId: (0, i.e7)([a.ZP], () => a.ZP.lastMessageId(e.id)),
            ...t
        });
    return null == n ? '' : (0, r.Ye)(n);
}
