function n(e, n, r, i) {
    for (var a = (65535 & e) | 0, s = ((e >>> 16) & 65535) | 0, o = 0; 0 !== r; ) {
        (o = r > 2000 ? 2000 : r), (r -= o);
        do s = (s + (a = (a + n[i++]) | 0)) | 0;
        while (--o);
        (a %= 65521), (s %= 65521);
    }
    return a | (s << 16) | 0;
}
e.exports = n;
