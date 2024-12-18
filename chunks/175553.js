n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(593481),
    s = n(768581),
    r = n(312839),
    a = n(981631),
    o = n(987650),
    l = n(388032);
function d(e, t) {
    let n = e.username,
        d = l.intl.format(l.t['Yk+uYG'], { username: '' }),
        c = (0, s.ov)(e),
        { trackView: u, trackClick: h } = (0, r.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: a.mFx.JOIN,
            activity_name: t.name
        });
    return {
        icon: c,
        title: n,
        body: d,
        hint: (e) => (0, i.Yj)(e, l.intl.string(l.t.WRj1Wl)),
        onNotificationShow: () => {
            u();
        },
        onDismissClick: () => {
            h('dismiss');
        }
    };
}
