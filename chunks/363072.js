"use strict";
n.r(t), n.d(t, {
  Trie: function() {
    return o
  }
});
var i = n("141106");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let s = e => "*" === e.charAt(e.length - 1) ? i.MatchStrategy.PrefixMatch : i.MatchStrategy.ExactMatch;
class a {
  _internalAdd(e, t, n) {
    let i = e.charAt(0),
      r = this.suffix[i];
    null == r && (r = new a, this.suffix[i] = r, null != n ? r.value = n.slice(0, n.length - e.length + 1) : r.value = i), e.length > 1 && "*" !== e.charAt(1) ? r._internalAdd(e.substring(1), t, null != n ? n : e) : (r.strategy = s(t), r.isWord = !0)
  }
  add(e) {
    this._internalAdd(e, e)
  }
  constructor() {
    r(this, "isWord", void 0), r(this, "value", void 0), r(this, "suffix", {}), r(this, "strategy", void 0), this.isWord = null, this.value = null, this.suffix = {}, this.strategy = i.MatchStrategy.ExactMatch
  }
}
class o {
  static fromSnapshot(e) {
    let t = new o;
    return t.trie = e.trie, t
  }
  search(e) {
    let t = this.trie,
      n = null,
      r = null,
      s = {};
    for (let l = 0; l <= e.length; l++)
      if (n = e.charAt(l), (t = null != (r = t.suffix[n]) ? r : null != this.trie.suffix[n] ? this.trie.suffix[n] : this.trie).isWord) {
        var a, o;
        let n = t.strategy,
          r = l + 1 - (null !== (o = null === (a = t.value) || void 0 === a ? void 0 : a.length) && void 0 !== o ? o : 0),
          u = l;
        if ((0, i.isMatch)(e, r, u, n)) {
          let t = (0, i.getMatchedPositions)(e, r, u, n);
          (null == s[t.start] || s[t.start].end < t.end) && (s[t.start] = t)
        }
      } return s
  }
  addWord(e) {
    null == this.trie && (this.trie = new a), this.trie.add(e)
  }
  addWords(e) {
    e.forEach(e => this.addWord(e))
  }
  clear() {
    this.trie = new a
  }
  constructor() {
    r(this, "trie", void 0), this.trie = new a
  }
}