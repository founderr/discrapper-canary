n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(593481),
    r = n(768581),
    s = n(312839),
    l = n(981631),
    a = n(987650),
    o = n(388032);
function c(e, t) {
    let n = e.username,
        c = o.intl.format(o.t['Yk+uYG'], { username: '' }),
        d = (0, r.ov)(e),
        { trackView: u, trackClick: h } = (0, s.R)(a.n0.ActivityUserJoin, {
            notif_type: a.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: l.mFx.JOIN,
            activity_name: t.name
        });
    return {
        colorScheme: i.ZP.ColorSchemes.PRIMARY,
        icon: d,
        title: n,
        body: c,
        hint: (e) => (0, i.Yj)(e, o.intl.string(o.t.WRj1Wl)),
        onNotificationShow: () => {
            u();
        },
        onDismissClick: () => {
            h('dismiss');
        }
    };
}
