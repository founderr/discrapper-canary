r.d(n, {
    O: function () {
        return l;
    }
});
var i = r(594174),
    a = r(339085),
    s = r(396352),
    o = r(664437);
function l(e) {
    if (null == e || null == i.default.getCurrentUser()) return;
    let n = a.ZP.getTopEmojisMetadata(e);
    if (null != n) {
        let { topEmojisTTL: e } = n;
        if (null == e || Date.now() < e) return;
    }
    if (!s.Z.getIsFetching(e)) (0, o.pj)(e);
}
