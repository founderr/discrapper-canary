s.d(t, {
  t: function() {
return r;
  }
}), s(653041), s(47120);
var n = s(859159),
  a = s(589983);

function i(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
class r {
  formatToParts(e, t, s) {
return (0, a.FK)(this.ast, this.locale, e, t, s);
  }
  formatToPlainString(e, t, s) {
if (null == this.plainAst)
  for (let e of (this.plainAst = [], this.ast))
    this.plainAst.push(...this._removeRichTags(e));
let n = (0, a.FK)(this.plainAst, this.locale, e, t, s),
  i = '';
for (let e of n)
  i += String(e.value);
return i;
  }
  _removeRichTags(e) {
if (e.type !== n.wD.tag)
  return [e];
{
  let t = [];
  for (let s of e.children)
    t.push(...this._removeRichTags(s));
  return t;
}
  }
  constructor(e, t) {
i(this, 'locale', void 0), i(this, 'message', void 0), i(this, 'ast', void 0), i(this, 'plainAst', void 0), this.locale = t, 'string' == typeof e ? (this.message = e, this.ast = (0, n.Qc)(e)) : this.ast = e, this.plainAst = void 0;
  }
}