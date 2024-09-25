var r = n(875604),
    i = n(752206),
    a = n(638636),
    o = Array.prototype,
    s = String.prototype;
e.exports = function (e) {
    var t = e.includes;
    return e === o || (r(o, e) && t === o.includes) ? i : 'string' == typeof e || e === s || (r(s, e) && t === s.includes) ? a : t;
};
