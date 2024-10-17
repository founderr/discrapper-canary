t.d(e, {
    M: function () {
        return o;
    }
}),
    t(47120);
var l = t(442837),
    i = t(580130);
function o(n) {
    return (0, l.e7)(
        [i.Z],
        () => {
            let e = i.Z.getForSku(n);
            if (null == e) return !1;
            let t = 0;
            for (let n of e) {
                var l, o;
                let e = null !== (o = null === (l = n.endsAt) || void 0 === l ? void 0 : l.getTime()) && void 0 !== o ? o : 1 / 0;
                e >= t && (t = e);
            }
            return t > new Date().getTime();
        },
        [n]
    );
}
