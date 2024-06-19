n.d(e, {
  JY: function() {
    return r
  },
  Q: function() {
    return i
  },
  WG: function() {
    return a
  }
});

function r(t, e = Date.now()) {
  let n = parseInt(`${t}`, 10);
  if (!isNaN(n)) return 1e3 * n;
  let r = Date.parse(`${t}`);
  return isNaN(r) ? 6e4 : r - e
}

function i(t, e, n = Date.now()) {
  var r;
  return ((r = t)[e] || r.all || 0) > n
}

function a(t, {
  statusCode: e,
  headers: n
}, i = Date.now()) {
  let a = {
      ...t
    },
    s = n && n["x-sentry-rate-limits"],
    o = n && n["retry-after"];
  if (s)
    for (let t of s.trim().split(",")) {
      let [e, n] = t.split(":", 2), r = parseInt(e, 10), s = (isNaN(r) ? 60 : r) * 1e3;
      if (n)
        for (let t of n.split(";")) a[t] = i + s;
      else a.all = i + s
    } else o ? a.all = i + r(o, i) : 429 === e && (a.all = i + 6e4);
  return a
}