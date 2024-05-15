"use strict";
a.r(t), a.d(t, {
  useDetectableGameSupplementalData: function() {
    return f
  }
}), a("653041"), a("47120");
var n = a("470079"),
  r = a("392711"),
  i = a.n(r),
  l = a("442837"),
  s = a("846519"),
  o = a("224706"),
  c = a("669764");

function d(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let u = new class e {
  request(e) {
    !(this._pending.has(e) || this._fetched.has(e)) && (this._pending.add(e), this._flushHandler.delay(!1))
  }
  _flush() {
    let e = [];
    this._pending.forEach(t => {
      this._fetched.add(t), e.push(t)
    }), i().chunk(e, 20).forEach(e => {
      o.default.getDetectableGamesSupplemental(e)
    })
  }
  constructor() {
    d(this, "_fetched", new Set), d(this, "_pending", new Set), d(this, "_flushHandler", new s.DelayedCall(0, () => this._flush()))
  }
};

function f(e, t) {
  n.useEffect(() => {
    u.request(e)
  }, [e]);
  let a = n.useMemo(() => null != t ? {
    width: t.coverImageWidth,
    height: t.coverImageHeight
  } : void 0, [t]);
  return (0, l.useStateFromStoresObject)([c.default], () => ({
    isFetching: c.default.isFetching(e),
    localizedName: c.default.getLocalizedName(e),
    themes: c.default.getThemes(e),
    coverImageUrl: c.default.getCoverImageUrl(e, a)
  }))
}