var r = n(531478).codes.ERR_INVALID_OPT_VALUE;
function i(e, t, n) {
    return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
}
function a(e, t, n, a) {
    var o = i(t, a, n);
    if (null != o) {
        if (!(isFinite(o) && Math.floor(o) === o) || o < 0) throw new r(a ? n : 'highWaterMark', o);
        return Math.floor(o);
    }
    return e.objectMode ? 16 : 16384;
}
e.exports = { getHighWaterMark: a };
