n.d(e, {
  Z: function() {
    return a
  }
});
var r = n(46834),
  i = n(336344);

function a(t, e, n = 250, a, l, u, c) {
  if (!u.exception || !u.exception.values || !c || !(0, r.V9)(c.originalException, Error)) return;
  let d = u.exception.values.length > 0 ? u.exception.values[u.exception.values.length - 1] : void 0;
  d && (u.exception.values = function(t, e) {
    return t.map(t => (t.value && (t.value = (0, i.$G)(t.value, e)), t))
  }(function t(e, n, i, a, l, u, c, d) {
    if (u.length >= i + 1) return u;
    let h = [...u];
    if ((0, r.V9)(a[l], Error)) {
      s(c, d);
      let r = e(n, a[l]),
        u = h.length;
      o(r, l, u, d), h = t(e, n, i, a[l], l, [r, ...h], r, u)
    }
    return Array.isArray(a.errors) && a.errors.forEach((a, u) => {
      if ((0, r.V9)(a, Error)) {
        s(c, d);
        let r = e(n, a),
          _ = h.length;
        o(r, `errors[${u}]`, _, d), h = t(e, n, i, a, l, [r, ...h], r, _)
      }
    }), h
  }(t, e, l, c.originalException, a, u.exception.values, d, 0), n))
}

function s(t, e) {
  t.mechanism = t.mechanism || {
    type: "generic",
    handled: !0
  }, t.mechanism = {
    ...t.mechanism,
    is_exception_group: !0,
    exception_id: e
  }
}

function o(t, e, n, r) {
  t.mechanism = t.mechanism || {
    type: "generic",
    handled: !0
  }, t.mechanism = {
    ...t.mechanism,
    type: "chained",
    source: e,
    exception_id: n,
    parent_id: r
  }
}