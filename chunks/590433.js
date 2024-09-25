n.d(t, {
    Cl: function () {
        return _;
    },
    GN: function () {
        return E;
    },
    L9: function () {
        return s;
    },
    UK: function () {
        return r;
    },
    av: function () {
        return d;
    },
    cu: function () {
        return u;
    },
    hL: function () {
        return c;
    },
    tr: function () {
        return l;
    }
});
var r,
    i = n(63063),
    a = n(981631),
    o = n(689938);
function s(e) {
    switch (e) {
        case 60:
            return o.Z.Messages.DURATION_SECS.format({ secs: 60 });
        case 300:
            return o.Z.Messages.DURATION_MINS.format({ mins: 5 });
        case 600:
            return o.Z.Messages.DURATION_MINS.format({ mins: 10 });
        case 3600:
            return o.Z.Messages.DURATION_HOURS.format({ hours: 1 });
        case 86400:
            return o.Z.Messages.DURATION_DAYS.format({ days: 1 });
        case 604800:
            return o.Z.Messages.DURATION_WEEKS.format({ weeks: 1 });
        default:
            return;
    }
}
!(function (e) {
    (e[(e.DURATION_60_SEC = 60)] = 'DURATION_60_SEC'), (e[(e.DURATION_5_MIN = 300)] = 'DURATION_5_MIN'), (e[(e.DURATION_10_MIN = 600)] = 'DURATION_10_MIN'), (e[(e.DURATION_1_HOUR = 3600)] = 'DURATION_1_HOUR'), (e[(e.DURATION_1_DAY = 86400)] = 'DURATION_1_DAY'), (e[(e.DURATION_1_WEEK = 604800)] = 'DURATION_1_WEEK');
})(r || (r = {}));
let l = () =>
        Object.keys(r)
            .filter((e) => isNaN(Number(e)))
            .map((e) => {
                var t;
                return {
                    label: null !== (t = s(r[e])) && void 0 !== t ? t : '',
                    value: r[e]
                };
            }),
    u = i.Z.getArticleURL(a.BhN.DISABLE_GUILD_COMMUNICATION),
    c = 'GuildCommunicationDisabledDismissedGuilds',
    d = 'Set Communication Disabled Modal',
    _ = 'Clear Communication Disabled Modal',
    E = 512;
