var i = r(730179),
    a = r(474334);
function s(e, n, r, s) {
    var o = e.length;
    for ((r = i(r)) < 0 && (r = -r > o ? 0 : o + r), (s = void 0 === s || s > o ? o : i(s)) < 0 && (s += o), s = r > s ? 0 : a(s); r < s; ) e[r++] = n;
    return e;
}
e.exports = s;
