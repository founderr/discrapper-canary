e.d(t, {
    M: function () {
        return r;
    }
}),
    e(47120);
var l = e(442837),
    i = e(580130);
function r(n) {
    return (0, l.e7)(
        [i.Z],
        () => {
            let t = i.Z.getForSku(n);
            if (null == t) return !1;
            let e = 0;
            for (let n of t) {
                var l, r;
                let t = null !== (r = null === (l = n.endsAt) || void 0 === l ? void 0 : l.getTime()) && void 0 !== r ? r : 1 / 0;
                t >= e && (e = t);
            }
            return e > new Date().getTime();
        },
        [n]
    );
}
