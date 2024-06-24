t.d(s, {
  Z: function() {
    return l
  }
}), t(47120), t(653041);
var n = t(658722),
  i = t.n(n);

function a(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class l {
  search(e) {
    return new Promise(s => {
      s(this.getMatchingSettings(e))
    })
  }
  getMatchingSettings(e) {
    let s = this.cache[e];
    if (null != s) return s;
    {
      let s = [];
      return this.terms.forEach(t => {
        let [n, a] = t;
        for (let t of a)
          if (i()(e.toLowerCase(), t.toLowerCase())) {
            s.push(n);
            break
          }
      }), this.cache[e] = s, s
    }
  }
  constructor(e) {
    a(this, "terms", void 0), a(this, "cache", void 0), this.terms = e, this.cache = {}
  }
}