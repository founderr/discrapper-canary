var n = r(959318),
    a = Math.max,
    o = Math.min;
e.exports = function (e, t) {
    var r = n(e);
    return r < 0 ? a(r + t, 0) : o(r, t);
};
