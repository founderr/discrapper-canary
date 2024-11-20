n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(768581),
    l = n(620954),
    o = n(987650),
    r = n(981631),
    s = n(388032);
function a(e, t) {
    let n = e.username,
        a = s.intl.format(s.t['Yk+uYG'], { username: '' }),
        u = (0, i.ov)(e),
        d = s.intl.string(s.t.WRj1Wl),
        { trackView: c, trackClick: h } = (0, l.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: r.mFx.JOIN,
            activity_name: t.name
        });
    return {
        icon: u,
        title: n,
        body: a,
        hint: d,
        onNotificationShow: () => {
            c();
        },
        onDismissClick: () => {
            h('dismiss');
        }
    };
}
