t.d(n, {
    JE: function () {
        return u;
    },
    ab: function () {
        return o;
    },
    iG: function () {
        return s;
    },
    lL: function () {
        return c;
    },
    rC: function () {
        return a;
    }
});
var r = t(293810),
    i = t(474936),
    l = t(689938);
function o(e) {
    return 'roles' in e ? 'emoji-'.concat(e.id) : ''.concat(e.ref_type, '-').concat(e.emoji_id, '-').concat(e.name, '-').concat(e.ref_id);
}
function u(e) {
    let { interval: n, interval_count: t } = e;
    return (function (e) {
        switch (e) {
            case i.rV.DAY:
                return l.Z.Messages.DAY;
            case i.rV.MONTH:
                return l.Z.Messages.MONTH;
            case i.rV.YEAR:
                return l.Z.Messages.YEAR;
        }
    })(n).format({ count: t });
}
function s(e) {
    let { interval: n, interval_count: t } = e;
    switch (n) {
        case i.rV.DAY:
            if (t > 0 && t % 7 == 0) return l.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({ weeks: t / 7 });
            return l.Z.Messages.DURATION_DAYS_CAPITALIZE.format({ days: t });
        case i.rV.MONTH:
            return l.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({ months: t });
        case i.rV.YEAR:
            return l.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: t });
    }
}
function a(e) {
    return e.ref_type === r.Qs.CHANNEL;
}
function c(e) {
    return e.ref_type === r.Qs.INTANGIBLE;
}
