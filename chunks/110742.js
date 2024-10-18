t.d(e, {
    M: function () {
        return r;
    }
}),
    t(47120);
var l = t(442837),
    i = t(580130);
function r(n) {
    return (0, l.e7)(
        [i.Z],
        () => {
            let e = i.Z.getForSku(n);
            if (null == e) return !1;
            let t = 0;
            for (let n of e) {
                var l, r;
                let e = null !== (r = null === (l = n.endsAt) || void 0 === l ? void 0 : l.getTime()) && void 0 !== r ? r : 1 / 0;
                e >= t && (t = e);
            }
            return t > new Date().getTime();
        },
        [n]
    );
}
