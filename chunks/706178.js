var r = n(444675),
    i = 65536,
    a = 4294967295;
function o() {
    throw Error('Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11');
}
var s = n(957578).Buffer,
    l = n.g.crypto || n.g.msCrypto;
function u(e, t) {
    if (e > a) throw RangeError('requested too many random bytes');
    var n = s.allocUnsafe(e);
    if (e > 0) {
        if (e > i) for (var o = 0; o < e; o += i) l.getRandomValues(n.slice(o, o + i));
        else l.getRandomValues(n);
    }
    return 'function' == typeof t
        ? r.nextTick(function () {
              t(null, n);
          })
        : n;
}
l && l.getRandomValues ? (e.exports = u) : (e.exports = o);
