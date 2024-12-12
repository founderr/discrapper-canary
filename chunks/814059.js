r.d(n, {
    n: function () {
        return l;
    }
});
var i = r(913527),
    a = r.n(i),
    s = r(70956),
    o = r(388032);
let l = (e) => {
    let n = Math.max(0, a()(e).diff(a()(), 's'));
    if (n < 2 * s.Z.Seconds.HOUR) {
        let e = Math.round(n / s.Z.Seconds.MINUTE);
        return o.intl.formatToPlainString(o.t['2JbxRE'], { count: e });
    }
    if (n < s.Z.Seconds.DAY) {
        let e = Math.round(n / s.Z.Seconds.HOUR);
        return o.intl.formatToPlainString(o.t.V9Ebys, { count: e });
    }
    {
        let e = Math.round(n / s.Z.Seconds.DAY);
        return o.intl.formatToPlainString(o.t.OQFxHh, { count: e });
    }
};
