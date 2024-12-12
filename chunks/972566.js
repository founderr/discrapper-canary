e.exports = function (e, n) {
    for (var r = e.length, i = -1; ++i < r; ) e[i] ^= n[i];
    return e;
};
