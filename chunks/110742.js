t.d(n, {
    M: function () {
        return r;
    }
}),
    t(47120);
var l = t(442837),
    i = t(580130);
function r(e) {
    return (0, l.e7)(
        [i.Z],
        () => {
            let n = i.Z.getForSku(e);
            if (null == n) return !1;
            let t = 0;
            for (let e of n) {
                var l, r;
                let n = null !== (r = null === (l = e.endsAt) || void 0 === l ? void 0 : l.getTime()) && void 0 !== r ? r : 1 / 0;
                n >= t && (t = n);
            }
            return t > new Date().getTime();
        },
        [e]
    );
}
