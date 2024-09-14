s.d(t, {
    A: function () {
        return a;
    }
});
var n = s(913527),
    l = s.n(n),
    i = s(689938);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z.Messages.FORM_LABEL_OFF,
        n = l().duration(e, 'seconds');
    if (n.days() > 0) return (t ? i.Z.Messages.DURATION_DAYS_SHORT : i.Z.Messages.DURATION_DAYS).format({ days: n.days() });
    if (n.hours() > 0) return (t ? i.Z.Messages.DURATION_HOURS_SHORT : i.Z.Messages.DURATION_HOURS).format({ hours: n.hours() });
    if (n.minutes() > 0) return (t ? i.Z.Messages.DURATION_MINUTES_SHORT : i.Z.Messages.DURATION_MINUTES).format({ minutes: n.minutes() });
    else if (e > 0) return (t ? i.Z.Messages.DURATION_SECONDS_SHORT : i.Z.Messages.DURATION_SECONDS).format({ seconds: n.seconds() });
    else return t ? i.Z.Messages.FORM_LABEL_OFF : s;
}
