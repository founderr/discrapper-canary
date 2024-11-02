n.d(t, {
    RZ: function () {
        return l;
    },
    gn: function () {
        return o;
    },
    sZ: function () {
        return u;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(474936),
    s = n(388032);
let o = (e) => (Object.values(a.VU).includes(e) ? e : null),
    l = (e, t) => {
        if (null == t) return null;
        let n = a.eG[e],
            r = i()(t);
        return r.add(n, 'months'), r.add(1, 'days'), r.toDate();
    },
    u = (e, t) => {
        let n = l(e, t);
        switch (e) {
            case a.VU.PREMIUM_TENURE_1_MONTH:
                return s.intl.formatToPlainString(s.t['1vEPKC'], { date: n });
            case a.VU.PREMIUM_TENURE_3_MONTH:
                return s.intl.formatToPlainString(s.t['1pri6u'], { date: n });
            case a.VU.PREMIUM_TENURE_6_MONTH:
                return s.intl.formatToPlainString(s.t['t5Yv9/'], { date: n });
            case a.VU.PREMIUM_TENURE_12_MONTH:
                return s.intl.formatToPlainString(s.t.IppEDg, { date: n });
            case a.VU.PREMIUM_TENURE_24_MONTH:
                return s.intl.formatToPlainString(s.t.yUxtHB, { date: n });
            case a.VU.PREMIUM_TENURE_36_MONTH:
                return s.intl.formatToPlainString(s.t['6FLaGR'], { date: n });
            case a.VU.PREMIUM_TENURE_60_MONTH:
                return s.intl.formatToPlainString(s.t.qA7ah4, { date: n });
            case a.VU.PREMIUM_TENURE_72_MONTH:
                return s.intl.formatToPlainString(s.t['2E+W8f'], { date: n });
            default:
                return s.intl.formatToPlainString(s.t['8zbGNT'], { date: t });
        }
    };
