var i = r(690244),
    a = i('%Math.abs%'),
    s = i('%Math.floor%'),
    o = r(45331),
    l = r(238896);
e.exports = function (e) {
    if ('number' != typeof e || o(e) || !l(e)) return !1;
    var n = a(e);
    return s(n) === n;
};
