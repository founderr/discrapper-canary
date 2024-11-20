n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(593481),
    r = n(768581),
    s = n(312839),
    a = n(981631),
    o = n(987650),
    l = n(388032);
function c(e, t) {
    let n = e.username,
        c = l.intl.format(l.t['Yk+uYG'], { username: '' }),
        d = (0, r.ov)(e),
        { trackView: u, trackClick: h } = (0, s.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: a.mFx.JOIN,
            activity_name: t.name
        });
    return {
        icon: d,
        title: n,
        body: c,
        hint: (e) => (0, i.Yj)(e, l.intl.string(l.t.WRj1Wl)),
        onNotificationShow: () => {
            u();
        },
        onDismissClick: () => {
            h('dismiss');
        }
    };
}
