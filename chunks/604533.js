var r = n(176338),
    i = n(754401),
    a = n(370873),
    o = '[object Object]',
    s = Object.prototype,
    l = Function.prototype.toString,
    u = s.hasOwnProperty,
    c = l.call(Object);
function d(e) {
    if (!(0, a.Z)(e) || (0, r.Z)(e) != o) return !1;
    var t = (0, i.Z)(e);
    if (null === t) return !0;
    var n = u.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n instanceof n && l.call(n) == c;
}
t.Z = d;
