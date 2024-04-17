"use strict";
n.r(t), n.d(t, {
  useDetectableGameSupplementalData: function() {
    return f
  }
}), n("653041"), n("47120");
var a = n("470079"),
  s = n("392711"),
  l = n.n(s),
  i = n("442837"),
  r = n("846519"),
  o = n("224706"),
  u = n("669764");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = new class e {
  request(e) {
    !(this._pending.has(e) || this._fetched.has(e)) && (this._pending.add(e), this._flushHandler.delay(!1))
  }
  _flush() {
    let e = [];
    this._pending.forEach(t => {
      this._fetched.add(t), e.push(t)
    }), l().chunk(e, 20).forEach(e => {
      o.default.getDetectableGamesSupplemental(e)
    })
  }
  constructor() {
    d(this, "_fetched", new Set), d(this, "_pending", new Set), d(this, "_flushHandler", new r.DelayedCall(0, () => this._flush()))
  }
};

function f(e, t) {
  a.useEffect(() => {
    c.request(e)
  }, [e]);
  let n = a.useMemo(() => null != t ? {
    width: t.coverImageWidth,
    height: t.coverImageHeight
  } : void 0, [t]);
  return (0, i.useStateFromStoresObject)([u.default], () => ({
    isFetching: u.default.isFetching(e),
    localizedName: u.default.getLocalizedName(e),
    themes: u.default.getThemes(e),
    coverImageUrl: u.default.getCoverImageUrl(e, n)
  }))
}