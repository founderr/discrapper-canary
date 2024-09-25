n.d(t, {
    $: function () {
        return p;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(470079),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(846519),
    c = n(224706),
    d = n(669764);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = 20;
class f {
    request(e) {
        !(this._pending.has(e) || this._fetched.has(e)) && (this._pending.add(e), this._flushHandler.delay(!1));
    }
    _flush() {
        let e = [];
        this._pending.forEach((t) => {
            this._fetched.add(t), e.push(t);
        }),
            s()
                .chunk(e, E)
                .forEach((e) => {
                    c.Z.getDetectableGamesSupplemental(e);
                });
    }
    constructor() {
        _(this, '_fetched', new Set()), _(this, '_pending', new Set()), _(this, '_flushHandler', new u.sW(0, () => this._flush()));
    }
}
let h = new f();
function p(e, t) {
    a.useEffect(() => {
        null != e && h.request(e);
    }, [e]);
    let n = a.useMemo(
        () =>
            null != t
                ? {
                      width: t.coverImageWidth,
                      height: t.coverImageHeight
                  }
                : void 0,
        [t]
    );
    return (0, l.cj)([d.Z], () =>
        null == e
            ? {
                  isFetching: !1,
                  localizedName: void 0,
                  themes: void 0,
                  coverImageUrl: void 0
              }
            : {
                  isFetching: d.Z.isFetching(e),
                  localizedName: d.Z.getLocalizedName(e),
                  themes: d.Z.getThemes(e),
                  coverImageUrl: d.Z.getCoverImageUrl(e, n)
              }
    );
}
