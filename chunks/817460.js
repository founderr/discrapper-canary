t.d(n, {
    JE: function () {
        return u;
    },
    ab: function () {
        return o;
    },
    iG: function () {
        return a;
    },
    lL: function () {
        return c;
    },
    rC: function () {
        return s;
    }
});
var i = t(293810),
    r = t(474936),
    l = t(388032);
function o(e) {
    return 'roles' in e ? 'emoji-'.concat(e.id) : ''.concat(e.ref_type, '-').concat(e.emoji_id, '-').concat(e.name, '-').concat(e.ref_id);
}
function u(e) {
    let { interval: n, interval_count: t } = e;
    return l.intl.format(
        (function (e) {
            switch (e) {
                case r.rV.DAY:
                    return l.t['3rUmPT'];
                case r.rV.MONTH:
                    return l.t['zuN54+'];
                case r.rV.YEAR:
                    return l.t.cuSp8f;
            }
        })(n),
        { count: t }
    );
}
function a(e) {
    let { interval: n, interval_count: t } = e;
    switch (n) {
        case r.rV.DAY:
            if (t > 0 && t % 7 == 0) return l.intl.formatToPlainString(l.t.iVZYys, { weeks: t / 7 });
            return l.intl.formatToPlainString(l.t.jzH70d, { days: t });
        case r.rV.MONTH:
            return l.intl.formatToPlainString(l.t.erUSmJ, { months: t });
        case r.rV.YEAR:
            return l.intl.formatToPlainString(l.t.IfYQVF, { years: t });
    }
}
function s(e) {
    return e.ref_type === i.Qs.CHANNEL;
}
function c(e) {
    return e.ref_type === i.Qs.INTANGIBLE;
}
