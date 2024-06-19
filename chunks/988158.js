n.d(e, {
  X: function() {
    return r
  },
  h: function() {
    return a
  }
}), n(757143), n(47120);
var o = n(470079),
  s = n(902676);

function a(t) {
  let {
    protocol: e,
    hostname: n
  } = o.useMemo(() => ({
    protocol: (0, s.E)(t),
    hostname: (0, s.F)(t)
  }), [t]), a = "".concat(e, "//").concat(n);
  return {
    protocol: e,
    hostname: n,
    theRestOfTheUrl: t.replace(a, "")
  }
}

function r(t) {
  let {
    url: e,
    trustUrl: n,
    onConfirm: s,
    onClose: r
  } = t, [l, i] = o.useState(!1), {
    protocol: c,
    hostname: d,
    theRestOfTheUrl: u
  } = a(e), _ = o.useCallback(() => {
    l && n(e), null == r || r(), s()
  }, [e, l, n, s, r]);
  return {
    protocol: c,
    hostname: d,
    theRestOfTheUrl: u,
    shouldTrustUrl: l,
    setShouldTrustUrl: i,
    handleConfirm: _
  }
}