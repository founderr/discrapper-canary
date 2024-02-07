var n = r("253792"),
  u = r("766665");
e.exports = function(e, t, r, o) {
  var a = !r;
  r || (r = {});
  for (var i = -1, s = t.length; ++i < s;) {
    var l = t[i],
      c = o ? o(r[l], e[l], l, r, e) : void 0;
    void 0 === c && (c = e[l]), a ? u(r, l, c) : n(r, l, c)
  }
  return r
}