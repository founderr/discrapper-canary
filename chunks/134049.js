n.d(t, {
    i: function () {
        return E;
    },
    l: function () {
        return f;
    }
});
var r = n(47120);
var i = n(652874),
    a = n(143927),
    o = n(12336),
    s = n(731965),
    l = n(433517),
    u = n(590433);
function c() {
    var e;
    return new Set(null !== (e = l.K.get(u.hL)) && void 0 !== e ? e : []);
}
let d = (0, o.Z)((e, t) => ({
        notificationDismissedInGuilds: c(),
        dismissNotification: (n) => {
            let r = t().notificationDismissedInGuilds;
            r.add(n), l.K.set(u.hL, r), (0, s.j)(() => e({ notificationDismissedInGuilds: r }));
        },
        resetNotification: (n) => {
            let r = t().notificationDismissedInGuilds;
            r.has(n) && (r.delete(n), l.K.set(u.hL, r), (0, s.j)(() => e({ notificationDismissedInGuilds: r })));
        }
    })),
    _ = (0, i.Z)(d);
function E(e) {
    let [t, n] = _((e) => [e.notificationDismissedInGuilds, e.dismissNotification], a.Z);
    return [!t.has(e), n];
}
function f(e) {
    return d.getState().resetNotification(e);
}
