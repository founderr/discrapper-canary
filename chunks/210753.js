"use strict";
s.r(t), s.d(t, {
  useDetectableGameSupplementalData: function() {
    return T
  }
}), s("653041"), s("47120");
var a = s("470079"),
  n = s("392711"),
  i = s.n(n),
  E = s("442837"),
  l = s("846519"),
  _ = s("224706"),
  r = s("669764");

function u(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let o = new class e {
  request(e) {
    !(this._pending.has(e) || this._fetched.has(e)) && (this._pending.add(e), this._flushHandler.delay(!1))
  }
  _flush() {
    let e = [];
    this._pending.forEach(t => {
      this._fetched.add(t), e.push(t)
    }), i().chunk(e, 20).forEach(e => {
      _.default.getDetectableGamesSupplemental(e)
    })
  }
  constructor() {
    u(this, "_fetched", new Set), u(this, "_pending", new Set), u(this, "_flushHandler", new l.DelayedCall(0, () => this._flush()))
  }
};

function T(e, t) {
  a.useEffect(() => {
    o.request(e)
  }, [e]);
  let s = a.useMemo(() => null != t ? {
    width: t.coverImageWidth,
    height: t.coverImageHeight
  } : void 0, [t]);
  return (0, E.useStateFromStoresObject)([r.default], () => ({
    isFetching: r.default.isFetching(e),
    localizedName: r.default.getLocalizedName(e),
    themes: r.default.getThemes(e),
    coverImageUrl: r.default.getCoverImageUrl(e, s)
  }))
}