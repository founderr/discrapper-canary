n.d(t, {
    i: function () {
        return d;
    },
    l: function () {
        return f;
    }
}),
    n(47120);
var r = n(905837),
    i = n(976649),
    a = n(451498),
    s = n(731965),
    o = n(433517),
    l = n(590433);
let u = (0, a.Z)((e, t) => {
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
    }),
    c = (0, r.ZP)(u);
function d(e) {
    let [t, n] = c((e) => [e.notificationDismissedInGuilds, e.dismissNotification], i.Z);
    return [!t.has(e), n];
}
function f(e) {
    return u.getState().resetNotification(e);
}
