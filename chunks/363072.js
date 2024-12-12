r.d(n, {
    B: function () {
        return l;
    }
});
var i = r(141106);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let s = (e) => ('*' === e.charAt(e.length - 1) ? i.dQ.PrefixMatch : i.dQ.ExactMatch);
class o {
    _internalAdd(e, n, r) {
        let i = e.charAt(0),
            a = this.suffix[i];
        null == a && ((a = new o()), (this.suffix[i] = a), null != r ? (a.value = r.slice(0, r.length - e.length + 1)) : (a.value = i)), e.length > 1 && '*' !== e.charAt(1) ? a._internalAdd(e.substring(1), n, null != r ? r : e) : ((a.strategy = s(n)), (a.isWord = !0));
    }
    add(e) {
        this._internalAdd(e, e);
    }
    constructor() {
        a(this, 'isWord', void 0), a(this, 'value', void 0), a(this, 'suffix', {}), a(this, 'strategy', void 0), (this.isWord = null), (this.value = null), (this.suffix = {}), (this.strategy = i.dQ.ExactMatch);
    }
}
class l {
    static fromSnapshot(e) {
        let n = new l();
        return (n.trie = e.trie), n;
    }
    search(e) {
        let n = this.trie,
            r = null,
            a = null,
            s = {};
        for (let u = 0; u <= e.length; u++)
            if (((r = e.charAt(u)), (n = null != (a = n.suffix[r]) ? a : null != this.trie.suffix[r] ? this.trie.suffix[r] : this.trie).isWord)) {
                var o, l;
                let r = n.strategy,
                    a = u + 1 - (null !== (l = null === (o = n.value) || void 0 === o ? void 0 : o.length) && void 0 !== l ? l : 0),
                    c = u;
                if ((0, i.BD)(e, a, c, r)) {
                    let n = (0, i.jO)(e, a, c, r);
                    (null == s[n.start] || s[n.start].end < n.end) && (s[n.start] = n);
                }
            }
        return s;
    }
    addWord(e) {
        null == this.trie && (this.trie = new o()), this.trie.add(e);
    }
    addWords(e) {
        e.forEach((e) => this.addWord(e));
    }
    clear() {
        this.trie = new o();
    }
    constructor() {
        a(this, 'trie', void 0), (this.trie = new o());
    }
}
