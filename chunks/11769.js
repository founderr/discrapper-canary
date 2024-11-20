n.d(t, {
    k: function () {
        return s;
    }
});
var i = n(70956),
    o = n(388032);
function s(e) {
    if (e >= i.Z.Seconds.HOUR) {
        let t = Math.floor(e / i.Z.Seconds.HOUR),
            n = Math.floor((e - t * i.Z.Seconds.HOUR) / i.Z.Seconds.MINUTE),
            s = e - t * i.Z.Seconds.HOUR - n * i.Z.Seconds.MINUTE;
        return o.intl.formatToPlainString(o.t['3hz51N'], {
            hours: t,
            minutes: n,
            seconds: s
        });
    }
    if (!(e >= 60)) return o.intl.formatToPlainString(o.t.IWntYm, { seconds: e });
    {
        let t = Math.floor(e / 60);
        return o.intl.formatToPlainString(o.t.sY3wlJ, {
            minutes: t,
            seconds: e - 60 * t
        });
    }
}
