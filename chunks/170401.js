"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("47120"), s("653041");
var a = s("658722"),
  n = s.n(a);

function l(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class i {
  search(e) {
    return new Promise(t => {
      t(this.getMatchingSettings(e))
    })
  }
  getMatchingSettings(e) {
    let t = this.cache[e];
    if (null != t) return t;
    {
      let t = [];
      return this.terms.forEach(s => {
        let [a, l] = s;
        n()(e.toLowerCase(), l.toLowerCase()) && t.push(a)
      }), this.cache[e] = t, t
    }
  }
  constructor(e) {
    l(this, "terms", void 0), l(this, "cache", void 0), this.terms = e, this.cache = {}
  }
}