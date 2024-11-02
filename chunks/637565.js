n.d(e, {
    T: function () {
        return a;
    }
}),
    n(47120);
var i = n(149765),
    l = n(973542),
    r = n(790285),
    d = n(981631);
function a(t, e, n) {
    let a = new Set();
    for (let t of Object.keys(n.permissionOverwrites)) {
        let i = e[t],
            d = n.permissionOverwrites[t];
        (0, l.Z)(i) && (0, r.TG)(n, d) && a.add(i);
    }
    let u = e[t.getEveryoneRoleId()],
        s = null != u && !i.e$(u.permissions, d.Plq.VIEW_CHANNEL),
        o = (0, r.wB)(n, n.permissionOverwrites[t.id]);
    if (s && !o) for (let t of Object.values(e)) (0, l.Z)(t) && (0, r.MT)(t) && a.add(t);
    return [...a];
}
