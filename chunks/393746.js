n.d(e, {
  f: function() {
    return s
  }
});
var r = n(347421),
  i = n(880803),
  a = n(56618);

function s(t, e = (0, a.x)()) {
  let n = 0,
    s = 0;
  return (0, r.q)(t, function(r) {
    let o = r.body.length;
    n += o, s++;
    let l = {
      body: r.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: t.headers,
      keepalive: n <= 6e4 && s < 15,
      ...t.fetchOptions
    };
    try {
      return e(t.url, l).then(t => (n -= o, s--, {
        statusCode: t.status,
        headers: {
          "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": t.headers.get("Retry-After")
        }
      }))
    } catch (t) {
      return (0, a.c)(), n -= o, s--, (0, i.$2)(t)
    }
  })
}