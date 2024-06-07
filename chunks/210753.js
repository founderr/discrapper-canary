"use strict";
a.r(t), a.d(t, {
  useDetectableGameSupplementalData: function() {
    return f
  }
}), a("653041"), a("47120");
var n = a("470079"),
  r = a("392711"),
  i = a.n(r),
  s = a("442837"),
  l = a("846519"),
  o = a("224706"),
  d = a("669764");

function c(e, t, a) {
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
    c(this, "_fetched", new Set), c(this, "_pending", new Set), c(this, "_flushHandler", new l.DelayedCall(0, () => this._flush()))
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
  return (0, s.useStateFromStoresObject)([d.default], () => ({
    isFetching: d.default.isFetching(e),
    localizedName: d.default.getLocalizedName(e),
    themes: d.default.getThemes(e),
    coverImageUrl: d.default.getCoverImageUrl(e, a)
  }))
}