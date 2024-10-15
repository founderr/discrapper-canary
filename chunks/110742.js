t.d(n, {
    M: function () {
        return a;
    }
}),
    t(47120);
var l = t(442837),
    i = t(580130);
function a(e) {
    return (0, l.e7)(
        [i.Z],
        () => {
            let n = i.Z.getForSku(e);
            if (null == n) return !1;
            let t = 0;
            for (let e of n) {
                var l, a;
                let n = null !== (a = null === (l = e.endsAt) || void 0 === l ? void 0 : l.getTime()) && void 0 !== a ? a : 1 / 0;
                n >= t && (t = n);
            }
            return t > new Date().getTime();
        },
        [e]
    );
}
