t.d(n, {
  D: function() {
    return r
  }
}), t(411104);

function r(e, n, t) {
  if (e.byteLength < n) throw Error("data.byteLength must be greater than or equal to desiredLength");
  if (n % t != 0) throw Error("desiredLength must be a multiple of groupSize");
  if (t > 8) throw Error("groupSize must be less than or equal to ".concat(8));
  let r = BigInt(10 ** t),
    o = "";
  for (let u = 0; u < n; u += t) {
    let n = BigInt(0);
    for (let r = t; r > 0; --r) n = n << 8n | BigInt(e[u + (t - r)]);
    n %= r, o += n.toString().padStart(t, "0")
  }
  return o
}