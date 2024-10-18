n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(593481),
    s = n(768581),
    r = n(312839),
    a = n(981631),
    o = n(987650),
    l = n(689938);
function c(e, t) {
    let n = e.username,
        c = l.Z.Messages.USER_ACTIVITY_USER_JOIN.format({ username: '' }),
        d = (0, s.ov)(e),
        { trackView: u, trackClick: h } = (0, r.R)(o.n0.ActivityUserJoin, {
            notif_type: o.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: a.mFx.JOIN,
            activity_name: t.name
        });
    return {
        colorScheme: i.ZP.ColorSchemes.PRIMARY,
        icon: d,
        title: n,
        body: c,
        hint: (e) => (0, i.Yj)(e, l.Z.Messages.USER_ACTIVITY_USER_JOIN_HINT),
        onNotificationShow: () => {
            u();
        },
        onDismissClick: () => {
            h('dismiss');
        }
    };
}
