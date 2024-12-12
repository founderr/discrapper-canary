var i = r(531478).codes.ERR_INVALID_OPT_VALUE;
function a(e, n, r) {
    return null != e.highWaterMark ? e.highWaterMark : n ? e[r] : null;
}
function s(e, n, r, s) {
    var o = a(n, s, r);
    if (null != o) {
        if (!(isFinite(o) && Math.floor(o) === o) || o < 0) throw new i(s ? r : 'highWaterMark', o);
        return Math.floor(o);
    }
    return e.objectMode ? 16 : 16384;
}
e.exports = { getHighWaterMark: s };
