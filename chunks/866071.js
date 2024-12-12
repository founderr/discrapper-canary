r.d(n, {
    K: function () {
        return o;
    }
});
var i = r(339085),
    a = r(176354),
    s = r(185923);
function o(e, n) {
    if (null == e.id) return !0;
    let r = i.ZP.getCustomEmojiById(e.id);
    return (
        null != r &&
        !a.ZP.isEmojiDisabled({
            emoji: r,
            channel: n,
            intention: s.Hz.STATUS
        })
    );
}
