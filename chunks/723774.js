t.d(n, {
    WE: function () {
        return d;
    },
    lE: function () {
        return o;
    }
});
var u = t(709054),
    r = t(124368),
    l = t(388032);
let i = (e) => u.default.compare('992549565104128000', e) > -1,
    o = (e, n) => {
        if (null == e || e < 0) return '0';
        {
            let t = i(n);
            return (null == n || t) && e >= r.vw ? '50+' : e >= r.M3 ? '100k+' : ''.concat(e);
        }
    },
    a = (e, n, t) => {
        let u = o(e, t);
        return '0' === u ? l.intl.string(l.t.eXHkho) : l.intl.formatToPlainString(n, { count: u });
    },
    d = (e, n) => a(e, l.t.rfAXDQ, n);
