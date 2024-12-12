var i = r(195168),
    a = 'object' == typeof exports && exports && !exports.nodeType && exports,
    s = a && 'object' == typeof module && module && !module.nodeType && module,
    o = s && s.exports === a ? i.Z.Buffer : void 0,
    l = o ? o.allocUnsafe : void 0;
function u(e, n) {
    if (n) return e.slice();
    var r = e.length,
        i = l ? l(r) : new e.constructor(r);
    return e.copy(i), i;
}
n.Z = u;
