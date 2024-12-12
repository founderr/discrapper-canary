r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(46973),
    o = r(198274);
function l(e) {
    let n = !1;
    e.on(s.aB.Destroy, () => (n = !0));
    let r = async () => {
        if (n) return;
        let i = [];
        e.eachConnection((e) =>
            i.push({
                connection: e,
                stats: e.emitStats()
            })
        );
        let a = [];
        for (let e of i) {
            let n = await e.stats;
            null != n &&
                a.push({
                    connection: e.connection,
                    stats: n
                });
        }
        e.emit(s.aB.ConnectionStats, a), setTimeout(r, o.T);
    };
    setTimeout(r, o.T);
}
