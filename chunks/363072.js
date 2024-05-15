"use strict";
n.r(t), n.d(t, {
  Trie: function() {
    return r
  }
});
var a = n("141106");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let i = e => "*" === e.charAt(e.length - 1) ? a.MatchStrategy.PrefixMatch : a.MatchStrategy.ExactMatch;
class l {
  _internalAdd(e, t, n) {
    let a = e.charAt(0),
      s = this.suffix[a];
    null == s && (s = new l, this.suffix[a] = s, null != n ? s.value = n.slice(0, n.length - e.length + 1) : s.value = a), e.length > 1 && "*" !== e.charAt(1) ? s._internalAdd(e.substring(1), t, null != n ? n : e) : (s.strategy = i(t), s.isWord = !0)
  }
  add(e) {
    this._internalAdd(e, e)
  }
  constructor() {
    s(this, "isWord", void 0), s(this, "value", void 0), s(this, "suffix", {}), s(this, "strategy", void 0), this.isWord = null, this.value = null, this.suffix = {}, this.strategy = a.MatchStrategy.ExactMatch
  }
}
class r {
  static fromSnapshot(e) {
    let t = new r;
    return t.trie = e.trie, t
  }
  search(e) {
    let t = this.trie,
      n = null,
      s = null,
      i = {};
    for (let u = 0; u <= e.length; u++)
      if (n = e.charAt(u), (t = null != (s = t.suffix[n]) ? s : this.trie).isWord) {
        var l, r, o;
        let n = t.strategy,
          s = u + 1 - (null !== (r = null === (l = t.value) || void 0 === l ? void 0 : l.length) && void 0 !== r ? r : 0),
          d = u;
        if ((0, a.isMatch)(e, s, d, n)) {
          let t = (0, a.getMatchedPositions)(e, s, d, n);
          i[t.start] = Math.max(Number(null !== (o = i[t.start]) && void 0 !== o ? o : 0), t.end)
        }
      } return i
  }
  addWord(e) {
    this.trie.add(e)
  }
  addWords(e) {
    e.forEach(e => this.addWord(e))
  }
  clear() {
    this.trie = new l
  }
  constructor() {
    s(this, "trie", void 0), this.trie = new l
  }
}