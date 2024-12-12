r.d(n, {
    $U: function () {
        return d;
    },
    KP: function () {
        return h;
    },
    Tn: function () {
        return c;
    },
    dt: function () {
        return p;
    },
    xx: function () {
        return f;
    }
});
var i = r(392711),
    a = r.n(i),
    s = r(544891),
    o = r(981631);
let l = 5,
    u = 1000000;
async function c() {
    return (
        await s.tn.get({
            url: o.ANM.NOTIFICATION_SNAPSHOTS,
            rejectWithError: !1
        })
    ).body;
}
async function d(e) {
    return (
        await s.tn.post({
            url: o.ANM.NOTIFICATION_SNAPSHOTS,
            body: { label: e },
            rejectWithError: !1
        })
    ).body;
}
async function f(e) {
    return (
        await s.tn.post({
            url: o.ANM.RESTORE_NOTIFICATION_SNAPSHOT(e),
            rejectWithError: !1
        })
    ).body;
}
async function _(e) {
    return (
        await s.tn.del({
            url: o.ANM.NOTIFICATION_SNAPSHOT(e),
            rejectWithError: !1
        })
    ).body;
}
async function h() {
    let e = await c(),
        n = a().sortBy(e, (e) => new Date(e.recorded_at).getTime());
    0 !== n.length && (await f(n[n.length - 1].id));
}
async function p(e) {
    if (e.length > 0) {
        var n;
        let r = a().sum(e.map((e) => e.length)),
            i = null !== (n = a().max(e.map((e) => e.length))) && void 0 !== n ? n : 0;
        if (e.length >= l || r + i > u) {
            let n = a().sortBy(e, (e) => new Date(e.recorded_at).getTime());
            await _(n[0].id);
        }
    }
    return d('Backup from '.concat(new Date().toLocaleDateString()));
}
