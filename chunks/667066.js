var r = n(657398),
    i = n(708187),
    a = n(389109),
    o = '[object Object]',
    s = Object.prototype,
    l = Function.prototype.toString,
    u = s.hasOwnProperty,
    c = l.call(Object);
function d(e) {
    if (!a(e) || r(e) != o) return !1;
    var t = i(e);
    if (null === t) return !0;
    var n = u.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n instanceof n && l.call(n) == c;
}
e.exports = d;
