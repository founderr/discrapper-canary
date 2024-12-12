r.d(n, {
    Dw: function () {
        return _;
    },
    I: function () {
        return o;
    },
    UG: function () {
        return l;
    },
    fv: function () {
        return f;
    },
    jq: function () {
        return i;
    }
});
var i,
    a = r(814391),
    s = r(388032);
let o = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    },
    l = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    };
!(function (e) {
    (e[(e.JOINED_AT = 0)] = 'JOINED_AT'), (e[(e.ACCOUNT_AGE = 1)] = 'ACCOUNT_AGE');
})(i || (i = {}));
let u = () => ({
        seconds: s.t.FsBhl5,
        minutes: s.t['4d1mgY'],
        hours: s.t['2wkczM'],
        days: s.t['ocdS+f'],
        months: s.t['az14+v'],
        years: s.t['5Gk1np']
    }),
    c = () => ({
        hours: s.t.JZP2Rk,
        days: s.t['3moSHR'],
        months: s.t['0Ddwr6'],
        years: s.t.cR7lcn
    });
function d(e) {
    return 0 === e ? u : 1 === e ? c : void 0;
}
let f = (e, n) => {
        let r = d(n);
        return (0, a.Z)(e, r, !1);
    },
    _ = (e) => (null != e ? new Date(e) : new Date()).getTime();
