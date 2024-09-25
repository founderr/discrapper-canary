n.d(t, {
    M: function () {
        return o;
    }
});
var r = n(47120);
var i = n(442837),
    a = n(580130);
function o(e) {
    return (0, i.e7)(
        [a.Z],
        () => {
            let t = a.Z.getForSku(e);
            if (null == t) return !1;
            let n = 0;
            for (let e of t) {
                var r, i;
                let t = null !== (i = null === (r = e.endsAt) || void 0 === r ? void 0 : r.getTime()) && void 0 !== i ? i : 1 / 0;
                t >= n && (n = t);
            }
            return n > new Date().getTime();
        },
        [e]
    );
}
