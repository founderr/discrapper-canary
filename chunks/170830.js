var s, n;

function r(i) {
  let t = 0,
    e = [];
  return async function() {
    if (2 !== t) {
      if (1 === t) return new Promise(i => {
        e.push(i)
      });
      for (t = 1, await i(), t = 2; e.length > 0;) {
        var s;
        null === (s = e.shift()) || void 0 === s || s()
      }
    }
  }
}
e.d(t, {
  G: function() {
    return r
  }
}), e(653041), (n = s || (s = {}))[n.UNINITIALIZED = 0] = "UNINITIALIZED", n[n.INITIALIZING = 1] = "INITIALIZING", n[n.READY = 2] = "READY"