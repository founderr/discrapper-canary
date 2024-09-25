n.d(t, {
    $U: function () {
        return c;
    },
    KP: function () {
        return E;
    },
    Tn: function () {
        return u;
    },
    dt: function () {
        return f;
    },
    xx: function () {
        return d;
    }
});
var r = n(392711),
    i = n.n(r),
    a = n(544891),
    o = n(981631);
let s = 5,
    l = 1000000;
async function u() {
    return (await a.tn.get(o.ANM.NOTIFICATION_SNAPSHOTS)).body;
}
async function c(e) {
    return (
        await a.tn.post({
            url: o.ANM.NOTIFICATION_SNAPSHOTS,
            body: { label: e }
        })
    ).body;
}
async function d(e) {
    return (await a.tn.post(o.ANM.RESTORE_NOTIFICATION_SNAPSHOT(e))).body;
}
async function _(e) {
    return (await a.tn.del(o.ANM.NOTIFICATION_SNAPSHOT(e))).body;
}
async function E() {
    let e = await u(),
        t = i().sortBy(e, (e) => new Date(e.recorded_at).getTime());
    0 !== t.length && (await d(t[t.length - 1].id));
}
async function f(e) {
    if (e.length > 0) {
        var t;
        let n = i().sum(e.map((e) => e.length)),
            r = null !== (t = i().max(e.map((e) => e.length))) && void 0 !== t ? t : 0;
        if (e.length >= s || n + r > l) {
            let t = i().sortBy(e, (e) => new Date(e.recorded_at).getTime());
            await _(t[0].id);
        }
    }
    return c('Backup from '.concat(new Date().toLocaleDateString()));
}
