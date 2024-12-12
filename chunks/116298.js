var i = r(134533),
    a = r(690244),
    s = i() && a('%Object.defineProperty%', !0),
    o = i.hasArrayLengthDefineBug(),
    l = o && r(453312),
    u = r(192853)('Object.prototype.propertyIsEnumerable');
e.exports = function (e, n, r, i, a, c) {
    if (!s) {
        if (!e(c) || !c['[[Configurable]]'] || !c['[[Writable]]'] || (a in i && u(i, a) !== !!c['[[Enumerable]]'])) return !1;
        var d = c['[[Value]]'];
        return (i[a] = d), n(i[a], d);
    }
    return o && 'length' === a && '[[Value]]' in c && l(i) && i.length !== c['[[Value]]'] ? ((i.length = c['[[Value]]']), i.length === c['[[Value]]']) : (s(i, a, r(c)), !0);
};
