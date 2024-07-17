E.d(_, {
  $: function() {
return L;
  }
}), E(653041), E(47120);
var s = E(470079),
  T = E(392711),
  I = E.n(T),
  n = E(442837),
  A = E(846519),
  t = E(224706),
  a = E(669764);

function r(e, _, E) {
  return _ in e ? Object.defineProperty(e, _, {
value: E,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[_] = E, e;
}
let N = new class e {
  request(e) {
!(this._pending.has(e) || this._fetched.has(e)) && (this._pending.add(e), this._flushHandler.delay(!1));
  }
  _flush() {
let e = [];
this._pending.forEach(_ => {
  this._fetched.add(_), e.push(_);
}), I().chunk(e, 20).forEach(e => {
  t.Z.getDetectableGamesSupplemental(e);
});
  }
  constructor() {
r(this, '_fetched', new Set()), r(this, '_pending', new Set()), r(this, '_flushHandler', new A.sW(0, () => this._flush()));
  }
}();

function L(e, _) {
  s.useEffect(() => {
null != e && N.request(e);
  }, [e]);
  let E = s.useMemo(() => null != _ ? {
width: _.coverImageWidth,
height: _.coverImageHeight
  } : void 0, [_]);
  return (0, n.cj)([a.Z], () => null == e ? {
isFetching: !1,
localizedName: void 0,
themes: void 0,
coverImageUrl: void 0
  } : {
isFetching: a.Z.isFetching(e),
localizedName: a.Z.getLocalizedName(e),
themes: a.Z.getThemes(e),
coverImageUrl: a.Z.getCoverImageUrl(e, E)
  });
}