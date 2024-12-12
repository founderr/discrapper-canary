var i = r(657398),
    a = r(708187),
    s = r(389109),
    o = '[object Object]',
    l = Object.prototype,
    u = Function.prototype.toString,
    c = l.hasOwnProperty,
    d = u.call(Object);
function f(e) {
    if (!s(e) || i(e) != o) return !1;
    var n = a(e);
    if (null === n) return !0;
    var r = c.call(n, 'constructor') && n.constructor;
    return 'function' == typeof r && r instanceof r && u.call(r) == d;
}
e.exports = f;
