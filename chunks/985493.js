var i = r(413135).Buffer,
    a = r(988608),
    s = r(35609),
    o = r(168725);
function l(e) {
    return new o(new i(s[e].prime, 'hex'), new i(s[e].gen, 'hex'));
}
var u = {
    binary: !0,
    hex: !0,
    base64: !0
};
function c(e, n, r, s) {
    return i.isBuffer(n) || void 0 === u[n] ? c(e, 'binary', n, r) : ((n = n || 'binary'), (s = s || 'binary'), (r = r || new i([2])), !i.isBuffer(r) && (r = new i(r, s)), 'number' == typeof e) ? new o(a(e, r), r, !0) : (!i.isBuffer(e) && (e = new i(e, n)), new o(e, r, !0));
}
(n.DiffieHellmanGroup = n.createDiffieHellmanGroup = n.getDiffieHellman = l), (n.createDiffieHellman = n.DiffieHellman = c);
