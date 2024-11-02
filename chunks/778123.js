t.d(n, {
    Z: function () {
        return l;
    }
});
var u = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    c = t(87051),
    s = t(9156),
    d = t(621600),
    a = t(388032);
function l(e) {
    let n = (0, i.e7)([s.ZP], () => s.ZP.isMuteScheduledEventsEnabled(e), [e]);
    return (0, u.jsx)(r.MenuCheckboxItem, {
        id: 'mute-events',
        label: a.intl.string(a.t.ONG3Y2),
        action: () => {
            var t;
            return (t = { mute_scheduled_events: !n }), void c.Z.updateGuildNotificationSettings(e, t, d.UE.mutedEvents(t.mute_scheduled_events));
        },
        checked: n
    });
}
