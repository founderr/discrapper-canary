e.exports = function (e, t) {
    for (var r = -1, a = Array(e); ++r < e; ) a[r] = t(r);
    return a;
};
