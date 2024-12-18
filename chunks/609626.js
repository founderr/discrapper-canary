i.d(t, {
    Z: function () {
        return a;
    }
});
var n = i(768581),
    l = i(620954),
    o = i(987650),
    s = i(981631),
    r = i(388032);
function a(e, t) {
    let i = e.username,
        a = r.intl.format(r.t['Yk+uYG'], { username: '' }),
        u = (0, n.ov)(e),
        d = r.intl.string(r.t.WRj1Wl),
        { trackView: c, trackClick: h } = (0, l.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: s.mFx.JOIN,
            activity_name: t.name
        });
    return {
        icon: u,
        title: i,
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
