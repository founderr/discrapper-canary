r.d(n, {
    s: function () {
        return f;
    }
});
var i = r(47120);
var a = r(627341);
var s = r(278074),
    o = r(264181),
    l = r(178185),
    u = r(272280),
    c = r(806185);
function d(e, n, r) {
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
class f {
    static fromServer(e) {
        var n;
        return new f(
            Object.fromEntries(
                Object.entries(null !== (n = e.marketings) && void 0 !== n ? n : {}).map((e) => {
                    let [n, r] = e;
                    return [
                        n,
                        (0, s.EQ)(r)
                            .with({ type: o.Z.COACHTIP }, (e) => c.Z.fromServer(e))
                            .with({ type: o.Z.BADGE }, (e) => l.E.fromServer(e))
                            .with({ type: o.Z.BANNER }, (e) => u.I.fromServer(e))
                            .otherwise(() => void 0)
                    ];
                })
            )
        );
    }
    constructor(e) {
        d(this, 'marketingsBySurfaces', void 0), (this.marketingsBySurfaces = e);
    }
}
