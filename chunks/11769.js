n.d(t, {
    k: function () {
        return a;
    }
});
var r = n(70956),
    i = n(689938);
function a(e) {
    if (e >= r.Z.Seconds.HOUR) {
        let t = Math.floor(e / r.Z.Seconds.HOUR),
            n = Math.floor((e - t * r.Z.Seconds.HOUR) / r.Z.Seconds.MINUTE),
            a = e - t * r.Z.Seconds.HOUR - n * r.Z.Seconds.MINUTE;
        return i.Z.Messages.CHANNEL_SLOWMODE_DESC_HOURS.format({
            hours: t,
            minutes: n,
            seconds: a
        });
    }
    if (!(e >= 60)) return i.Z.Messages.CHANNEL_SLOWMODE_DESC.format({ seconds: e });
    {
        let t = Math.floor(e / 60),
            n = e - 60 * t;
        return i.Z.Messages.CHANNEL_SLOWMODE_DESC_MINUTES.format({
            minutes: t,
            seconds: n
        });
    }
}
