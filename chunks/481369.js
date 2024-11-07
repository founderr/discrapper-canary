n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(399606),
    l = n(317381),
    r = n(917107),
    a = n(592125),
    s = n(226027),
    o = n(918559);
let c = 'no_text_activity',
    d = {
        [c]: [s.E.NEW_MESSAGES, s.E.OPT_IN_CHANNEL, s.E.SUMMARIES],
        [o.Ez.DISCONNECTED]: [s.E.NEW_MESSAGES, s.E.OPT_IN_CHANNEL, s.E.SUMMARIES],
        [o.Ez.LAUNCHING_WITH_ORIENTATION_CHANGE]: [s.E.NEW_MESSAGES, s.E.OPT_IN_CHANNEL, s.E.SUMMARIES],
        [o.Ez.PANEL]: [],
        [o.Ez.PIP]: [s.E.NEW_MESSAGES, s.E.OPT_IN_CHANNEL, s.E.SUMMARIES]
    };
function u() {
    let e = (0, i.e7)([l.ZP], () => l.ZP.getCurrentEmbeddedActivity()),
        t = (0, i.e7)([l.ZP], () => l.ZP.getActivityPanelMode());
    return void 0 === e || (0, r.Z)(null == e ? void 0 : e.channelId, a.Z) ? d[c] : d[t];
}
