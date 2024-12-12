var i = r(413135).Buffer;
e.exports = function (e, n) {
    for (var r = Math.min(e.length, n.length), a = new i(r), s = 0; s < r; ++s) a[s] = e[s] ^ n[s];
    return a;
};
