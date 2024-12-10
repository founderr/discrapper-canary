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
    i = t(388032);
let l = (e) => u.default.compare('992549565104128000', e) > -1,
    o = (e, n) => {
        if (null == e || e < 0) return '0';
        {
            let t = l(n);
            return (null == n || t) && e >= r.vw ? '50+' : e >= r.M3 ? '100k+' : ''.concat(e);
        }
    },
    a = (e, n, t) => {
        let u = o(e, t);
        return '0' === u ? i.intl.string(i.t.eXHkho) : i.intl.formatToPlainString(n, { count: u });
    },
    d = (e, n) => a(e, i.t.rfAXDQ, n);
