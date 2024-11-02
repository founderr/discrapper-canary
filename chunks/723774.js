t.d(n, {
    WE: function () {
        return d;
    },
    lE: function () {
        return o;
    }
});
var u = t(709054),
    l = t(124368),
    r = t(388032);
let i = (e) => u.default.compare('992549565104128000', e) > -1,
    o = (e, n) => {
        if (null == e || e < 0) return '0';
        {
            let t = i(n);
            return (null == n || t) && e >= l.vw ? '50+' : e >= l.M3 ? '100k+' : ''.concat(e);
        }
    },
    a = (e, n, t) => {
        let u = o(e, t);
        return '0' === u ? r.intl.string(r.t.eXHkho) : r.intl.formatToPlainString(n, { count: u });
    },
    d = (e, n) => a(e, r.t.rfAXDQ, n);
