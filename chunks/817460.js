n.d(t, {
    JE: function () {
        return u;
    },
    ab: function () {
        return l;
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
var i = n(293810),
    r = n(474936),
    o = n(388032);
function l(e) {
    return 'roles' in e ? 'emoji-'.concat(e.id) : ''.concat(e.ref_type, '-').concat(e.emoji_id, '-').concat(e.name, '-').concat(e.ref_id);
}
function u(e) {
    let { interval: t, interval_count: n } = e;
    return o.intl.format(
        (function (e) {
            switch (e) {
                case r.rV.DAY:
                    return o.t['3rUmPT'];
                case r.rV.MONTH:
                    return o.t['zuN54+'];
                case r.rV.YEAR:
                    return o.t.cuSp8f;
            }
        })(t),
        { count: n }
    );
}
function a(e) {
    let { interval: t, interval_count: n } = e;
    switch (t) {
        case r.rV.DAY:
            if (n > 0 && n % 7 == 0) return o.intl.formatToPlainString(o.t.iVZYys, { weeks: n / 7 });
            return o.intl.formatToPlainString(o.t.jzH70d, { days: n });
        case r.rV.MONTH:
            return o.intl.formatToPlainString(o.t.erUSmJ, { months: n });
        case r.rV.YEAR:
            return o.intl.formatToPlainString(o.t.IfYQVF, { years: n });
    }
}
function s(e) {
    return e.ref_type === i.Qs.CHANNEL;
}
function c(e) {
    return e.ref_type === i.Qs.INTANGIBLE;
}
