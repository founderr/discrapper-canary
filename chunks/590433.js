n.d(t, {
    Cl: function () {
        return _;
    },
    GN: function () {
        return h;
    },
    L9: function () {
        return l;
    },
    UK: function () {
        return i;
    },
    av: function () {
        return f;
    },
    cu: function () {
        return c;
    },
    hL: function () {
        return d;
    },
    tr: function () {
        return u;
    }
});
var r,
    i,
    a = n(63063),
    s = n(981631),
    o = n(388032);
function l(e) {
    switch (e) {
        case 60:
            return o.intl.formatToPlainString(o.t['4zv/jo'], { secs: 60 });
        case 300:
            return o.intl.formatToPlainString(o.t.opVZ9v, { mins: 5 });
        case 600:
            return o.intl.formatToPlainString(o.t.opVZ9v, { mins: 10 });
        case 3600:
            return o.intl.formatToPlainString(o.t.xCjYxM, { hours: 1 });
        case 86400:
            return o.intl.formatToPlainString(o.t.k2UNz8, { days: 1 });
        case 604800:
            return o.intl.formatToPlainString(o.t.EmoBDw, { weeks: 1 });
        default:
            return;
    }
}
((r = i || (i = {}))[(r.DURATION_60_SEC = 60)] = 'DURATION_60_SEC'), (r[(r.DURATION_5_MIN = 300)] = 'DURATION_5_MIN'), (r[(r.DURATION_10_MIN = 600)] = 'DURATION_10_MIN'), (r[(r.DURATION_1_HOUR = 3600)] = 'DURATION_1_HOUR'), (r[(r.DURATION_1_DAY = 86400)] = 'DURATION_1_DAY'), (r[(r.DURATION_1_WEEK = 604800)] = 'DURATION_1_WEEK');
let u = () =>
        Object.keys(i)
            .filter((e) => isNaN(Number(e)))
            .map((e) => {
                var t;
                return {
                    label: null !== (t = l(i[e])) && void 0 !== t ? t : '',
                    value: i[e]
                };
            }),
    c = a.Z.getArticleURL(s.BhN.DISABLE_GUILD_COMMUNICATION),
    d = 'GuildCommunicationDisabledDismissedGuilds',
    f = 'Set Communication Disabled Modal',
    _ = 'Clear Communication Disabled Modal',
    h = 512;
