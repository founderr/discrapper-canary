e = r.nmd(e);
var i = r(325237),
    a = n && !n.nodeType && n,
    s = a && e && !e.nodeType && e,
    o = s && s.exports === a ? i.Buffer : void 0,
    l = o ? o.allocUnsafe : void 0;
function u(e, n) {
    if (n) return e.slice();
    var r = e.length,
        i = l ? l(r) : new e.constructor(r);
    return e.copy(i), i;
}
e.exports = u;
