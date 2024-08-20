t.d(n, {
    JE: function () {
        return l;
    },
    ab: function () {
        return o;
    },
    iG: function () {
        return s;
    },
    lL: function () {
        return d;
    },
    rC: function () {
        return c;
    }
});
var i = t(293810),
    a = t(474936),
    r = t(689938);
function o(e) {
    return 'roles' in e ? 'emoji-'.concat(e.id) : ''.concat(e.ref_type, '-').concat(e.emoji_id, '-').concat(e.name, '-').concat(e.ref_id);
}
function l(e) {
    let { interval: n, interval_count: t } = e;
    return (function (e) {
        switch (e) {
            case a.rV.DAY:
                return r.Z.Messages.DAY;
            case a.rV.MONTH:
                return r.Z.Messages.MONTH;
            case a.rV.YEAR:
                return r.Z.Messages.YEAR;
        }
    })(n).format({ count: t });
}
function s(e) {
    let { interval: n, interval_count: t } = e;
    switch (n) {
        case a.rV.DAY:
            if (t > 0 && t % 7 == 0) return r.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({ weeks: t / 7 });
            return r.Z.Messages.DURATION_DAYS_CAPITALIZE.format({ days: t });
        case a.rV.MONTH:
            return r.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({ months: t });
        case a.rV.YEAR:
            return r.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: t });
    }
}
function c(e) {
    return e.ref_type === i.Qs.CHANNEL;
}
function d(e) {
    return e.ref_type === i.Qs.INTANGIBLE;
}
