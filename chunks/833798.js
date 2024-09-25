n.d(t, {
    s: function () {
        return d;
    }
});
var r = n(47120);
var i = n(627341);
var a = n(278074),
    o = n(264181),
    s = n(178185),
    l = n(272280),
    u = n(806185);
function c(e, t, n) {
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
class d {
    static fromServer(e) {
        var t;
        return new d(
            Object.fromEntries(
                Object.entries(null !== (t = e.marketings) && void 0 !== t ? t : {}).map((e) => {
                    let [t, n] = e;
                    return [
                        t,
                        (0, a.EQ)(n)
                            .with({ type: o.Z.COACHTIP }, (e) => u.Z.fromServer(e))
                            .with({ type: o.Z.BADGE }, (e) => s.E.fromServer(e))
                            .with({ type: o.Z.BANNER }, (e) => l.I.fromServer(e))
                            .otherwise(() => void 0)
                    ];
                })
            )
        );
    }
    constructor(e) {
        c(this, 'marketingsBySurfaces', void 0), (this.marketingsBySurfaces = e);
    }
}
