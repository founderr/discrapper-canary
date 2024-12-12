function r(e) {
    var n = typeof e;
    return 'string' == n || 'number' == n || 'symbol' == n || 'boolean' == n ? '__proto__' !== e : null === e;
}
n.Z = r;
