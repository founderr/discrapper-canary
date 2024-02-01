n("70102"), n("424973");
var r = n("912065").Buffer,
  i = n("839383"),
  o = n("814548").ec,
  s = n("596659"),
  a = n("49873");

function c(e, t) {
  if (0 >= e.cmpn(0) || e.cmp(t) >= t) throw Error("invalid sig")
}
e.exports = function(e, t, n, u, l) {
  var d = s(n);
  if ("ec" === d.type) {
    if ("ecdsa" !== u && "ecdsa/rsa" !== u) throw Error("wrong public key type");
    return function(e, t, n) {
      var r = a[n.data.algorithm.curve.join(".")];
      if (!r) throw Error("unknown curve " + n.data.algorithm.curve.join("."));
      var i = new o(r),
        s = n.data.subjectPrivateKey.data;
      return i.verify(t, e, s)
    }(e, t, d)
  }
  if ("dsa" === d.type) {
    if ("dsa" !== u) throw Error("wrong public key type");
    return function(e, t, n) {
      var r = n.data.p,
        o = n.data.q,
        a = n.data.g,
        u = n.data.pub_key,
        l = s.signature.decode(e, "der"),
        d = l.s,
        f = l.r;
      c(d, o), c(f, o);
      var p = i.mont(r),
        h = d.invm(o);
      return 0 === a.toRed(p).redPow(new i(t).mul(h).mod(o)).fromRed().mul(u.toRed(p).redPow(f.mul(h).mod(o)).fromRed()).mod(r).mod(o).cmp(f)
    }(e, t, d)
  }
  if ("rsa" !== u && "ecdsa/rsa" !== u) throw Error("wrong public key type");
  t = r.concat([l, t]);
  for (var f = d.modulus.byteLength(), p = [1], h = 0; t.length + p.length + 2 < f;) p.push(255), h++;
  p.push(0);
  for (var v = -1; ++v < t.length;) p.push(t[v]);
  p = r.from(p);
  var g = i.mont(d.modulus);
  e = (e = new i(e).toRed(g)).redPow(new i(d.publicExponent)), e = r.from(e.fromRed().toArray());
  var b = h < 8 ? 1 : 0;
  for (f = Math.min(e.length, p.length), e.length !== p.length && (b = 1), v = -1; ++v < f;) b |= e[v] ^ p[v];
  return 0 === b
}