n.d(t, {
    x: function () {
        return o;
    }
});
var i = n(675478),
    s = n(915486),
    r = n(428967),
    l = n(605236),
    a = n(644916);
function o(e, t) {
    if (-1 === r.k.indexOf(e))
        return (function (e, t) {
            let n = (0, s.jl)(t, e);
            return {
                isDismissed: n,
                handleToggleDismissState: function () {
                    n ? (0, i.w9)(e) : (0, i.nm)(e);
                }
            };
        })(e, t);
    {
        let t = (0, a.t)(e);
        return (function (e, t) {
            let n = (0, l.H4)(e);
            return {
                isDismissed: n,
                handleToggleDismissState: function () {
                    n ? (0, i.C9)(e) : (0, i.Bn)(e, t);
                }
            };
        })(e, t);
    }
}
