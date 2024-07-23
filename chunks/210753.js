s.d(a, {
  $: function() {
return I;
  }
}), s(653041), s(47120);
var n = s(470079),
  t = s(392711),
  r = s.n(t),
  l = s(442837),
  i = s(846519),
  c = s(224706),
  E = s(669764);

function o(e, a, s) {
  return a in e ? Object.defineProperty(e, a, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[a] = s, e;
}
let _ = new class e {
  request(e) {
!(this._pending.has(e) || this._fetched.has(e)) && (this._pending.add(e), this._flushHandler.delay(!1));
  }
  _flush() {
let e = [];
this._pending.forEach(a => {
  this._fetched.add(a), e.push(a);
}), r().chunk(e, 20).forEach(e => {
  c.Z.getDetectableGamesSupplemental(e);
});
  }
  constructor() {
o(this, '_fetched', new Set()), o(this, '_pending', new Set()), o(this, '_flushHandler', new i.sW(0, () => this._flush()));
  }
}();

function I(e, a) {
  n.useEffect(() => {
null != e && _.request(e);
  }, [e]);
  let s = n.useMemo(() => null != a ? {
width: a.coverImageWidth,
height: a.coverImageHeight
  } : void 0, [a]);
  return (0, l.cj)([E.Z], () => null == e ? {
isFetching: !1,
localizedName: void 0,
themes: void 0,
coverImageUrl: void 0
  } : {
isFetching: E.Z.isFetching(e),
localizedName: E.Z.getLocalizedName(e),
themes: E.Z.getThemes(e),
coverImageUrl: E.Z.getCoverImageUrl(e, s)
  });
}