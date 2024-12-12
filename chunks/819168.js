r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(306680),
    a = r(70956),
    s = r(709054);
function o(e) {
    if (null == e.threadMetadata) return 0;
    let n = e.threadMetadata.autoArchiveDuration * a.Z.Millis.MINUTE;
    return l(e) + n;
}
function l(e) {
    var n;
    if (null == e.threadMetadata) return 0;
    let r = null !== (n = i.ZP.lastMessageId(e.id)) && void 0 !== n ? n : e.id,
        a = s.default.extractTimestamp(r);
    return Math.max(a, null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0);
}
