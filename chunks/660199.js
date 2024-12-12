r.d(n, {
    Ay: function () {
        return d;
    },
    He: function () {
        return _;
    },
    K_: function () {
        return u;
    },
    Qh: function () {
        return l;
    },
    ZB: function () {
        return f;
    }
});
var i = r(913527),
    a = r.n(i),
    s = r(55935),
    o = r(70956);
let l = {
        t: (e) => (0, s.vc)(e, 'LT'),
        T: (e) => (0, s.vc)(e, 'LTS'),
        d: (e) => (0, s.vc)(e, 'L'),
        D: (e) => (0, s.vc)(e, 'LL'),
        f: (e) => (0, s.vc)(e, 'LLL'),
        F: (e) => (0, s.vc)(e, 'LLLL'),
        R: (e) => {
            let n = a().relativeTimeThreshold('s');
            a().relativeTimeThreshold('s', 60);
            let r = a().relativeTimeThreshold('ss');
            a().relativeTimeThreshold('ss', -1);
            let i = a().relativeTimeThreshold('m');
            a().relativeTimeThreshold('m', 60);
            let s = null;
            try {
                s = a()(e.toDate()).fromNow();
            } catch (e) {}
            return a().relativeTimeThreshold('s', n), a().relativeTimeThreshold('ss', r), a().relativeTimeThreshold('m', i), null != s ? s : a()(e.toDate()).fromNow();
        }
    },
    u = 'f';
Object.setPrototypeOf(l, null);
let c = Object.keys(l).join('|'),
    d = new RegExp('^<t:(-?\\d{1,17})(?::('.concat(c, '))?>'));
function f(e, n) {
    let r = a()(Number(e) * o.Z.Millis.SECOND);
    if (!r.isValid()) return null;
    let i = null != n ? l[n] : void 0;
    return (
        null == i && (i = l[u]),
        {
            timestamp: e,
            format: n,
            parsed: r,
            full: l.F(r),
            formatted: i(r)
        }
    );
}
function _(e, n) {
    return null != n ? '<t:'.concat(e, ':').concat(n, '>') : '<t:'.concat(e, '>');
}
