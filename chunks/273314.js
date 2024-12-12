var i = r(690244),
    a = i('%TypeError%'),
    s = i('%Number%'),
    o = r(814277),
    l = r(444685),
    u = r(537631);
e.exports = function (e) {
    var n = o(e) ? e : l(e, s);
    if ('symbol' == typeof n) throw new a('Cannot convert a Symbol value to a number');
    if ('bigint' == typeof n) throw new a("Conversion from 'BigInt' to 'number' is not allowed.");
    return 'string' == typeof n ? u(n) : s(n);
};
