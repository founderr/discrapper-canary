n.d(t, {
    Dw: function () {
        return f;
    },
    I: function () {
        return o;
    },
    UG: function () {
        return l;
    },
    fv: function () {
        return d;
    },
    jq: function () {
        return i;
    }
});
var r,
    i,
    a = n(814391),
    s = n(388032);
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
((r = i || (i = {}))[(r.JOINED_AT = 0)] = 'JOINED_AT'), (r[(r.ACCOUNT_AGE = 1)] = 'ACCOUNT_AGE');
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
    }),
    d = (e, t) => {
        var n;
        let r = 0 === (n = t) ? u : 1 === n ? c : void 0;
        return (0, a.Z)(e, r, !1);
    },
    f = (e) => (null != e ? new Date(e) : new Date()).getTime();
