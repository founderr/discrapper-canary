e.d(t, {
    M: function () {
        return r;
    }
}),
    e(47120);
var i = e(442837),
    l = e(580130);
function r(n) {
    return (0, i.e7)(
        [l.Z],
        () => {
            let t = l.Z.getForSku(n);
            if (null == t) return !1;
            let e = 0;
            for (let n of t) {
                var i, r;
                let t = null !== (r = null === (i = n.endsAt) || void 0 === i ? void 0 : i.getTime()) && void 0 !== r ? r : 1 / 0;
                t >= e && (e = t);
            }
            return e > new Date().getTime();
        },
        [n]
    );
}
