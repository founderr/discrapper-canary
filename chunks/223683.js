n.d(t, {
    $U: function () {
        return l;
    },
    KP: function () {
        return d;
    },
    Tn: function () {
        return o;
    },
    dt: function () {
        return f;
    },
    xx: function () {
        return u;
    }
});
var r = n(392711),
    i = n.n(r),
    a = n(544891),
    s = n(981631);
async function o() {
    return (
        await a.tn.get({
            url: s.ANM.NOTIFICATION_SNAPSHOTS,
            rejectWithError: !1
        })
    ).body;
}
async function l(e) {
    return (
        await a.tn.post({
            url: s.ANM.NOTIFICATION_SNAPSHOTS,
            body: { label: e },
            rejectWithError: !1
        })
    ).body;
}
async function u(e) {
    return (
        await a.tn.post({
            url: s.ANM.RESTORE_NOTIFICATION_SNAPSHOT(e),
            rejectWithError: !1
        })
    ).body;
}
async function c(e) {
    return (
        await a.tn.del({
            url: s.ANM.NOTIFICATION_SNAPSHOT(e),
            rejectWithError: !1
        })
    ).body;
}
async function d() {
    let e = await o(),
        t = i().sortBy(e, (e) => new Date(e.recorded_at).getTime());
    0 !== t.length && (await u(t[t.length - 1].id));
}
async function f(e) {
    if (e.length > 0) {
        var t;
        let n = i().sum(e.map((e) => e.length)),
            r = null !== (t = i().max(e.map((e) => e.length))) && void 0 !== t ? t : 0;
        if (e.length >= 5 || n + r > 1000000) {
            let t = i().sortBy(e, (e) => new Date(e.recorded_at).getTime());
            await c(t[0].id);
        }
    }
    return l('Backup from '.concat(new Date().toLocaleDateString()));
}
