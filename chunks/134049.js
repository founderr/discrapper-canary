n.d(t, {
    i: function () {
        return c;
    },
    l: function () {
        return d;
    }
}),
    n(47120);
var r = n(232713),
    i = n(65400),
    a = n(5907),
    s = n(731965),
    o = n(433517),
    l = n(590433);
let u = (0, a.M)((e, t) => {
    var n;
    return {
        notificationDismissedInGuilds: new Set(null !== (n = o.K.get(l.hL)) && void 0 !== n ? n : []),
        dismissNotification: (n) => {
            let r = t().notificationDismissedInGuilds;
            r.add(n), o.K.set(l.hL, r), (0, s.j)(() => e({ notificationDismissedInGuilds: r }));
        },
        resetNotification: (n) => {
            let r = t().notificationDismissedInGuilds;
            r.has(n) && (r.delete(n), o.K.set(l.hL, r), (0, s.j)(() => e({ notificationDismissedInGuilds: r })));
        }
    };
});
function c(e) {
    let [t, n] = (0, i.s)(u, (e) => [e.notificationDismissedInGuilds, e.dismissNotification], r.X);
    return [!t.has(e), n];
}
function d(e) {
    return u.getState().resetNotification(e);
}
