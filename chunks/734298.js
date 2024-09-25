n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(46973),
    o = n(198274);
function s(e) {
    let t = !1;
    e.on(a.aB.Destroy, () => (t = !0));
    let n = async () => {
        if (t) return;
        let r = [];
        e.eachConnection((e) =>
            r.push({
                connection: e,
                stats: e.emitStats()
            })
        );
        let i = [];
        for (let e of r) {
            let t = await e.stats;
            null != t &&
                i.push({
                    connection: e.connection,
                    stats: t
                });
        }
        e.emit(a.aB.ConnectionStats, i), setTimeout(n, o.T);
    };
    setTimeout(n, o.T);
}
