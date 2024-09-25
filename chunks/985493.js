var r = n(413135).Buffer,
    i = n(988608),
    a = n(35609),
    o = n(168725);
function s(e) {
    return new o(new r(a[e].prime, 'hex'), new r(a[e].gen, 'hex'));
}
var l = {
    binary: !0,
    hex: !0,
    base64: !0
};
function u(e, t, n, a) {
    return r.isBuffer(t) || void 0 === l[t] ? u(e, 'binary', t, n) : ((t = t || 'binary'), (a = a || 'binary'), (n = n || new r([2])), !r.isBuffer(n) && (n = new r(n, a)), 'number' == typeof e) ? new o(i(e, n), n, !0) : (!r.isBuffer(e) && (e = new r(e, t)), new o(e, n, !0));
}
(t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = s), (t.createDiffieHellman = t.DiffieHellman = u);
