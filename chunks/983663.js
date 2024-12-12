function n(e, n, r, i) {
    for (var a = e.length, s = r + (i ? 1 : -1); i ? s-- : ++s < a; ) if (n(e[s], s, e)) return s;
    return -1;
}
e.exports = n;
