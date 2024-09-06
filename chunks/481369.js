n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(399606),
    s = n(317381),
    a = n(917107),
    l = n(592125),
    r = n(226027),
    o = n(918559);
let c = 'no_text_activity',
    u = {
        [c]: [r.E.NEW_MESSAGES, r.E.OPT_IN_CHANNEL, r.E.SUMMARIES],
        [o.Ez.DISCONNECTED]: [r.E.NEW_MESSAGES, r.E.OPT_IN_CHANNEL, r.E.SUMMARIES],
        [o.Ez.LAUNCHING_WITH_ORIENTATION_CHANGE]: [r.E.NEW_MESSAGES, r.E.OPT_IN_CHANNEL, r.E.SUMMARIES],
        [o.Ez.PANEL]: [],
        [o.Ez.PIP]: [r.E.NEW_MESSAGES, r.E.OPT_IN_CHANNEL, r.E.SUMMARIES]
    };
function d() {
    let e = (0, i.e7)([s.ZP], () => s.ZP.getCurrentEmbeddedActivity()),
        t = (0, i.e7)([s.ZP], () => s.ZP.getActivityPanelMode());
    return void 0 === e || (0, a.Z)(null == e ? void 0 : e.channelId, l.Z) ? u[c] : u[t];
}
