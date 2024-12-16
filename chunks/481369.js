n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(399606),
    l = n(317381),
    r = n(16609),
    a = n(917107),
    s = n(592125),
    o = n(226027),
    c = n(918559);
let d = 'no_text_activity',
    u = {
        [d]: [o.E.NEW_MESSAGES, o.E.OPT_IN_CHANNEL, o.E.SUMMARIES],
        [c.Ez.DISCONNECTED]: [o.E.NEW_MESSAGES, o.E.OPT_IN_CHANNEL, o.E.SUMMARIES],
        [c.Ez.LAUNCHING_WITH_ORIENTATION_CHANGE]: [o.E.NEW_MESSAGES, o.E.OPT_IN_CHANNEL, o.E.SUMMARIES],
        [c.Ez.PANEL]: [],
        [c.Ez.PIP]: [o.E.NEW_MESSAGES, o.E.OPT_IN_CHANNEL, o.E.SUMMARIES],
        [c.Ez.ACTIVITY_POPOUT_WINDOW]: [o.E.NEW_MESSAGES, o.E.OPT_IN_CHANNEL, o.E.SUMMARIES]
    };
function h() {
    let e = (0, i.e7)([l.ZP], () => l.ZP.getCurrentEmbeddedActivity()),
        t = (0, i.e7)([l.ZP], () => l.ZP.getActivityPanelMode()),
        n = (0, r.p)(null == e ? void 0 : e.location);
    return void 0 === e || (0, a.Z)(n, s.Z) ? u[d] : u[t];
}
