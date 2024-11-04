n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(399606),
    l = n(317381),
    r = n(917107),
    s = n(592125),
    a = n(226027),
    o = n(918559);
let c = 'no_text_activity',
    u = {
        [c]: [a.E.NEW_MESSAGES, a.E.OPT_IN_CHANNEL, a.E.SUMMARIES],
        [o.Ez.DISCONNECTED]: [a.E.NEW_MESSAGES, a.E.OPT_IN_CHANNEL, a.E.SUMMARIES],
        [o.Ez.LAUNCHING_WITH_ORIENTATION_CHANGE]: [a.E.NEW_MESSAGES, a.E.OPT_IN_CHANNEL, a.E.SUMMARIES],
        [o.Ez.PANEL]: [],
        [o.Ez.PIP]: [a.E.NEW_MESSAGES, a.E.OPT_IN_CHANNEL, a.E.SUMMARIES]
    };
function d() {
    let e = (0, i.e7)([l.ZP], () => l.ZP.getCurrentEmbeddedActivity()),
        t = (0, i.e7)([l.ZP], () => l.ZP.getActivityPanelMode());
    return void 0 === e || (0, r.Z)(null == e ? void 0 : e.channelId, s.Z) ? u[c] : u[t];
}
